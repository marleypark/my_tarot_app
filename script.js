/* === 카드 데이터 === */
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
    { name: "매달린 남자", img: "images/메이저_아르카나/12. 행맨 카드.jpg" },
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
    { name: "펜타클 킹", img: "images/펜타클/펜타클 킹.jpg" }
];

// === i18n 설정 ===
const languageNameByCode = {
    kor: 'Korean',
    eng: 'English',
    can: 'Cantonese',
    vi: 'Vietnamese',
    id: 'Indonesian',
    chn: 'Mandarin Chinese',
    fr: 'French',
    es: 'Spanish'
};

const htmlLangByCode = {
    kor: 'ko',
    eng: 'en',
    can: 'yue',
    vi: 'vi',
    id: 'id',
    chn: 'zh',
    fr: 'fr',
    es: 'es'
};

let selectedLanguage = 'kor';

// --- 카드 명칭 현지화 설정 ---
const MAJOR_NAMES = {
    kor: [
        '바보','마법사','여사제','여황제','황제','교황','연인','전차','힘','은둔자','운명의 수레바퀴','정의','매달린 남자','죽음','절제','악마','탑','별','달','태양','심판','세계'
    ],
    eng: [
        'The Fool','The Magician','The High Priestess','The Empress','The Emperor','The Hierophant','The Lovers','The Chariot','Strength','The Hermit','Wheel of Fortune','Justice','The Hanged Man','Death','Temperance','The Devil','The Tower','The Star','The Moon','The Sun','Judgment','The World'
    ],
    can: [
        '愚者','魔法師','女祭司','皇后','皇帝','教皇','戀人','戰車','力量','隱者','命運之輪','正義','倒吊人','死神','節制','惡魔','塔','星星','月亮','太陽','審判','世界'
    ],
    vi: [
        'Kẻ Ngốc','Pháp Sư','Nữ Tư Tế','Hoàng Hậu','Hoàng Đế','Giáo Hoàng','Người Yêu','Chiến Xa','Sức Mạnh','Ẩn Sĩ','Bánh Xe Số Mệnh','Công Lý','Người Treo','Cái Chết','Tiết Chế','Ác Quỷ','Tháp','Ngôi Sao','Mặt Trăng','Mặt Trời','Phán Xét','Thế Giới'
    ],
    id: [
        'Si Bodoh','Penyihir','Imam Perempuan','Ratu','Kaisar','Paus','Kekasih','Kereta Perang','Kekuatan','Pertapa','Roda Nasib','Keadilan','Orang Tergantung','Kematian','Pengendalian Diri','Setan','Menara','Bintang','Bulan','Matahari','Penghakiman','Dunia'
    ],
    chn: [
        '愚者','魔术师','女祭司','皇后','皇帝','教皇','恋人','战车','力量','隐者','命运之轮','正义','倒吊人','死神','节制','恶魔','塔','星星','月亮','太阳','审判','世界'
    ],
    fr: [
        'Le Fou','Le Magicien','La Grande Prêtresse','L\'Impératrice','L\'Empereur','Le Pape','Les Amoureux','Le Chariot','La Force','L\'Ermite','La Roue de Fortune','La Justice','Le Pendu','La Mort','La Tempérance','Le Diable','La Tour','L\'Étoile','La Lune','Le Soleil','Le Jugement','Le Monde'
    ],
    es: [
        'El Loco','El Mago','La Sacerdotisa','La Emperatriz','El Emperador','El Hierofante','Los Enamorados','El Carro','La Fuerza','El Ermitaño','La Rueda de la Fortuna','La Justicia','El Colgado','La Muerte','La Templanza','El Diablo','La Torre','La Estrella','La Luna','El Sol','El Juicio','El Mundo'
    ]
};

const SUITS = ['wands','cups','swords','pentacles'];
const MINOR_RANKS = ['Ace','2','3','4','5','6','7','8','9','10','Page','Knight','Queen','King'];

