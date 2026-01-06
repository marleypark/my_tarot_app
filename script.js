
// --- 1. 변수 및 요소 설정 ---
const screens = document.querySelectorAll('.screen');
const mainShuffleArea = document.getElementById('main-shuffle-area');
const writeQuestionBtn = document.getElementById('write-question-btn');
const mindQuestionBtn = document.getElementById('mind-question-btn');
const questionInput = document.getElementById('question-input');
const startFocusReadingBtn = document.getElementById('start-focus-reading-btn');
const shuffleAnimationArea = document.getElementById('shuffle-animation-area');
const cardsLeftText = document.getElementById('cards-left-text');
const selectedCardsPreview = document.getElementById('selected-cards-preview');
const resultCardTitle = document.getElementById('result-card-title');
const resultCardImage = document.getElementById('result-card-image');
const interpretationText = document.getElementById('interpretation-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const summaryBtn = document.getElementById('summary-btn');
const restartBtn = document.getElementById('restart-btn');
const selectSound = document.getElementById('select-sound');

let userQuestion = "";
let selectedCards = []; // 선택된 카드의 인덱스를 저장할 배열
let cardInterpretations = []; // 각 카드의 해석 결과를 저장할 배열
let currentResultIndex = 0;
const CARDS_TO_PICK = 4;
let deck = [];

// --- 2. 핵심 함수들 ---

// 화면 전환 함수
function showScreen(screenId) {
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// 초기화 함수
function resetApp() {
    userQuestion = "";
    selectedCards = [];
    cardInterpretations = [];
    currentResultIndex = 0;
    selectedCardsPreview.innerHTML = '';
    questionInput.value = '';
    updateCardsLeftText();
    showScreen('main-screen');
}

// 덱 생성 및 셔플 함수
function shuffleDeck() {
    deck = [...Array(tarotData.length).keys()]; // 0 ~ 77번 카드 인덱스 배열 생성
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// 남은 카드 개수 텍스트 업데이트
function updateCardsLeftText() {
    const cardsLeft = CARDS_TO_PICK - selectedCards.length;
    cardsLeftText.innerText = `남은 카드: ${cardsLeft}장`;
}

// 타이핑 효과 함수
function typeWriter(element, text, onComplete) {
    let i = 0;
    element.innerHTML = ""; // 기존 텍스트 삭제
    const cursor = element.nextElementSibling;
    if (cursor) cursor.style.display = 'inline-block';

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 30); // 타이핑 속도
        } else {
            if (cursor) cursor.style.display = 'none'; // 타이핑 완료 후 커서 숨김
            if (onComplete) onComplete(); // 완료 콜백 함수 실행
        }
    }
    typing();
}

// Gemini API 호출 함수 (!!! 중요 !!!)
async function getInterpretation(cardNames, question) {
    // 로딩 중임을 표시
    interpretationText.innerText = "AI가 카드를 해석하고 있습니다...";
    
    // 이 URL은 당신의 Serverless Function 주소로 바꿔야 합니다.
    const SERVERLESS_FUNCTION_URL = 'https://my-tarot-app-three.vercel.app/api/interpret'; 

    try {
        const response = await fetch(SERVERLESS_FUNCTION_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cardNames, question }),
        });

        if (!response.ok) {
            throw new Error(`API 요청 실패: ${response.status}`);
        }
        
        const data = await response.json();
        return data.interpretation;

    } catch (error) {
        console.error("API 호출 오류:", error);
        return "해석을 가져오는 데 실패했습니다. 잠시 후 다시 시도해주세요.";
    }
}


// --- 3. 이벤트 리스너 설정 ---

// 앱 시작
window.onload = resetApp;

// 메인 화면 -> 질문 선택
mainShuffleArea.addEventListener('click', () => showScreen('question-dialog'));

// 질문 선택 -> 질문 입력 또는 카드 선택
writeQuestionBtn.addEventListener('click', () => showScreen('focus-tarot-screen'));
mindQuestionBtn.addEventListener('click', () => {
    userQuestion = ""; // 질문 없음
    shuffleDeck();
    showScreen('card-select-screen');
});

// 질문 입력 -> 카드 선택
startFocusReadingBtn.addEventListener('click', () => {
    userQuestion = questionInput.value;
    if (userQuestion.trim() === "") {
        alert("질문을 입력해주세요.");
        return;
    }
    shuffleDeck();
    showScreen('card-select-screen');
});

// 카드 선택 로직
shuffleAnimationArea.addEventListener('click', () => {
    if (selectedCards.length < CARDS_TO_PICK) {
        const pickedCardIndex = deck.pop();
        selectedCards.push(pickedCardIndex);

        // 선택 효과음
        if(selectSound) selectSound.play();

        // 선택된 카드 미리보기 이미지 추가
        const previewImg = document.createElement('img');
        previewImg.src = tarotData[pickedCardIndex].img;
        selectedCardsPreview.appendChild(previewImg);

        updateCardsLeftText();

        // 4장 모두 선택했다면 결과 화면으로 이동
        if (selectedCards.length === CARDS_TO_PICK) {
            setTimeout(() => {
                showResultScreen();
            }, 1000); // 1초 대기 후 결과 표시
        }
    }
});

// 결과 화면 보여주기
async function showResultScreen() {
    showScreen('result-screen');
    // 로딩 표시
    interpretationText.innerText = "선택된 모든 카드의 해석을 준비 중입니다...";
    
    // 4장 카드에 대한 해석을 미리 모두 받아오기 (효율적)
    for(let i = 0; i < selectedCards.length; i++) {
        const cardIndex = selectedCards[i];
        const cardName = tarotData[cardIndex].name;
        // 각 카드별 해석 요청
        const interpretation = await getInterpretation([cardName], userQuestion);
        cardInterpretations.push(interpretation);
    }
    
    // 첫 번째 카드 결과부터 보여주기
    displayCardResult(0);
}

// 특정 인덱스의 카드 결과 표시
function displayCardResult(index) {
    currentResultIndex = index;
    const cardIndex = selectedCards[index];
    
    resultCardTitle.innerText = `${index + 1}번째 카드: ${tarotData[cardIndex].name}`;
    resultCardImage.src = tarotData[cardIndex].img;
    typeWriter(interpretationText, cardInterpretations[index]);

    // 버튼 상태 업데이트
    prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
    nextBtn.style.visibility = index === CARDS_TO_PICK - 1 ? 'hidden' : 'visible';
    summaryBtn.style.display = index === CARDS_TO_PICK - 1 ? 'inline-block' : 'none';
}

// 이전/다음/총정리/다시하기 버튼
prevBtn.addEventListener('click', () => {
    if (currentResultIndex > 0) {
        displayCardResult(currentResultIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentResultIndex < CARDS_TO_PICK - 1) {
        displayCardResult(currentResultIndex + 1);
    }
});

summaryBtn.addEventListener('click', async () => {
    resultCardTitle.innerText = "총정리";
    resultCardImage.style.display = 'none'; // 총정리에선 큰 카드 이미지 숨김

    const cardNames = selectedCards.map(index => tarotData[index].name);
    // 총정리용 해석 요청
    const summaryText = await getInterpretation(cardNames, userQuestion);
    typeWriter(interpretationText, summaryText);
    
    // 버튼 숨기기
    prevBtn.style.visibility = 'hidden';
    nextBtn.style.visibility = 'hidden';
    summaryBtn.style.display = 'none';
});

restartBtn.addEventListener('click', resetApp);