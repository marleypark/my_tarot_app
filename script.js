// script.js

const tarotData = [
    // --- 메이저 아르카나 (22장) ---
    { name: "바보", img: "images/메이저_아르카나/0. 바보 카드.jpg" },
    { name: "마법사", img: "images/메이저_아르카나/1. 마법사 카드.jpg" },
    { name: "여사제", img: "images/메이저_아르카나/2. 여사제 카드.jpg" },
    { name: "여황제", img: "images/메이저_아르카나/3. 여황제 카드.jpg" },
    { name: "황제", img: "images/메이저_아르카나/4. 황제 카드.jpg" },
    { name: "교황", img: "images/메이저_아르카나/5. 교황 카드.jpg" },
    { name: "연인", img: "images/메이저_아르카나/6. 연인 카드.jpg" },
    { name: "전차", img: "images/메이저_아르카나/7. 전차 카드.jpg" },
    { name: "힘", img: "images/메이저_아르카나/8. 힘 카드.jpg" },
    { name: "은둔자", img: "images/메이저_아르카나/9. 은둔자 카드.jpg" },
    { name: "운명의 수레바퀴", img: "images/메이저_아르카나/10. 운명의 수레바퀴.jpg" },
    { name: "정의", img: "images/메이저_아르카나/11. 정의 카드.jpg" },
    { name: "매달린 남자", img: "images/메이저_아르카나/12. 행맨 카드.jpg" }, // 파일명과 카드 이름이 다를 수 있어 통용되는 이름으로 기재
    { name: "죽음", img: "images/메이저_아르카나/13. 죽음 카드.jpg" },
    { name: "절제", img: "images/메이저_아르카나/14. 절제 카드.jpg" },
    { name: "악마", img: "images/메이저_아르카나/15. 악마 카드.jpg" },
    { name: "탑", img: "images/메이저_아르카나/16. 탑 카드.jpg" },
    { name: "별", img: "images/메이저_아르카나/17. 별 카드.jpg" },
    { name: "달", img: "images/메이저_아르카나/18. 달 카드.jpg" },
    { name: "태양", img: "images/메이저_아르카나/19. 태양 카드.jpg" },
    { name: "심판", img: "images/메이저_아르카나/20. 심판 카드.jpg" },
    { name: "세계", img: "images/메이저_아르카나/21. 세계 카드.jpg" },

    // --- 완드 (14장) ---
    { name: "완드 에이스", img: "images/완드/완드 에이스.jpg" },
    { name: "완드 2", img: "images/완드/완드2.jpg" },
    { name: "완드 3", img: "images/완드/완드3.jpg" },
    { name: "완드 4", img: "images/완드/완드4.jpg" },
    { name: "완드 5", img: "images/완드/완드5.jpg" },
    { name: "완드 6", img: "images/완드/완드6.jpg" },
    { name: "완드 7", img: "images/완드/완드7.jpg" },
    { name: "완드 8", img: "images/완드/완드8.jpg" },
    { name: "완드 9", img: "images/완드/완드9.jpg" },
    { name: "완드 10", img: "images/완드/완드10.jpg" },
    { name: "완드 페이지", img: "images/완드/완드 페이지.jpg" },
    { name: "완드 나이트", img: "images/완드/완드 나이트.jpg" },
    { name: "완드 퀸", img: "images/완드/완드 퀸.jpg" },
    { name: "완드 킹", img: "images/완드/완드 킹.jpg" },

    // --- 컵 (14장) ---
    { name: "컵 에이스", img: "images/컵/컵 에이스.jpg" },
    { name: "컵 2", img: "images/컵/컵2.jpg" },
    { name: "컵 3", img: "images/컵/컵3.jpg" },
    { name: "컵 4", img: "images/컵/컵4.jpg" },
    { name: "컵 5", img: "images/컵/컵5.jpg" },
    { name: "컵 6", img: "images/컵/컵6.jpg" },
    { name: "컵 7", img: "images/컵/컵7.jpg" },
    { name: "컵 8", img: "images/컵/컵8.jpg" },
    { name: "컵 9", img: "images/컵/컵9.jpg" },
    { name: "컵 10", img: "images/컵/컵10.jpg" },
    { name: "컵 페이지", img: "images/컵/컵 페이지.jpg" },
    { name: "컵 나이트", img: "images/컵/컵 나이트.jpg" },
    { name: "컵 퀸", img: "images/컵/컵 퀸.jpg" },
    { name: "컵 킹", img: "images/컵/컵 킹.jpg" },
    
    // --- 소드 (14장) ---
    { name: "소드 에이스", img: "images/소드/소드 에이스.jpg" },
    { name: "소드 2", img: "images/소드/소드2.jpg" },
    { name: "소드 3", img: "images/소드/소드3.jpg" },
    { name: "소드 4", img: "images/소드/소드4.jpg" },
    { name: "소드 5", img: "images/소드/소드5.jpg" },
    { name: "소드 6", img: "images/소드/소드6.jpg" },
    { name: "소드 7", img: "images/소드/소드7.jpg" },
    { name: "소드 8", img: "images/소드/소드8.jpg" },
    { name: "소드 9", img: "images/소드/소드9.jpg" },
    { name: "소드 10", img: "images/소드/소드10.jpg" },
    { name: "소드 페이지", img: "images/소드/소드 페이지.jpg" },
    { name: "소드 나이트", img: "images/소드/소드 나이트.jpg" },
    { name: "소드 퀸", img: "images/소드/소드 퀸.jpg" },
    { name: "소드 킹", img: "images/소드/소드 킹.jpg" },

    // --- 펜타클 (14장) ---
    { name: "펜타클 에이스", img: "images/펜타클/펜타클 에이스.jpg" },
    { name: "펜타클 2", img: "images/펜타클/펜타클2.jpg" },
    { name: "펜타클 3", img: "images/펜타클/펜타클3.jpg" },
    { name: "펜타클 4", img: "images/펜타클/펜타클4.jpg" },
    { name: "펜타클 5", img: "images/펜타클/펜타클5.jpg" },
    { name: "펜타클 6", img: "images/펜타클/펜타클6.jpg" },
    { name: "펜타클 7", img: "images/펜타클/펜타클7.jpg" },
    { name: "펜타클 8", img: "images/펜타클/펜타클8.jpg" },
    { name: "펜타클 9", img: "images/펜타클/펜타클9.jpg" },
    { name: "펜타클 10", img: "images/펜타클/펜타클10.jpg" },
    { name: "펜타클 페이지", img: "images/펜타클/펜타클 페이지.jpg" },
    { name: "펜타클 나이트", img: "images/펜타클/펜타클 나이트.jpg" },
    { name: "펜타클 퀸", img: "images/펜타클/펜타클 퀸.jpg" },
    { name: "펜타클 킹", img: "images/펜타클/펜타클 킹.jpg" },
];
// 화면 요소들 가져오기
const mainScreen = document.getElementById('main-screen');
// ... (다른 화면 및 버튼 요소들도 모두 가져옵니다)

