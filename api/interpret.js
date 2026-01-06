// 이 파일은 Vercel 서버에서 실행되는 백엔드 코드입니다. (api/interpret.js)

export default async function handler(request, response) {
  // 1. 보안 체크: POST 요청만 허용
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'POST 요청만 허용됩니다.' });
  }

  try {
    // 2. Vercel 환경 변수에서 안전하게 API 키 가져오기
    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) {
      throw new Error('API 키가 설정되지 않았습니다.');
    }

    // 3. 프론트엔드에서 보낸 데이터 받기
    const { cardNames, question } = request.body;

    // 4. Gemini API에 보낼 프롬프트(요청서) 만들기
    let prompt = `${cardNames.join(', ')} 카드가 나왔습니다. 당신은 친절하고 지혜로운 타로 마스터입니다.`;
    if (question) {
      prompt += ` 질문은 "${question}" 입니다.`;
    }
    
    if (cardNames.length > 1) {
        prompt += ` 이 카드들을 종합적으로 연결하여 질문에 대한 깊이 있는 조언을 해주세요.`;
    } else {
        prompt += ` 이 카드의 핵심적인 의미와 조언을 상세하게 설명해주세요.`;
    }
    prompt += ` 긍정적이고 희망적인 관점에서 이야기해주세요.`;

    // 5. Gemini API에 요청 보내기 (Gemini 2.0 Flash 사용)
    const apiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });
    
    if (!apiResponse.ok) {
        const errorData = await apiResponse.json();
        console.error('Gemini API Error:', errorData);
        throw new Error('Gemini API에서 오류가 발생했습니다.');
    }

    const data = await apiResponse.json();
    const interpretation = data.candidates[0].content.parts[0].text;

    // 6. 성공적인 결과를 프론트엔드로 다시 보내주기
    response.status(200).json({ interpretation });

  } catch (error) {
    console.error('서버 오류:', error);
    // 7. 에러가 발생하면 프론트엔드에 에러 메시지 보내주기
    response.status(500).json({ message: '서버 내부 오류가 발생했습니다.' });
  }
}