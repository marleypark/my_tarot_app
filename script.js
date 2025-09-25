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
    // Part 1. 에너지의 방향과 소통 방식 (E/I)
    {
        question: "📱 SNS 사용 패턴",
        options: [
            { text: "일상의 소소한 순간들을 자주 포스팅하고, 친구들의 게시물에 적극적으로 댓글과 반응을 남기며 활발하게 소통한다.", type: "E" },
            { text: "정말 특별한 순간이나 의미 있는 생각이 있을 때만 포스팅하고, 주로 다른 사람들의 글을 조용히 구경하는 편이다.", type: "I" }
        ]
    },
    {
        question: "🎉 생일파티 스타일",
        options: [
            { text: "많은 친구들을 초대해서 왁자지껄하고 활기찬 파티를 열고, 다양한 사람들과 어울리며 즐기는 것이 좋다.", type: "E" },
            { text: "정말 가까운 소수의 친구들과 조용하고 아늑한 분위기에서 깊이 있는 시간을 보내는 것이 더 의미 있다.", type: "I" }
        ]
    },
    {
        question: "💭 아이디어 발전 과정",
        options: [
            { text: "생각이 떠오르면 즉시 다른 사람들과 공유하고 대화하면서 아이디어를 발전시켜 나간다. 말하면서 생각이 정리된다.", type: "E" },
            { text: "머릿속으로 충분히 생각하고 정리한 후에 다른 사람에게 이야기한다. 혼자 생각할 때 더 창의적인 아이디어가 나온다.", type: "I" }
        ]
    },
    {
        question: "🏢 회사 점심시간",
        options: [
            { text: "동료들과 함께 밖에 나가서 식사하며 대화하는 것이 자연스럽고, 혼자 먹는 것은 좀 심심하다.", type: "E" },
            { text: "혼자만의 시간을 가지며 조용히 식사하거나, 친한 동료 1-2명과만 함께하는 것이 편하다.", type: "I" }
        ]
    },
    {
        question: "📞 전화 vs 문자",
        options: [
            { text: "복잡한 이야기는 전화로 직접 대화하는 것이 빠르고 효율적이며, 상대방의 목소리를 들으면서 소통하는 것이 좋다.", type: "E" },
            { text: "문자나 메신저로 충분히 생각하고 정리해서 전달하는 것이 편하고, 전화는 갑작스러워서 부담스럽다.", type: "I" }
        ]
    },
    // Part 2. 정보 인식과 처리 방식 (S/N)
    {
        question: "🗞️ 뉴스 읽기 패턴",
        options: [
            { text: "구체적인 사실과 통계, 실제 사례에 집중하며, '언제, 어디서, 누가, 무엇을'에 대한 정확한 정보를 중요하게 생각한다.", type: "S" },
            { text: "사건의 배경과 맥락, 미래에 미칠 영향과 의미를 파악하는 것에 더 관심이 있고, 여러 가능성을 상상해본다.", type: "N" }
        ]
    },
    {
        question: "🎬 영화 감상 후 대화",
        options: [
            { text: "'액션 씬이 정말 박진감 넘쳤어', '주인공 연기가 자연스러웠어' 등 실제로 보고 들은 구체적인 장면과 연출에 대해 이야기한다.", type: "S" },
            { text: "'이 영화가 현대 사회에 던지는 메시지가 뭘까?', '감독이 진짜 말하고 싶었던 것은...' 등 숨겨진 의미와 상징에 대해 이야기한다.", type: "N" }
        ]
    },
    {
        question: "🛠️ 문제 해결 접근법",
        options: [
            { text: "과거의 경험이나 검증된 방법을 활용해서 단계별로 차근차근 문제를 해결해 나간다. '이전에 이런 식으로 해결했으니까.'", type: "S" },
            { text: "기존의 틀에서 벗어나 새로운 관점에서 접근하고, 창의적이고 혁신적인 해결책을 찾으려고 한다.", type: "N" }
        ]
    },
    {
        question: "📚 학습할 때 선호하는 방식",
        options: [
            { text: "실제 사례와 구체적인 예시가 많이 포함된 내용을 선호하고, 실습이나 체험을 통해 직접 경험하며 배우는 것이 효과적이다.", type: "S" },
            { text: "전체적인 이론과 개념을 먼저 이해하고, 원리와 패턴을 파악한 후 응용하는 방식을 선호한다.", type: "N" }
        ]
    },
    {
        question: "🔮 미래에 대한 관심",
        options: [
            { text: "'내일 뭐 입을까?', '다음 주말에 뭐 할까?' 등 가까운 미래의 구체적이고 현실적인 계획에 더 집중한다.", type: "S" },
            { text: "'10년 후 세상은 어떻게 바뀔까?', '인공지능이 인간을 대체할까?' 등 먼 미래의 가능성과 변화를 상상하는 것을 즐긴다.", type: "N" }
        ]
    },
    // Part 3. 의사결정과 판단 기준 (T/F)
    {
        question: "🤝 갈등 상황에서의 중재 방식",
        options: [
            { text: "객관적인 사실을 바탕으로 누가 옳고 그른지 논리적으로 분석하고, 합리적인 해결책을 제시한다.", type: "T" },
            { text: "양쪽의 감정과 입장을 충분히 들어보고 공감한 후, 모두가 상처받지 않는 조화로운 해결책을 찾는다.", type: "F" }
        ]
    },
    {
        question: "💼 팀 프로젝트에서 중요하게 생각하는 것",
        options: [
            { text: "역할 분담의 명확성, 일정 관리의 체계성, 결과물의 품질과 효율성을 가장 중요하게 생각한다.", type: "T" },
            { text: "팀원들 간의 화합과 소통, 모두가 만족할 수 있는 과정, 개인의 기여도와 만족도를 중요하게 생각한다.", type: "F" }
        ]
    },
    {
        question: "😢 친구가 힘들어할 때 나의 반응",
        options: [
            { text: "'왜 그런 일이 생겼는지 차근차근 분석해보자'며 문제의 원인을 파악하고 논리적인 해결방안을 제시한다.", type: "T" },
            { text: "'정말 힘들겠다. 나도 비슷한 경험이 있어'라며 먼저 공감하고 감정적으로 위로해준다.", type: "F" }
        ]
    },
    {
        question: "🎯 성공의 기준",
        options: [
            { text: "명확하고 측정 가능한 성과와 객관적인 인정. 실력과 능력으로 평가받는 것이 중요하다.", type: "T" },
            { text: "주변 사람들과의 좋은 관계와 서로에게 긍정적인 영향을 주고받는 것이 진정한 성공이라고 생각한다.", type: "F" }
        ]
    },
    {
        question: "⚖️ 규칙에 대한 관점",
        options: [
            { text: "규칙은 모든 사람에게 공평하게 적용되어야 하며, 예외를 만드는 것은 공정성을 해친다고 생각한다.", type: "T" },
            { text: "규칙보다는 사람이 우선이며, 특별한 사정이 있다면 융통성을 발휘하는 것이 더 인간적이라고 생각한다.", type: "F" }
        ]
    },
    // Part 4. 라이프스타일과 외부세계 대응 (J/P)
    {
        question: "🧳 휴가 계획 수립",
        options: [
            { text: "최소 1-2달 전부터 여행지, 숙소, 일정을 상세히 계획하고 예약을 완료해놓는다. 계획표가 있어야 안심이 된다.", type: "J" },
            { text: "큰 틀만 정해두고 현지에서 즉흥적으로 결정하는 것을 즐긴다. 예상치 못한 발견과 경험이 여행의 묘미다.", type: "P" }
        ]
    },
    {
        question: "🏠 방 정리 스타일",
        options: [
            { text: "모든 물건이 정해진 자리에 있어야 하고, 주기적으로 정리정돈을 한다. 어수선한 환경에서는 집중이 안 된다.", type: "J" },
            { text: "겉보기에는 약간 어수선해 보여도 나만의 시스템이 있고, 필요한 것은 어디 있는지 안다. 너무 깔끔하면 오히려 부담스럽다.", type: "P" }
        ]
    },
    {
        question: "📅 약속 잡기",
        options: [
            { text: "'다음 주 화요일 오후 3시에 강남역 2번 출구에서 만나자'처럼 구체적으로 정해야 마음이 편하다.", type: "J" },
            { text: "'다음 주 중에 시간 될 때 연락해서 만나자'는 식으로 유동적으로 두는 것이 부담스럽지 않다.", type: "P" }
        ]
    },
    {
        question: "🛒 쇼핑 패턴",
        options: [
            { text: "필요한 것들을 미리 리스트로 작성하고, 계획적으로 구매한다. 충동구매는 거의 하지 않는다.", type: "J" },
            { text: "쇼핑하면서 마음에 드는 것이 있으면 즉석에서 구매 결정을 한다. 계획에 없던 것도 자주 산다.", type: "P" }
        ]
    },
    {
        question: "⏰ 마감 기한에 대한 태도",
        options: [
            { text: "마감일보다 훨씬 일찍 완료하고, 여유시간을 두고 검토하고 수정하는 것을 선호한다.", type: "J" },
            { text: "마감 압박이 있을 때 오히려 집중력과 창의력이 극대화되며, 아슬아슬하게 완성하는 것도 나름의 재미가 있다.", type: "P" }
        ]
    },
    // 추가 심화 질문
    {
        question: "🎪 예상치 못한 변화 상황",
        options: [
            { text: "갑작스러운 일정 변경이나 계획 수정이 생기면 스트레스를 받고, 가능하면 원래 계획을 고수하려고 한다.", type: "J" },
            { text: "예상치 못한 변화나 새로운 기회가 생기면 오히려 흥미롭고, 유연하게 적응하며 새로운 가능성을 탐색한다.", type: "P" }
        ]
    },
    {
        question: "🎨 창작 활동 스타일",
        options: [
            { text: "기존의 기법과 방식을 충실히 따라하면서 점진적으로 실력을 향상시켜 나간다. 기초가 탄탄해야 한다고 생각한다.", type: "S" },
            { text: "독창적이고 남들과 다른 나만의 스타일을 추구하며, 실험적이고 도전적인 시도를 즐긴다.", type: "N" }
        ]
    },
    {
        question: "💡 아이디어 실행 과정",
        options: [
            { text: "아이디어가 생기면 실현 가능성을 체크하고 구체적인 실행 계획을 세운 후 단계별로 진행한다.", type: "J" },
            { text: "재미있는 아이디어가 생기면 일단 시도해보고, 진행하면서 방향을 조정하거나 더 좋은 아이디어가 떠오르면 바꾸기도 한다.", type: "P" }
        ]
    },
    {
        question: "🤔 복잡한 문제를 만났을 때",
        options: [
            { text: "검증된 방법이나 전문가의 조언을 참고해서 안전하고 확실한 해결책을 찾는다.", type: "S" },
            { text: "여러 가지 가능성을 고려하고 창의적인 접근 방식을 시도하며, 실패해도 배움의 기회로 생각한다.", type: "N" }
        ]
    },
    {
        question: "👥 사람들과의 관계에서",
        options: [
            { text: "소수의 사람들과 깊고 지속적인 관계를 유지하는 것을 더 소중하게 여긴다.", type: "I" },
            { text: "다양한 부류의 많은 사람들과 폭넓은 관계를 맺고 네트워크를 확장하는 것을 즐긴다.", type: "E" }
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
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    } else {
        console.error('화면을 찾을 수 없습니다:', screenId);
    }
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
    
    // 진행률 표시 추가
    const progressText = document.createElement('div');
    progressText.style.cssText = `
        text-align: center;
        margin: 15px 0;
        color: #e94560;
        font-size: 14px;
        font-weight: bold;
    `;
    progressText.textContent = `${questionIndex + 1} / ${MBTI_QUESTIONS.length}`;
    optionsContainer.appendChild(progressText);
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
    
    // 0.5초 후 자동으로 다음 질문으로 이동
    setTimeout(() => {
        if (currentMbtiQuestion < MBTI_QUESTIONS.length - 1) {
            currentMbtiQuestion++;
            showMbtiQuestion(currentMbtiQuestion);
        } else {
            // 마지막 질문이면 결과 화면으로
            showMbtiResult();
        }
    }, 500);
}

