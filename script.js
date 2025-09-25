// script.js 파일의 전체 내용

/* === 카드 데이터 및 i18n 설정 (기존과 동일) === */
const tarotData = [
    // ... (기존 78장 카드 데이터 생략) ...
];
const languageNameByCode = { kor: 'Korean', eng: 'English', can: 'Cantonese', vi: 'Vietnamese', id: 'Indonesian', chn: 'Mandarin Chinese', fr: 'French', es: 'Spanish' };
const htmlLangByCode = { kor: 'ko', eng: 'en', can: 'yue', vi: 'vi', id: 'id', chn: 'zh', fr: 'fr', es: 'es' };
let selectedLanguage = 'kor';
const MAJOR_NAMES = { /* ... 기존 데이터 생략 ... */ };
const SUITS = ['wands','cups','swords','pentacles'];
const MINOR_RANKS = ['Ace','2','3','4','5','6','7','8','9','10','Page','Knight','Queen','King'];
const MINOR_LOCALIZATION = { /* ... 기존 데이터 생략 ... */ };
function getMinorName(lang, suitIndex, rankIndex) { /* ... 기존 로직 생략 ... */ }
function getLocalizedCardNameByIndex(index, lang) { /* ... 기존 로직 생략 ... */ }
const UI_TEXTS = { /* ... 기존 데이터 생략 ... */ };
/* ============================================== */


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
const keywordsArea = document.getElementById('keywords-area'); // 키워드 영역 추가
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const summaryBtn = document.getElementById('summary-btn');
const actionPlanBtn = document.getElementById('action-plan-btn'); // 현실 조언 버튼 추가
const restartBtn = document.getElementById('restart-btn');
const selectSound = document.getElementById('select-sound');
const buttonSound = document.getElementById('button-sound');
const langButton = document.getElementById('lang-button');
const langMenu = document.getElementById('lang-menu');
const langSwitcher = document.getElementById('lang-switcher');

function playButtonSound() { if (buttonSound) { buttonSound.currentTime = 0; buttonSound.play().catch(() => {}); } }

let userQuestion = "";
let selectedCards = [];
const CARDS_TO_PICK = 4;
let deck = [];
let fullResultData = null; // 👇 모든 해석 결과를 저장할 단일 변수
let currentResultIndex = 0;

// --- 2. 핵심 함수들 ---

function applyTranslations() { /* ... 기존 로직 생략 ... */ }
function showScreen(screenId) { /* ... 기존 로직 생략 ... */ }

// 초기화 함수
function resetApp() {
    userQuestion = "";
    selectedCards = [];
    fullResultData = null; // 결과 데이터 초기화
    currentResultIndex = 0;
    selectedCardsPreview.innerHTML = '';
    questionInput.value = '';
    updateCardsLeftText();
    showScreen('main-screen');
    applyTranslations();
}

function shuffleDeck() { /* ... 기존 로직 생략 ... */ }
function updateCardsLeftText() { /* ... 기존 로직 생략 ... */ }
function typeWriter(element, text, onComplete) { /* ... 기존 로직 생략 ... */ }

// 👇 [대규모 변경] 단 한번의 API 호출로 모든 데이터를 가져오는 함수
async function fetchAllInterpretations() {
    const t = UI_TEXTS[selectedLanguage];
    interpretationText.textContent = t.preparingAll;
    keywordsArea.style.display = 'none';
    
    const cardNames = selectedCards.map(index => getLocalizedCardNameByIndex(index, selectedLanguage));
    const SERVERLESS_FUNCTION_URL = '/api/interpret';

    try {
        const response = await fetch(SERVERLESS_FUNCTION_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cardNames, question: userQuestion, language: selectedLanguage }),
        });

        if (!response.ok) throw new Error(`API 요청 실패: ${response.status}`);
        
        fullResultData = await response.json(); // 모든 결과(JSON)를 변수에 저장
        
        // 첫 번째 카드 결과부터 보여주기
        displayCardResult(0);

    } catch (error) {
        console.error("API 호출 및 데이터 처리 오류:", error);
        interpretationText.textContent = "해석을 가져오는 데 실패했습니다. 잠시 후 다시 시도해주세요.";
    }
}

// --- 3. 이벤트 리스너 설정 ---

window.onload = () => { /* ... 기존 언어 스위처 로직 생략 ... */ resetApp(); };
mainShuffleArea.addEventListener('click', () => { /* ... 기존 로직 생략 ... */ });
writeQuestionBtn.addEventListener('click', () => { playButtonSound(); showScreen('focus-tarot-screen'); });
mindQuestionBtn.addEventListener('click', () => { /* ... 기존 로직 생략 ... */ });
startFocusReadingBtn.addEventListener('click', () => { /* ... 기존 로직 생략 ... */ });