const MINOR_LOCALIZATION = {
    kor: {
        wands: ['완드','완드','완드','완드','완드','완드','완드','완드','완드','완드','완드 페이지','완드 나이트','완드 퀸','완드 킹'],
        cups: ['컵','컵','컵','컵','컵','컵','컵','컵','컵','컵','컵 페이지','컵 나이트','컵 퀸','컵 킹'],
        swords: ['소드','소드','소드','소드','소드','소드','소드','소드','소드','소드','소드 페이지','소드 나이트','소드 퀸','소드 킹'],
        pentacles: ['펜타클','펜타클','펜타클','펜타클','펜타클','펜타클','펜타클','펜타클','펜타클','펜타클','펜타클 페이지','펜타클 나이트','펜타클 퀸','펜타클 킹']
    },
    eng: {
        wands: ['Wand','Wand','Wand','Wand','Wand','Wand','Wand','Wand','Wand','Wand','Wand Page','Wand Knight','Wand Queen','Wand King'],
        cups: ['Cup','Cup','Cup','Cup','Cup','Cup','Cup','Cup','Cup','Cup','Cup Page','Cup Knight','Cup Queen','Cup King'],
        swords: ['Sword','Sword','Sword','Sword','Sword','Sword','Sword','Sword','Sword','Sword','Sword Page','Sword Knight','Sword Queen','Sword King'],
        pentacles: ['Pentacle','Pentacle','Pentacle','Pentacle','Pentacle','Pentacle','Pentacle','Pentacle','Pentacle','Pentacle','Pentacle Page','Pentacle Knight','Pentacle Queen','Pentacle King']
    }
};

function getMinorName(lang, suitIndex, rankIndex) {
    const suit = SUITS[suitIndex];
    const rank = MINOR_RANKS[rankIndex];
    if (MINOR_LOCALIZATION[lang] && MINOR_LOCALIZATION[lang][suit]) {
        return MINOR_LOCALIZATION[lang][suit][rankIndex];
    }
    return `${suit} ${rank}`;
}

function getLocalizedCardNameByIndex(index, lang) {
    if (index < 22) {
        return MAJOR_NAMES[lang] ? MAJOR_NAMES[lang][index] : tarotData[index].name;
    } else {
        const minorIndex = index - 22;
        const suitIndex = Math.floor(minorIndex / 14);
        const rankIndex = minorIndex % 14;
        return getMinorName(lang, suitIndex, rankIndex);
    }
}

const UI_TEXTS = {
    kor: {
        preparingAll: '모든 카드의 해석을 준비하고 있습니다...',
        nthCardTitle: (n) => `${n}번째 카드`,
        summary: '총정리',
        actionPlan: '현실 조언'
    },
    eng: {
        preparingAll: 'Preparing interpretations for all cards...',
        nthCardTitle: (n) => `${n}th Card`,
        summary: 'Summary',
        actionPlan: 'Action Plan'
    }
};

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

function playButtonSound() {
    if (buttonSound) {
        buttonSound.currentTime = 0;
        buttonSound.play().catch(() => {});
    }
}

let userQuestion = "";
let selectedCards = [];
const CARDS_TO_PICK = 4;
let deck = [];
let cardInterpretations = []; // 각 카드의 해석 결과를 저장할 배열
let currentResultIndex = 0;

// --- 2. 핵심 함수들 ---

function applyTranslations() {
    // 언어 스위처 버튼 텍스트 업데이트
    if (langButton) {
        langButton.textContent = languageNameByCode[selectedLanguage];
    }
    
    // HTML lang 속성 업데이트
    document.documentElement.lang = htmlLangByCode[selectedLanguage];
}

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
    cardInterpretations = []; // 결과 데이터 초기화
    currentResultIndex = 0;
    selectedCardsPreview.innerHTML = '';
    questionInput.value = '';
    updateCardsLeftText();
    showScreen('main-screen');
    applyTranslations();
}