// MBTI 결과 표시 함수
function showMbtiResult() {
    const mbtiType = calculateMBTI();
    const resultTypeElement = document.getElementById('mbti-result-type');
    const resultDescElement = document.getElementById('mbti-result-description');
    
    resultTypeElement.textContent = mbtiType;
    resultDescElement.textContent = `${mbtiType} 유형의 특성을 바탕으로 타로 리딩을 진행하겠습니다.`;
    
    userMBTI = mbtiType;
    
    // MBTI 결과 화면으로 이동
    showScreen('mbti-result-screen');
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

// 통합된 1회 API 호출 함수
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
                mbti: userMBTI
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API 응답 오류:', errorText);
            throw new Error(`API 요청 실패: ${response.status} - ${errorText}`);
        }
        
        const data = await response.json();
        console.log('API 응답 데이터:', data);
        
        if (data.success && data.data) {
            return data.data;
        } else {
            throw new Error('API 응답이 올바르지 않습니다.');
        }

    } catch (error) {
        console.error("API 호출 오류:", error);
        // 테스트 데이터 반환
        return {
            cardInterpretations: cardNames.map((cardName, index) => ({
                cardName: cardName,
                interpretation: `${index + 1}번째 카드 ${cardName}의 해석입니다.`,
                keywords: {
                    positive: ['희망', '기회', '성장'],
                    caution: ['주의', '신중함']
                }
            })),
            overallReading: {
                title: '타로 리딩 결과',
                summary: '전체적인 요약입니다.',
                mbtiActionPlan: {
                    title: 'MBTI 기반 액션 플랜',
                    introduction: `${userMBTI} 유형에 맞는 조언입니다.`,
                    phases: [
                        {
                            phaseTitle: '1단계: 즉시 실행',
                            steps: ['구체적인 행동 계획 1', '구체적인 행동 계획 2']
                        }
                    ]
                }
            }
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

    // MBTI 질문 자동 진행으로 인해 "다음" 버튼 이벤트 리스너 제거

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

    // PDF 저장 버튼 이벤트 리스너
    document.getElementById('pdf-save-btn').addEventListener('click', () => {
        generatePDF();
        playButtonSound();
    });

    // 기존 질문 선택 옵션 이벤트 리스너는 제거됨 (새로운 UI로 대체)

    // 직접 질문 입력 화면 이벤트 리스너
    document.getElementById('submit-question-btn').addEventListener('click', () => {
        userQuestion = questionInput.value;
        if (userQuestion.trim() === "") {
            alert("질문을 입력해주세요.");
            return;
        }
        showScreen('mbti-input-screen');
        playButtonSound();
    });

    document.getElementById('back-to-question-options-btn').addEventListener('click', () => {
        showScreen('question-dialog');
        playButtonSound();
    });

    // 오픈 타로 준비 화면 이벤트 리스너
    document.getElementById('ready-for-cards-btn').addEventListener('click', () => {
        showScreen('mbti-input-screen');
        playButtonSound();
    });

    document.getElementById('back-to-question-dialog-from-prepare-btn').addEventListener('click', () => {
        showScreen('question-dialog');
        playButtonSound();
    });

    // 질문 선택 화면 이전 버튼은 제거됨 (새로운 UI로 대체)

    // MBTI 조언 페이지 이벤트 리스너들은 HTML에 존재하지 않으므로 제거됨
    
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

// 새로운 버튼들에 대한 이벤트 리스너
writeQuestionBtn.addEventListener('click', () => { 
    playButtonSound(); 
    showScreen('custom-question-screen'); 
});

mindQuestionBtn.addEventListener('click', () => {
    userQuestion = ""; // 질문 없음
    showScreen('open-tarot-prepare-screen');
    playButtonSound();
});

// 운선택 드롭다운 버튼
const fortuneSelectBtn = document.getElementById('fortune-select-btn');
const fortuneMenu = document.getElementById('fortune-menu');

if (fortuneSelectBtn && fortuneMenu) {
    fortuneSelectBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = fortuneMenu.classList.contains('show');
        if (isOpen) {
            fortuneMenu.classList.remove('show');
        } else {
            fortuneMenu.classList.add('show');
        }
        playButtonSound();
    });
    
    // 운선택 메뉴 항목 클릭 이벤트
    const fortuneOptions = fortuneMenu.querySelectorAll('li[data-question]');
    fortuneOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const questionText = e.target.getAttribute('data-question');
            userQuestion = questionText;
            fortuneMenu.classList.remove('show');
            showScreen('mbti-input-screen');
            playButtonSound();
        });
    });
    
    // 외부 클릭 시 메뉴 닫기
    document.addEventListener('click', (e) => {
        if (!fortuneSelectBtn.contains(e.target) && !fortuneMenu.contains(e.target)) {
            fortuneMenu.classList.remove('show');
        }
    });
}

