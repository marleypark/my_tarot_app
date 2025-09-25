// 이 파일은 Vercel 서버에서 실행되는 백엔드 코드입니다. (api/interpret.js)
// CORS 헤더를 추가하여 브라우저 호환성 문제를 해결한 최종 버전입니다.

// 키워드 추출 함수
function extractKeywords(text, keywordList) {
  const foundKeywords = [];
  for (const keyword of keywordList) {
    if (text.includes(keyword)) {
      foundKeywords.push(keyword);
    }
  }
  return foundKeywords.slice(0, 3); // 최대 3개까지만 반환
}

// 해석을 섹션별로 분할하는 함수
function parseInterpretationSections(interpretation, cardNames) {
  const sections = {
    cardInterpretations: [],
    summary: '',
    mbtiAdvice: '',
    connectionAnalysis: '',
    practicalGuide: ''
  };

  // 각 카드별 해석 추출
  cardNames.forEach((cardName, index) => {
    // 더 유연한 패턴 매칭 (마크다운 형식 고려)
    const cardPattern = new RegExp(`\\*\\*${index + 1}번째 카드 - ${cardName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\*\\*[\\s\\S]*?(?=\\*\\*${index + 2}번째 카드|### 2|$)`);
    const cardMatch = interpretation.match(cardPattern);
    
    if (cardMatch) {
      sections.cardInterpretations.push({
        interpretation: cardMatch[0].trim(),
        positiveKeywords: extractKeywords(cardMatch[0], ['희망', '기회', '성장', '성공', '긍정', '좋은', '행운', '진보', '발전', '성취']),
        negativeKeywords: extractKeywords(cardMatch[0], ['주의', '신중', '경계', '위험', '부정', '어려움', '장애', '문제', '걱정', '불안'])
      });
    } else {
      // 패턴 매칭이 실패한 경우 전체 해석에서 해당 카드 부분을 찾아서 추출
      const fallbackPattern = new RegExp(`${cardName}[\\s\\S]*?(?=${index + 2 < cardNames.length ? cardNames[index + 1] : '### 2'}|$)`);
      const fallbackMatch = interpretation.match(fallbackPattern);
      
      if (fallbackMatch) {
        sections.cardInterpretations.push({
          interpretation: `## ${index + 1}번째 카드 - ${cardName}\n\n${fallbackMatch[0].trim()}`,
          positiveKeywords: extractKeywords(fallbackMatch[0], ['희망', '기회', '성장', '성공', '긍정', '좋은', '행운', '진보', '발전', '성취']),
          negativeKeywords: extractKeywords(fallbackMatch[0], ['주의', '신중', '경계', '위험', '부정', '어려움', '장애', '문제', '걱정', '불안'])
        });
      } else {
        // 최종 백업: 기본 해석 제공
        sections.cardInterpretations.push({
          interpretation: `## ${index + 1}번째 카드 - ${cardName}\n\n이 카드는 현재 상황에서 중요한 의미를 담고 있습니다. 각 카드의 상징과 의미를 통해 더 깊이 있는 이해를 얻을 수 있습니다.`,
          positiveKeywords: ['희망', '기회', '성장'],
          negativeKeywords: ['주의', '신중함']
        });
      }
    }
  });

  // 연결성 분석 추출
  const connectionMatch = interpretation.match(/### 2\. 카드들의 연결성과 전체적인 메시지[\\s\\S]*?(?=### 3|$)/);
  if (connectionMatch) {
    sections.connectionAnalysis = connectionMatch[0].trim();
  }

  // 실생활 적용 가이드 추출
  const practicalMatch = interpretation.match(/### 4\. 실생활 적용 가이드[\\s\\S]*?(?=### 5|$)/);
  if (practicalMatch) {
    sections.practicalGuide = practicalMatch[0].trim();
  }

  // MBTI 조언 추출 (### 3 섹션)
  const mbtiMatch = interpretation.match(/### 3\. .*?구체적인 조언[\\s\\S]*?(?=### 4|$)/);
  if (mbtiMatch) {
    sections.mbtiAdvice = mbtiMatch[0].trim();
  }

  // 요약 (마무리 메시지 부분)
  const summaryMatch = interpretation.match(/### 5\. 마무리 메시지[\\s\\S]*$/);
  if (summaryMatch) {
    sections.summary = summaryMatch[0].trim();
  } else {
    // 마무리 메시지가 없는 경우 전체 해석의 마지막 부분을 요약으로 사용
    sections.summary = interpretation.split('\n\n').slice(-3).join('\n\n');
  }

  return sections;
}

export default async function handler(request, response) {
  // CORS 헤더를 모든 응답에 추가 (중요!)
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // OPTIONS 요청 (preflight) 처리
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  // 1. 보안 체크: 이 서버리스 함수는 POST 요청만 받도록 설정합니다.
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'POST 요청만 허용됩니다.' });
  }

  try {
    // 2. Vercel 환경 변수에서 안전하게 API 키를 가져옵니다.
    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) {
      console.error('GEMINI_API_KEY가 설정되지 않았습니다.');
      throw new Error('API 키가 설정되지 않았습니다.');
    }

    // 3. 프론트엔드(script.js)에서 보낸 데이터(카드 이름, 질문, 언어, MBTI)를 받습니다.
    const { cardNames, question, language, mbti, isMbtiAdvice, interpretations, isFullReading } = request.body || {};

    if (!Array.isArray(cardNames) || cardNames.length === 0) {
      return response.status(400).json({ message: 'cardNames 배열이 필요합니다.' });
    }

    // 언어 코드 매핑
    const languageMap = {
      kor: { name: 'Korean' },
      eng: { name: 'English' },
      can: { name: 'Cantonese' },
      vi: { name: 'Vietnamese' },
      id: { name: 'Indonesian' },
      chn: { name: 'Simplified Chinese' },
      fr: { name: 'French' },
      es: { name: 'Spanish' },
    };
    const targetLanguage = languageMap[language]?.name || 'Korean';

    // 4. Gemini API에 보낼 프롬프트(요청서)를 정교하게 만듭니다.
    let prompt = `당신은 타로와 MBTI를 모두 꿰뚫어 보는 심리 상담가입니다. 뽑힌 카드: ${cardNames.join(', ')}.`;
    
    if (question) {
      prompt += ` 사용자의 질문: "${question}".`;
    }
    
    if (mbti) {
      prompt += ` 사용자의 MBTI 유형: ${mbti}.`;
    }
    
    if (isMbtiAdvice && interpretations) {
      // MBTI 기반 조언 요청인 경우
      prompt += `\n\n다음 타로 해석을 바탕으로 ${mbti} 성격 유형에 맞는 맞춤형 조언을 제공해주세요:\n"${interpretations}"\n\n`;
      prompt += `다음 구조로 매우 상세하고 현실적인 조언을 작성해주세요:\n`;
      prompt += `1. ${mbti} 성격 특성 심층 분석 (5-6문단)\n`;
      prompt += `   - 강점과 약점 상세 분석\n`;
      prompt += `   - 의사결정 스타일과 선호도\n`;
      prompt += `   - 스트레스 상황에서의 반응 패턴\n\n`;
      prompt += `2. 타로 결과와 성격의 연결점 (6-7문단)\n`;
      prompt += `   - 각 카드가 ${mbti}에게 주는 의미\n`;
      prompt += `   - 성격과 타로 메시지의 시너지\n`;
      prompt += `   - 잠재적 갈등과 해결 방안\n\n`;
      prompt += `3. 구체적인 행동 계획 (단계별 10-15가지)\n`;
      prompt += `   - 즉시 실행 가능한 단기 계획 (3-5가지)\n`;
      prompt += `   - 1-3개월 중기 계획 (3-5가지)\n`;
      prompt += `   - 6개월-1년 장기 계획 (3-5가지)\n\n`;
      prompt += `4. 주의사항과 대안 (4-5문단)\n`;
      prompt += `   - ${mbti} 유형이 주의해야 할 점\n`;
      prompt += `   - 예상되는 어려움과 대처법\n`;
      prompt += `   - 대안적 접근 방법\n\n`;
      prompt += `5. 장기적 관점에서의 조언 (4-5문단)\n`;
      prompt += `   - 인생 목표와의 연관성\n`;
      prompt += `   - 성장과 발전 방향\n`;
      prompt += `   - 지속 가능한 변화 방법\n\n`;
      prompt += `각 섹션마다 구체적인 예시와 실천 방법을 포함하여 A4 2장 이상의 분량으로 작성해주세요.`;
    } else {
      // 일반 타로 해석 요청인 경우
      if (cardNames.length > 1) {
        prompt += `\n\n다음 구조로 4장의 카드에 대한 종합적인 해석을 제공해주세요:\n\n`;
        prompt += `## 📖 타로 리딩 결과\n\n`;
        prompt += `### 1. 각 카드의 개별 해석 (각 카드당 4-5문단)\n`;
        cardNames.forEach((cardName, index) => {
          prompt += `**${index + 1}번째 카드 - ${cardName}:**\n`;
          prompt += `- 상징과 의미 (2문단)\n- 현재 상황에서의 의미 (2문단)\n- 주의할 점과 대안 (1문단)\n\n`;
        });
        
        prompt += `### 2. 카드들의 연결성과 전체적인 메시지 (6-8문단)\n`;
        prompt += `- 카드들 간의 상호작용과 시너지 (2문단)\n- 시간의 흐름에 따른 변화 (2문단)\n- 핵심 메시지와 조언 (2문단)\n- 예상되는 시나리오와 대응법 (2문단)\n\n`;
        
        prompt += `### 3. ${mbti ? `${mbti} 성격 유형에 맞는 ` : ''}구체적인 조언 (8-10문단)\n`;
        prompt += `- 즉시 실천할 수 있는 방법 (3문단)\n- 1-3개월 중기 계획 (3문단)\n- 6개월-1년 장기 관점 (2문단)\n- 주의사항과 대안 (2문단)\n\n`;
        
        prompt += `### 4. 실생활 적용 가이드 (4-5문단)\n`;
        prompt += `- 직장/학업에서의 활용법\n- 인간관계에서의 적용\n- 개인적 성장을 위한 방법\n\n`;
        
        prompt += `### 5. 마무리 메시지 (3-4문단)\n`;
        prompt += `- 희망적이고 격려하는 메시지\n- 앞으로의 방향성 제시\n- 지속적인 성장을 위한 조언\n\n`;
      } else {
        prompt += `\n\n다음 구조로 상세한 카드 해석을 제공해주세요:\n\n`;
        prompt += `## 📖 ${cardNames[0]} 카드 해석\n\n`;
        prompt += `### 1. 카드의 상징과 의미 (5-6문단)\n`;
        prompt += `- 기본 상징과 전통적 의미 (2문단)\n`;
        prompt += `- 현대적 해석과 적용 (2문단)\n`;
        prompt += `- 심층적 의미와 메시지 (2문단)\n\n`;
        prompt += `### 2. 현재 상황에서의 해석 (6-7문단)\n`;
        prompt += `- 현재 상황과의 연결점 (2문단)\n`;
        prompt += `- 감정적, 정신적 상태 분석 (2문단)\n`;
        prompt += `- 예상되는 변화와 전환점 (2문단)\n`;
        prompt += `- 주변 환경과의 상호작용 (1문단)\n\n`;
        prompt += `### 3. 구체적인 조언과 행동 방향 (8-10문단)\n`;
        prompt += `- 즉시 실행 가능한 방법 (3문단)\n`;
        prompt += `- 중장기적 행동 계획 (3문단)\n`;
        prompt += `- 의사결정 가이드라인 (2문단)\n`;
        prompt += `- 성장과 발전 방향 (2문단)\n\n`;
        prompt += `### 4. 주의사항과 대안 (4-5문단)\n`;
        prompt += `- 피해야 할 행동과 태도 (2문단)\n`;
        prompt += `- 예상되는 어려움과 대처법 (2문단)\n`;
        prompt += `- 대안적 접근 방법 (1문단)\n\n`;
        prompt += `### 5. 실생활 적용 가이드 (4-5문단)\n`;
        prompt += `- 직장/학업에서의 활용\n`;
        prompt += `- 인간관계에서의 적용\n`;
        prompt += `- 개인적 성장을 위한 방법\n\n`;
        prompt += `### 6. 마무리 메시지 (3-4문단)\n`;
        prompt += `- 희망적이고 격려하는 메시지\n`;
        prompt += `- 앞으로의 방향성 제시\n`;
        prompt += `- 지속적인 성장을 위한 조언\n\n`;
      }
      
      if (mbti) {
        prompt += `**중요:** 모든 해석과 조언을 ${mbti} 성격 유형의 특성에 맞게 맞춤화해주세요. `;
        prompt += `${mbti} 유형의 강점과 약점, 선호하는 의사소통 방식, 의사결정 스타일을 고려하여 `;
        prompt += `실제로 적용 가능한 구체적인 조언을 제공해주세요.\n\n`;
      }
    }
    
    prompt += `**작성 요구사항:**\n`;
    prompt += `- A4 2장 이상의 분량 (최소 4000자 이상)\n`;
    prompt += `- 매우 구체적이고 실용적인 내용\n`;
    prompt += `- 희망적이면서도 현실적인 톤\n`;
    prompt += `- 단계별이고 체계적인 구성\n`;
    prompt += `- ${targetLanguage}로 작성\n`;
    prompt += `- 이모지와 제목을 활용한 가독성 높은 구성\n`;
    prompt += `- 각 섹션마다 구체적인 예시와 실천 방법 포함\n`;
    prompt += `- MBTI 성격 유형에 맞는 맞춤형 조언 강화\n`;
    prompt += `- 장기적 관점과 단기적 행동 계획 모두 포함`;

    // 5. Google Gemini API 서버에 요청을 보냅니다.
    const apiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.8,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 8192,
        }
      }),
    });
    
    if (!apiResponse.ok) {
        const errorData = await apiResponse.json();
        console.error('Gemini API Error:', errorData);
        return response.status(apiResponse.status).json({ message: 'Gemini API에서 오류가 발생했습니다.', error: errorData });
    }

    const data = await apiResponse.json();
    
    // Gemini가 보내준 텍스트 해석을 추출합니다.
    const interpretation = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // 개별 카드 해석을 위한 키워드 추출 (간단한 패턴 매칭)
    const positiveKeywords = extractKeywords(interpretation, ['희망', '기회', '성장', '성공', '긍정', '좋은', '행운', '진보', '발전', '성취']);
    const negativeKeywords = extractKeywords(interpretation, ['주의', '신중', '경계', '위험', '부정', '어려움', '장애', '문제', '걱정', '불안']);

    // 6. 성공적인 결과를 프론트엔드로 다시 보내줍니다.
    if (isFullReading) {
      // 전체 해석을 구조화된 섹션으로 분할
      const sections = parseInterpretationSections(interpretation, cardNames);
      
      return response.status(200).json({ 
        fullInterpretation: interpretation,
        cardInterpretations: sections.cardInterpretations,
        summary: sections.summary,
        mbtiAdvice: sections.mbtiAdvice,
        connectionAnalysis: sections.connectionAnalysis,
        practicalGuide: sections.practicalGuide
      });
    } else {
      // 개별 해석 요청인 경우 - 기존 응답 유지
      return response.status(200).json({ 
        interpretation,
        positiveKeywords,
        negativeKeywords
      });
    }

  } catch (error) {
    console.error('서버 함수 내부 오류:', error);
    return response.status(500).json({ message: '서버에서 해석을 생성하는 중 오류가 발생했습니다.' });
  }
}