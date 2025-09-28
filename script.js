// 📁 script.js (전체 교체 - 최종 완성 버전)

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 데이터 및 설정 (Data & Config) ---
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
        
        // 소드 (22-31)
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
        
        // 완드 (32-41)
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
        
        // 컵 (42-51)
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
        
        // 펜타클 (52-61)
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
    
    function getLocalizedCardNameByIndex(index, language) {
        const card = tarotData[index];
        return card ? card.name[language] || card.name.kor : `Card ${index}`;
    }
    
    const CONFIG = {
        CARDS_TO_PICK: 4
    };

    // --- 2. 상태 관리 (State Management) ---
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
        shufflePlaying: false,
        cardRevealed: [],
        summaryRevealed: false,
        actionPlan: {
            phases: [],
            currentPhase: 0,
            revealed: false,
            initialized: false,
            introRevealed: false,
            navTimer: null,
        },
        typing: {
            isRunning: false,
            timer: null,
            holdTimer: null,
            element: null,
            speed: 25,
        },
        loading: {
            timer: null,
            holdTimer: null,
        },
        mbti: {
            answers: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
            currentQuestionIndex: 0,
        }
    };

    // --- 3. 요소 가져오기 (DOM Elements) ---
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
        mbtiResultScreen: {
            display: document.getElementById('mbti-result-display'),
            proceedBtn: document.getElementById('proceed-to-cards-btn'),
        },
        mbtiBackBtn: document.getElementById('mbti-back-btn'),
        cardSelectScreen: {
            cardsLeftText: document.getElementById('cards-left-text'),
            shuffleArea: document.getElementById('shuffle-animation-area'),
            previewArea: document.getElementById('selected-cards-preview'),
            shuffleStatus: document.getElementById('shuffle-status'),
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
    if (elements.sounds.shuffle) {
        elements.sounds.shuffle.loop = true;
    }

    // --- 4. 핵심 로직 (Core Logic) ---

    // 앱 상태에 따라 화면을 렌더링하는 유일한 함수
    function render() {
        // 화면 전환
        elements.screens.forEach(screen => {
            screen.style.display = screen.id === appState.currentScreen ? 'flex' : 'none';
        });

        // 다국어 텍스트 적용
        applyTranslations();

        // 각 화면별 특수 렌더링 로직
        switch (appState.currentScreen) {
            case 'mbti-test-screen':
                renderMbtiQuestion();
                break;
            case 'mbti-result-screen':
                elements.mbtiResultScreen.display.textContent = appState.userMBTI;
                break;
            case 'card-select-screen':
                renderCardSelectScreen();
                break;
            case 'result-screen':
                if (appState.fullResultData) {
                    renderResultScreen();
                }
                break;
        }
    }
    
    // 화면 전환 및 렌더링 트리거 함수
    function navigateTo(screenId) {
        appState.currentScreen = screenId;
        render();
    }
    
    // 앱 초기화
    function resetApp() {
        stopShuffleSound();
        stopTypingEffect();
        stopLoadingTyping();
        Object.assign(appState, {
            currentScreen: 'main-screen', userQuestion: '', userMBTI: '',
            selectedCards: [], deck: [], fullResultData: null, resultStage: 0, shufflePlaying: false,
            cardRevealed: [],
            summaryRevealed: false,
            actionPlan: { phases: [], currentPhase: 0, revealed: false, initialized: false, introRevealed: false, navTimer: null },
            typing: { isRunning: false, timer: null, holdTimer: null, element: null, speed: 30 },
            loading: { timer: null, holdTimer: null },
            mbti: { answers: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }, currentQuestionIndex: 0 }
        });
        elements.mbtiInput.value = '';
        elements.questionInput.value = '';
        elements.cardSelectScreen.previewArea.innerHTML = '';
        render();
    }

    // --- 5. 기능별 함수들 ---

    // 다국어 적용 (운세 메뉴 동적 생성 포함)
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
        
        // 운세 메뉴 동적 생성
        initFortuneMenu();
        if (elements.cardSelectScreen.shuffleStatus) {
            elements.cardSelectScreen.shuffleStatus.textContent = '';
        }
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
                playSound('button');
                appState.userQuestion = fortuneOptions[key];
                elements.fortuneMenu.classList.remove('show');
                navigateTo('mbti-entry-screen');
            };
            elements.fortuneMenu.appendChild(li);
        });
    }
    
    function getNestedTranslation(translations, key) {
        return key.split('.').reduce((obj, k) => obj && obj[k], translations);
    }

    function tShuffleStatus(state) {
        const langStatuses = UI_TEXTS[appState.language]?.shuffleStatus;
        if (langStatuses && langStatuses[state]) return langStatuses[state];
        const engStatuses = UI_TEXTS.eng?.shuffleStatus;
        return engStatuses && engStatuses[state] ? engStatuses[state] : '';
    }

    function startShuffleSound() {
        if (!elements.sounds.shuffle) return;
        elements.sounds.shuffle.currentTime = 0;
        elements.sounds.shuffle.play().catch(err => console.error('shuffle sound play failed', err));
        appState.shufflePlaying = true;
        if (elements.cardSelectScreen.shuffleStatus) {
            elements.cardSelectScreen.shuffleStatus.textContent = tShuffleStatus('playing');
        }
    }

    function stopShuffleSound() {
        if (!elements.sounds.shuffle) return;
        elements.sounds.shuffle.pause();
        elements.sounds.shuffle.currentTime = 0;
        appState.shufflePlaying = false;
        if (elements.cardSelectScreen.shuffleStatus) {
            elements.cardSelectScreen.shuffleStatus.textContent = tShuffleStatus('completed');
        }
    }
    
    // 덱 셔플