// 변수 설정
let userQuestion = "";
let selectedCards = [];
const cardsToPick = 4;
let currentResultIndex = 0;

// 타로 카드 데이터 (예시)
const tarotData = [
    { name: "The Fool", img: "images/card_0.png" },
    { name: "The Magician", img: "images/card_1.png" },
    // ... 78장 카드 정보 모두 추가
];
// 메인 화면 셔플 이미지 클릭 시
document.getElementById('shuffle-image').addEventListener('click', () => {
    mainScreen.classList.add('hidden');
    document.getElementById('question-dialog').classList.remove('hidden');
});

// "질문 적기" 버튼 클릭 시
document.getElementById('write-question-btn').addEventListener('click', () => {
    // ... 질문 입력 화면 보여주기
});

// ... (다른 모든 버튼에 대한 클릭 이벤트 리스너를 추가합니다)
let deck = [...Array(78).keys()]; // 0~77번 카드 덱 생성

function shuffleDeck() {
    // Fisher-Yates 셔플 알고리즘으로 덱을 섞습니다.
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// 카드 선택 화면의 셔플 이미지 클릭 시
document.getElementById('shuffle-for-select').addEventListener('click', () => {
    if (selectedCards.length < cardsToPick) {
        const pickedCardIndex = deck.pop(); // 섞인 덱에서 카드 하나를 뽑음
        selectedCards.push(pickedCardIndex);

        // 카드 선택 이펙트 및 사운드 재생
        const cardImage = document.createElement('img');
        cardImage.src = tarotData[pickedCardIndex].img;
        cardImage.classList.add('card-appear-effect');
        document.getElementById('selected-cards-preview').appendChild(cardImage);
        document.getElementById('select-sound').play();
        
        // 남은 카드 수 업데이트
        // ...

        // 4장을 모두 뽑았다면 결과 화면으로 이동
        if (selectedCards.length === cardsToPick) {
            setTimeout(() => {
                showResultScreen();
            }, 1000); // 1초 후 결과 화면으로
        }
    }
});
// **이 코드는 Serverless Function 내에서 실행되어야 안전합니다.**
async function getTarotInterpretation(cardNames, question) {
    const API_KEY = "AIzaSyCFRyUsirzjKurig_mN14max2sqn4w_PLU"; // 실제로는 환경 변수에서 가져와야 함
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

    // Gemini에게 보낼 프롬프트 (요청서)
    let prompt = `${cardNames.join(', ')} 카드가 나왔습니다. `;
    if (question) {
        prompt += `질문은 "${question}" 입니다. `;
    }
    prompt += `각 카드의 의미를 긍정적이고 희망적인 조언 스타일로 상세히 해석해주세요.`;
    
    // 총정리용 프롬프트
    // let summaryPrompt = `${cardNames.join(', ')} 카드가 나왔습니다. 질문 "${question}"에 대해 종합적으로 조언해주세요.`

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
        })
    });

    const data = await response.json();
    // 타이핑 효과를 위해 텍스트를 반환
    return data.candidates[0].content.parts[0].text;
}