// 기존 mindQuestionBtn은 제거됨 (운선택으로 대체)

// startFocusReadingBtn은 HTML에 존재하지 않으므로 제거됨

// 카드 선택 로직
shuffleAnimationArea.addEventListener('click', () => {
    console.log('카드 선택 영역 클릭됨', { selectedCards: selectedCards.length, deck: deck.length });
    
    if (selectedCards.length < CARDS_TO_PICK) {
        if (deck.length === 0) {
            console.log('덱이 비어있음, 셔플 실행');
            shuffleDeck();
        }
        
        const pickedCardIndex = deck.pop();
        console.log('선택된 카드 인덱스:', pickedCardIndex);
        
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
    
    // 새로운 JSON 구조에 맞게 데이터 변환
    cardInterpretations = fullInterpretation.cardInterpretations.map(card => ({
        interpretation: card.interpretation,
        positiveKeywords: card.keywords.positive,
        negativeKeywords: card.keywords.caution
    }));
    
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
    if (window.fullInterpretationData && window.fullInterpretationData.overallReading) {
        console.log('총정리 데이터:', window.fullInterpretationData);
        
        const overallReading = window.fullInterpretationData.overallReading;
        let summaryContent = '';
        
        // 제목 추가
        if (overallReading.title) {
            summaryContent += `# ${overallReading.title}\n\n`;
        }
        
        // 요약 추가
        if (overallReading.summary) {
            console.log('요약:', overallReading.summary);
            summaryContent += overallReading.summary;
        }
        
        console.log('최종 총정리 내용:', summaryContent);
        typeWriter(document.getElementById('summary-text'), summaryContent);
        
        // MBTI 조언도 함께 표시
        if (overallReading.mbtiActionPlan) {
            const mbtiPlan = overallReading.mbtiActionPlan;
            let mbtiContent = '';
            
            // 제목과 소개
            if (mbtiPlan.title) {
                mbtiContent += `# ${mbtiPlan.title}\n\n`;
            }
            if (mbtiPlan.introduction) {
                mbtiContent += mbtiPlan.introduction + '\n\n';
            }
            
            // 단계별 액션 플랜
            if (mbtiPlan.phases && mbtiPlan.phases.length > 0) {
                mbtiPlan.phases.forEach((phase, index) => {
                    mbtiContent += `## ${phase.phaseTitle}\n\n`;
                    if (phase.steps && phase.steps.length > 0) {
                        phase.steps.forEach((step, stepIndex) => {
                            mbtiContent += `${stepIndex + 1}. ${step}\n`;
                        });
                        mbtiContent += '\n';
                    }
                });
            }
            
            typeWriter(document.getElementById('mbti-advice-text'), mbtiContent);
        }
    } else {
        console.log('전체 해석 데이터가 없습니다.');
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

// PDF 생성 함수
function generatePDF() {
    if (!window.fullInterpretationData) {
        alert('PDF로 저장할 데이터가 없습니다. 먼저 타로 리딩을 완료해주세요.');
        return;
    }

    // PDF용 HTML 콘텐츠 생성
    const pdfContent = createPDFContent();
    
    // jsPDF 라이브러리 로드 및 PDF 생성
    loadJSPDF().then(() => {
        createPDF(pdfContent);
    }).catch(error => {
        console.error('PDF 생성 오류:', error);
        alert('PDF 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    });
}

// PDF용 HTML 콘텐츠 생성
function createPDFContent() {
    const data = window.fullInterpretationData;
    const cardNames = selectedCards.map(index => getLocalizedCardNameByIndex(index, selectedLanguage));
    
    let content = `
        <div class="pdf-content">
            <h1>🔮 타로 리딩 결과</h1>
            
            <div class="summary-section">
                <h2>📋 기본 정보</h2>
                <p><strong>질문:</strong> ${userQuestion || '일반적인 인생 조언'}</p>
                <p><strong>MBTI 유형:</strong> ${userMBTI || '제공되지 않음'}</p>
                <p><strong>뽑힌 카드:</strong> ${cardNames.join(', ')}</p>
                <p><strong>리딩 날짜:</strong> ${new Date().toLocaleDateString('ko-KR')}</p>
            </div>
    `;

    // 개별 카드 해석
    content += '<h2>🃏 개별 카드 해석</h2>';
    data.cardInterpretations.forEach((card, index) => {
        const cardIndex = selectedCards[index];
        const cardImageSrc = tarotData[cardIndex].img;
        content += `
            <div class="card-section">
                <div class="card-title">${index + 1}번째 카드 - ${card.cardName}</div>
                <div class="card-image-pdf">
                    <img src="${cardImageSrc}" alt="${card.cardName}" style="max-width: 200px; height: auto; margin: 10px 0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
                </div>
                <div class="keywords">
                    <strong>긍정 키워드:</strong> ${card.keywords.positive.join(', ')}<br>
                    <strong>주의 키워드:</strong> ${card.keywords.caution.join(', ')}
                </div>
                <div>${card.interpretation}</div>
            </div>
        `;
    });

    // 총정리
    if (data.overallReading) {
        content += `
            <div class="summary-section">
                <h2>📊 종합 리딩</h2>
                <h3>${data.overallReading.title || '타로 리딩 결과'}</h3>
                <div class="summary-cards-pdf">
                    <h4>뽑힌 카드들</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin: 15px 0;">
        `;
        
        // 총정리 섹션에 모든 카드 이미지 추가
        selectedCards.forEach((cardIndex, index) => {
            const cardImageSrc = tarotData[cardIndex].img;
            const cardName = getLocalizedCardNameByIndex(cardIndex, selectedLanguage);
            content += `
                <div style="text-align: center; margin: 5px;">
                    <img src="${cardImageSrc}" alt="${cardName}" style="width: 80px; height: auto; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                    <div style="font-size: 10px; margin-top: 5px; color: #666;">${index + 1}번째</div>
                </div>
            `;
        });
        
        content += `
                    </div>
                </div>
                <div>${data.overallReading.summary}</div>
            </div>
        `;

        // MBTI 액션 플랜
        if (data.overallReading.mbtiActionPlan) {
            const plan = data.overallReading.mbtiActionPlan;
            content += `
                <div class="mbti-section">
                    <h2>🎯 MBTI 기반 액션 플랜</h2>
                    <h3>${plan.title}</h3>
                    <p>${plan.introduction}</p>
            `;

            if (plan.phases && plan.phases.length > 0) {
                plan.phases.forEach(phase => {
                    content += `
                        <div class="phase">
                            <div class="phase-title">${phase.phaseTitle}</div>
                            <ul class="phase-steps">
                                ${phase.steps.map(step => `<li>${step}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                });
            }

            content += '</div>';
        }
    }

    content += '</div>';
    return content;
}

// jsPDF 라이브러리 로드
function loadJSPDF() {
    return new Promise((resolve, reject) => {
        if (window.jsPDF) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('jsPDF 라이브러리 로드 실패'));
        document.head.appendChild(script);
    });
}

// PDF 생성 및 다운로드
function createPDF(htmlContent) {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // 임시 div에 HTML 콘텐츠 추가
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        tempDiv.style.position = 'absolute';
        tempDiv.style.left = '-9999px';
        tempDiv.style.top = '-9999px';
        document.body.appendChild(tempDiv);

        // 이미지 로딩 대기
        const images = tempDiv.querySelectorAll('img');
        let loadedImages = 0;
        const totalImages = images.length;

        if (totalImages === 0) {
            // 이미지가 없으면 바로 PDF 생성
            generatePDFFromHTML(doc, tempDiv);
            return;
        }

        // 이미지 로딩 완료 대기
        images.forEach(img => {
            if (img.complete) {
                loadedImages++;
            } else {
                img.onload = () => {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        generatePDFFromHTML(doc, tempDiv);
                    }
                };
                img.onerror = () => {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        generatePDFFromHTML(doc, tempDiv);
                    }
                };
            }
        });

        // 모든 이미지가 이미 로드된 경우
        if (loadedImages === totalImages) {
            generatePDFFromHTML(doc, tempDiv);
        }

    } catch (error) {
        console.error('PDF 생성 중 오류:', error);
        alert('PDF 생성 중 오류가 발생했습니다.');
    }
}

// HTML을 PDF로 변환하는 함수
function generatePDFFromHTML(doc, tempDiv) {
    doc.html(tempDiv, {
        callback: function(doc) {
            // 파일명 생성
            const fileName = `타로리딩_${new Date().toISOString().split('T')[0]}.pdf`;
            
            // PDF 다운로드
            doc.save(fileName);
            
            // 사용자에게 저장 완료 알림
            showPDFSaveNotification(fileName);
            
            // 임시 div 제거
            document.body.removeChild(tempDiv);
        },
        x: 10,
        y: 10,
        width: 190,
        windowWidth: 800
    });
}

// PDF 저장 완료 알림
function showPDFSaveNotification(fileName) {
    // 알림 메시지 생성
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        z-index: 1000;
        font-size: 14px;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    
    // 플랫폼별 저장 위치 안내
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    let saveLocation = '';
    if (isMobile) {
        if (isIOS) {
            saveLocation = '파일 앱 > 다운로드 폴더';
        } else {
            saveLocation = '다운로드 폴더 또는 내 파일 앱';
        }
    } else {
        saveLocation = '다운로드 폴더';
    }
    
    notification.innerHTML = `
        <div style="font-weight: bold; margin-bottom: 5px;">✅ PDF 저장 완료!</div>
        <div style="font-size: 12px; opacity: 0.9;">
            파일명: ${fileName}<br>
            저장 위치: ${saveLocation}
        </div>
    `;
    
    // CSS 애니메이션 추가
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // 3초 후 자동 제거
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
        if (style.parentNode) {
            style.parentNode.removeChild(style);
        }
    }, 3000);
}

