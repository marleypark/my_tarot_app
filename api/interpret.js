// 이 파일은 Vercel 서버에서 실행되는 백엔드 코드입니다.
// CORS, OPTIONS, 인코딩, 모델 이름 문제를 모두 해결한 최종 버전입니다.

export default async function handler(request, response) {
  // 1. CORS Preflight(OPTIONS) 요청에 먼저 응답합니다. (중요!)
  // vercel.json 설정으로도 가능하지만, 코드 레벨에서 한번 더 처리해주는 것이 가장 확실합니다.
  if (request.method === 'OPTIONS') {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return response.status(200).end();
  }

  // 응답 헤더에 CORS 정책을 항상 포함시켜줍니다.
  response.setHeader('Access-Control-Allow-Origin', '*');

  // 2. 실제 POST 요청을 처리합니다.
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'POST 요청만 허용됩니다.' });
  }

  try {
    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
      throw new Error('API 키가 설정되지 않았습니다.');
    }

    const { cardNames, question } = request.body;

    let prompt = `${cardNames.join(', ')} 카드가 나왔습니다. 당신은 수십 년 경력의 지혜롭고 친절한 타로 마스터입니다.`;
    if (question) {
      prompt += ` 사용자의 질문은 "${question}" 입니다.`;
    }
    if (cardNames.length > 1) {
      prompt += ` 이 카드들을 종합적으로 연결하여, 질문에 대한 깊이 있는 조언을 단계별로 설명해주세요.`;
    } else {
      prompt += ` 이 카드의 상징, 핵심 의미, 그리고 조언을 상세하게 설명해주세요.`;
    }
    prompt += ` 긍정적이고 희망을 주는 따뜻한 어조로 이야기해주세요. 모든 답변은 반드시 한국어로 해주세요.`;

    // 3. Google Gemini API 서버에 가장 기본적인 fetch 방식으로 요청합니다.
    const apiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      console.error('Gemini API Error:', errorData);
      throw new Error('Gemini API에서 오류가 발생했습니다.');
    }

    const data = await apiResponse.json();

    // 4. 응답 데이터의 모든 'parts'를 합쳐서 완전한 텍스트를 만듭니다. (인코딩 문제 해결)
    const interpretation = data.candidates[0].content.parts.map(part => part.text).join("");

    // 5. 성공적인 결과를 프론트엔드로 보내줍니다.
    return response.status(200).json({ interpretation });

  } catch (error) {
    console.error('서버 함수 내부 오류:', error);
    return response.status(500).json({ message: '서버에서 해석을 생성하는 중 오류가 발생했습니다.' });
  }
}