// 카드 선택 로직
shuffleAnimationArea.addEventListener('click', () => {
    if (selectedCards.length < CARDS_TO_PICK) {
        const pickedCardIndex = deck.pop();
        selectedCards.push(pickedCardIndex);
        if(selectSound) selectSound.play();
        const previewImg = document.createElement('img');
        previewImg.src = tarotData[pickedCardIndex].img;
        selectedCardsPreview.appendChild(previewImg);
        updateCardsLeftText();

        if (selectedCards.length === CARDS_TO_PICK) {
            setTimeout(() => {
                showScreen('result-screen');
                fetchAllInterpretations(); // 👇 4장 선택 후 API 딱 한번 호출!
            }, 1000);
        }
    }
});


// 👇 [대규모 변경] 저장된 데이터로 화면을 구성하는 함수
function displayCardResult(index) {
    if (!fullResultData || !fullResultData.interpretations) return;

    currentResultIndex = index;
    const cardResult = fullResultData.interpretations[index];
    const cardIndex = selectedCards[index]; // 원본 카드 인덱스
    const t = UI_TEXTS[selectedLanguage];
    
    resultCardTitle.textContent = `${t.nthCardTitle(index + 1)}: ${cardResult.cardName}`;
    resultCardImage.src = tarotData[cardIndex].img;
    resultCardImage.style.display = 'block';
    
    // 키워드 표시
    keywordsArea.innerHTML = ''; // 초기화
    if (cardResult.positiveKeywords || cardResult.negativeKeywords) {
        keywordsArea.style.display = 'block';
        if (cardResult.positiveKeywords) {
            const positiveHtml = `<div class="keyword-group"><span class="keyword-title">긍정:</span>${cardResult.positiveKeywords.map(k => `<span class="keyword positive">${k}</span>`).join('')}</div>`;
            keywordsArea.innerHTML += positiveHtml;
        }
        if (cardResult.negativeKeywords) {
             const negativeHtml = `<div class="keyword-group"><span class="keyword-title">주의:</span>${cardResult.negativeKeywords.map(k => `<span class="keyword negative">${k}</span>`).join('')}</div>`;
            keywordsArea.innerHTML += negativeHtml;
        }
    } else {
        keywordsArea.style.display = 'none';
    }

    typeWriter(interpretationText, cardResult.fullInterpretation);

    // 버튼 상태 업데이트
    prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
    nextBtn.style.visibility = index === CARDS_TO_PICK - 1 ? 'hidden' : 'visible';
    summaryBtn.style.display = index === CARDS_TO_PICK - 1 ? 'inline-block' : 'none';
    actionPlanBtn.style.display = 'none'; // 개별 카드 볼 때는 숨김
}

// 이전/다음 버튼 (기존과 거의 동일)
prevBtn.addEventListener('click', () => { if (currentResultIndex > 0) { displayCardResult(currentResultIndex - 1); playButtonSound(); } });
nextBtn.addEventListener('click', () => { if (currentResultIndex < CARDS_TO_PICK - 1) { displayCardResult(currentResultIndex + 1); playButtonSound(); } });

// 👇 [변경] 총정리 버튼: API 호출 없이 저장된 데이터 사용
summaryBtn.addEventListener('click', () => {
    if (!fullResultData || !fullResultData.summary) return;
    const t = UI_TEXTS[selectedLanguage];
    resultCardTitle.textContent = t.summary;
    resultCardImage.style.display = 'none';
    keywordsArea.style.display = 'none';
    
    typeWriter(interpretationText, fullResultData.summary, () => {
        actionPlanBtn.style.display = 'inline-block'; // 총정리 후 현실 조언 버튼 표시
    });
    
    prevBtn.style.visibility = 'hidden';
    nextBtn.style.visibility = 'hidden';
    summaryBtn.style.display = 'none';
    playButtonSound();
});

// 👇 [신규] 현실 조언 버튼: API 호출 없이 저장된 데이터 사용
actionPlanBtn.addEventListener('click', () => {
    if (!fullResultData || !fullResultData.actionPlan) return;
    resultCardTitle.textContent = '현실 조언'; // 이 부분도 다국어 처리 가능
    
    typeWriter(interpretationText, fullResultData.actionPlan);
    
    actionPlanBtn.style.display = 'none'; // 한번 보면 숨김
    playButtonSound();
});

restartBtn.addEventListener('click', () => { playButtonSound(); resetApp(); });