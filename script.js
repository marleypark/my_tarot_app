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
            speed: 30,
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
    
    // MBTI 로직
    function startMbtiTest() {
        appState.mbti.currentQuestionIndex = 0;
        appState.mbti.answers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        navigateTo('mbti-test-screen');
    }

    function renderMbtiQuestion() {
        const lang = appState.language;
        const questions = MBTI_QUESTIONS_I18N[lang];
        const index = appState.mbti.currentQuestionIndex;
        const questionData = questions[index];

        elements.mbtiQuestionText.textContent = questionData.question;
        elements.mbtiOptionsContainer.innerHTML = '';
        questionData.options.forEach(opt => {
            const button = document.createElement('button');
            button.className = 'mbti-option';
            button.textContent = opt.text;
            button.onclick = () => handleMbtiAnswer(opt.type);
            elements.mbtiOptionsContainer.appendChild(button);
        });

        const progress = ((index + 1) / questions.length) * 100;
        elements.mbtiProgressBar.style.width = `${progress}%`;
        elements.mbtiProgressText.textContent = `${index + 1} / ${questions.length}`;
    }
    
    function handleMbtiAnswer(type) {
        playSound('button');
        appState.mbti.answers[type]++;
        appState.mbti.currentQuestionIndex++;
        
        const questions = MBTI_QUESTIONS_I18N[appState.language];
        if (appState.mbti.currentQuestionIndex < questions.length) {
            render();
        } else {
            const result = calculateMbti();
            appState.userMBTI = result;
            shuffleDeck();
            navigateTo('card-select-screen');
        }
    }
    
    function calculateMbti() {
        const answers = appState.mbti.answers;
        let result = "";
        result += (answers.E >= answers.I) ? "E" : "I";
        result += (answers.S >= answers.N) ? "S" : "N";
        result += (answers.T >= answers.F) ? "T" : "F";
        result += (answers.J >= answers.P) ? "J" : "P";
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
        if (elements.resultScreen.stageNav) {
            elements.resultScreen.stageNav.style.display = 'flex';
        }

        const { cardInterpretations, overallReading } = appState.fullResultData;

        // 총정리 렌더링
        elements.resultScreen.summaryTitle.textContent = overallReading.title;
        elements.resultScreen.summaryText.textContent = '';
        elements.resultScreen.summaryCardsDisplay.innerHTML = '';
        appState.selectedCards.forEach(cardIndex => {
            const img = document.createElement('img');
            img.src = tarotData[cardIndex].img;
            elements.resultScreen.summaryCardsDisplay.appendChild(img);
        });

        // 액션 플랜 렌더링
        const plan = overallReading.mbtiActionPlan;
        elements.resultScreen.actionPlanTitle.textContent = plan.title;
        elements.resultScreen.actionPlanIntro.textContent = plan.introduction;
        elements.resultScreen.actionPlanPhases.innerHTML = '';
        plan.phases.forEach(phase => {
            const phaseHtml = `
                <div class="phase">
                    <h4 class="phase-title">${phase.phaseTitle}</h4>
                    <ul class="phase-steps">${phase.steps.map(step => `<li>${step}</li>`).join('')}</ul>
                </div>`;
            elements.resultScreen.actionPlanPhases.innerHTML += phaseHtml;
        });

        updateResultStageContent();
    }

    function updateResultStageContent() {
        const { cardInterpretations } = appState.fullResultData;
        const totalStages = cardInterpretations.length + 2;
        const stage = appState.resultStage;

        stopTypingEffect();
        elements.resultScreen.cardSection.style.display = 'none';
        elements.resultScreen.summarySection.style.display = 'none';
        elements.resultScreen.actionPlanSection.style.display = 'none';

        if (stage < cardInterpretations.length) {
            const cardData = cardInterpretations[stage];
            const cardIndex = appState.selectedCards[stage];

        if (elements.resultScreen.cardSection) {
            elements.resultScreen.cardSection.style.display = 'block';
        }
        if (elements.resultScreen.cardImage) {
            elements.resultScreen.cardImage.src = tarotData[cardIndex].img;
        }
        if (elements.resultScreen.keywordsArea) {
            elements.resultScreen.keywordsArea.innerHTML = '';
            const keywordsHtml = buildKeywordsHtml(cardData.keywords);
            elements.resultScreen.keywordsArea.innerHTML = keywordsHtml;
        }

            prepareCardStage(stage, cardData.interpretation);
        } else if (stage === cardInterpretations.length) {
            if (elements.resultScreen.summarySection) {
                elements.resultScreen.summarySection.style.display = 'block';
            }
            if (elements.resultScreen.keywordsArea) {
                elements.resultScreen.keywordsArea.innerHTML = '';
            }

            const summaryKeywords = buildKeywordsHtml(appState.fullResultData.overallReading.keywords);
            const summaryKeywordsContainer = document.getElementById('summary-keywords');
            if (summaryKeywordsContainer) {
                summaryKeywordsContainer.innerHTML = summaryKeywords;
            }

            if (elements.resultScreen.summaryText) {
                startTypingEffect(elements.resultScreen.summaryText, appState.fullResultData.overallReading.summary, () => {
                    revealStageButtons('summary');
                });
            }
        } else {
            if (elements.resultScreen.actionPlanSection) {
                elements.resultScreen.actionPlanSection.style.display = 'block';
            }
            if (elements.resultScreen.keywordsArea) {
                elements.resultScreen.keywordsArea.innerHTML = '';
            }
            renderActionPlanStages();
        }

        if (elements.resultScreen.stagePrevBtn) {
            elements.resultScreen.stagePrevBtn.style.display = stage === 0 ? 'none' : 'inline-flex';
        }
        if (elements.resultScreen.stageNextBtn && stage < cardInterpretations.length) {
            elements.resultScreen.stageNextBtn.style.display = 'none';
        }
    }

    function renderActionPlanStages() {
        const { overallReading } = appState.fullResultData;
        const plan = overallReading.mbtiActionPlan;
        
        // MBTI 기반 타이틀 설정
        const mbtiType = appState.userMBTI || '당신';
        const title = `${mbtiType}을 위한 현실 조언`;
        if (elements.resultScreen.actionPlanTitle) {
            elements.resultScreen.actionPlanTitle.textContent = title;
            elements.resultScreen.actionPlanTitle.style.wordBreak = 'keep-all';
            elements.resultScreen.actionPlanTitle.style.whiteSpace = 'normal';
        }
        
        // 액션 플랜 초기화
        appState.actionPlan.phases = plan.phases;
        appState.actionPlan.currentPhase = 0;
        appState.actionPlan.initialized = true;
        
        // 첫 번째 단계 표시
        showActionPlanPhase(0);
    }
    
    function showActionPlanPhase(phaseIndex) {
        const introEl = document.getElementById('action-plan-intro');
        const phasesEl = document.getElementById('action-plan-phases');
        const prevBtn = document.getElementById('action-phase-prev');
        const nextBtn = document.getElementById('action-phase-next');
        
        // 모든 콘텐츠 숨기기
        document.querySelectorAll('.action-phase-content').forEach(el => {
            el.classList.remove('active');
        });
        
        if (phaseIndex === 0) {
            // 인트로 표시
            introEl.textContent = appState.actionPlan.phases[0].introduction || '';
            introEl.classList.add('active');
            
            // 버튼 설정
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) {
                nextBtn.style.display = 'inline-flex';
                nextBtn.textContent = '2단계로';
            }
        } else {
            // 해당 단계 표시
            const phase = appState.actionPlan.phases[phaseIndex];
            phasesEl.innerHTML = `
                <div class="phase">
                    <h4 class="phase-title">${phase.phaseTitle}</h4>
                    <ul class="phase-steps">${phase.steps.map(step => `<li>${step}</li>`).join('')}</ul>
                </div>
            `;
            phasesEl.classList.add('active');
            
            // 버튼 설정
            if (prevBtn) {
                prevBtn.style.display = 'inline-flex';
                prevBtn.textContent = phaseIndex === 1 ? '이전' : '이전';
            }
            if (nextBtn) {
                if (phaseIndex < appState.actionPlan.phases.length - 1) {
                    nextBtn.style.display = 'inline-flex';
                    nextBtn.textContent = '다음 단계';
                } else {
                    nextBtn.style.display = 'none';
                }
            }
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
        const textEl = document.getElementById('loading-typing-text');
        if (!textEl) return;
        const baseText = translationForKey('loadingLoopText', '당신의 운명을 불러오는 중...');
        let index = 0;
        stopLoadingTyping();
        const typing = () => {
            const current = baseText.substring(0, index + 1);
            textEl.textContent = current;
            index = (index + 1) % baseText.length;
        };
        appState.loading.timer = setInterval(typing, 120);
        appState.loading.holdTimer = setInterval(() => {
            textEl.textContent = baseText;
        }, 4000);
    }

    function stopLoadingTyping() {
        const textEl = document.getElementById('loading-typing-text');
        if (appState.loading.timer) {
            clearInterval(appState.loading.timer);
            appState.loading.timer = null;
        }
        if (appState.loading.holdTimer) {
            clearInterval(appState.loading.holdTimer);
            appState.loading.holdTimer = null;
        }
        if (textEl) {
            textEl.textContent = translationForKey('loadingLoopText', '당신의 운명을 불러오는 중...');
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

        const type = () => {
            if (index < fullText.length) {
                element.textContent += fullText[index];
                index++;
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
        appState.typing.isRunning = false;
        if (appState.typing.element) {
            appState.typing.element.classList.remove('typing-cursor');
            appState.typing.element = null;
        }
    }

    function prepareCardStage(stageIndex, text) {
        const imageEl = elements.resultScreen.cardImage;
        const overlayEl = document.getElementById('card-overlay-text');
        const cardData = appState.fullResultData.cardInterpretations[stageIndex];
        const cardIndex = appState.selectedCards[stageIndex];
        const cardName = getLocalizedCardNameByIndex(cardIndex, appState.language);
        
        // 제목 형식 변경: "1번째 카드: 완드 2" 형식
        const cardHeading = `${stageIndex + 1}번째 카드: ${cardName}`;
        const stageTitleEl = document.getElementById('card-stage-title');
        if (stageTitleEl) {
            stageTitleEl.textContent = cardHeading;
            stageTitleEl.style.wordBreak = 'keep-all';
            stageTitleEl.style.whiteSpace = 'normal';
        }

        // 초기 상태 설정
        if (imageEl) {
            imageEl.classList.remove('blur');
        }
        if (overlayEl) {
            overlayEl.textContent = '';
            overlayEl.classList.remove('show');
        }

        // 카드 클릭 이벤트
        const reveal = () => {
            if (imageEl) {
                imageEl.classList.add('blur');
            }
            if (overlayEl) {
                overlayEl.classList.add('show');
                startTypingEffect(overlayEl, text, () => {
                    setTimeout(() => revealCardButtons(stageIndex), 5000);
                });
            }
        };

        if (imageEl) {
            imageEl.onclick = () => {
                imageEl.onclick = null;
                reveal();
            };
        }
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
        if (!elements.resultScreen.stageNextBtn) return;
        const terms = UI_TEXTS[appState.language] || UI_TEXTS.kor;
        if (context === 'card') {
            const label = translationForKey('nextButton', '다음');
            elements.resultScreen.stageNextBtn.textContent = label;
        } else if (context === 'summary') {
            const label = translationForKey('actionPlanButtonLabel', '현실 조언');
            elements.resultScreen.stageNextBtn.textContent = label;
        }
        elements.resultScreen.stageNextBtn.style.display = 'inline-flex';
        requestAnimationFrame(() => elements.resultScreen.stageNextBtn.classList.add('show'));
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
        const originalText = btn.textContent;
        btn.textContent = '생성 중...';
        btn.disabled = true;

        try {
            // 모든 단계를 포함한 HTML 생성
            const pdfContent = createPDFContent();
            
            // 임시 컨테이너 생성
            const tempContainer = document.createElement('div');
            tempContainer.style.position = 'absolute';
            tempContainer.style.left = '-9999px';
            tempContainer.style.top = '0';
            tempContainer.style.width = '800px';
            tempContainer.style.backgroundColor = '#ffffff';
            tempContainer.style.padding = '40px';
            tempContainer.style.fontFamily = 'Arial, sans-serif';
            tempContainer.style.color = '#333333';
            tempContainer.innerHTML = pdfContent;
            
            document.body.appendChild(tempContainer);

            // 모든 이미지 로드 대기
            const images = tempContainer.querySelectorAll('img');
            await Promise.all(Array.from(images).map(img => {
                return new Promise((resolve) => {
                    if (img.complete) {
                        resolve();
                    } else {
                        img.onload = resolve;
                        img.onerror = resolve;
                    }
                });
            }));

            const canvas = await html2canvas(tempContainer, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#ffffff',
                width: 800,
                height: tempContainer.scrollHeight
            });

            document.body.removeChild(tempContainer);

            const imgData = canvas.toDataURL('image/png', 1.0);
            const { jsPDF } = window.jspdf;
            
            // A4 크기로 PDF 생성
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

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
        let content = `
            <div style="max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif; color: #333;">
                <h1 style="text-align: center; color: #2c3e50; margin-bottom: 30px; font-size: 28px;">타로 리딩 결과</h1>
        `;

        // 개별 카드 해석
        cardInterpretations.forEach((cardData, index) => {
            const cardIndex = appState.selectedCards[index];
            const cardImage = tarotData[cardIndex].img;
            
            content += `
                <div style="page-break-inside: avoid; margin-bottom: 40px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #34495e; margin-bottom: 20px; font-size: 24px;">카드 ${index + 1}: ${cardData.cardName}</h2>
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img src="${cardImage}" style="max-width: 200px; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
                    </div>
                    <div style="margin-bottom: 15px;">
                        ${cardData.keywords ? `
                            <div style="margin-bottom: 10px;">
                                <strong style="color: #27ae60;">긍정:</strong>
                                ${cardData.keywords.positive ? cardData.keywords.positive.map(k => `<span style="background: #d5f4e6; padding: 2px 6px; margin: 2px; border-radius: 4px; font-size: 12px;">${k}</span>`).join('') : ''}
                            </div>
                            <div style="margin-bottom: 10px;">
                                <strong style="color: #e74c3c;">주의:</strong>
                                ${cardData.keywords.caution ? cardData.keywords.caution.map(k => `<span style="background: #fadbd8; padding: 2px 6px; margin: 2px; border-radius: 4px; font-size: 12px;">${k}</span>`).join('') : ''}
                            </div>
                        ` : ''}
                    </div>
                    <p style="line-height: 1.6; font-size: 14px; text-align: justify;">${cardData.interpretation}</p>
                </div>
            `;
        });

        // 총정리
        content += `
            <div style="page-break-inside: avoid; margin-bottom: 40px; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background: #f8f9fa;">
                <h2 style="color: #34495e; margin-bottom: 20px; font-size: 24px;">${overallReading.title}</h2>
                <div style="text-align: center; margin-bottom: 20px;">
                    ${appState.selectedCards.map(cardIndex => 
                        `<img src="${tarotData[cardIndex].img}" style="width: 80px; height: auto; margin: 5px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" />`
                    ).join('')}
                </div>
                <p style="line-height: 1.6; font-size: 14px; text-align: justify;">${overallReading.summary}</p>
            </div>
        `;

        // MBTI 액션 플랜
        const plan = overallReading.mbtiActionPlan;
        content += `
            <div style="page-break-inside: avoid; margin-bottom: 40px; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background: #e8f4fd;">
                <h2 style="color: #34495e; margin-bottom: 20px; font-size: 24px;">${plan.title}</h2>
                <p style="line-height: 1.6; font-size: 14px; margin-bottom: 20px; text-align: justify;">${plan.introduction}</p>
                ${plan.phases.map(phase => `
                    <div style="margin-bottom: 20px; padding: 15px; background: white; border-radius: 6px; border-left: 4px solid #3498db;">
                        <h3 style="color: #2c3e50; margin-bottom: 10px; font-size: 18px;">${phase.phaseTitle}</h3>
                        <ul style="margin: 0; padding-left: 20px;">
                            ${phase.steps.map(step => `<li style="margin-bottom: 5px; line-height: 1.5; font-size: 14px;">${step}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        `;

        content += `
                <div style="text-align: center; margin-top: 40px; padding: 20px; color: #7f8c8d; font-size: 12px;">
                    <p>생성일: ${new Date().toLocaleDateString('ko-KR')}</p>
                </div>
            </div>
        `;

        return content;
    }

    // --- 6. 이벤트 리스너 등록 ---
    function initEventListeners() {
        // 언어 변경
        elements.langButton.addEventListener('click', (e) => {
            e.stopPropagation();
            elements.langMenu.classList.toggle('show');
        });
        document.addEventListener('click', () => elements.langMenu.classList.remove('show'));
        elements.langMenu.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => {
                appState.language = li.dataset.lang;
                elements.langMenu.classList.remove('show');
                render();
            });
        });

        // 메인 화면 -> 질문 선택
        elements.mainShuffleArea.addEventListener('click', () => {
            playSound('select');
            navigateTo('question-dialog-screen');
        });
        
        // 질문 방식 선택
        elements.directInputBtn.addEventListener('click', () => navigateTo('custom-question-screen'));
        elements.fortuneSelectBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            elements.fortuneMenu.classList.toggle('show');
        });
        elements.mindQuestionBtn.addEventListener('click', () => {
            appState.userQuestion = '';
            navigateTo('mbti-entry-screen');
        });

        // 직접 질문 입력
        elements.backToDialogBtn.addEventListener('click', () => navigateTo('question-dialog-screen'));
        elements.submitQuestionBtn.addEventListener('click', () => {
            appState.userQuestion = elements.questionInput.value.trim();
            if (!appState.userQuestion) {
                alert('질문을 입력해주세요.');
                return;
            }
            navigateTo('mbti-entry-screen');
        });
        
        // MBTI 입력
        elements.mbtiSkipBtn.addEventListener('click', () => {
             appState.userMBTI = '';
             shuffleDeck();
             navigateTo('card-select-screen');
        });
        elements.mbtiSubmitBtn.addEventListener('click', () => {
            const mbti = elements.mbtiInput.value.trim().toUpperCase();
            if (mbti.length !== 4) { // 간단한 검증
                alert('올바른 MBTI 4글자를 입력해주세요.');
                return;
            }
            appState.userMBTI = mbti;
            shuffleDeck();
            navigateTo('card-select-screen');
        });
        elements.startMbtiTestBtn.addEventListener('click', startMbtiTest);
        
        // 카드 선택
        elements.cardSelectScreen.shuffleArea.addEventListener('click', selectCard);

        elements.resultScreen.stagePrevBtn.addEventListener('click', () => navigateResultStage(-1));
        elements.resultScreen.stageNextBtn.addEventListener('click', () => navigateResultStage(1));
        elements.resultScreen.restartBtn.addEventListener('click', resetApp);
        elements.resultScreen.pdfSaveBtn.addEventListener('click', generatePDF);
        
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