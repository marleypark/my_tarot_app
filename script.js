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

// MBTI 관련 변수
let userMBTI = "";
let mbtiAnswers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let currentMbtiQuestion = 0;

// MBTI 질문 데이터
const MBTI_QUESTIONS = [
    {
        question: "정신적 에너지의 근원",
        options: [
            { text: "장기간 혼자 집중하는 작업을 할 때, 중간중간 사람들과 대화하거나 외부 활동을 해야 에너지가 재충전되고 효율이 오른다.", type: "E" },
            { text: "외부 방해 없이 완전히 혼자 있는 시간이 길수록 더 깊이 있는 사고를 할 수 있고, 사람들과의 상호작용은 오히려 집중을 방해한다.", type: "I" }
        ]
    },
    {
        question: "사고 과정의 표출",
        options: [
            { text: "복잡한 문제를 해결할 때, 생각을 소리 내어 말하거나 다른 사람과 토론하는 과정에서 아이디어가 구체화되고 명확해진다.", type: "E" },
            { text: "마음속으로 충분히 생각을 정리하고 결론을 내린 후에야 말하는 편이며, 혼자 깊이 사고할 때 가장 좋은 해답을 찾는다.", type: "I" }
        ]
    },
    {
        question: "새로운 환경에서의 첫 주",
        options: [
            { text: "가능한 한 많은 사람에게 나를 소개하고 대화를 시작하며 적극적으로 관계를 형성한다.", type: "E" },
            { text: "소수의 사람들과 깊이 있는 대화를 나누거나, 먼저 환경과 사람들을 관찰하며 천천히 적응한다.", type: "I" }
        ]
    },
    {
        question: "선호하는 소통 방식",
        options: [
            { text: "복잡한 이야기는 전화나 직접 만나서 상대방의 반응을 보며 대화하는 것이 빠르고 효율적이다.", type: "E" },
            { text: "문자나 메신저로 충분히 생각하고 정리해서 전달하는 것이 편하고, 즉각적인 반응을 요구하는 대화는 부담스럽다.", type: "I" }
        ]
    },
    {
        question: "정보 신뢰도의 기준",
        options: [
            { text: "실제 데이터, 통계, 구체적 사례 등 검증 가능하고 실질적인 정보를 기반으로 판단한다.", type: "S" },
            { text: "개별 사실들보다는 전체적인 패턴, 숨겨진 의미, 미래의 가능성에 더 큰 관심과 흥미를 느낀다.", type: "N" }
        ]
    },
    {
        question: "문제 해결 접근법",
        options: [
            { text: "과거의 성공 경험이나 검증된 절차를 활용하여, 현재 당면한 문제를 단계별로 해결하는 방식을 선호한다.", type: "S" },
            { text: "기존 방식을 뛰어넘는 창의적이고 새로운 접근을 먼저 모색하며, 문제의 본질을 파악하려고 한다.", type: "N" }
        ]
    },
    {
        question: "새로운 기술이나 기기를 배울 때",
        options: [
            { text: "사용 설명서를 차근차근 따라하며, 실제 기능을 직접 만져보고 경험을 통해 익히는 것이 가장 빠르다.", type: "S" },
            { text: "\"이 기술의 핵심 원리가 뭐지?\"를 먼저 파악하고, 전체적인 개념을 이해한 뒤 세부 기능을 탐색한다.", type: "N" }
        ]
    },
    {
        question: "일상 대화에서 더 흥미를 느끼는 주제",
        options: [
            { text: "어제 본 영화의 줄거리, 맛집 후기, 최근 겪은 재미있는 사건 등 현실적이고 구체적인 이야기.", type: "S" },
            { text: "미래 사회의 변화, 삶의 의미, 다양한 이론과 \"만약에...\"로 시작하는 추상적인 아이디어에 대한 상상과 토론.", type: "N" }
        ]
    },
    {
        question: "동료의 업무 실수에 대한 조언",
        options: [
            { text: "감정적인 위로보다는 문제의 원인을 객관적으로 분석하고, 논리적인 사실에 기반한 해결책을 제시한다.", type: "T" },
            { text: "먼저 동료의 감정을 살피고 공감해주며, 관계가 상하지 않는 선에서 부드럽게 개선점을 제안한다.", type: "F" }
        ]
    },
    {
        question: "'공정함'의 기준",
        options: [
            { text: "모든 사람에게 동일한 원칙과 기준을 예외 없이 적용하여 일관성 있게 대하는 것이 진정한 공정함이다.", type: "T" },
            { text: "각자의 개별적인 상황과 감정을 고려하여, 규칙을 융통성 있게 적용하는 것이 진정한 공정함이다.", type: "F" }
        ]
    },
    {
        question: "더 기분 상하는 비판",
        options: [
            { text: "\"당신의 분석은 비논리적이네요.\" (나의 능력이나 지성에 대한 비판)", type: "T" },
            { text: "\"당신은 정말 배려심이 없군요.\" (나의 인성이나 마음에 대한 비판)", type: "F" }
        ]
    },
    {
        question: "의사결정의 최종 검증",
        options: [
            { text: "\"이 결정이 합리적인가? 효율적인가? 원칙에 부합하는가?\"를 자문하며 객관적 분석을 통해 확신을 얻는다.", type: "T" },
            { text: "\"이 결정이 사람들에게 어떤 영향을 줄까? 나의 가치관에 맞는가? 마음이 편한가?\"를 자문하며 내적 가치와의 일치도로 확신을 얻는다.", type: "F" }
        ]
    },
    {
        question: "주말 계획",
        options: [
            { text: "금요일까지 주말에 할 일들을 미리 정해두고 계획을 짜놓아야 마음이 편하다. 계획이 없으면 시간을 낭비하는 기분이 든다.", type: "J" },
            { text: "대략적인 아이디어만 있고, 그때그때 기분이나 상황에 따라 유연하게 결정하는 것이 더 즐겁다. 빡빡한 계획은 부담스럽다.", type: "P" }
        ]
    },
    {
        question: "마감 관리 방식",
        options: [
            { text: "마감일보다 훨씬 이른 시점에 시작해서 조금씩 꾸준히 진행하며, 여유를 두고 완성하는 것을 선호한다.", type: "J" },
            { text: "마감이 임박해야 집중력과 창의력이 최고조에 달하며, 압박감 속에서 최고의 결과물을 만들어낸다고 느낀다.", type: "P" }
        ]
    },
    {
        question: "갑작스러운 계획 변경",
        options: [
            { text: "당황스럽고 스트레스를 받으며, 최대한 빨리 새로운 계획을 세워서 통제 가능한 상태로 되돌리려 한다.", type: "J" },
            { text: "오히려 흥미롭고 새로운 가능성으로 받아들이며, 변화에 따른 새로운 기회를 탐색하는 것을 즐긴다.", type: "P" }
        ]
    },
    {
        question: "쇼핑이나 레스토랑 선택",
        options: [
            { text: "미리 조사해서 몇 개의 후보를 정하고, 신속하게 결정을 내린 후 그 선택에 만족하려고 한다.", type: "J" },
            { text: "현장에서 이것저것 둘러보고 비교하는 과정 자체를 즐기며, 마지막 순간까지 더 좋은 옵션이 있는지 탐색한다.", type: "P" }
        ]
    }
];

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
    userMBTI = "";
    mbtiAnswers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    currentMbtiQuestion = 0;
    window.fullInterpretationData = null; // 전체 해석 데이터 초기화
    selectedCardsPreview.innerHTML = '';
    questionInput.value = '';
    updateCardsLeftText();
    showScreen('main-screen');
    applyTranslations();
}

