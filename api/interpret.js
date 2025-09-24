// 이 파일은 Vercel 서버에서 실행되는 백엔드 코드입니다. (api/interpret.js)
// Google API 주소 오타를 완벽하게 수정한 최종 버전입니다.

export default async function handler(request, response) {
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

    // 3. 프론트엔드(script.js)에서 보낸 데이터(카드 이름, 질문)를 받습니다.
    const { cardNames, question } = request.body;

    // 4. Gemini API에 보낼 프롬프트(요청서)를 정교하게 만듭니다.
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

    // 5. Google Gemini API 서버에 요청을 보냅니다. (오타 수정 완료!)
    const apiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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
    
    // Gemini가 보내준 텍스트 해석을 추출합니다.
    const interpretation = data.candidates[0].content.parts[0].text;

    // 6. 성공적인 결과를 프론트엔드로 다시 보내줍니다.
    return response.status(200).json({ interpretation });

  } catch (error) {
    console.error('서버 함수 내부 오류:', error);
    return response.status(500).json({ message: '서버에서 해석을 생성하는 중 오류가 발생했습니다.' });
  }
}