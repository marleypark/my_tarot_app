// 📁 api/interpret.js (전체 교체)

// 안전한 JSON 파싱 함수
function extractJsonFromText(text) {
  if (!text) throw new Error('빈 응답을 받았습니다.');
  const fenced = text.match(/```json([\s\S]*?)```/i) || text.match(/```([\s\S]*?)```/);
  const raw = fenced ? fenced[1] : text;
  const start = raw.indexOf('{');
  const end = raw.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('모델 응답에서 JSON을 찾을 수 없습니다.');
  return raw.slice(start, end + 1);
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function isRetriableError(error) {
    const status = error.message.match(/(\d+)/)?.[0];
    const msg = String(error.message || '').toLowerCase();
    return status === '503' || status === '429' || status === '500' ||
           msg.includes('unavailable') || msg.includes('overload') || 
           msg.includes('timeout');
}

async function callGeminiWithRetry(apiCallFunction, { maxAttempts = 4, baseDelayMs = 800, capMs = 7000 } = {}) {
    let attempt = 0;
    while (attempt < maxAttempts) {
        try {
            return await apiCallFunction();
        } catch (error) {
            attempt++;
            if (!isRetriableError(error) || attempt >= maxAttempts) {
                throw error;
            }
            const exponentialDelay = Math.min(capMs, baseDelayMs * (2 ** (attempt - 1)));
            const jitter = Math.random() * exponentialDelay; // Full Jitter
            console.warn(`[Gemini Retry] Attempt ${attempt}/${maxAttempts}. Retrying in ${Math.round(jitter)}ms.`);
            await sleep(jitter);
        }
    }
}

async function handler(request, response) {
  // CORS 헤더 설정
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'POST 요청만 허용됩니다.' });
  }

  try {
    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) throw new Error('API 키가 설정되지 않았습니다.');

    const { cardNames, question, language, mbti } = request.body || {};
    if (!Array.isArray(cardNames) || cardNames.length === 0) {
      return response.status(400).json({ message: 'cardNames 배열이 필요합니다.' });
    }

    const languageMap = { kor: 'Korean', eng: 'English', can: 'Cantonese', vi: 'Vietnamese', id: 'Indonesian', chn: 'Simplified Chinese', fr: 'French', es: 'Spanish', hin: 'Hindi' };
    const targetLanguage = languageMap[language] || 'Korean';

    const prompt = `
### ROLE & GOAL ###
You are a world-class psychological counselor who masterfully combines Tarot reading and MBTI personality analysis. Your goal is to provide a single, comprehensive, and deeply insightful analysis in a structured JSON format. You MUST respond ONLY with the JSON object, without any introductory text or markdown formatting like "\`\`\`json".

### CONTEXT ###
- User's Question: "${question || 'A general life reading without a specific question.'}"
- User's Yin-Yang MBTI Type: "${mbti || 'Not provided'}" (Note: A capital letter indicates a strong preference, a lowercase letter indicates a weak preference. For example, 'eNTp' means a weak Extrovert, strong iNtuitive, strong Thinker, and weak Perceiver. Use this nuanced information for a more personalized analysis.)
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
    "summary": "A comprehensive summary that synthesizes the messages of all four cards (4-5 paragraphs). Explain how the cards interact and tell a story. If an MBTI type is provided, subtly weave in how a(n) ${mbti || 'individual'} might perceive these energies. If a question was asked, this summary must directly address it.",
    "mbtiActionPlan": {
      "title": "Personalized Action Plan for a(n) ${mbti || 'User'}",
      "introduction": "An encouraging introduction explaining how this action plan is tailored to the user's personality type (${mbti || 'unique strengths'}), helping them leverage the tarot's wisdom.",
      "phases": [
        {
          "phaseTitle": "Phase 1: Immediate Steps (First Week)",
          "steps": ["A very specific, concrete, and easy-to-start action.", "Another practical action.", "A reflective action or small goal."]
        },
        {
          "phaseTitle": "Phase 2: Building Momentum (1-3 Months)",
          "steps": ["A medium-term goal.", "A new habit to cultivate.", "A way to overcome potential challenges, considering the ${mbti || 'user'}'s personality."]
        },
        {
          "phaseTitle": "Phase 3: Long-Term Growth (6+ Months)",
          "steps": ["A long-term vision or life direction.", "How to integrate the lessons from this reading into a larger life philosophy."]
        }
      ]
    }
  }
}

### IMPORTANT CONSTRAINTS ###
1. JSON ONLY: Your entire output must be a single, valid JSON object.
2. CARD COUNT: The "cardInterpretations" array must contain exactly ${cardNames.length} objects.
3. LANGUAGE: All string values must be in ${targetLanguage}.
4. DETAIL: Provide rich, detailed, and empathetic content for each section. Avoid generic statements.
5. MBTI INTEGRATION: If an MBTI type is provided, the analysis MUST be personalized.
`;

    const body = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.8,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 4096 // flash-lite 안정성 위해 살짝 낮춤 권장
      }
    };
    const apiResponse = await callGeminiWithRetry(async () => {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite-001:generateContent?key=${API_KEY}`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        if (!res.ok) {
          const txt = await res.text();
          throw new Error(`Gemini API 요청 실패: ${res.status} - ${txt}`);
        }
        return res;
    });

    const data = await apiResponse.json();
    
    // candidates 안전 가드
    if (!data?.candidates?.length) {
      throw new Error('모델 응답이 비었습니다');
    }
    
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      throw new Error('모델 응답에서 텍스트를 찾을 수 없습니다');
    }
    
    const responseJsonText = extractJsonFromText(text);
    const responseJson = JSON.parse(responseJsonText);
    
    // 응답 검증: cardInterpretations 길이 확인
    if (!responseJson.cardInterpretations || responseJson.cardInterpretations.length !== cardNames.length) {
      throw new Error(`카드 해석 개수가 일치하지 않습니다. 예상: ${cardNames.length}, 실제: ${responseJson.cardInterpretations?.length || 0}`);
    }
    
    return response.status(200).json({ success: true, data: responseJson });

  } catch (error) {
    console.error('서버 오류:', error);
    return response.status(500).json({ success: false, error: '서버 내부 오류가 발생했습니다.', message: error.message });
  }
}

module.exports = handler;

// Redeploy Trigger - Force redeploy with correct model name