function shuffleDeck() {
    deck = [...Array(tarotData.length).keys()]; // 0 ~ 77번 카드 인덱스 배열 생성
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function updateCardsLeftText() {
    const cardsLeft = CARDS_TO_PICK - selectedCards.length;
    cardsLeftText.innerText = `남은 카드: ${cardsLeft}장`;
}

function typeWriter(element, text, onComplete) {
    // 기존 타이핑 애니메이션이 진행 중이면 중단
    if (element.typeWriterTimeout) {
        clearTimeout(element.typeWriterTimeout);
    }
    
    let i = 0;
    element.innerHTML = ""; // 기존 텍스트 삭제
    const cursor = element.nextElementSibling;
    if (cursor) cursor.style.display = 'inline-block';

    // HTML 태그를 제거하고 순수 텍스트만 사용
    const plainText = text.replace(/<[^>]*>/g, '');

    function typing() {
        if (i < plainText.length) {
            // textContent를 사용하여 HTML 파싱 방지
            element.textContent = plainText.substring(0, i + 1);
            i++;
            element.typeWriterTimeout = setTimeout(typing, 20); // 타이핑 속도 조정
        } else {
            if (cursor) cursor.style.display = 'none'; // 타이핑 완료 후 커서 숨김
            if (onComplete) onComplete(); // 완료 콜백 함수 실행
            element.typeWriterTimeout = null;
        }
    }
    typing();
}

// 개별 카드 해석을 가져오는 함수
async function getInterpretation(cardName, question) {
    const SERVERLESS_FUNCTION_URL = '/api/interpret';

    try {
        const response = await fetch(SERVERLESS_FUNCTION_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                cardNames: [cardName], 
                question: question, 
                language: selectedLanguage 
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API 응답 오류:', errorText);
            throw new Error(`API 요청 실패: ${response.status} - ${errorText}`);
        }
        
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("API 호출 오류:", error);
        // 테스트 데이터 반환
        return {
            interpretation: `이것은 ${cardName} 카드의 테스트 해석입니다.`,
            positiveKeywords: ['희망', '기회', '성장'],
            negativeKeywords: ['주의', '신중함']
        };
    }
}

// 현실 조언을 가져오는 함수
async function getActionPlan(cardNames, question, interpretations) {
    const SERVERLESS_FUNCTION_URL = '/api/action-plan';

    try {
        const response = await fetch(SERVERLESS_FUNCTION_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                cardNames, 
                question, 
                language: selectedLanguage,
                interpretations: interpretations.map(interp => interp.interpretation).join(' ')
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API 응답 오류:', errorText);
            throw new Error(`API 요청 실패: ${response.status} - ${errorText}`);
        }
        
        const data = await response.json();
        return data.actionPlan;

    } catch (error) {
        console.error("액션 플랜 API 호출 오류:", error);
        return '현실적인 조언: 이 테스트 데이터를 바탕으로 실제 상황에 적용할 수 있는 구체적인 행동 계획을 세워보세요.';
    }
}


// --- 3. 이벤트 리스너 설정 ---

window.onload = () => {
    // 언어 스위처 초기화
    if (langButton && langMenu) {
        // 언어 버튼 클릭 이벤트
        langButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = langMenu.style.display === 'block';
            langMenu.style.display = isOpen ? 'none' : 'block';
            langButton.setAttribute('aria-expanded', !isOpen);
        });
        
        // 언어 메뉴 항목 클릭 이벤트
        const langOptions = langMenu.querySelectorAll('li[data-lang]');
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                selectedLanguage = e.target.getAttribute('data-lang');
                langButton.textContent = languageNameByCode[selectedLanguage];
                langMenu.style.display = 'none';
                langButton.setAttribute('aria-expanded', 'false');
                applyTranslations();
            });
        });
        
        // 외부 클릭 시 메뉴 닫기
        document.addEventListener('click', (e) => {
            if (!langButton.contains(e.target) && !langMenu.contains(e.target)) {
                langMenu.style.display = 'none';
                langButton.setAttribute('aria-expanded', 'false');
            }
        });
        
        // 초기 언어 설정
        langButton.textContent = languageNameByCode[selectedLanguage];
    }
    
    resetApp();
};

mainShuffleArea.addEventListener('click', () => {
    // 카드 선택 사운드 재생
    if(selectSound) {
        selectSound.currentTime = 0; // 처음부터 재생
        selectSound.play().catch(e => console.log('사운드 재생 실패:', e));
    }
    showScreen('question-dialog');
});

writeQuestionBtn.addEventListener('click', () => { 
    playButtonSound(); 
    showScreen('focus-tarot-screen'); 
});

mindQuestionBtn.addEventListener('click', () => {
    userQuestion = ""; // 질문 없음
    shuffleDeck();
    showScreen('card-select-screen');
});

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
        if(selectSound) selectSound.play();
        const previewImg = document.createElement('img');
        previewImg.src = tarotData[pickedCardIndex].img;
        selectedCardsPreview.appendChild(previewImg);
        updateCardsLeftText();

        if (selectedCards.length === CARDS_TO_PICK) {
            setTimeout(() => {
                showResultScreen(); // 4장 선택 후 결과 화면 표시
            }, 1000);
        }
    }
});

// 결과 화면 보여주기 (각 카드별 개별 API 호출)
async function showResultScreen() {
    showScreen('result-screen');
    const t = UI_TEXTS[selectedLanguage];
    interpretationText.textContent = "선택된 모든 카드의 해석을 준비 중입니다...";
    keywordsArea.style.display = 'none';
    
    // 4장 카드에 대한 해석을 각각 받아오기
    for(let i = 0; i < selectedCards.length; i++) {
        const cardIndex = selectedCards[i];
        const cardName = getLocalizedCardNameByIndex(cardIndex, selectedLanguage);
        
        // 각 카드별 해석 요청
        const interpretation = await getInterpretation(cardName, userQuestion);
        cardInterpretations.push(interpretation);
    }
    
    // 첫 번째 카드 결과부터 보여주기
    displayCardResult(0);
}

