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
    chn: [
        '愚者','魔术师','女祭司','女皇','皇帝','教皇','恋人','战车','力量','隐者','命运之轮','正义','倒吊人','死神','节制','恶魔','高塔','星星','月亮','太阳','审判','世界'
    ],
    can: [
        '愚者','魔術師','女祭司','女皇','皇帝','教皇','戀人','戰車','力量','隱者','命運之輪','正義','倒吊人','死神','節制','惡魔','高塔','星星','月亮','太陽','審判','世界'
    ],
    fr: [
        'Le Mat','Le Magicien','La Papesse','L’Impératrice','L’Empereur','Le Pape','Les Amoureux','Le Chariot','La Force','L’Hermite','La Roue de Fortune','La Justice','Le Pendu','La Mort','Tempérance','Le Diable','La Tour','L’Étoile','La Lune','Le Soleil','Le Jugement','Le Monde'
    ],
    es: [
        'El Loco','El Mago','La Sacerdotisa','La Emperatriz','El Emperador','El Hierofante','Los Enamorados','El Carro','La Fuerza','El Ermitaño','La Rueda de la Fortuna','La Justicia','El Colgado','La Muerte','La Templanza','El Diablo','La Torre','La Estrella','La Luna','El Sol','El Juicio','El Mundo'
    ],
    vi: [
        'Kẻ Khờ','Pháp Sư','Nữ Tư Tế','Nữ Hoàng','Hoàng Đế','Giáo Hoàng','Những Người Yêu','Cỗ Xe','Sức Mạnh','Ẩn Sĩ','Bánh Xe Số Phận','Công Lý','Người Treo Ngược','Cái Chết','Tiết Độ','Ác Quỷ','Tòa Tháp','Ngôi Sao','Mặt Trăng','Mặt Trời','Phán Xét','Thế Giới'
    ],
    id: [
        'Si Dungu','Sang Penyihir','Imam Besar','Permaisuri','Kaisar','Hierofan','Para Pecinta','Kereta Perang','Kekuatan','Pertapa','Roda Keberuntungan','Keadilan','Orang Tergantung','Kematian','Kesederhanaan','Iblis','Menara','Bintang','Bulan','Matahari','Pengadilan','Dunia'
    ]
};

const SUITS = ['wands','cups','swords','pentacles'];
const MINOR_RANKS = ['Ace','2','3','4','5','6','7','8','9','10','Page','Knight','Queen','King'];

const MINOR_LOCALIZATION = {
    eng: {
        suit: { wands: 'Wands', cups: 'Cups', swords: 'Swords', pentacles: 'Pentacles' },
        rank: { Ace: 'Ace', Page: 'Page', Knight: 'Knight', Queen: 'Queen', King: 'King' },
        of: ' of '
    },
    fr: {
        suit: { wands: 'Bâtons', cups: 'Coupes', swords: 'Épées', pentacles: 'Deniers' },
        rank: { Ace: 'As', Page: 'Valet', Knight: 'Cavalier', Queen: 'Reine', King: 'Roi' },
        numbers: ['As','Deux','Trois','Quatre','Cinq','Six','Sept','Huit','Neuf','Dix'],
        of: ' de '
    },
    es: {
        suit: { wands: 'Bastos', cups: 'Copas', swords: 'Espadas', pentacles: 'Oros' },
        rank: { Ace: 'As', Page: 'Sota', Knight: 'Caballero', Queen: 'Reina', King: 'Rey' },
        numbers: ['As','Dos','Tres','Cuatro','Cinco','Seis','Siete','Ocho','Nueve','Diez'],
        of: ' de '
    },
    chn: {
        suit: { wands: '权杖', cups: '圣杯', swords: '宝剑', pentacles: '钱币' },
        rank: { Ace: '首牌', Page: '侍者', Knight: '骑士', Queen: '皇后', King: '国王' },
        format: '{suit}{num}'
    },
    can: {
        suit: { wands: '權杖', cups: '聖杯', swords: '寶劍', pentacles: '錢幣' },
        rank: { Ace: '首牌', Page: '侍者', Knight: '騎士', Queen: '皇后', King: '國王' },
        format: '{suit}{num}'
    },
    vi: {
        suit: { wands: 'Gậy', cups: 'Cốc', swords: 'Kiếm', pentacles: 'Tiền' },
        rank: { Ace: 'Át', Page: 'Tiểu Đồng', Knight: 'Kỵ Sĩ', Queen: 'Nữ Hoàng', King: 'Vua' },
        numbers: ['Át','Hai','Ba','Bốn','Năm','Sáu','Bảy','Tám','Chín','Mười'],
        of: ' '
    },
    id: {
        suit: { wands: 'Tongkat', cups: 'Piala', swords: 'Pedang', pentacles: 'Koin' },
        rank: { Ace: 'As', Page: 'Pajem', Knight: 'Ksatria', Queen: 'Ratu', King: 'Raja' },
        numbers: ['As','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan','Sepuluh'],
        of: ' '
    },
    kor: {
        suit: { wands: '완드', cups: '컵', swords: '소드', pentacles: '펜타클' },
        rank: { Ace: '에이스', Page: '페이지', Knight: '나이트', Queen: '퀸', King: '킹' },
        numbers: ['에이스','2','3','4','5','6','7','8','9','10'],
        of: ' '
    }
};

