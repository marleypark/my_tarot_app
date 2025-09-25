// 현실 조언을 위한 별도 API 엔드포인트 (api/action-plan.js)

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

    // 3. 프론트엔드(script.js)에서 보낸 데이터(카드 이름, 질문, 언어)를 받습니다.
    const { cardNames, question, language, interpretations } = request.body || {};

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

    // 4. 현실적인 액션 플랜을 위한 프롬프트 생성
    let prompt = `You are a practical life coach and tarot advisor. Based on the tarot cards drawn: ${cardNames.join(', ')}`;
    if (question) {
      prompt += ` and the user's question: "${question}"`;
    }
    prompt += `, provide a concrete, actionable, and realistic action plan.`;
    prompt += ` The previous interpretations were: ${interpretations || 'Not provided'}`;
    prompt += ` Focus on practical steps the user can take in their daily life.`;
    prompt += ` Include specific actions, timelines, and realistic expectations.`;
    prompt += ` Be encouraging but honest about challenges.`;
    prompt += ` Answer strictly in ${targetLanguage}.`;

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
          maxOutputTokens: 1024,
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
    const actionPlan = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // 6. 성공적인 결과를 프론트엔드로 다시 보내줍니다.
    return response.status(200).json({ actionPlan });

  } catch (error) {
    console.error('서버 함수 내부 오류:', error);
    return response.status(500).json({ message: '서버에서 액션 플랜을 생성하는 중 오류가 발생했습니다.' });
  }
}