// 저장된 데이터로 화면을 구성하는 함수
function displayCardResult(index) {
    console.log('displayCardResult 호출:', { index, cardInterpretations });
    
    if (!cardInterpretations || !cardInterpretations[index]) {
        console.error(`cardInterpretations[${index}]가 없습니다:`, cardInterpretations);
        return;
    }

    currentResultIndex = index;
    const cardResult = cardInterpretations[index];
    const cardIndex = selectedCards[index]; // 원본 카드 인덱스
    const t = UI_TEXTS[selectedLanguage];
    
    console.log('카드 결과 표시:', { cardResult, cardIndex });
    
    resultCardTitle.textContent = `${t.nthCardTitle(index + 1)}: ${getLocalizedCardNameByIndex(cardIndex, selectedLanguage)}`;
    resultCardImage.src = tarotData[cardIndex].img;
    resultCardImage.style.display = 'block';
    
    // 키워드 표시
    keywordsArea.innerHTML = ''; // 초기화
    if (cardResult.positiveKeywords || cardResult.negativeKeywords) {
        keywordsArea.style.display = 'block';
        if (cardResult.positiveKeywords && cardResult.positiveKeywords.length > 0) {
            const positiveHtml = `<div class="keyword-group"><span class="keyword-title">긍정:</span>${cardResult.positiveKeywords.map(k => `<span class="keyword positive">${k}</span>`).join('')}</div>`;
            keywordsArea.innerHTML += positiveHtml;
        }
        if (cardResult.negativeKeywords && cardResult.negativeKeywords.length > 0) {
             const negativeHtml = `<div class="keyword-group"><span class="keyword-title">주의:</span>${cardResult.negativeKeywords.map(k => `<span class="keyword negative">${k}</span>`).join('')}</div>`;
            keywordsArea.innerHTML += negativeHtml;
        }
    } else {
        keywordsArea.style.display = 'none';
    }

    typeWriter(interpretationText, cardResult.interpretation);

    // 버튼 상태 업데이트
    prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
    nextBtn.style.visibility = index === CARDS_TO_PICK - 1 ? 'hidden' : 'visible';
    summaryBtn.style.display = index === CARDS_TO_PICK - 1 ? 'inline-block' : 'none';
    actionPlanBtn.style.display = 'none'; // 개별 카드 볼 때는 숨김
}

// 이전/다음 버튼
prevBtn.addEventListener('click', () => { 
    if (currentResultIndex > 0) { 
        displayCardResult(currentResultIndex - 1); 
        playButtonSound(); 
    } 
});

nextBtn.addEventListener('click', () => { 
    if (currentResultIndex < CARDS_TO_PICK - 1) { 
        displayCardResult(currentResultIndex + 1); 
        playButtonSound(); 
    } 
});

// 총정리 버튼: 모든 카드 해석을 종합하여 표시
summaryBtn.addEventListener('click', async () => {
    const t = UI_TEXTS[selectedLanguage];
    resultCardTitle.textContent = t.summary;
    resultCardImage.style.display = 'none';
    keywordsArea.style.display = 'none';
    
    // 모든 카드 해석을 종합한 텍스트 생성
    const summaryText = cardInterpretations.map((interp, index) => 
        `${index + 1}번째 카드: ${interp.interpretation}`
    ).join('\n\n');
    
    typeWriter(interpretationText, summaryText, () => {
        actionPlanBtn.style.display = 'inline-block'; // 총정리 후 현실 조언 버튼 표시
    });
    
    prevBtn.style.visibility = 'hidden';
    nextBtn.style.visibility = 'hidden';
    summaryBtn.style.display = 'none';
    playButtonSound();
});

// 현실 조언 버튼: 별도 API 호출로 구체적인 액션 플랜 생성
actionPlanBtn.addEventListener('click', async () => {
    const t = UI_TEXTS[selectedLanguage];
    resultCardTitle.textContent = t.actionPlan;
    
    // 로딩 표시
    interpretationText.textContent = "현실적인 조언을 준비하고 있습니다...";
    
    // 카드 이름들 가져오기
    const cardNames = selectedCards.map(index => getLocalizedCardNameByIndex(index, selectedLanguage));
    
    // 현실 조언 API 호출
    const actionPlan = await getActionPlan(cardNames, userQuestion, cardInterpretations);
    
    typeWriter(interpretationText, actionPlan);
    
    actionPlanBtn.style.display = 'none'; // 한번 보면 숨김
    playButtonSound();
});

restartBtn.addEventListener('click', () => { 
    playButtonSound(); 
    resetApp(); 
});