// MBTI 계산 함수
function calculateMBTI() {
    let result = "";
    result += (mbtiAnswers.E >= mbtiAnswers.I) ? "E" : "I";
    result += (mbtiAnswers.S >= mbtiAnswers.N) ? "S" : "N";
    result += (mbtiAnswers.T >= mbtiAnswers.F) ? "T" : "F";
    result += (mbtiAnswers.J >= mbtiAnswers.P) ? "J" : "P";
    return result;
}

// MBTI 질문 표시 함수
function showMbtiQuestion(questionIndex) {
    const question = MBTI_QUESTIONS[questionIndex];
    const titleElement = document.getElementById('mbti-question-title');
    const textElement = document.getElementById('mbti-question-text');
    const optionsContainer = document.getElementById('mbti-options-container');
    const nextBtn = document.getElementById('mbti-next-question-btn');
    
    titleElement.textContent = `질문 ${questionIndex + 1}`;
    textElement.textContent = question.question;
    
    // 옵션 버튼들 생성
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'mbti-option';
        button.textContent = option.text;
        button.dataset.type = option.type;
        button.addEventListener('click', () => selectMbtiOption(button, option.type));
        optionsContainer.appendChild(button);
    });
    
    nextBtn.style.display = 'none';
}

// MBTI 옵션 선택 함수
function selectMbtiOption(selectedButton, type) {
    // 모든 옵션에서 selected 클래스 제거
    document.querySelectorAll('.mbti-option').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 선택된 버튼에 selected 클래스 추가
    selectedButton.classList.add('selected');
    
    // 답변 저장
    mbtiAnswers[type]++;
    
    // 다음 버튼 표시
    document.getElementById('mbti-next-question-btn').style.display = 'inline-block';
}

