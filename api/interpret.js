// Google AI 라이브러리를 사용하여 스트리밍 문제를 완벽하게 해결한 최종 코드입니다.
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(request, response) {
  // 1. 보안 체크: POST 요청만 허용합니다.
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'POST 요청만 허용됩니다.' });
  }

  try {
    // 2. Vercel 환경 변수에서 API 키를 안전하게 가져옵니다.
    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
      console.error('API 키가 Vercel 환경 변수에 설정되지 않았습니다.');
      throw new Error('API 키가 설정되지 않았습니다.');
    }
    
    // 3. Google AI 클라이언트를 초기화합니다.
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    // 4. 프론트엔드에서 보낸 데이터를 받습니다.
    const { cardNames, question } = request.body;

    // 5. Gemini API에 보낼 프롬프트를 만듭니다.
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

    // 6. 스트리밍이 아닌, 전체 응답을 받는 방식으로 API를 호출합니다.
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    // 7. 성공적인 결과를 프론트엔드로 보내줍니다.
    return response.status(200).json({ interpretation: text });

  } catch (error) {
    // 8. 어떤 단계에서든 오류가 발생하면 로그를 남기고 500 에러를 보냅니다.
    console.error('서버 함수 내부 오류:', error);
    return response.status(500).json({ message: '서버에서 해석을 생성하는 중 오류가 발생했습니다.' });
  }
}