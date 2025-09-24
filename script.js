/* === script.js 파일의 가장 맨 위에 이 코드를 붙여넣으세요! === */

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
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const summaryBtn = document.getElementById('summary-btn');
const restartBtn = document.getElementById('restart-btn');
const selectSound = document.getElementById('select-sound');
const buttonSound = document.getElementById('button-sound');
// 언어 스위처 요소
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
let selectedCards = []; // 선택된 카드의 인덱스를 저장할 배열
let cardInterpretations = []; // 각 카드의 해석 결과를 저장할 배열
let currentResultIndex = 0;
const CARDS_TO_PICK = 4;
let deck = [];

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
    applyTranslations();
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
    const SERVERLESS_FUNCTION_URL = '/api/interpret';

    try {
        const response = await fetch(SERVERLESS_FUNCTION_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cardNames, question, language: selectedLanguage }),
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

// 특정 인덱스의 카드 결과 표시
function displayCardResult(index) {
    currentResultIndex = index;
    const cardIndex = selectedCards[index];
    const t = UI_TEXTS[selectedLanguage];
    const localizedName = getLocalizedCardNameByIndex(cardIndex, selectedLanguage);
    
    resultCardTitle.textContent = `${t.nthCardTitle(index + 1)}: ${localizedName}`;
    resultCardImage.src = tarotData[cardIndex].img;
    resultCardImage.style.display = 'block'; // 카드 이미지 표시
    
    // 타이핑 효과로 해석 텍스트 표시
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
    
    // 버튼 숨기기
    prevBtn.style.visibility = 'hidden';
    nextBtn.style.visibility = 'hidden';
    summaryBtn.style.display = 'none';
    playButtonSound();
});

restartBtn.addEventListener('click', () => { playButtonSound(); setReuseLock(); resetApp(); });