// MBTI 결과 표시 함수
function showMbtiResult() {
    const mbtiType = calculateMBTI();
    const resultTypeElement = document.getElementById('mbti-result-type');
    const resultDescElement = document.getElementById('mbti-result-description');
    
    resultTypeElement.textContent = mbtiType;
    resultDescElement.textContent = `${mbtiType} 유형의 특성을 바탕으로 타로 리딩을 진행하겠습니다.`;
    
    userMBTI = mbtiType;
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

// 전체 타로 해석을 가져오는 함수 (1회 API 호출)
async function getFullInterpretation(cardNames, question) {
    const SERVERLESS_FUNCTION_URL = '/api/interpret';

    try {
        const response = await fetch(SERVERLESS_FUNCTION_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                cardNames: cardNames, 
                question: question, 
                language: selectedLanguage,
                mbti: userMBTI,
                isFullReading: true
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
            fullInterpretation: `이것은 ${cardNames.join(', ')} 카드들의 테스트 해석입니다. (MBTI: ${userMBTI})`,
            cardInterpretations: cardNames.map((cardName, index) => ({
                interpretation: `${index + 1}번째 카드 ${cardName}의 해석입니다.`,
                positiveKeywords: ['희망', '기회', '성장'],
                negativeKeywords: ['주의', '신중함']
            })),
            summary: '전체적인 요약입니다.',
            mbtiAdvice: `${userMBTI} 유형에 맞는 조언입니다.`
        };
    }
}

// 개별 카드 해석을 가져오는 함수 (기존 호환성 유지)
async function getInterpretation(cardName, question) {
    const SERVERLESS_FUNCTION_URL = '/api/interpret';

    try {
        const response = await fetch(SERVERLESS_FUNCTION_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                cardNames: [cardName], 
                question: question, 
                language: selectedLanguage,
                mbti: userMBTI
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
            interpretation: `이것은 ${cardName} 카드의 테스트 해석입니다. (MBTI: ${userMBTI})`,
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

// MBTI 기반 조언을 가져오는 함수
async function getMbtiAdvice(cardNames, question, interpretations) {
    const SERVERLESS_FUNCTION_URL = '/api/interpret';

    try {
        const response = await fetch(SERVERLESS_FUNCTION_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                cardNames, 
                question: question, 
                language: selectedLanguage,
                mbti: userMBTI,
                isMbtiAdvice: true,
                interpretations: interpretations.map(interp => interp.interpretation).join(' ')
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API 응답 오류:', errorText);
            throw new Error(`API 요청 실패: ${response.status} - ${errorText}`);
        }
        
        const data = await response.json();
        return data.interpretation;

    } catch (error) {
        console.error("MBTI 조언 API 호출 오류:", error);
        return `${userMBTI} 유형의 특성을 고려한 현실적이고 체계적인 조언: 이 타로 결과를 당신의 성격에 맞게 적용할 수 있는 구체적인 방법을 제시해드립니다.`;
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
    
    // MBTI 관련 이벤트 리스너들
    document.getElementById('mbti-submit-btn').addEventListener('click', () => {
        const mbtiInput = document.getElementById('mbti-input').value.trim().toUpperCase();
        if (mbtiInput.length !== 4) {
            alert("올바른 MBTI 유형을 입력해주세요. (예: INFP, ENFJ)");
            return;
        }
        userMBTI = mbtiInput;
        shuffleDeck();
        showScreen('card-select-screen');
        playButtonSound();
    });

    document.getElementById('mbti-test-btn').addEventListener('click', () => {
        showScreen('mbti-test-start-screen');
        playButtonSound();
    });

    document.getElementById('mbti-restart-btn').addEventListener('click', () => {
        resetApp();
        playButtonSound();
    });

    document.getElementById('start-mbti-test-btn').addEventListener('click', () => {
        currentMbtiQuestion = 0;
        mbtiAnswers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        showMbtiQuestion(0);
        showScreen('mbti-question-screen');
        playButtonSound();
    });

    document.getElementById('mbti-test-restart-btn').addEventListener('click', () => {
        resetApp();
        playButtonSound();
    });

    document.getElementById('mbti-next-question-btn').addEventListener('click', () => {
        currentMbtiQuestion++;
        if (currentMbtiQuestion < MBTI_QUESTIONS.length) {
            showMbtiQuestion(currentMbtiQuestion);
        } else {
            showMbtiResult();
            showScreen('mbti-result-screen');
        }
        playButtonSound();
    });

    document.getElementById('mbti-question-restart-btn').addEventListener('click', () => {
        resetApp();
        playButtonSound();
    });

    document.getElementById('mbti-result-next-btn').addEventListener('click', () => {
        shuffleDeck();
        showScreen('card-select-screen');
        playButtonSound();
    });

    document.getElementById('mbti-result-restart-btn').addEventListener('click', () => {
        resetApp();
        playButtonSound();
    });

    // 총정리 페이지 이벤트 리스너들
    document.getElementById('summary-prev-btn').addEventListener('click', () => {
        showScreen('result-screen');
        displayCardResult(CARDS_TO_PICK - 1); // 마지막 카드로 돌아가기
        playButtonSound();
    });

    document.getElementById('summary-restart-btn').addEventListener('click', () => {
        resetApp();
        playButtonSound();
    });

    document.getElementById('mbti-advice-btn').addEventListener('click', async () => {
        showScreen('mbti-advice-screen');
        
        // 저장된 전체 해석 데이터에서 MBTI 조언 부분만 표시
        if (window.fullInterpretationData && window.fullInterpretationData.mbtiAdvice) {
            typeWriter(document.getElementById('mbti-advice-text'), window.fullInterpretationData.mbtiAdvice);
        } else {
            // 백업: 기존 방식으로 API 호출
            document.getElementById('mbti-advice-text').textContent = "MBTI 기반 조언을 준비하고 있습니다...";
            const cardNames = selectedCards.map(index => getLocalizedCardNameByIndex(index, selectedLanguage));
            const mbtiAdvice = await getMbtiAdvice(cardNames, userQuestion, cardInterpretations);
            typeWriter(document.getElementById('mbti-advice-text'), mbtiAdvice);
        }
        playButtonSound();
    });

    // MBTI 조언 페이지 이벤트 리스너들
    document.getElementById('mbti-advice-prev-btn').addEventListener('click', () => {
        showSummaryScreen();
        playButtonSound();
    });

    document.getElementById('mbti-advice-restart-btn').addEventListener('click', () => {
        resetApp();
        playButtonSound();
    });
    
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
    showScreen('mbti-input-screen');
});

startFocusReadingBtn.addEventListener('click', () => {
    userQuestion = questionInput.value;
    if (userQuestion.trim() === "") {
        alert("질문을 입력해주세요.");
        return;
    }
    showScreen('mbti-input-screen');
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

// 결과 화면 보여주기 (1회 API 호출로 모든 해석 받기)
async function showResultScreen() {
    showScreen('result-screen');
    const t = UI_TEXTS[selectedLanguage];
    interpretationText.textContent = "선택된 모든 카드의 해석을 준비 중입니다...";
    keywordsArea.style.display = 'none';
    
    // 4장 카드에 대한 해석을 한 번에 받아오기
    const cardNames = selectedCards.map(index => getLocalizedCardNameByIndex(index, selectedLanguage));
    const fullInterpretation = await getFullInterpretation(cardNames, userQuestion);
    
    // 전체 해석을 카드별로 분할하여 저장
    cardInterpretations = fullInterpretation.cardInterpretations;
    
    // 전체 해석 데이터를 전역 변수에 저장 (총정리와 MBTI 조언에서 사용)
    window.fullInterpretationData = fullInterpretation;
    
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

    // 해당 카드의 해석만 표시 (전체 해석이 아닌 개별 카드 해석)
    console.log(`카드 ${index + 1} 해석 표시:`, cardResult.interpretation.substring(0, 100) + '...');
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

// 총정리 버튼: 총정리 페이지로 이동
summaryBtn.addEventListener('click', async () => {
    showSummaryScreen();
    playButtonSound();
});

// 총정리 화면 표시 함수
function showSummaryScreen() {
    showScreen('summary-screen');
    
    // 4개 카드 이미지 표시
    const summaryCardsDisplay = document.getElementById('summary-cards-display');
    summaryCardsDisplay.innerHTML = '';
    selectedCards.forEach(cardIndex => {
        const img = document.createElement('img');
        img.src = tarotData[cardIndex].img;
        img.alt = getLocalizedCardNameByIndex(cardIndex, selectedLanguage);
        summaryCardsDisplay.appendChild(img);
    });
    
    // 저장된 전체 해석에서 총정리 부분만 표시
    if (window.fullInterpretationData) {
        let summaryContent = '';
        
        // 연결성 분석 추가
        if (window.fullInterpretationData.connectionAnalysis) {
            summaryContent += window.fullInterpretationData.connectionAnalysis + '\n\n';
        }
        
        // 실생활 적용 가이드 추가
        if (window.fullInterpretationData.practicalGuide) {
            summaryContent += window.fullInterpretationData.practicalGuide + '\n\n';
        }
        
        // 마무리 메시지 추가
        if (window.fullInterpretationData.summary) {
            summaryContent += window.fullInterpretationData.summary;
        }
        
        typeWriter(document.getElementById('summary-text'), summaryContent);
    } else {
        // 백업: 기존 방식으로 생성
        const summaryText = cardInterpretations.map((interp, index) => 
            `${index + 1}번째 카드: ${interp.interpretation}`
        ).join('\n\n');
        typeWriter(document.getElementById('summary-text'), summaryText);
    }
}

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