function shuffleDeck() {
        appState.deck = [...Array(78).keys()].sort(() => Math.random() - 0.5);
    }
    
    // --- [업데이트] MBTI 로직 ---
    function startMbtiTest() {
        appState.mbti.currentQuestionIndex = 0;
        appState.mbti.answers = []; // 답변을 점수 배열로 저장
        navigateTo('mbti-test-screen');
    }

    function renderMbtiQuestion() {
        const lang = appState.language;
        const testData = MBTI_TEST_DATA[lang];
        const index = appState.mbti.currentQuestionIndex;
        const questionData = testData.questions[index];
        const scale = UI_TEXTS[lang].answerScale;
        const container = elements.mbtiOptionsContainer.querySelector('.mbti-button-group');

        elements.mbtiQuestionText.textContent = questionData.text;
        container.innerHTML = `
            <button class="mbti-option-scale" data-score="2">${scale.agree_strong}</button>
            <button class="mbti-option-scale" data-score="1">${scale.agree}</button>
            <button class="mbti-option-scale" data-score="0">${scale.neutral}</button>
            <button class="mbti-option-scale" data-score="-1">${scale.disagree}</button>
            <button class="mbti-option-scale" data-score="-2">${scale.disagree_strong}</button>
        `;

        container.querySelectorAll('button').forEach(btn => {
            btn.onclick = (e) => handleMbtiAnswer(parseInt(e.target.dataset.score));
        });

        const progress = ((index + 1) / testData.questions.length) * 100;
        elements.mbtiProgressBar.style.width = `${progress}%`;
        elements.mbtiProgressText.textContent = `${index + 1} / ${testData.questions.length}`;

        // 뒤로 버튼 표시/숨김 처리
        if (elements.mbtiBackBtn) {
            if (index === 0) {
                // 1단계: "새로 MBTI 측정하기 귀찮네.. 그냥 skip하자" 의미
                elements.mbtiBackBtn.textContent = '건너뛰기';
                elements.mbtiBackBtn.style.display = 'inline-block';
            } else {
                // 2-20단계: "이전 단계에서 잘못 클릭했네.. 뒤로 가서 수정해야지" 의미
                elements.mbtiBackBtn.textContent = '뒤로';
                elements.mbtiBackBtn.style.display = 'inline-block';
            }
        }
    }
    
    function handleMbtiAnswer(score) {
        playSound('button');
        appState.mbti.answers[appState.mbti.currentQuestionIndex] = score;
        appState.mbti.currentQuestionIndex++;

        if (appState.mbti.currentQuestionIndex < MBTI_TEST_DATA.kor.questions.length) {
            render();
        } else {
            const result = calculateMbti();
            appState.userMBTI = result;
            navigateTo('mbti-result-screen');
        }
    }
    
    function calculateMbti() {
        const scores = { E: 0, N: 0, F: 0, P: 0 };
        const questions = MBTI_TEST_DATA.kor.questions;

        appState.mbti.answers.forEach((score, index) => {
            const question = questions[index];
            const weight = question.killer ? 2 : 1;
            const finalScore = score * weight;

            switch(question.score_type) {
                case 'E': scores.E += finalScore; break;
                case 'I': scores.E -= finalScore; break;
                case 'N': scores.N += finalScore; break;
                case 'S': scores.N -= finalScore; break;
                case 'F': scores.F += finalScore; break;
                case 'T': scores.F -= finalScore; break;
                case 'P': scores.P += finalScore; break;
                case 'J': scores.P -= finalScore; break;
            }
        });

        const threshold = 6; // 강/약 구분을 위한 임계값
        let result = "";
        result += scores.E > 0 ? (scores.E > threshold ? 'E' : 'e') : (scores.E < -threshold ? 'I' : 'i');
        result += scores.N > 0 ? (scores.N > threshold ? 'N' : 'n') : (scores.N < -threshold ? 'S' : 's');
        result += scores.F > 0 ? (scores.F > threshold ? 'F' : 'f') : (scores.F < -threshold ? 'T' : 't');
        result += scores.P > 0 ? (scores.P > threshold ? 'P' : 'p') : (scores.P < -threshold ? 'J' : 'j');

        return result;
    }

    // 카드 선택 로직
    function renderCardSelectScreen() {
        if (!appState.shufflePlaying && appState.selectedCards.length < CONFIG.CARDS_TO_PICK) {
            startShuffleSound();
        }
        const cardsLeft = CONFIG.CARDS_TO_PICK - appState.selectedCards.length;
        elements.cardSelectScreen.cardsLeftText.textContent = `${cardsLeft} cards left.`;
        if (elements.cardSelectScreen.shuffleStatus) {
            if (appState.shufflePlaying) {
                elements.cardSelectScreen.shuffleStatus.textContent = tShuffleStatus('playing');
            } else if (appState.selectedCards.length === CONFIG.CARDS_TO_PICK) {
                elements.cardSelectScreen.shuffleStatus.textContent = tShuffleStatus('completed');
            } else {
                elements.cardSelectScreen.shuffleStatus.textContent = '';
            }
        }
    }
    
    function selectCard() {
        if (appState.selectedCards.length >= CONFIG.CARDS_TO_PICK) return;
        if (!appState.shufflePlaying) {
            startShuffleSound();
        }
        playSound('select');
        const cardIndex = appState.deck.pop();
        appState.selectedCards.push(cardIndex);

        const img = document.createElement('img');
        img.src = tarotData[cardIndex].img;
        elements.cardSelectScreen.previewArea.appendChild(img);
        
        render();

        if (appState.selectedCards.length === CONFIG.CARDS_TO_PICK) {
            stopShuffleSound();
            setTimeout(fetchFullReading, 1000);
        }
    }
    
    // API 호출 (에러 처리 강화)
    async function fetchFullReading() {
        stopShuffleSound();
        navigateTo('result-screen');
        elements.resultScreen.loadingSection.style.display = 'flex';
        elements.resultScreen.resultSections.style.display = 'none';
        startLoadingTyping();

        try {
            const cardNames = appState.selectedCards.map(index => getLocalizedCardNameByIndex(index, appState.language));

            const response = await fetch('/api/interpret', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cardNames, question: appState.userQuestion, mbti: appState.userMBTI, language: appState.language }),
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
            appState.resultStage = 0;
            render();

    } catch (error) {
            console.error("API Error:", error);
            let errorMessage = '오류가 발생했습니다. 잠시 후 다시 시도해주세요.'; // 기본 메시지

            const errorStr = error.message.toLowerCase();
            
            if (errorStr.includes('404')) {
                errorMessage = 'API 모델을 찾을 수 없습니다. 서비스 점검 중일 수 있습니다.';
            } else if (errorStr.includes('403') || errorStr.includes('permission denied')) {
                errorMessage = 'API 인증에 문제가 있습니다. 관리자에게 문의해주세요.';
            } else if (errorStr.includes('429') || errorStr.includes('quota')) {
                errorMessage = 'API 사용량이 초과되었습니다. 잠시 후 다시 시도해주세요.';
            } else if (errorStr.includes('failed to fetch')) {
                errorMessage = '서버에 연결할 수 없습니다. 인터넷 연결을 확인해주세요.';
            }
            
        stopLoadingTyping();
        elements.resultScreen.loadingSection.innerHTML = `
            <div class="error-message">
                <h3>오류 발생</h3>
                <p>${errorMessage}</p>
                <button id="error-restart-btn-2">처음으로 돌아가기</button>
            </div>
        `;
        document.getElementById('error-restart-btn-2').onclick = resetApp;
        }
    }

    function renderResultScreen() {
        stopLoadingTyping();
        elements.resultScreen.loadingSection.style.display = 'none';
        elements.resultScreen.resultSections.style.display = 'block';

        const { overallReading } = appState.fullResultData;

        // 총정리 데이터 미리 채우기
        elements.resultScreen.summaryTitle.textContent = overallReading.title;
        elements.resultScreen.summaryCardsDisplay.innerHTML = '';
        appState.selectedCards.forEach(cardIndex => {
            const cardContainer = document.createElement('div');
            cardContainer.className = 'summary-card-container';
            
            const img = document.createElement('img');
            img.src = tarotData[cardIndex].img;
            
            const cardName = document.createElement('div');
            cardName.className = 'summary-card-name';
            cardName.textContent = getLocalizedCardNameByIndex(cardIndex, appState.language);
            
            cardContainer.appendChild(img);
            cardContainer.appendChild(cardName);
            elements.resultScreen.summaryCardsDisplay.appendChild(cardContainer);
        });

        // 첫 번째 스테이지(개별 카드 1)부터 시작
        updateResultStageContent();
    }

    function updateResultStageContent() {
        const { cardInterpretations, overallReading } = appState.fullResultData;
        const stage = appState.resultStage;

        stopTypingEffect();
        // 모든 섹션과 네비게이션 버튼을 초기에 숨김
        elements.resultScreen.cardSection.style.display = 'none';
        elements.resultScreen.summarySection.style.display = 'none';
        elements.resultScreen.actionPlanSection.style.display = 'none';
        elements.resultScreen.stageNav.style.display = 'none';
        document.querySelector('.bottom-navigation').style.display = 'none';

        if (stage < cardInterpretations.length) {
            // --- 1. 개별 카드 해석 단계 ---
            elements.resultScreen.cardSection.style.display = 'block';
            prepareCardStage(stage, cardInterpretations[stage].interpretation);
        } else if (stage === cardInterpretations.length) {
            // --- 2. 총정리 단계 ---
            elements.resultScreen.summarySection.style.display = 'block';
            const summaryKeywordsContainer = document.getElementById('summary-keywords');
            if (summaryKeywordsContainer) {
                summaryKeywordsContainer.innerHTML = buildKeywordsHtml(overallReading.keywords);
            }
            startTypingEffect(elements.resultScreen.summaryText, overallReading.summary, () => {
                revealStageButtons('summary'); // 타이핑 완료 후 버튼 표시
            });
        } else {
            // --- 3. 액션 플랜 단계 ---
            elements.resultScreen.actionPlanSection.style.display = 'block';
            renderActionPlanStages();
            document.querySelector('.bottom-navigation').style.display = 'flex'; // PDF/처음으로 버튼 표시
        }
    }

    function renderActionPlanStages() {
        const { overallReading } = appState.fullResultData;
        const plan = overallReading.mbtiActionPlan;
        
        const mbtiType = appState.userMBTI || '당신';
        const title = `${mbtiType}을 위한 현실 조언`;
        if (elements.resultScreen.actionPlanTitle) {
            elements.resultScreen.actionPlanTitle.textContent = title;
        }
        
        // 모든 단계를 한 번에 표시
        const container = document.getElementById('action-plan-container');
        const navigation = document.getElementById('action-plan-navigation');
        
        if (container && navigation) {
            // 네비게이션 숨기기
            navigation.style.display = 'none';
            
            // 전체 콘텐츠 생성
            let fullContent = `
                <div class="action-plan-intro">
                    <p>${plan.introduction}</p>
                </div>
            `;
            
            plan.phases.forEach((phase, index) => {
                fullContent += `
                    <div class="action-plan-stage">
                        <h3 class="stage-title">${phase.phaseTitle}</h3>
                        <ul class="stage-steps">
                            ${phase.steps.map(step => `<li>${step}</li>`).join('')}
                        </ul>
                    </div>
                    ${index < plan.phases.length - 1 ? '<div class="stage-divider"></div>' : ''}
                `;
            });
            
            container.innerHTML = fullContent;
            container.className = 'action-plan-full-scroll';
        }
    }
    
    function showActionPlanPhase(phaseIndex) {
        stopTypingEffect(); // 이전 타이핑 중지

        const container = document.getElementById('action-plan-container');
        const prevBtn = document.getElementById('action-phase-prev');
        const nextBtn = document.getElementById('action-phase-next');
        const navigation = document.getElementById('action-plan-navigation');

        if (!container || !navigation) return;

        container.innerHTML = ''; // 컨테이너 초기화
        navigation.style.display = 'flex'; // 네비게이션 버튼 표시

        const phaseData = appState.actionPlan.phases[phaseIndex];
        
        if (phaseIndex === 0) { // 인트로 화면
            const introEl = document.createElement('p');
            container.appendChild(introEl);
            startTypingEffect(introEl, phaseData.steps[0]);
        } else { // 1, 2, 3단계 화면
            const phaseHtml = `
                <div class="phase">
                    <h4 class="phase-title">${phaseData.phaseTitle}</h4>
                    <ul class="phase-steps"></ul>
                </div>
            `;
            container.innerHTML = phaseHtml;
            
            const stepsContainer = container.querySelector('.phase-steps');
            const fullText = phaseData.steps.map(step => `<li>${step}</li>`).join('');
            
            // 1/2/3단계는 즉시 표시되도록 수정 (타이핑 효과는 인트로에만 적용)
            stepsContainer.innerHTML = fullText;
        }

        // 버튼 상태 업데이트
        if (prevBtn) {
            prevBtn.disabled = phaseIndex === 0;
        }
        if (nextBtn) {
            nextBtn.disabled = phaseIndex === appState.actionPlan.phases.length - 1;
        }
        
        appState.actionPlan.currentPhase = phaseIndex;
    }

    function navigateResultStage(direction) {
        const { cardInterpretations } = appState.fullResultData;
        const totalStages = cardInterpretations.length + 2;
        const nextStage = appState.resultStage + direction;
        if (nextStage < 0 || nextStage >= totalStages) return;
        playSound('button');
        appState.resultStage = nextStage;
        updateResultStageContent();
    }
    
    function startLoadingTyping() {
        stopLoadingTyping();
        startCometAnimation();
    }

    function startCometAnimation() {
        const canvas = document.getElementById('comet-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const w = canvas.width;
        const h = canvas.height;

        // ⭐ 별자리 배경
        const stars = [];
        for (let i = 0; i < 200; i++) {
            stars.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.5,
                opacity: Math.random()
            });
        }

        // ☄️ 혜성
        const comet = {
            x: Math.random() < 0.5 ? -100 : w + 100, // 왼쪽/오른쪽 랜덤 시작
            y: Math.random() * h,
            targetX: w / 2,
            targetY: h / 2,
            size: 6,
            progress: 0 // 0 ~ 1
        };

        const duration = 8000; // 8초간 이동
        const startTime = Date.now();

        // 사운드 효과 시작
        playCometSounds();

        function drawStars() {
            for (let star of stars) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
                ctx.fill();
                star.opacity += (Math.random() - 0.5) * 0.05;
                if (star.opacity < 0) star.opacity = 0;
                if (star.opacity > 1) star.opacity = 1;
            }
        }

        function drawComet() {
            const elapsed = Date.now() - startTime;
            comet.progress = Math.min(elapsed / duration, 1);

            comet.x = (1 - comet.progress) * comet.x + comet.progress * comet.targetX;
            comet.y = (1 - comet.progress) * comet.y + comet.progress * comet.targetY;

            // 꼬리 그리기
            const gradient = ctx.createRadialGradient(
                comet.x, comet.y, 0,
                comet.x, comet.y, 100
            );
            gradient.addColorStop(0, "rgba(255,255,255,0.8)");
            gradient.addColorStop(1, "rgba(255,255,255,0)");

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(comet.x, comet.y, 100, 0, Math.PI * 2);
            ctx.fill();

            // 혜성 본체
            ctx.beginPath();
            ctx.arc(comet.x, comet.y, comet.size + comet.progress * 10, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.shadowBlur = 30;
            ctx.shadowColor = "white";
            ctx.fill();
            ctx.shadowBlur = 0;

            // 도착하면 화면 플래시 효과
            if (comet.progress === 1) {
                setTimeout(() => {
                    showArrivalFlash();
                }, 500);
            }
        }

        function animate() {
            ctx.clearRect(0, 0, w, h);
            drawStars();
            drawComet();
            requestAnimationFrame(animate);
        }

        animate();
    }

    function playCometSounds() {
        // 배경 앰비언트 사운드 (cosmic.mp3)
        const cosmicSound = new Audio('sounds/cosmic.mp3');
        cosmicSound.volume = 0.15; // 15% 볼륨
        cosmicSound.loop = true;
        cosmicSound.play().catch(e => console.error('Cosmic sound play failed:', e));

        // 혜성 이동 사운드 (whoosh.mp3) - 중간에 재생
        setTimeout(() => {
            const whooshSound = new Audio('sounds/whoosh.mp3');
            whooshSound.volume = 0.3;
            whooshSound.play().catch(e => console.error('Whoosh sound play failed:', e));
        }, 3000);

        // 도착 임팩트 사운드 (singingbowl.mp3) - 7.5초 후
        setTimeout(() => {
            const impactSound = new Audio('sounds/singingbowl.mp3');
            impactSound.volume = 0.6;
            impactSound.play().catch(e => console.error('Impact sound play failed:', e));
        }, 7500);
    }

    function showArrivalFlash() {
        // 화면 플래시 효과
        const flash = document.createElement('div');
        flash.style.position = 'fixed';
        flash.style.top = '0';
        flash.style.left = '0';
        flash.style.width = '100%';
        flash.style.height = '100%';
        flash.style.background = 'rgba(255, 255, 255, 0.8)';
        flash.style.zIndex = '9999';
        flash.style.animation = 'flashEffect 0.5s ease-out';
        
        document.body.appendChild(flash);
        
        setTimeout(() => {
            document.body.removeChild(flash);
        }, 500);
    }

    function stopLoadingTyping() {
        // 기존 타이핑 관련 타이머 정리
        if (appState.loading.timer) {
            clearInterval(appState.loading.timer);
            appState.loading.timer = null;
        }
        if (appState.loading.holdTimer) {
            clearInterval(appState.loading.holdTimer);
            appState.loading.holdTimer = null;
        }
        
        // 기존 타이핑 사운드 중지
        const typingSound = elements.sounds.typing;
        if (typingSound) {
            typingSound.pause();
            typingSound.currentTime = 0;
        }
        
        // 혜성 애니메이션 정리
        const canvas = document.getElementById('comet-canvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    function startTypingEffect(element, fullText, onComplete) {
        stopTypingEffect();
        if (!element) return;
        let index = 0;
        element.textContent = '';
        element.classList.add('typing-cursor');
        appState.typing.element = element;
        appState.typing.isRunning = true;

        // 타이핑 사운드 시작
        const typingSound = elements.sounds.typing;
        if (typingSound) {
            console.log('Typing sound element found:', typingSound);
            typingSound.currentTime = 0;
            typingSound.loop = true;
            typingSound.play().then(() => {
                console.log('Typing sound started successfully');
            }).catch(e => {
                console.error('Typing sound play failed:', e);
            });
        } else {
            console.error('Typing sound element not found');
        }

        // 스킵 기능을 위한 클릭 이벤트 리스너
        const skipTyping = () => {
            if (appState.typing.isRunning) {
                stopTypingEffect();
                // 전체 텍스트를 즉시 표시
                element.textContent = fullText;
                element.classList.remove('typing-cursor');
                // 스킵 후 텍스트 영역 클릭 이벤트 제거 (토글 방지)
                element.onclick = null;
                element.style.cursor = 'default';
                element.title = '';
                if (onComplete) onComplete();
            }
        };

        // 스킵 핸들러를 appState에 저장하여 나중에 제거할 수 있도록 함
        appState.typing.skipHandler = skipTyping;

        // 요소에 클릭 이벤트 추가
        element.addEventListener('click', skipTyping);
        element.style.cursor = 'pointer';
        element.title = '클릭하여 전체 내용 보기';

        const type = () => {
            if (index < fullText.length) {
                element.textContent += fullText[index];
                index++;
                
                // 텍스트가 넘칠 때 자동으로 스크롤
                if (element.scrollHeight > element.clientHeight) {
                    element.scrollTop = element.scrollHeight - element.clientHeight;
                }
            } else {
                stopTypingEffect();
                if (onComplete) onComplete();
            }
        };

        appState.typing.timer = setInterval(type, appState.typing.speed);
    }

    function stopTypingEffect() {
        if (appState.typing.timer) {
            clearInterval(appState.typing.timer);
            appState.typing.timer = null;
        }
        if (appState.typing.holdTimer) {
            clearTimeout(appState.typing.holdTimer);
            appState.typing.holdTimer = null;
        }
        
        // 타이핑 사운드 중지
        const typingSound = elements.sounds.typing;
        if (typingSound) {
            typingSound.pause();
            typingSound.currentTime = 0;
        }
        
        appState.typing.isRunning = false;
        if (appState.typing.element) {
            appState.typing.element.classList.remove('typing-cursor');
            appState.typing.element.style.cursor = 'default';
            appState.typing.element.title = '';
            // 클릭 이벤트 리스너 제거
            appState.typing.element.removeEventListener('click', appState.typing.skipHandler);
            appState.typing.element = null;
        }
    }

    function prepareCardStage(stageIndex, text) {
        const imageEl = elements.resultScreen.cardImage;
        const overlayEl = document.getElementById('card-overlay-text');
        const cardData = appState.fullResultData.cardInterpretations[stageIndex];
        const cardIndex = appState.selectedCards[stageIndex];
        const cardName = getLocalizedCardNameByIndex(cardIndex, appState.language);
        
        // 제목 설정
        const stageTitleEl = document.getElementById('card-stage-title');
        stageTitleEl.textContent = `${stageIndex + 1}번째 카드: ${cardName}`;

        // 키워드 설정
        elements.resultScreen.keywordsArea.innerHTML = buildKeywordsHtml(cardData.keywords);

        // 카드 상태 초기화 및 표시
        imageEl.src = tarotData[cardIndex].img; // 이미지 소스 설정
        imageEl.style.display = 'block'; // 이미지가 보이도록 함
        imageEl.classList.remove('blur');
        overlayEl.classList.remove('show');
        overlayEl.innerHTML = '';
        
        // 카드/텍스트 토글 함수
        const toggleCardText = () => {
            if (overlayEl.classList.contains('show')) {
                // 텍스트에서 카드로 전환
                imageEl.classList.remove('blur');
                overlayEl.classList.remove('show');
                // 텍스트 영역 클릭 이벤트 제거 (토글 방지)
                overlayEl.onclick = null;
            } else {
                // 카드에서 텍스트로 전환 - 카드 클릭 사운드 재생
                playSound('card-select');
                imageEl.classList.add('blur');
                overlayEl.classList.add('show');
                // innerHTML을 사용하여 줄바꿈(\n)을 <br>로 변환
                const formattedText = text.replace(/\n/g, '<br>');
                startTypingEffect(overlayEl, formattedText, () => {
                     // 타이핑 완료 후 2초 뒤 버튼 표시
                    setTimeout(() => revealCardButtons(stageIndex), 2000);
                    // 타이핑 완료 후 텍스트 영역 클릭 이벤트 제거 (토글 방지)
                    overlayEl.onclick = null;
                });
            }
        };

        // 카드에만 클릭 이벤트 추가 (텍스트 영역은 타이핑 중에만 클릭 가능)
        imageEl.onclick = toggleCardText;
    }

    function revealCardButtons(stageIndex) {
        const prevBtn = document.getElementById('card-prev-btn');
        const nextBtn = document.getElementById('card-next-btn');
        
        if (prevBtn) {
            prevBtn.style.display = stageIndex === 0 ? 'none' : 'inline-flex';
            if (stageIndex > 0) {
                prevBtn.classList.add('show');
            }
        }
        
        if (nextBtn) {
            nextBtn.style.display = 'inline-flex';
            nextBtn.classList.add('show');
        }
    }

    function revealStageButtons(context) {
        const stageNav = elements.resultScreen.stageNav;
        const prevBtn = elements.resultScreen.stagePrevBtn;
        const nextBtn = elements.resultScreen.stageNextBtn;

        if (context === 'summary') {
            stageNav.style.display = 'flex'; // 버튼 그룹을 보이게 함
            
            prevBtn.style.display = 'inline-flex';
            prevBtn.classList.add('show');
            prevBtn.textContent = translationForKey('backButton', '이전');

            nextBtn.style.display = 'inline-flex';
            nextBtn.classList.add('show');
            nextBtn.textContent = translationForKey('actionPlanButtonLabel', '현실 조언');
        }
    }

    function buildKeywordsHtml(keywords) {
        if (!keywords) return '';
        let html = '';
        if (keywords.positive?.length) {
            html += `<div class="keyword-group"><span class="keyword-title">${translationForKey('keywordPositive', '긍정')}:</span>` +
                keywords.positive.map(k => `<span class="keyword positive">${k}</span>`).join('') + '</div>';
        }
        if (keywords.caution?.length) {
            html += `<div class="keyword-group"><span class="keyword-title">${translationForKey('keywordCaution', '주의')}:</span>` +
                keywords.caution.map(k => `<span class="keyword negative">${k}</span>`).join('') + '</div>';
        }
        return html;
    }

    function translationForKey(key, fallback) {
        const langPack = UI_TEXTS[appState.language];
        if (!langPack) return fallback;
        const value = getNestedTranslation(langPack, key);
        return value || fallback;
    }
    // 기타 유틸리티 함수
    function playSound(type) {
        const sound = elements.sounds[type];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.error(`${type} sound play failed`, e));
        }
    }
    
    // PDF 생성 (완성 버전)
    async function generatePDF() {
        const btn = elements.resultScreen.pdfSaveBtn;
        if (btn.disabled) return;

        const originalText = btn.textContent;
        btn.textContent = 'PDF 생성 중...';
        btn.disabled = true;

        try {
            // 1. PDF로 만들 HTML 콘텐츠 생성
            const pdfContentHtml = createPDFContent();
            
            // 2. 보이지 않는 임시 컨테이너에 HTML 주입
            const tempContainer = document.createElement('div');
            tempContainer.style.position = 'absolute';
            tempContainer.style.left = '-9999px'; // 화면 밖에 위치
            tempContainer.style.width = '800px';  // PDF 품질을 위한 고정 너비
            tempContainer.style.backgroundColor = '#ffffff';
            tempContainer.innerHTML = pdfContentHtml;
            document.body.appendChild(tempContainer);

            // 3. html2canvas로 컨테이너를 하나의 긴 이미지(캔버스)로 캡처
            const canvas = await html2canvas(tempContainer, {
                scale: 2, // 고해상도 캡처
                useCORS: true,
                backgroundColor: '#ffffff',
                windowWidth: 800,
                windowHeight: tempContainer.scrollHeight
            });

            // 4. 임시 컨테이너 제거
            document.body.removeChild(tempContainer);

            // 5. jsPDF로 PDF 생성
            const { jsPDF } = window.jspdf;
            const imgData = canvas.toDataURL('image/png', 1.0);
            
            const pdfWidth = 210; // A4 가로 너비 (mm)
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // 캔버스 비율에 맞춘 세로 높이

            // [핵심] 페이지 높이를 전체 캔버스 높이에 맞춰서 한 페이지짜리 PDF 생성
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: [pdfWidth, pdfHeight]
            });

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`tarot-reading-${new Date().toISOString().slice(0,10)}.pdf`);

        } catch(e) {
            console.error("PDF 생성 오류", e);
            alert("PDF 생성 중 오류가 발생했습니다.");
        } finally {
            btn.textContent = originalText;
            btn.disabled = false;
        }
    }

    function createPDFContent() {
        const { cardInterpretations, overallReading } = appState.fullResultData;
        
        // [핵심] 잘림 방지를 위한 스타일 정의
        const styles = `
            <style>
                body { font-family: 'Helvetica', 'Arial', sans-serif; color: #333; }
                h1 { color: #1a1a2e; text-align: center; margin-bottom: 30px; font-size: 28px; }
                h2 { color: #34495e; margin: 30px 0 15px 0; font-size: 22px; border-bottom: 2px solid #764ba2; padding-bottom: 5px; }
                h3 { color: #667eea; font-size: 18px; margin-bottom: 10px; }
                p, li { line-height: 1.7; font-size: 14px; text-align: justify; word-wrap: break-word; overflow-wrap: break-word; color: #555; }
                .card-section, .summary-section, .action-plan-section { 
                    padding: 20px; 
                    margin-bottom: 25px; 
                    background-color: #f8f9fa; 
                    border: 1px solid #e9ecef; 
                    border-radius: 8px; 
                }
                .keyword-group { margin: 15px 0; font-size: 14px; }
                .keyword-title { font-weight: bold; }
                .keyword { display: inline-block; padding: 3px 8px; margin: 2px; border-radius: 12px; font-size: 12px; }
                .positive { background: rgba(102, 126, 234, 0.2); color: #667eea; border: 1px solid #667eea; }
                .negative { background: rgba(233, 69, 96, 0.2); color: #e94560; border: 1px solid #e94560; }
                ul { padding-left: 20px; }
            </style>
        `;

        let cardHtml = cardInterpretations.map((cardData, index) => {
            const cardIndex = appState.selectedCards[index];
            const cardImageSrc = tarotData[cardIndex].img;
            return `
                <div class="card-section">
                    <h2>카드 ${index + 1}: ${cardData.cardName}</h2>
                    <div style="text-align: center; margin: 20px 0;">
                        <img src="${cardImageSrc}" style="max-width: 250px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
                    </div>
                    ${buildKeywordsHtml(cardData.keywords)}
                    <p>${cardData.interpretation.replace(/\n/g, '<br>')}</p>
                </div>
            `;
        }).join('');

        const summaryHtml = `
            <div class="summary-section">
                <h2>${overallReading.title}</h2>
                <div style="text-align: center; margin: 20px 0;">
                    ${appState.selectedCards.map(i => `<img src="${tarotData[i].img}" style="width: 100px; margin: 5px; border-radius: 5px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">`).join('')}
                </div>
                 ${buildKeywordsHtml(overallReading.keywords)}
                <p>${overallReading.summary.replace(/\n/g, '<br>')}</p>
            </div>
        `;

        const plan = overallReading.mbtiActionPlan;
        const actionPlanHtml = `
            <div class="action-plan-section">
                <h2>${plan.title}</h2>
                <p>${plan.introduction.replace(/\n/g, '<br>')}</p>
                ${plan.phases.map(phase => `
                    <div style="margin-top: 20px; padding: 15px; background: #fff; border-left: 4px solid #667eea; border-radius: 4px;">
                        <h3>${phase.phaseTitle}</h3>
                        <ul>${phase.steps.map(step => `<li>${step}</li>`).join('')}</ul>
                    </div>
                `).join('')}
            </div>
        `;
        
        return `
            <div style="padding: 40px;">
                ${styles}
                <h1>타로 리딩 결과</h1>
                ${cardHtml}
                ${summaryHtml}
                ${actionPlanHtml}
                <div style="text-align: center; margin-top: 40px; color: #aaa; font-size: 12px;">
                    <p>Generated by ASK ANYTHING | ${new Date().toLocaleDateString()}</p>
                </div>
            </div>
        `;
    }

    // --- 6. 이벤트 리스너 등록 ---
    function initEventListeners() {
        // 언어 변경
        elements.langButton.addEventListener('click', (e) => {
            playSound('button');
            e.stopPropagation();
            elements.langMenu.classList.toggle('show');
        });
        document.addEventListener('click', () => elements.langMenu.classList.remove('show'));
        elements.langMenu.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => {
                playSound('button');
                appState.language = li.dataset.lang;
                elements.langMenu.classList.remove('show');
                // 언어 선택 후 Language 버튼 숨기기
                const langSwitcher = document.querySelector('.lang-switcher');
                if (langSwitcher) {
                    langSwitcher.style.display = 'none';
                }
                render();
            });
        });

        // 메인 화면 -> 질문 선택
        elements.mainShuffleArea.addEventListener('click', () => {
            playSound('select');
            // 언어 선택 없이 진행 시 언어 메뉴 숨기기
            const langSwitcher = document.querySelector('.lang-switcher');
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
        // 운세 선택 메뉴 바탕화면 클릭 시 닫기
        document.addEventListener('click', (e) => {
            if (!elements.fortuneSelectBtn.contains(e.target) && !elements.fortuneMenu.contains(e.target)) {
                elements.fortuneMenu.classList.remove('show');
            }
        });
        elements.mindQuestionBtn.addEventListener('click', () => {
            playSound('button');
            appState.userQuestion = '';
            navigateTo('mbti-entry-screen');
        });

        // 직접 질문 입력
        elements.backToDialogBtn.addEventListener('click', () => {
            playSound('button');
            navigateTo('question-dialog-screen');
        });
        elements.submitQuestionBtn.addEventListener('click', () => {
            playSound('button');
            appState.userQuestion = elements.questionInput.value.trim();
            if (!appState.userQuestion) {
                alert('질문을 입력해주세요.');
                return;
            }
            navigateTo('mbti-entry-screen');
        });
        
        // MBTI 입력
        elements.mbtiSkipBtn.addEventListener('click', () => {
            playSound('button');
            appState.userMBTI = '';
            shuffleDeck();
            navigateTo('card-select-screen');
        });
        elements.mbtiSubmitBtn.addEventListener('click', () => {
            playSound('button');
            const mbti = elements.mbtiInput.value.trim().toUpperCase();
            if (mbti.length !== 4) { // 간단한 검증
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
        elements.mbtiResultScreen.proceedBtn.addEventListener('click', () => {
            playSound('button');
            shuffleDeck();
            navigateTo('card-select-screen');
        });
        elements.mbtiBackBtn.addEventListener('click', () => {
            playSound('button');
            if (appState.mbti.currentQuestionIndex === 0) {
                // 1단계에서 건너뛰기: MBTI 입력 화면으로 돌아가기
                navigateTo('mbti-input-screen');
            } else {
                // 2-20단계에서 뒤로: 이전 질문으로 이동
                appState.mbti.currentQuestionIndex--;
                render();
            }
        });
        
        // 카드 선택
        elements.cardSelectScreen.shuffleArea.addEventListener('click', selectCard);

        elements.resultScreen.stagePrevBtn.addEventListener('click', () => {
            playSound('button');
            navigateResultStage(-1);
        });
        elements.resultScreen.stageNextBtn.addEventListener('click', () => {
            playSound('button');
            navigateResultStage(1);
        });
        elements.resultScreen.restartBtn.addEventListener('click', () => {
            playSound('button');
            resetApp();
        });
        elements.resultScreen.pdfSaveBtn.addEventListener('click', () => {
            playSound('button');
            generatePDF();
        });
        
        // 카드 네비게이션
        const cardPrevBtn = document.getElementById('card-prev-btn');
        const cardNextBtn = document.getElementById('card-next-btn');
        if (cardPrevBtn) {
            cardPrevBtn.addEventListener('click', () => {
                playSound('button');
                navigateResultStage(-1);
            });
        }
        if (cardNextBtn) {
            cardNextBtn.addEventListener('click', () => {
                playSound('button');
                navigateResultStage(1);
            });
        }
        
        // 현실조언 네비게이션
        const actionPhasePrev = document.getElementById('action-phase-prev');
        const actionPhaseNext = document.getElementById('action-phase-next');
        if (actionPhasePrev) {
            actionPhasePrev.addEventListener('click', () => {
                playSound('button');
                const prevPhase = Math.max(0, appState.actionPlan.currentPhase - 1);
                showActionPlanPhase(prevPhase);
            });
        }
        if (actionPhaseNext) {
            actionPhaseNext.addEventListener('click', () => {
                playSound('button');
                const nextPhase = Math.min(appState.actionPlan.phases.length - 1, appState.actionPlan.currentPhase + 1);
                showActionPlanPhase(nextPhase);
            });
        }
    }

    // --- 앱 시작 ---
    initEventListeners();
    resetApp(); 
});