function getMinorName(lang, suitIndex, rankIndex) {
    const cfg = MINOR_LOCALIZATION[lang] || MINOR_LOCALIZATION.eng;
    const suitKey = SUITS[suitIndex];
    const suitName = cfg.suit[suitKey];
    if (rankIndex <= 9) {
        const numText = cfg.numbers ? cfg.numbers[rankIndex] : MINOR_RANKS[rankIndex];
        if (cfg.format) return cfg.format.replace('{suit}', suitName).replace('{num}', ['首牌','二','三','四','五','六','七','八','九','十'][rankIndex]);
        return `${numText}${cfg.of}${suitName}`;
    }
    const rankMap = ['Ace',null,null,null,null,null,null,null,null,null,'Page','Knight','Queen','King'];
    const rankKey = rankMap[rankIndex];
    const rankName = cfg.rank[rankKey];
    if (cfg.format) return `${suitName}${rankName}`;
    return `${rankName}${cfg.of}${suitName}`;
}

function getLocalizedCardNameByIndex(index, lang) {
    if (index < 22) {
        const list = MAJOR_NAMES[lang] || MAJOR_NAMES.eng;
        return list[index];
    }
    const minorIndex = index - 22;
    const suitIndex = Math.floor(minorIndex / 14); // 0..3
    const rankIndex = minorIndex % 14; // 0..13 (Ace..King)
    return getMinorName(lang, suitIndex, rankIndex);
}

