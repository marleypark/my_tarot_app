// 📁 script.js (이 코드로 전체 교체 - 최종 안정화 버전)

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded 이벤트 발생 - 앱 초기화 시작');

    // --- 1. 앱의 모든 상태를 관리하는 중앙 저장소 ---
    const appState = {
        currentScreen: 'main-screen',
        language: 'kor',
        userQuestion: '',
        userMBTI: '',
        selectedCards: [],
        deck: [],
        fullResultData: null,
        currentResultIndex: 0,
        resultStage: 0,
        mbti: {
            answers: [], // 점수 배열로 사용
            currentQuestionIndex: 0,
        }
    };

    // --- 2. 데이터 및 설정 ---
    const tarotData = [
        // 메이저 아르카나
        { name: { kor: "바보", eng: "The Fool" }, img: "images/메이저_아르카나/0. 바보 카드.jpg" },
        { name: { kor: "마법사", eng: "The Magician" }, img: "images/메이저_아르카나/1. 마법사 카드.jpg" },
        { name: { kor: "여사제", eng: "The High Priestess" }, img: "images/메이저_아르카나/2. 여사제 카드.jpg" },
        { name: { kor: "여황제", eng: "The Empress" }, img: "images/메이저_아르카나/3. 여황제 카드.jpg" },
        { name: { kor: "황제", eng: "The Emperor" }, img: "images/메이저_아르카나/4. 황제 카드.jpg" },
        { name: { kor: "교황", eng: "The Hierophant" }, img: "images/메이저_아르카나/5. 교황 카드.jpg" },
        { name: { kor: "연인", eng: "The Lovers" }, img: "images/메이저_아르카나/6. 연인 카드.jpg" },
        { name: { kor: "전차", eng: "The Chariot" }, img: "images/메이저_아르카나/7. 전차 카드.jpg" },
        { name: { kor: "힘", eng: "Strength" }, img: "images/메이저_아르카나/8. 힘 카드.jpg" },
        { name: { kor: "은둔자", eng: "The Hermit" }, img: "images/메이저_아르카나/9. 은둔자 카드.jpg" },
        { name: { kor: "운명의 수레바퀴", eng: "Wheel of Fortune" }, img: "images/메이저_아르카나/10. 운명의 수레바퀴.jpg" },
        { name: { kor: "정의", eng: "Justice" }, img: "images/메이저_아르카나/11. 정의 카드.jpg" },
        { name: { kor: "행맨", eng: "The Hanged Man" }, img: "images/메이저_아르카나/12. 행맨 카드.jpg" },
        { name: { kor: "죽음", eng: "Death" }, img: "images/메이저_아르카나/13. 죽음 카드.jpg" },
        { name: { kor: "절제", eng: "Temperance" }, img: "images/메이저_아르카나/14. 절제 카드.jpg" },
        { name: { kor: "악마", eng: "The Devil" }, img: "images/메이저_아르카나/15. 악마 카드.jpg" },
        { name: { kor: "타워", eng: "The Tower" }, img: "images/메이저_아르카나/16. 타워 카드.jpg" },
        { name: { kor: "별", eng: "The Star" }, img: "images/메이저_아르카나/17. 별 카드.jpg" },
        { name: { kor: "달", eng: "The Moon" }, img: "images/메이저_아르카나/18. 달 카드.jpg" },
        { name: { kor: "태양", eng: "The Sun" }, img: "images/메이저_아르카나/19. 태양 카드.jpg" },
        { name: { kor: "심판", eng: "Judgement" }, img: "images/메이저_아르카나/20. 심판 카드.jpg" },
        { name: { kor: "세계", eng: "The World" }, img: "images/메이저_아르카나/21. 세계 카드.jpg" },
        
        // 완드 (Wands)
        { name: { kor: "완드 에이스", eng: "Ace of Wands" }, img: "images/완드/완드 에이스.jpg" },
        { name: { kor: "완드 2", eng: "Two of Wands" }, img: "images/완드/완드2.jpg" },
        { name: { kor: "완드 3", eng: "Three of Wands" }, img: "images/완드/완드3.jpg" },
        { name: { kor: "완드 4", eng: "Four of Wands" }, img: "images/완드/완드4.jpg" },
        { name: { kor: "완드 5", eng: "Five of Wands" }, img: "images/완드/완드5.jpg" },
        { name: { kor: "완드 6", eng: "Six of Wands" }, img: "images/완드/완드6.jpg" },
        { name: { kor: "완드 7", eng: "Seven of Wands" }, img: "images/완드/완드7.jpg" },
        { name: { kor: "완드 8", eng: "Eight of Wands" }, img: "images/완드/완드8.jpg" },
        { name: { kor: "완드 9", eng: "Nine of Wands" }, img: "images/완드/완드9.jpg" },
        { name: { kor: "완드 10", eng: "Ten of Wands" }, img: "images/완드/완드10.jpg" },
        { name: { kor: "완드 페이지", eng: "Page of Wands" }, img: "images/완드/완드 페이지.jpg" },
        { name: { kor: "완드 나이트", eng: "Knight of Wands" }, img: "images/완드/완드 나이트.jpg" },
        { name: { kor: "완드 퀸", eng: "Queen of Wands" }, img: "images/완드/완드 퀸.jpg" },
        { name: { kor: "완드 킹", eng: "King of Wands" }, img: "images/완드/완드 킹.jpg" },
        
        // 컵 (Cups)
        { name: { kor: "컵 에이스", eng: "Ace of Cups" }, img: "images/컵/컵 에이스.jpg" },
        { name: { kor: "컵 2", eng: "Two of Cups" }, img: "images/컵/컵2.jpg" },
        { name: { kor: "컵 3", eng: "Three of Cups" }, img: "images/컵/컵3.jpg" },
        { name: { kor: "컵 4", eng: "Four of Cups" }, img: "images/컵/컵4.jpg" },
        { name: { kor: "컵 5", eng: "Five of Cups" }, img: "images/컵/컵5.jpg" },
        { name: { kor: "컵 6", eng: "Six of Cups" }, img: "images/컵/컵6.jpg" },
        { name: { kor: "컵 7", eng: "Seven of Cups" }, img: "images/컵/컵7.jpg" },
        { name: { kor: "컵 8", eng: "Eight of Cups" }, img: "images/컵/컵8.jpg" },
        { name: { kor: "컵 9", eng: "Nine of Cups" }, img: "images/컵/컵9.jpg" },
        { name: { kor: "컵 10", eng: "Ten of Cups" }, img: "images/컵/컵10.jpg" },
        { name: { kor: "컵 페이지", eng: "Page of Cups" }, img: "images/컵/컵 페이지.jpg" },
        { name: { kor: "컵 나이트", eng: "Knight of Cups" }, img: "images/컵/컵 나이트.jpg" },
        { name: { kor: "컵 퀸", eng: "Queen of Cups" }, img: "images/컵/컵 퀸.jpg" },
        { name: { kor: "컵 킹", eng: "King of Cups" }, img: "images/컵/컵 킹.jpg" },
        
        // 소드 (Swords)
        { name: { kor: "소드 에이스", eng: "Ace of Swords" }, img: "images/소드/소드 에이스.jpg" },
        { name: { kor: "소드 2", eng: "Two of Swords" }, img: "images/소드/소드2.jpg" },
        { name: { kor: "소드 3", eng: "Three of Swords" }, img: "images/소드/소드3.jpg" },
        { name: { kor: "소드 4", eng: "Four of Swords" }, img: "images/소드/소드4.jpg" },
        { name: { kor: "소드 5", eng: "Five of Swords" }, img: "images/소드/소드5.jpg" },
        { name: { kor: "소드 6", eng: "Six of Swords" }, img: "images/소드/소드6.jpg" },
        { name: { kor: "소드 7", eng: "Seven of Swords" }, img: "images/소드/소드7.jpg" },
        { name: { kor: "소드 8", eng: "Eight of Swords" }, img: "images/소드/소드8.jpg" },
        { name: { kor: "소드 9", eng: "Nine of Swords" }, img: "images/소드/소드9.jpg" },
        { name: { kor: "소드 10", eng: "Ten of Swords" }, img: "images/소드/소드10.jpg" },
        { name: { kor: "소드 페이지", eng: "Page of Swords" }, img: "images/소드/소드 페이지.jpg" },
        { name: { kor: "소드 나이트", eng: "Knight of Swords" }, img: "images/소드/소드 나이트.jpg" },
        { name: { kor: "소드 퀸", eng: "Queen of Swords" }, img: "images/소드/소드 퀸.jpg" },
        { name: { kor: "소드 킹", eng: "King of Swords" }, img: "images/소드/소드 킹.jpg" },
        
        // 펜타클 (Pentacles)
        { name: { kor: "펜타클 에이스", eng: "Ace of Pentacles" }, img: "images/펜타클/펜타클 에이스.jpg" },
        { name: { kor: "펜타클 2", eng: "Two of Pentacles" }, img: "images/펜타클/펜타클2.jpg" },
        { name: { kor: "펜타클 3", eng: "Three of Pentacles" }, img: "images/펜타클/펜타클3.jpg" },
        { name: { kor: "펜타클 4", eng: "Four of Pentacles" }, img: "images/펜타클/펜타클4.jpg" },
        { name: { kor: "펜타클 5", eng: "Five of Pentacles" }, img: "images/펜타클/펜타클5.jpg" },
        { name: { kor: "펜타클 6", eng: "Six of Pentacles" }, img: "images/펜타클/펜타클6.jpg" },
        { name: { kor: "펜타클 7", eng: "Seven of Pentacles" }, img: "images/펜타클/펜타클7.jpg" },
        { name: { kor: "펜타클 8", eng: "Eight of Pentacles" }, img: "images/펜타클/펜타클8.jpg" },
        { name: { kor: "펜타클 9", eng: "Nine of Pentacles" }, img: "images/펜타클/펜타클9.jpg" },
        { name: { kor: "펜타클 10", eng: "Ten of Pentacles" }, img: "images/펜타클/펜타클10.jpg" },
        { name: { kor: "펜타클 페이지", eng: "Page of Pentacles" }, img: "images/펜타클/펜타클 페이지.jpg" },
        { name: { kor: "펜타클 나이트", eng: "Knight of Pentacles" }, img: "images/펜타클/펜타클 나이트.jpg" },
        { name: { kor: "펜타클 퀸", eng: "Queen of Pentacles" }, img: "images/펜타클/펜타클 퀸.jpg" },
        { name: { kor: "펜타클 킹", eng: "King of Pentacles" }, img: "images/펜타클/펜타클 킹.jpg" }
    ];

    const MAJOR_NAMES = {
        kor: ["바보", "마법사", "여사제", "여황제", "황제", "교황", "연인", "전차", "힘", "은둔자", "운명의 수레바퀴", "정의", "행맨", "죽음", "절제", "악마", "타워", "별", "달", "태양", "심판", "세계"],
        eng: ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World"]
    };

    const SUITS = ['wands','cups','swords','pentacles'];
    const MINOR_LOCALIZATION = {
        kor: { wands: '완드', cups: '컵', swords: '소드', pentacles: '펜타클' },
        eng: { wands: 'Wands', cups: 'Cups', swords: 'Swords', pentacles: 'Pentacles' }
    };

    function getMinorName(lang, suitIndex, rankIndex) {
        const suit = SUITS[suitIndex];
        const suitName = MINOR_LOCALIZATION[lang][suit];
        const rank = rankIndex === 0 ? '에이스' : (rankIndex + 1).toString();
        return `${suitName} ${rank}`;
    }

    function getLocalizedCardNameByIndex(index, lang) {
        if (index < 22) {
            return MAJOR_NAMES[lang][index];
        } else {
            const minorIndex = index - 22;
            const suitIndex = Math.floor(minorIndex / 14);
            const rankIndex = minorIndex % 14;
            return getMinorName(lang, suitIndex, rankIndex);
        }
    }

    const CONFIG = { CARDS_TO_PICK: 4 };

    // --- 3. DOM 요소 캐싱 ---
    const elements = {
        screens: document.querySelectorAll('.screen'),
        langButton: document.getElementById('lang-button'),
        langMenu: document.getElementById('lang-menu'),
        mainShuffleArea: document.getElementById('main-shuffle-area'),
        directInputBtn: document.getElementById('direct-input-btn'),
        fortuneSelectBtn: document.getElementById('fortune-select-btn'),
        fortuneMenu: document.getElementById('fortune-menu'),
        mindQuestionBtn: document.getElementById('mind-question-btn'),
        questionInput: document.getElementById('question-input'),
        backToDialogBtn: document.getElementById('back-to-dialog-btn'),
        submitQuestionBtn: document.getElementById('submit-question-btn'),
        mbtiInput: document.getElementById('mbti-input'),
        mbtiSkipBtn: document.getElementById('mbti-skip-btn'),
        mbtiSubmitBtn: document.getElementById('mbti-submit-btn'),
        startMbtiTestBtn: document.getElementById('start-mbti-test-btn'),
        mbtiProgressBar: document.getElementById('mbti-progress-bar'),
        mbtiProgressText: document.getElementById('mbti-progress-text'),
        mbtiQuestionText: document.getElementById('mbti-question-text'),
        mbtiOptionsContainer: document.getElementById('mbti-options-container'),
        cardSelectScreen: {
            mainTitle: document.getElementById('main-title'),
            counter: document.getElementById('counter'),
            shuffleStatus: document.getElementById('shuffle-status'),
            cardContainer: document.getElementById('card-container'),
            slots: document.getElementById('slots'),
            reshuffleBtn: document.getElementById('reshuffle-btn')
        },
        resultScreen: {
            loadingSection: document.getElementById('loading-section'),
            resultSections: document.getElementById('result-sections'),
            errorContainer: document.createElement('div'),
            cardSection: document.getElementById('individual-cards-section'),
            summarySection: document.getElementById('summary-section'),
            actionPlanSection: document.getElementById('action-plan-section'),
            cardImage: document.getElementById('result-card-image'),
            keywordsArea: document.getElementById('keywords-area'),
            summaryTitle: document.getElementById('summary-title'),
            summaryCardsDisplay: document.getElementById('summary-cards-display'),
            summaryText: document.getElementById('summary-text'),
            actionPlanTitle: document.getElementById('action-plan-title'),
            actionPlanIntro: document.getElementById('action-plan-intro'),
            actionPlanPhases: document.getElementById('action-plan-phases'),
            pdfSaveBtn: document.getElementById('pdf-save-btn'),
            restartBtn: document.getElementById('restart-btn'),
            stagePrevBtn: document.getElementById('prev-stage-btn'),
            stageNextBtn: document.getElementById('next-stage-btn'),
            stageNav: document.querySelector('.stage-navigation'),
        },
        sounds: {
            select: document.getElementById('select-sound'),
            button: document.getElementById('button-sound'),
            shuffle: document.getElementById('shuffle-sound'),
            'card-select': document.getElementById('select-sound'),
            typing: document.getElementById('typing-sound'),
        }
    };

    elements.resultScreen.errorContainer.className = 'error-message-container';

    // --- 4. 핵심 렌더링 및 네비게이션 함수 ---
    
    function render() {
        console.log('render() 호출됨 - 현재 화면:', appState.currentScreen);
        
        elements.screens.forEach(screen => {
            screen.classList.toggle('active', screen.id === appState.currentScreen);
        });
        
        applyTranslations();
        
        switch (appState.currentScreen) {
            case 'mbti-test-screen':
                renderMbtiQuestion();
                break;
            case 'mbti-result-screen':
                if (elements.mbtiResultScreen && elements.mbtiResultScreen.display) {
                    elements.mbtiResultScreen.display.textContent = appState.userMBTI;
                }
                break;
            case 'card-select-screen':
                setupCardSelectScreen();
                break;
            case 'result-screen':
                if (appState.fullResultData) renderResultScreen();
                break;
        }
    }

    function navigateTo(screenId) {
        console.log('navigateTo() 호출됨 - 이동할 화면:', screenId);
        appState.currentScreen = screenId;
        render();
    }

    function resetApp() {
        console.log('resetApp() 호출됨');
        
        // appState 객체를 초기 상태로 리셋
        Object.assign(appState, {
            currentScreen: 'main-screen', userQuestion: '', userMBTI: '',
            selectedCards: [], deck: [], fullResultData: null, resultStage: 0,
            mbti: { answers: [], currentQuestionIndex: 0 }
        });
        
        elements.mbtiInput.value = '';
        elements.questionInput.value = '';
        
        // 언어 선택기 다시 보이게 하기
        const langSwitcher = document.querySelector('.lang-switcher-top-right');
        if (langSwitcher) langSwitcher.style.display = 'block';
        
        render();
    }

    // --- 5. 기능별 함수들 ---
    
    function applyTranslations() {
        const lang = appState.language;
        const t = UI_TEXTS[lang];
        if (!t) return;

        document.documentElement.lang = htmlLangByCode[lang] || 'en';
        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.dataset.i18nKey;
            const value = getNestedTranslation(t, key);
            if (value) el.textContent = value;
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            const value = getNestedTranslation(t, key);
            if (value) el.placeholder = value;
        });
        
        // 언어 버튼의 텍스트를 현재 선택된 언어 코드로 변경
        const langButton = document.getElementById('lang-button');
        if (langButton) {
            const langCodeMap = {
                'kor': 'KO', 'eng': 'EN', 'can': 'CAN', 'vi': 'VI',
                'id': 'ID', 'chn': 'CHN', 'fr': 'FR', 'es': 'ES', 'hin': 'HIN'
            };
            langButton.textContent = langCodeMap[lang] || 'KO';
        }
        
        // 운세 메뉴 동적 생성
        initFortuneMenu();
    }

    function getNestedTranslation(obj, key) {
        return key.split('.').reduce((current, keyPart) => current?.[keyPart], obj);
    }

    function initFortuneMenu() {
        const t = UI_TEXTS[appState.language];
        const fortuneOptions = getNestedTranslation(t, 'fortuneOptions');
        if (!fortuneOptions) return;
        
        elements.fortuneMenu.innerHTML = '';
        Object.keys(fortuneOptions).forEach(key => {
            const li = document.createElement('li');
            li.dataset.questionKey = key;
            li.textContent = fortuneOptions[key];
            li.onclick = () => {
                appState.userQuestion = fortuneOptions[key];
                elements.fortuneMenu.classList.remove('show');
                navigateTo('mbti-entry-screen');
            };
            elements.fortuneMenu.appendChild(li);
        });
    }

    function playSound(soundName) {
        const sound = elements.sounds[soundName];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log('Sound play failed:', e));
        }
    }

    function shuffleDeck() {
        appState.deck = [...Array(78).keys()].sort(() => Math.random() - 0.5);
    }

    function setupCardSelectScreen() {
        console.log('setupCardSelectScreen() 호출됨');
        
        const cardContainer = document.getElementById('card-container');
        const shuffleStatus = document.getElementById('shuffle-status');
        const reshuffleBtn = document.getElementById('reshuffle-btn');
        
        if (!cardContainer || !shuffleStatus || !reshuffleBtn) {
            console.error('카드 선택 화면의 필수 요소가 없습니다.');
            return;
        }

        cardContainer.innerHTML = '';
        appState.selectedCards = []; // 선택된 카드 초기화
        
        updateCardCounter();
        shuffleStatus.textContent = UI_TEXTS[appState.language]?.shuffleStatus?.playing || '카드를 섞는 중...';
        shuffleStatus.style.opacity = '1';
        reshuffleBtn.style.display = 'none';

        playSound('shuffle');

        setTimeout(() => {
            stopShuffleSound();
            shuffleStatus.style.opacity = '0';
            createCards();
            reshuffleBtn.style.display = 'block';
        }, 1500);
    }

    function createCards() {
        console.log('createCards() 호출됨');
        
        const cardContainer = document.getElementById('card-container');
        const shuffleStatus = document.getElementById('shuffle-status');

        if (!cardContainer || !shuffleStatus) return;

        // 덱에서 처음 12장의 카드를 가져와서 부채꼴로 배치
        const cardsToShow = appState.deck.slice(0, 12);
        
        cardsToShow.forEach((cardIndex, i) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.cardIndex = cardIndex;
            
            const img = document.createElement('img');
            img.src = tarotData[cardIndex].img;
            img.alt = getLocalizedCardNameByIndex(cardIndex, appState.language);
            img.draggable = false;
            
            card.appendChild(img);
            cardContainer.appendChild(card);
            
            // 부채꼴 배치를 위한 각도 계산
            const angle = (i - 6) * 15; // -90도에서 +90도까지
            const x = Math.sin(angle * Math.PI / 180) * 100;
            const y = Math.cos(angle * Math.PI / 180) * 50;
            
            card.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
            card.style.position = 'absolute';
            card.style.left = '50%';
            card.style.top = '50%';
            card.style.marginLeft = '-75px';
            card.style.marginTop = '-100px';
            card.style.transition = 'all 0.3s ease';
            card.style.cursor = 'pointer';
            card.style.zIndex = 12 - i;
            
            // 카드 클릭 이벤트
            card.addEventListener('click', () => handleCardClick(card, cardIndex));
        });
    }

    function handleCardClick(card, cardIndex) {
        if (appState.selectedCards.includes(cardIndex)) return;
        
        playSound('card-select');
        appState.selectedCards.push(cardIndex);
        
        // 카드를 슬롯으로 이동
        const slotIndex = appState.selectedCards.length - 1;
        const slot = document.getElementById(`slot${slotIndex + 1}`);
        if (slot) {
            const cardClone = card.cloneNode(true);
            cardClone.style.transform = 'none';
            cardClone.style.position = 'static';
            cardClone.style.margin = '0';
            cardClone.style.zIndex = '1';
            slot.appendChild(cardClone);
        }
        
        // 원본 카드 숨기기
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
        
        updateCardCounter();
        
        // 4장 모두 선택되면 결과 화면으로 이동
        if (appState.selectedCards.length === 4) {
            setTimeout(() => {
                fetchFullReading();
            }, 1000);
        }
    }

    function updateCardCounter() {
        const counter = document.getElementById('counter');
        const mainTitle = document.getElementById('main-title');
        const left = CONFIG.CARDS_TO_PICK - appState.selectedCards.length;
        
        if (counter) {
            counter.textContent = `${left} cards left.`;
        }
        
        if (left === 0 && mainTitle) {
            mainTitle.textContent = '선택이 완료되었습니다.';
        }
    }

    function reshuffleCards() {
        playSound('button');
        // '이어서 선택하기'가 아닌, 완전히 새로 시작하는 로직
        appState.selectedCards = []; 
        setupCardSelectScreen();
    }

    function stopShuffleSound() {
        const shuffleSound = elements.sounds.shuffle;
        if (shuffleSound) {
            shuffleSound.pause();
            shuffleSound.currentTime = 0;
        }
    }

    // MBTI 관련 함수들
    function startMbtiTest() {
        appState.mbti.currentQuestionIndex = 0;
        appState.mbti.answers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        navigateTo('mbti-test-screen');
    }

    function renderMbtiQuestion() {
        const lang = appState.language;
        // MBTI_TEST_DATA는 translation.js에 있다고 가정합니다.
        const testData = MBTI_TEST_DATA[lang]; 
        const index = appState.mbti.currentQuestionIndex;

        if (!testData || !testData.questions[index]) {
            console.error(`MBTI 질문을 찾을 수 없습니다: lang=${lang}, index=${index}`);
            return;
        }

        const questionData = testData.questions[index];
        const scale = UI_TEXTS[lang].answerScale;

        // 진행률 표시
        const progress = ((index + 1) / testData.questions.length) * 100;
        elements.mbtiProgressBar.style.width = `${progress}%`;
        elements.mbtiProgressText.textContent = `${index + 1} / ${testData.questions.length}`;

        // 질문 표시
        elements.mbtiQuestionText.textContent = questionData.text;

        // 👇 [핵심 수정] 5단계 답변 버튼을 직접 생성합니다.
        elements.mbtiOptionsContainer.innerHTML = `
            <div class="mbti-button-group">
                <button class="mbti-option-scale" data-score="2">${scale.agree_strong}</button>
                <button class="mbti-option-scale" data-score="1">${scale.agree}</button>
                <button class="mbti-option-scale" data-score="0">${scale.neutral}</button>
                <button class="mbti-option-scale" data-score="-1">${scale.disagree}</button>
                <button class="mbti-option-scale" data-score="-2">${scale.disagree_strong}</button>
            </div>
        `;

        elements.mbtiOptionsContainer.querySelectorAll('button').forEach(btn => {
            btn.onclick = (e) => handleMbtiAnswer(parseInt(e.target.dataset.score));
        });
    }

    function handleMbtiAnswer(score) {
        playSound('button');
        
        const lang = appState.language;
        const testData = MBTI_TEST_DATA[lang];
        const index = appState.mbti.currentQuestionIndex;
        const questionData = testData.questions[index];
        
        // score_type에 따라 점수 누적
        const scoreType = questionData.score_type;
        if (scoreType && appState.mbti.answers[scoreType] !== undefined) {
            appState.mbti.answers[scoreType] += score;
        }

        appState.mbti.currentQuestionIndex++;

        // 모든 질문 완료 시 결과 계산
        if (appState.mbti.currentQuestionIndex >= testData.questions.length) {
            const mbtiResult = calculateMBTIResult(appState.mbti.answers);
            appState.userMBTI = mbtiResult;
            navigateTo('mbti-result-screen');
        } else {
            // 다음 질문으로 자동 진행
            setTimeout(() => {
                renderMbtiQuestion();
            }, 500);
        }
    }

    function calculateMBTIResult(answers) {
        const scores = answers;
        const threshold = 0;
        
        let result = '';
        result += scores.E > 0 ? (scores.E > threshold ? 'E' : 'e') : (scores.E < -threshold ? 'I' : 'i');
        result += scores.S > 0 ? (scores.S > threshold ? 'S' : 's') : (scores.S < -threshold ? 'N' : 'n');
        result += scores.T > 0 ? (scores.T > threshold ? 'T' : 't') : (scores.T < -threshold ? 'F' : 'f');
        result += scores.P > 0 ? (scores.P > threshold ? 'P' : 'p') : (scores.P < -threshold ? 'J' : 'j');

        return result;
    }

    // API 호출 및 결과 렌더링 함수들
    async function fetchFullReading() {
        navigateTo('result-screen');
        elements.resultScreen.loadingSection.style.display = 'flex';
        elements.resultScreen.resultSections.style.display = 'none';
        
        try {
            const cardNames = appState.selectedCards.map(index => getLocalizedCardNameByIndex(index, appState.language));
            const response = await fetch('/api/interpret', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    cardNames,
                    question: appState.userQuestion,
                    mbti: appState.userMBTI,
                    language: appState.language
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP 에러: ${response.status}`);
            }

            const result = await response.json();
            if (!result.success || !result.data?.cardInterpretations || !result.data?.overallReading) {
                throw new Error('API로부터 받은 데이터 형식이 올바르지 않습니다.');
            }

            appState.fullResultData = result.data;
            appState.currentResultIndex = 0;
            render();
        } catch (error) {
            console.error("API Error:", error);
            elements.resultScreen.loadingSection.innerHTML = `
                <div class="error-message">
                    <h3>오류가 발생했습니다</h3>
                    <p>${error.message}</p>
                    <button id="error-restart-btn">처음으로 돌아가기</button>
                </div>
            `;
            document.getElementById('error-restart-btn').onclick = resetApp;
        }
    }

    function renderResultScreen() {
        elements.resultScreen.loadingSection.style.display = 'none';
        elements.resultScreen.resultSections.style.display = 'block';
        
        // 결과 화면 렌더링 로직
        const { cardInterpretations, overallReading } = appState.fullResultData;
        
        // 개별 카드 해석 표시
        if (cardInterpretations && cardInterpretations.length > 0) {
            const firstCard = cardInterpretations[0];
            elements.resultScreen.cardImage.src = tarotData[appState.selectedCards[0]].img;
            elements.resultScreen.summaryText.textContent = firstCard.interpretation;
        }
        
        // 총정리 표시
        if (overallReading) {
            elements.resultScreen.summaryTitle.textContent = overallReading.title || '카드 조합 총정리';
            elements.resultScreen.summaryText.textContent = overallReading.summary || '';
        }
    }

    // --- 6. 앱 초기화 및 이벤트 리스너 등록 ---
    
    function initializeApp() {
        console.log('initializeApp() 호출됨');
        initEventListeners();
        initBackgroundMusic();
        resetApp();
    }
    
    function initEventListeners() {
        console.log('initEventListeners() 호출됨');
        
        // 언어 변경
        elements.langButton.addEventListener('click', (e) => {
            playSound('button');
            e.stopPropagation();
            elements.langMenu.classList.toggle('show');
        });

        // 언어 메뉴 동적 생성
        const languages = [
            { code: 'kor', name: 'KOR' }, { code: 'eng', name: 'ENG' },
            { code: 'can', name: 'CAN' }, { code: 'vi', name: 'VI' },
            { code: 'id', name: 'ID' }, { code: 'chn', name: 'CHN' },
            { code: 'fr', name: 'FR' }, { code: 'es', name: 'ES' },
            { code: 'hin', name: 'HIN' }
        ];
        
        elements.langMenu.innerHTML = '';
        languages.forEach(lang => {
            const li = document.createElement('li');
            li.textContent = lang.name;
            li.dataset.lang = lang.code;
            li.addEventListener('click', () => {
                playSound('button');
                appState.language = lang.code;
                elements.langMenu.classList.remove('show');
                render();
            });
            elements.langMenu.appendChild(li);
        });

        // 메뉴 바깥 클릭 시 메뉴 닫기
        document.addEventListener('click', () => {
            if (elements.langMenu.classList.contains('show')) {
                elements.langMenu.classList.remove('show');
            }
        });

        // 메인 화면 -> 질문 선택
        elements.mainShuffleArea.addEventListener('click', () => {
            playSound('select');
            // 언어 선택기 숨기기 (기본 한국어로 진행)
            const langSwitcher = document.querySelector('.lang-switcher-top-right');
            if (langSwitcher) {
                langSwitcher.style.display = 'none';
            }
            navigateTo('question-dialog-screen');
        });
        
        // 질문 방식 선택
        elements.directInputBtn.addEventListener('click', () => {
            playSound('button');
            navigateTo('custom-question-screen');
        });
        
        elements.fortuneSelectBtn.addEventListener('click', (e) => {
            playSound('button');
            e.stopPropagation();
            elements.fortuneMenu.classList.toggle('show');
        });
        
        elements.mindQuestionBtn.addEventListener('click', () => {
            playSound('button');
            appState.userQuestion = '';
            navigateTo('mbti-entry-screen');
        });
        
        // 질문 입력
        elements.backToDialogBtn.addEventListener('click', () => {
            playSound('button');
            navigateTo('question-dialog-screen');
        });
        
        elements.submitQuestionBtn.addEventListener('click', () => {
            playSound('button');
            appState.userQuestion = elements.questionInput.value.trim();
            navigateTo('mbti-entry-screen');
        });
        
        // MBTI 입력
        elements.mbtiSkipBtn.addEventListener('click', () => {
            console.log('MBTI 건너뛰기 버튼 클릭됨');
            playSound('button');
            appState.userMBTI = '';
            shuffleDeck();
            navigateTo('card-select-screen');
        });
        
        elements.mbtiSubmitBtn.addEventListener('click', () => {
            playSound('button');
            const mbti = elements.mbtiInput.value.trim().toUpperCase();
            if (mbti.length !== 4) {
                alert('올바른 MBTI 4글자를 입력해주세요.');
                return;
            }
            appState.userMBTI = mbti;
            shuffleDeck();
            navigateTo('card-select-screen');
        });
        
        elements.startMbtiTestBtn.addEventListener('click', () => {
            playSound('button');
            startMbtiTest();
        });
        
        // 다시 셔플 버튼
        elements.cardSelectScreen.reshuffleBtn.addEventListener('click', reshuffleCards);
        
        // 결과 화면 버튼들
        elements.resultScreen.restartBtn.addEventListener('click', () => {
            playSound('button');
            resetApp();
        });
        
        elements.resultScreen.pdfSaveBtn.addEventListener('click', () => {
            playSound('button');
            generatePDF();
        });
    }

    function initBackgroundMusic() {
        // 배경음악 초기화 (필요시)
    }

    function generatePDF() {
        // PDF 생성 로직 (필요시)
        alert('PDF 생성 기능은 준비 중입니다.');
    }

    // --- 앱 시작! ---
    console.log('앱 시작 - initializeApp() 호출');
    initializeApp();
});