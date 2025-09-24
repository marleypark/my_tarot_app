// 이 파일은 Vercel 서버에서 실행되는 백엔드 코드입니다. (api/interpret.js)
// CORS 헤더를 추가하여 브라우저 호환성 문제를 해결한 최종 버전입니다.

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
    const { cardNames, question, language } = request.body || {};

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
    // 한 번의 호출로 각 카드별 해석과 총정리를 JSON으로 반환하도록 지시합니다.
    const listText = cardNames.join(', ');
    let prompt = `You are a warm, wise tarot master. The following cards were drawn in order: ${listText}.`;
    if (question) {
      prompt += ` The user's question is: "${question}".`;
    }
    prompt += ` For EACH card in order, provide a clear interpretation (meaning + advice). Then provide an overall summary that connects all cards.`;
    prompt += ` Respond STRICTLY as pure JSON with this shape and in ${targetLanguage}:`;
    prompt += ` { "interpretations": ["text for card1", "text for card2", ...], "summary": "overall text" }`;
    prompt += ` No markdown, no code fences, no extra commentary.`;

    // 5. Google Gemini API 서버에 요청을 보냅니다.
    const apiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1200,
        }
      }),
    });
    
    if (!apiResponse.ok) {
        const errorData = await apiResponse.json();
        console.error('Gemini API Error:', errorData);
        // 429 등은 그대로 전달하여 프론트에서 백오프 가능
        return response.status(apiResponse.status).json({ message: 'Gemini API에서 오류가 발생했습니다.', error: errorData });
    }

    const data = await apiResponse.json();
    
    // Gemini가 보내준 텍스트를 추출 후 JSON 파싱을 시도합니다.
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    let parsed = null;
    try {
      // 일부 모델이 텍스트 앞뒤에 내용을 붙이는 경우를 대비하여 중괄호 블록만 추출
      const start = rawText.indexOf('{');
      const end = rawText.lastIndexOf('}');
      const jsonSlice = start >= 0 && end >= 0 ? rawText.slice(start, end + 1) : rawText;
      parsed = JSON.parse(jsonSlice);
    } catch (e) {
      console.error('JSON 파싱 실패. 원문:', rawText);
    }

    if (!parsed || !Array.isArray(parsed.interpretations)) {
      // 파싱 실패 시 전체 텍스트를 단일 해석으로 반환하여 UI가 최소 동작하도록 함
      const fallback = rawText || '해석을 생성하지 못했습니다.';
      return response.status(200).json({
        interpretations: [fallback],
        summary: fallback,
      });
    }

    // 6. 성공적인 결과를 프론트엔드로 다시 보내줍니다.
    return response.status(200).json({
      interpretations: parsed.interpretations,
      summary: parsed.summary || '',
    });

  } catch (error) {
    console.error('서버 함수 내부 오류:', error);
    return response.status(500).json({ message: '서버에서 해석을 생성하는 중 오류가 발생했습니다.' });
  }
}