// === UI 텍스트 i18n ===
const UI_TEXTS = {
    kor: {
        appTitle: 'ASK ANYTHING',
        subtitle: '(created by Parkmarley)',
        clickToStart: '카드를 클릭하여 시작하세요',
        questionDialogTitle: '1일 1질문만 가능. 신중히 선택.',
        writeQuestionBtn: '질문을 글로 적기 (포커스 타로)',
        mindQuestionBtn: '마음속으로 생각하기 (오픈 타로)',
        focusPrompt: '당신의 질문을 입력해주세요.',
        questionPlaceholder: '예) 저의 연애운은 어떻게 될까요?',
        startFocusButton: '질문 완료하고 카드 뽑기',
        selectInstruction: (n) => `${n}장의 카드를 선택하세요.`,
        cardsLeft: (left) => `남은 카드: ${left}장`,
        preparingAll: '선택된 모든 카드의 해석을 준비 중입니다...',
        aiLoading: '해석하는중...',
        nthCardTitle: (n) => `${n}번째 카드`,
        prev: '이전',
        next: '다음',
        summary: '총정리 보기',
        restart: '처음으로',
        enterQuestionAlert: '질문을 입력해주세요.'
    },
    eng: {
        appTitle: 'ASK ANYTHING',
        subtitle: '(created by Parkmarley)',
        clickToStart: 'Click the card to begin',
        questionDialogTitle: 'Only 1 question per day. Choose carefully.',
        writeQuestionBtn: 'Type your question (Focus Tarot)',
        mindQuestionBtn: 'Think in your mind (Open Tarot)',
        focusPrompt: 'Please enter your question.',
        questionPlaceholder: 'e.g., How will my love life be?',
        startFocusButton: 'Done typing — draw cards',
        selectInstruction: (n) => `Select ${n} cards.`,
        cardsLeft: (left) => `Cards left: ${left}`,
        preparingAll: 'Preparing interpretations for all selected cards...',
        aiLoading: 'Interpreting...',
        nthCardTitle: (n) => `${n}${n===1?'st':n===2?'nd':n===3?'rd':'th'} card`,
        prev: 'Previous',
        next: 'Next',
        summary: 'View Summary',
        restart: 'Restart',
        enterQuestionAlert: 'Please enter your question.'
    },
    can: {
        appTitle: 'ASK ANYTHING',
        subtitle: '(created by Parkmarley)',
        clickToStart: '撳卡開始',
        questionDialogTitle: '每日只可問1條。請謹慎選擇。',
        writeQuestionBtn: '打字發問（專注塔羅）',
        mindQuestionBtn: '心入面諗（開放塔羅）',
        focusPrompt: '請輸入你嘅問題。',
        questionPlaceholder: '例如：我嘅感情運點樣？',
        startFocusButton: '完成輸入 — 抽牌',
        selectInstruction: (n) => `請揀 ${n} 張牌。`,
        cardsLeft: (left) => `仲有：${left} 張`,
        preparingAll: '緊準備所有所揀牌嘅解讀…',
        aiLoading: '解讀中...',
        nthCardTitle: (n) => `第 ${n} 張牌`,
        prev: '上一張',
        next: '下一張',
        summary: '總結',
        restart: '重新開始',
        enterQuestionAlert: '請輸入你的問題。'
    },
    vi: {
        appTitle: 'ASK ANYTHING',
        subtitle: '(created by Parkmarley)',
        clickToStart: 'Nhấp vào lá bài để bắt đầu',
        questionDialogTitle: 'Chỉ 1 câu hỏi mỗi ngày. Hãy chọn cẩn thận.',
        writeQuestionBtn: 'Gõ câu hỏi (Tarot Tập trung)',
        mindQuestionBtn: 'Nghĩ trong đầu (Tarot Mở)',
        focusPrompt: 'Vui lòng nhập câu hỏi của bạn.',
        questionPlaceholder: 'VD: Chuyện tình cảm của tôi sẽ thế nào?',
        startFocusButton: 'Xong — rút bài',
        selectInstruction: (n) => `Hãy chọn ${n} lá.`,
        cardsLeft: (left) => `Còn lại: ${left} lá`,
        preparingAll: 'Đang chuẩn bị diễn giải cho tất cả lá đã chọn...',
        aiLoading: 'Đang diễn giải...',
        nthCardTitle: (n) => `Lá thứ ${n}`,
        prev: 'Trước',
        next: 'Sau',
        summary: 'Xem Tổng kết',
        restart: 'Khởi động lại',
        enterQuestionAlert: 'Vui lòng nhập câu hỏi.'
    },
    id: {
        appTitle: 'ASK ANYTHING',
        subtitle: '(created by Parkmarley)',
        clickToStart: 'Klik kartu untuk mulai',
        questionDialogTitle: 'Hanya 1 pertanyaan per hari. Pilih dengan saksama.',
        writeQuestionBtn: 'Ketik pertanyaan (Tarot Fokus)',
        mindQuestionBtn: 'Pikirkan dalam hati (Tarot Terbuka)',
        focusPrompt: 'Silakan masukkan pertanyaan Anda.',
        questionPlaceholder: 'contoh: Bagaimana asmara saya?',
        startFocusButton: 'Selesai — ambil kartu',
        selectInstruction: (n) => `Pilih ${n} kartu.`,
        cardsLeft: (left) => `Sisa kartu: ${left}`,
        preparingAll: 'Menyiapkan interpretasi untuk semua kartu terpilih...',
        aiLoading: 'Sedang menafsirkan...',
        nthCardTitle: (n) => `Kartu ke-${n}`,
        prev: 'Sebelumnya',
        next: 'Berikutnya',
        summary: 'Lihat Ringkasan',
        restart: 'Mulai lagi',
        enterQuestionAlert: 'Silakan masukkan pertanyaan.'
    },
    chn: {
        appTitle: 'ASK ANYTHING',
        subtitle: '(created by Parkmarley)',
        clickToStart: '点击卡片开始',
        questionDialogTitle: '每天仅限1个问题。请慎重选择。',
        writeQuestionBtn: '输入问题（专注塔罗）',
        mindQuestionBtn: '在心里思考（开放塔罗）',
        focusPrompt: '请输入你的问题。',
        questionPlaceholder: '例如：我的感情运势如何？',
        startFocusButton: '完成输入 — 抽牌',
        selectInstruction: (n) => `请选择 ${n} 张牌。`,
        cardsLeft: (left) => `剩余：${left} 张`,
        preparingAll: '正在为所有选中的牌准备解读…',
        aiLoading: '解读中...',
        nthCardTitle: (n) => `第 ${n} 张牌`,
        prev: '上一张',
        next: '下一张',
        summary: '查看总结',
        restart: '重新开始',
        enterQuestionAlert: '请输入你的问题。'
    },
    fr: {
        appTitle: 'ASK ANYTHING',
        subtitle: '(created by Parkmarley)',
        clickToStart: 'Cliquez sur la carte pour commencer',
        questionDialogTitle: '1 question par jour. Choisissez avec soin.',
        writeQuestionBtn: 'Écrire votre question (Tarot Focalisé)',
        mindQuestionBtn: 'Penser intérieurement (Tarot Ouvert)',
        focusPrompt: 'Veuillez saisir votre question.',
        questionPlaceholder: 'ex : Comment sera ma vie amoureuse ?',
        startFocusButton: 'Terminer — tirer les cartes',
        selectInstruction: (n) => `Sélectionnez ${n} cartes.`,
        cardsLeft: (left) => `Cartes restantes : ${left}`,
        preparingAll: 'Préparation des interprétations pour toutes les cartes sélectionnées...',
        aiLoading: 'Interprétation en cours...',
        nthCardTitle: (n) => `${n}ᵉ carte`,
        prev: 'Précédent',
        next: 'Suivant',
        summary: 'Voir le résumé',
        restart: 'Recommencer',
        enterQuestionAlert: 'Veuillez saisir votre question.'
    },
    es: {
        appTitle: 'ASK ANYTHING',
        subtitle: '(created by Parkmarley)',
        clickToStart: 'Haz clic en la carta para comenzar',
        questionDialogTitle: 'Solo 1 pregunta por día. Elige con cuidado.',
        writeQuestionBtn: 'Escribe tu pregunta (Tarot Enfoque)',
        mindQuestionBtn: 'Piensa en tu mente (Tarot Abierto)',
        focusPrompt: 'Por favor, ingresa tu pregunta.',
        questionPlaceholder: 'ej.: ¿Cómo será mi vida amorosa?',
        startFocusButton: 'Listo — sacar cartas',
        selectInstruction: (n) => `Selecciona ${n} cartas.`,
        cardsLeft: (left) => `Cartas restantes: ${left}`,
        preparingAll: 'Preparando interpretaciones para todas las cartas seleccionadas...',
        aiLoading: 'Interpretando...',
        nthCardTitle: (n) => `Carta ${n}`,
        prev: 'Anterior',
        next: 'Siguiente',
        summary: 'Ver Resumen',
        restart: 'Reiniciar',
        enterQuestionAlert: 'Por favor, ingresa tu pregunta.'
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
<<<<<<< HEAD
=======
// 언어 스위처 요소
>>>>>>> deb00b55daa256f83616c0b0a97b17b262c2cc0c
const langButton = document.getElementById('lang-button');
const langMenu = document.getElementById('lang-menu');
const langSwitcher = document.getElementById('lang-switcher');

<<<<<<< HEAD
function playButtonSound() { if (buttonSound) { buttonSound.currentTime = 0; buttonSound.play().catch(() => {}); } }
=======
function playButtonSound() {
    if (buttonSound) {
        buttonSound.currentTime = 0;
        buttonSound.play().catch(() => {});
    }
}
>>>>>>> deb00b55daa256f83616c0b0a97b17b262c2cc0c

let userQuestion = "";
let selectedCards = [];
const CARDS_TO_PICK = 4;
let deck = [];
let fullResultData = null; // 👇 모든 해석 결과를 저장할 단일 변수
let currentResultIndex = 0;

const REUSE_LOCK_MS = 60 * 1000; // 1분 재사용 제한

function cacheKey(cardIndexes, question, lang) {
    return `cache:v1:${lang}:${cardIndexes.join('-')}:${(question||'').trim()}`;
}
function getCache() { return null; }
function setCache() { /* no-op after revert */ }
function setReuseLock() {
    try { localStorage.setItem('reuse_lock_ts', String(Date.now())); } catch (_) {}
}
function getReuseLockRemainingMs() {
    try {
        const ts = Number(localStorage.getItem('reuse_lock_ts')) || 0;
        const elapsed = Date.now() - ts;
        const remain = REUSE_LOCK_MS - elapsed;
        return remain > 0 ? remain : 0;
    } catch (_) { return 0; }
}

// --- i18n 적용 함수 ---
function applyTranslations() {
    const t = UI_TEXTS[selectedLanguage];
    // html lang
    document.documentElement.setAttribute('lang', htmlLangByCode[selectedLanguage] || 'en');
    // 메인 화면
    const mainTitle = document.querySelector('#main-screen h1');
    const mainSub = document.querySelector('#main-screen p');
    const clickGuide = document.querySelector('#main-shuffle-area p');
    if (mainTitle) mainTitle.textContent = t.appTitle;
    if (mainSub) mainSub.textContent = t.subtitle;
    if (clickGuide) clickGuide.textContent = t.clickToStart;
    // 질문 선택 화면
    const qTitle = document.querySelector('#question-dialog h2');
    if (qTitle) qTitle.textContent = t.questionDialogTitle;
    if (writeQuestionBtn) writeQuestionBtn.textContent = t.writeQuestionBtn;
    if (mindQuestionBtn) mindQuestionBtn.textContent = t.mindQuestionBtn;
    // 질문 입력 화면
    const focusTitle = document.querySelector('#focus-tarot-screen h2');
    if (focusTitle) focusTitle.textContent = t.focusPrompt;
    if (questionInput) questionInput.placeholder = t.questionPlaceholder;
    if (startFocusReadingBtn) startFocusReadingBtn.textContent = t.startFocusButton;
    // 카드 선택 화면
    const selectInstruction = document.getElementById('select-instruction');
    if (selectInstruction) selectInstruction.textContent = t.selectInstruction(CARDS_TO_PICK);
    updateCardsLeftText();
    // 결과 화면 버튼
    if (prevBtn) prevBtn.textContent = t.prev;
    if (nextBtn) nextBtn.textContent = t.next;
    if (summaryBtn) summaryBtn.textContent = t.summary;
    if (restartBtn) restartBtn.textContent = t.restart;
}

// --- 2. 핵심 함수들 ---

<<<<<<< HEAD
function applyTranslations() { /* ... 기존 로직 생략 ... */ }
function showScreen(screenId) { /* ... 기존 로직 생략 ... */ }
=======
// 화면 전환 함수
function showScreen(screenId) {
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    // 언어 스위처는 메인 화면에서만 노출
    if (langSwitcher) {
        langSwitcher.style.display = screenId === 'main-screen' ? 'block' : 'none';
        if (screenId !== 'main-screen' && langMenu) {
            langMenu.classList.remove('show');
            if (langButton) langButton.setAttribute('aria-expanded', 'false');
        }
    }
}
>>>>>>> deb00b55daa256f83616c0b0a97b17b262c2cc0c

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

<<<<<<< HEAD
// 👇 [대규모 변경] 단 한번의 API 호출로 모든 데이터를 가져오는 함수
async function fetchAllInterpretations() {
    const t = UI_TEXTS[selectedLanguage];
    interpretationText.textContent = t.preparingAll;
    keywordsArea.style.display = 'none';
    
    const cardNames = selectedCards.map(index => getLocalizedCardNameByIndex(index, selectedLanguage));
=======
// 남은 카드 개수 텍스트 업데이트
function updateCardsLeftText() {
    const cardsLeft = CARDS_TO_PICK - selectedCards.length;
    const t = UI_TEXTS[selectedLanguage];
    cardsLeftText.innerText = t.cardsLeft(cardsLeft);
}

// 개선된 타이핑 효과 함수 (HTML 안전)
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

// Gemini API 호출 함수 (!!! 중요 !!!)
async function getInterpretation(cardNames, question) {
    // 로딩 중임을 표시
    interpretationText.textContent = UI_TEXTS[selectedLanguage].aiLoading;
    
    // 실제 배포된 URL 사용
>>>>>>> deb00b55daa256f83616c0b0a97b17b262c2cc0c
    const SERVERLESS_FUNCTION_URL = '/api/interpret';

    try {
        const response = await fetch(SERVERLESS_FUNCTION_URL, {
            method: 'POST',
<<<<<<< HEAD
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cardNames, question: userQuestion, language: selectedLanguage }),
=======
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cardNames, question, language: selectedLanguage }),
>>>>>>> deb00b55daa256f83616c0b0a97b17b262c2cc0c
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

<<<<<<< HEAD
window.onload = () => { /* ... 기존 언어 스위처 로직 생략 ... */ resetApp(); };
mainShuffleArea.addEventListener('click', () => { /* ... 기존 로직 생략 ... */ });
writeQuestionBtn.addEventListener('click', () => { playButtonSound(); showScreen('focus-tarot-screen'); });
mindQuestionBtn.addEventListener('click', () => { /* ... 기존 로직 생략 ... */ });
startFocusReadingBtn.addEventListener('click', () => { /* ... 기존 로직 생략 ... */ });
=======
// 앱 시작
window.onload = () => {
    // 언어 스위처 세팅
    if (langButton && langMenu) {
        langButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const expanded = langButton.getAttribute('aria-expanded') === 'true';
            langButton.setAttribute('aria-expanded', String(!expanded));
            langMenu.classList.toggle('show');
            playButtonSound();
        });
        langMenu.querySelectorAll('li[data-lang]').forEach((item) => {
            item.addEventListener('click', (e) => {
                const code = item.getAttribute('data-lang');
                if (code && UI_TEXTS[code]) {
                    selectedLanguage = code;
                    langMenu.classList.remove('show');
                    langButton.setAttribute('aria-expanded', 'false');
                    applyTranslations();
                    playButtonSound();
                }
            });
        });
        document.addEventListener('click', () => {
            if (langMenu.classList.contains('show')) {
                langMenu.classList.remove('show');
                langButton.setAttribute('aria-expanded', 'false');
            }
        });
    }
    resetApp();
};

// 메인 화면 -> 질문 선택 (사운드 추가)
mainShuffleArea.addEventListener('click', () => {
    const remain = getReuseLockRemainingMs();
    if (remain > 0) {
        const sec = Math.ceil(remain/1000);
        alert(`1분 뒤에 재사용 가능 (${sec}초 남음)`);
        return;
    }
    // 카드 선택 사운드 재생
    if(selectSound) {
        selectSound.currentTime = 0; // 처음부터 재생
        selectSound.play().catch(e => console.log('사운드 재생 실패:', e));
    }
    showScreen('question-dialog');
});

// 질문 선택 -> 질문 입력 또는 카드 선택
writeQuestionBtn.addEventListener('click', () => { playButtonSound(); showScreen('focus-tarot-screen'); });
mindQuestionBtn.addEventListener('click', () => {
    userQuestion = ""; // 질문 없음
    shuffleDeck();
    showScreen('card-select-screen');
    playButtonSound();
});

// 질문 입력 -> 카드 선택
startFocusReadingBtn.addEventListener('click', () => {
    userQuestion = questionInput.value;
    if (userQuestion.trim() === "") {
        alert(UI_TEXTS[selectedLanguage].enterQuestionAlert);
        return;
    }
    shuffleDeck();
    showScreen('card-select-screen');
    playButtonSound();
});
>>>>>>> deb00b55daa256f83616c0b0a97b17b262c2cc0c

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

<<<<<<< HEAD
=======
// 결과 화면 보여주기
async function showResultScreen() {
    showScreen('result-screen');
    // 로딩 표시
    interpretationText.textContent = UI_TEXTS[selectedLanguage].preparingAll;
    
    // 4장 카드에 대한 해석을 미리 모두 받아오기 (개별 호출)
    cardInterpretations = [];
    for(let i = 0; i < selectedCards.length; i++) {
        const cardIndex = selectedCards[i];
        const localizedName = getLocalizedCardNameByIndex(cardIndex, selectedLanguage);
        // 각 카드별 해석 요청
        const interpretation = await getInterpretation([localizedName], userQuestion);
        cardInterpretations.push(interpretation);
    }
    
    // 첫 번째 카드 결과부터 보여주기
    displayCardResult(0);
}
>>>>>>> deb00b55daa256f83616c0b0a97b17b262c2cc0c

// 👇 [대규모 변경] 저장된 데이터로 화면을 구성하는 함수
function displayCardResult(index) {
    if (!fullResultData || !fullResultData.interpretations) return;

    currentResultIndex = index;
<<<<<<< HEAD
    const cardResult = fullResultData.interpretations[index];
    const cardIndex = selectedCards[index]; // 원본 카드 인덱스
    const t = UI_TEXTS[selectedLanguage];
    
    resultCardTitle.textContent = `${t.nthCardTitle(index + 1)}: ${cardResult.cardName}`;
=======
    const cardIndex = selectedCards[index];
    const t = UI_TEXTS[selectedLanguage];
    const localizedName = getLocalizedCardNameByIndex(cardIndex, selectedLanguage);
    
    resultCardTitle.textContent = `${t.nthCardTitle(index + 1)}: ${localizedName}`;
>>>>>>> deb00b55daa256f83616c0b0a97b17b262c2cc0c
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

<<<<<<< HEAD
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
=======
// 이전/다음/총정리/다시하기 버튼
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

summaryBtn.addEventListener('click', async () => {
    const t = UI_TEXTS[selectedLanguage];
    resultCardTitle.textContent = '총정리';
    if (selectedLanguage !== 'kor') {
        resultCardTitle.textContent = {
            eng: 'Summary', can: '總結', vi: 'Tổng kết', id: 'Ringkasan', chn: '总结', fr: 'Résumé', es: 'Resumen', kor: '총정리'
        }[selectedLanguage] || 'Summary';
    }
    resultCardImage.style.display = 'none'; // 총정리에선 큰 카드 이미지 숨김

    const cardNames = selectedCards.map(index => getLocalizedCardNameByIndex(index, selectedLanguage));
    // 총정리용 해석 요청
    const summaryText = await getInterpretation(cardNames, userQuestion);
    typeWriter(interpretationText, summaryText);
>>>>>>> deb00b55daa256f83616c0b0a97b17b262c2cc0c
    
    prevBtn.style.visibility = 'hidden';
    nextBtn.style.visibility = 'hidden';
    summaryBtn.style.display = 'none';
    playButtonSound();
});

<<<<<<< HEAD
// 👇 [신규] 현실 조언 버튼: API 호출 없이 저장된 데이터 사용
actionPlanBtn.addEventListener('click', () => {
    if (!fullResultData || !fullResultData.actionPlan) return;
    resultCardTitle.textContent = '현실 조언'; // 이 부분도 다국어 처리 가능
    
    typeWriter(interpretationText, fullResultData.actionPlan);
    
    actionPlanBtn.style.display = 'none'; // 한번 보면 숨김
    playButtonSound();
});

restartBtn.addEventListener('click', () => { playButtonSound(); resetApp(); });
=======
restartBtn.addEventListener('click', () => { playButtonSound(); setReuseLock(); resetApp(); });
>>>>>>> deb00b55daa256f83616c0b0a97b17b262c2cc0c
