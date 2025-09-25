// 키워드 추출 함수
function extractKeywords(text, keywords) {
  const foundKeywords = [];
  keywords.forEach(keyword => {
    if (text.includes(keyword)) {
      foundKeywords.push(keyword);
    }
  });
  return foundKeywords.slice(0, 3); // 최대 3개까지만 반환
}

export default async function handler(request, response) {
  // CORS 헤더를 모든 응답에 추가 (중요!)
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // OPTIONS 요청에 대한 응답 (CORS preflight)
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

    // 3. 프론트엔드(script.js)에서 보낸 데이터를 받습니다.
    const { cardNames, question, language, mbti } = request.body || {};

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

    // 4. 통합된 1회 API 호출을 위한 최적화된 프롬프트
    const prompt = `
### ROLE & GOAL ###
You are a world-class psychological counselor who masterfully combines Tarot reading and MBTI personality analysis. Your goal is to provide a single, comprehensive, and deeply insightful analysis in a structured JSON format. You MUST respond ONLY with the JSON object, without any introductory text like "\`\`\`json".

### CONTEXT ###
- User's Question: "${question || 'A general life reading without a specific question.'}"
- User's MBTI Type: "${mbti || 'Not provided'}"
- Drawn Cards: ${cardNames.join(', ')}
- Target Language: ${targetLanguage}

### INSTRUCTIONS ###
Based on the context above, generate a detailed and practical reading. All text content within the JSON MUST be in ${targetLanguage}.

#### JSON OUTPUT STRUCTURE ####
You must adhere strictly to the following JSON structure. Do not add or remove any keys.

{
  "cardInterpretations": [
    {
      "cardName": "Name of the first card",
      "interpretation": "Detailed interpretation of this card (3-4 paragraphs). If the user asked a question, connect the card's meaning directly to that question. If not, provide a general forecast based on the card's energy.",
      "keywords": {
        "positive": ["Positive keyword 1", "Positive keyword 2"],
        "caution": ["Cautionary keyword 1", "Cautionary keyword 2"]
      }
    }
  ],
  "overallReading": {
    "title": "A creative and insightful title for the entire reading.",
    "summary": "A comprehensive summary that synthesizes the messages of all four cards (4-5 paragraphs). Explain how the cards interact and tell a story, from the first card to the last. If an MBTI type is provided, subtly weave in how a(n) ${mbti || 'individual'} might perceive these energies. If a question was asked, this summary must directly address it.",
    "mbtiActionPlan": {
      "title": "Personalized Action Plan for a(n) ${mbti || 'User'}",
      "introduction": "An encouraging introduction explaining how this action plan is tailored to the user's personality type (${mbti || 'unique strengths'}), helping them leverage the tarot's wisdom.",
      "phases": [
        {
          "phaseTitle": "Phase 1: Immediate Steps (First Week)",
          "steps": [
            "A very specific, concrete, and easy-to-start action for the first 1-2 days.",
            "Another practical action for the middle of the week.",
            "A reflective action or small goal to achieve by the end of the week."
          ]
        },
        {
          "phaseTitle": "Phase 2: Building Momentum (1-3 Months)",
          "steps": [
            "A medium-term goal related to the reading.",
            "A new habit to cultivate or a mindset to practice.",
            "A way to overcome potential challenges, considering the ${mbti || 'user'}'s personality."
          ]
        },
        {
          "phaseTitle": "Phase 3: Long-Term Growth (6+ Months)",
          "steps": [
            "A long-term vision or life direction suggested by the cards.",
            "How to integrate the lessons from this reading into a larger life philosophy."
          ]
        }
      ]
    }
  }
}

### IMPORTANT CONSTRAINTS ###
1.  **JSON ONLY:** Your entire output must be a single, valid JSON object.
2.  **CARD COUNT:** The "cardInterpretations" array must contain exactly ${cardNames.length} objects.
3.  **LANGUAGE:** All string values must be in ${targetLanguage}.
4.  **DETAIL:** Provide rich, detailed, and empathetic content for each section. Avoid generic statements.
5.  **MBTI INTEGRATION:** If an MBTI type is provided, the analysis MUST be personalized. If not, the language should be general and empowering for any user.
`;

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
          maxOutputTokens: 8192, // 최대 출력 토큰 (A4 3-5페이지 분량)
        },
      }),
    });

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error('Gemini API 오류:', errorText);
      throw new Error(`Gemini API 요청 실패: ${apiResponse.status} - ${errorText}`);
    }

    const data = await apiResponse.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      throw new Error('Gemini API에서 응답을 생성하지 못했습니다.');
    }

    console.log('Gemini API 응답 길이:', generatedText.length);

    // 6. JSON 파싱 시도
    let parsedResponse;
    try {
      // JSON 코드 블록 제거 (```json ... ```)
      const cleanText = generatedText.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
      parsedResponse = JSON.parse(cleanText);
    } catch (parseError) {
      console.error('JSON 파싱 오류:', parseError);
      console.log('원본 응답:', generatedText);
      
      // JSON 파싱 실패 시 기본 구조로 폴백
      parsedResponse = {
        cardInterpretations: cardNames.map((cardName, index) => ({
          cardName: cardName,
          interpretation: `이것은 ${cardName} 카드의 기본 해석입니다. (${index + 1}번째 카드)`,
          keywords: {
            positive: ['희망', '기회'],
            caution: ['주의', '신중']
          }
        })),
        overallReading: {
          title: '타로 리딩 결과',
          summary: '전체적인 요약과 조언이 여기에 표시됩니다.',
          mbtiActionPlan: {
            title: 'MBTI 기반 액션 플랜',
            introduction: '개인 맞춤형 조언이 여기에 표시됩니다.',
            phases: [
              {
                phaseTitle: '1단계: 즉시 실행',
                steps: ['구체적인 행동 계획 1', '구체적인 행동 계획 2']
              }
            ]
          }
        }
      };
    }

    // 7. 응답 데이터 구조화
    const responseData = {
      success: true,
      data: parsedResponse,
      metadata: {
        cardCount: cardNames.length,
        mbtiType: mbti || null,
        language: targetLanguage,
        timestamp: new Date().toISOString()
      }
    };

    // 8. 성공적인 응답을 프론트엔드에 전송합니다.
    return response.status(200).json(responseData);

  } catch (error) {
    console.error('서버 오류:', error);
    
    // 9. 오류 발생 시 프론트엔드에 오류 메시지를 전송합니다.
    return response.status(500).json({
      success: false,
      error: '서버 내부 오류가 발생했습니다.',
      message: error.message
    });
  }
}