// CORS 문제와 OPTIONS 요청을 완벽하게 처리하는 최종 코드입니다.
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(request, response) {
  // vercel.json 설정이 우선이지만, 만약을 위해 코드 레벨에서도 헤더를 추가합니다.
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONS 요청(preflight)에 대한 응답을 먼저 처리합니다.
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  // 실제 POST 요청 처리
  if (request.method === 'POST') {
    try {
      const API_KEY = process.env.GEMINI_API_KEY;
      if (!API_KEY) {
        throw new Error('API 키가 설정되지 않았습니다.');
      }
      
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest"});

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

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      
      return response.status(200).json({ interpretation: text });

    } catch (error) {
      console.error('서버 함수 내부 오류:', error);
      return response.status(500).json({ message: '서버에서 해석을 생성하는 중 오류가 발생했습니다.' });
    }
  }

  // POST나 OPTIONS가 아닌 다른 요청에 대한 처리
  return response.status(405).json({ message: '허용되지 않은 요청 방식입니다.' });
}