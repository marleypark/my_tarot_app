// api/interpret.js
// Google Gemini API로 타로 해석을 생성하는 서버리스 함수

export default async function handler(request, response) {
  // 1. POST 요청만 허용
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'POST 요청만 허용됩니다.' });
  }

  try {
    // 2. 환경 변수에서 API 키 가져오기
    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
      console.error('GEMINI_API_KEY가 설정되지 않았습니다.');
      throw new Error('API 키가 설정되지 않았습니다.');
    }

    // 3. 프론트엔드 데이터 받기
    const { cardNames, question } = request.body;

    // 4. 프롬프트 구성
    let prompt = `${cardNames.join(', ')} 카드가 나왔습니다. 당신은 수십 년 경력의 지혜롭고 친절한 타로 마스터입니다.`;
    if (question) {
      prompt += ` 사용자의 질문은 "${question}" 입니다.`;
    }
    if (cardNames.length > 1) {
      prompt += ` 이 카드들을 종합적으로 연결하여, 질문에 대한 깊이 있는 조언을 단계별로 설명해주세요.`;
    } else {
      prompt += ` 이 카드의 상징, 핵심 의미, 그리고 조언을 상세하게 설명해주세요.`;
    }
    prompt += ` 긍정적이고 희망을 주는 따뜻한 어조로 이야기해주세요.`;

    // 5. Gemini API 호출
    const apiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
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

    // 6. 모든 parts 합치기 (중요!)
    const interpretation = data.candidates[0].content.parts
      .map(part => part.text || "")
      .join("\n");

    // 7. 프론트엔드로 반환
    return response.status(200).json({ interpretation });

  } catch (error) {
    console.error('서버 함수 내부 오류:', error);
    return response.status(500).json({ message: '서버에서 해석을 생성하는 중 오류가 발생했습니다.' });
  }
}
