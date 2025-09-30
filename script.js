// 앱 상태 관리 (전역으로 이동)
const appState = {
    currentScreen: 'main-screen',
    language: 'kor',
    userQuestion: '',
    userMBTI: '',
    selectedCards: [],
    deck: [],
    fullResultData: null,
    resultStage: 0,
    isFetching: false, // API 호출 잠금장치
    backgroundMusic: null,
    isMusicOn: true,
    languageChosenManually: false,
    autoLockUntil: null,
    sessionLanguageMode: null,
    typing: {
        isRunning: false,
        timer: null,
        element: null,
        speed: 25,
        skipHandler: null,
    },
    // 더 이상 사용하지 않는 오래된 상태값들 정리
    // currentResultIndex: 0, 
    // shufflePlaying: false,
    // cardRevealed: [],
    // summaryRevealed: false,
};

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
        { name: { kor: "소드 에이스", eng: "Ace of Swords" }, img: "images/소드/소드 에이스.jpg" }, { name: { kor: "소드 2", eng: "Two of Swords" }, img: "images/소드/소드2.jpg" }, { name: { kor: "소드 3", eng: "Three of Swords" }, img: "images/소드/소드3.jpg" }, { name: { kor: "소드 4", eng: "Four of Swords" }, img: "images/소드/소드4.jpg" }, { name: { kor: "소드 5", eng: "Five of Swords" }, img: "images/소드/소드5.jpg" }, { name: { kor: "소드 6", eng: "Six of Swords" }, img: "images/소드/소드6.jpg" }, { name: { kor: "소드 7", eng: "Seven of Swords" }, img: "images/소드/소드7.jpg" }, { name: { kor: "소드 8", eng: "Eight of Swords" }, img: "images/소드/소드8.jpg" }, { name: { kor: "소드 9", eng: "Nine of Swords" }, img: "images/소드/소드9.jpg" }, { name: { kor: "소드 10", eng: "Ten of Swords" }, img: "images/소드/소드10.jpg" }, { name: { kor: "소드 페이지", eng: "Page of Swords" }, img: "images/소드/소드 페이지.jpg" }, { name: { kor: "소드 나이트", eng: "Knight of Swords" }, img: "images/소드/소드 나이트.jpg" }, { name: { kor: "소드 퀸", eng: "Queen of Swords" }, img: "images/소드/소드 퀸.jpg" }, { name: { kor: "소드 킹", eng: "King of Swords" }, img: "images/소드/소드 킹.jpg" },
        { name: { kor: "완드 에이스", eng: "Ace of Wands" }, img: "images/완드/완드 에이스.jpg" }, { name: { kor: "완드 2", eng: "Two of Wands" }, img: "images/완드/완드2.jpg" }, { name: { kor: "완드 3", eng: "Three of Wands" }, img: "images/완드/완드3.jpg" }, { name: { kor: "완드 4", eng: "Four of Wands" }, img: "images/완드/완드4.jpg" }, { name: { kor: "완드 5", eng: "Five of Wands" }, img: "images/완드/완드5.jpg" }, { name: { kor: "완드 6", eng: "Six of Wands" }, img: "images/완드/완드6.jpg" }, { name: { kor: "완드 7", eng: "Seven of Wands" }, img: "images/완드/완드7.jpg" }, { name: { kor: "완드 8", eng: "Eight of Wands" }, img: "images/완드/완드8.jpg" }, { name: { kor: "완드 9", eng: "Nine of Wands" }, img: "images/완드/완드9.jpg" }, { name: { kor: "완드 10", eng: "Ten of Wands" }, img: "images/완드/완드10.jpg" }, { name: { kor: "완드 페이지", eng: "Page of Wands" }, img: "images/완드/완드 페이지.jpg" }, { name: { kor: "완드 나이트", eng: "Knight of Wands" }, img: "images/완드/완드 나이트.jpg" }, { name: { kor: "완드 퀸", eng: "Queen of Wands" }, img: "images/완드/완드 퀸.jpg" }, { name: { kor: "완드 킹", eng: "King of Wands" }, img: "images/완드/완드 킹.jpg" },
        { name: { kor: "컵 에이스", eng: "Ace of Cups" }, img: "images/컵/컵 에이스.jpg" }, { name: { kor: "컵 2", eng: "Two of Cups" }, img: "images/컵/컵2.jpg" }, { name: { kor: "컵 3", eng: "Three of Cups" }, img: "images/컵/컵3.jpg" }, { name: { kor: "컵 4", eng: "Four of Cups" }, img: "images/컵/컵4.jpg" }, { name: { kor: "컵 5", eng: "Five of Cups" }, img: "images/컵/컵5.jpg" }, { name: { kor: "컵 6", eng: "Six of Cups" }, img: "images/컵/컵6.jpg" }, { name: { kor: "컵 7", eng: "Seven of Cups" }, img: "images/컵/컵7.jpg" }, { name: { kor: "컵 8", eng: "Eight of Cups" }, img: "images/컵/컵8.jpg" }, { name: { kor: "컵 9", eng: "Nine of Cups" }, img: "images/컵/컵9.jpg" }, { name: { kor: "컵 10", eng: "Ten of Cups" }, img: "images/컵/컵10.jpg" }, { name: { kor: "컵 페이지", eng: "Page of Cups" }, img: "images/컵/컵 페이지.jpg" }, { name: { kor: "컵 나이트", eng: "Knight of Cups" }, img: "images/컵/컵 나이트.jpg" }, { name: { kor: "컵 퀸", eng: "Queen of Cups" }, img: "images/컵/컵 퀸.jpg" }, { name: { kor: "컵 킹", eng: "King of Cups" }, img: "images/컵/컵 킹.jpg" },
        { name: { kor: "펜타클 에이스", eng: "Ace of Pentacles" }, img: "images/펜타클/펜타클 에이스.jpg" }, { name: { kor: "펜타클 2", eng: "Two of Pentacles" }, img: "images/펜타클/펜타클2.jpg" }, { name: { kor: "펜타클 3", eng: "Three of Pentacles" }, img: "images/펜타클/펜타클3.jpg" }, { name: { kor: "펜타클 4", eng: "Four of Pentacles" }, img: "images/펜타클/펜타클4.jpg" }, { name: { kor: "펜타클 5", eng: "Five of Pentacles" }, img: "images/펜타클/펜타클5.jpg" }, { name: { kor: "펜타클 6", eng: "Six of Pentacles" }, img: "images/펜타클/펜타클6.jpg" }, { name: { kor: "펜타클 7", eng: "Seven of Pentacles" }, img: "images/펜타클/펜타클7.jpg" }, { name: { kor: "펜타클 8", eng: "Eight of Pentacles" }, img: "images/펜타클/펜타클8.jpg" }, { name: { kor: "펜타클 9", eng: "Nine of Pentacles" }, img: "images/펜타클/펜타클9.jpg" }, { name: { kor: "펜타클 10", eng: "Ten of Pentacles" }, img: "images/펜타클/펜타클10.jpg" }, { name: { kor: "펜타클 페이지", eng: "Page of Pentacles" }, img: "images/펜타클/펜타클 페이지.jpg" }, { name: { kor: "펜타클 나이트", eng: "Knight of Pentacles" }, img: "images/펜타클/펜타클 나이트.jpg" }, { name: { kor: "펜타클 퀸", eng: "Queen of Pentacles" }, img: "images/펜타클/펜타클 퀸.jpg" }, { name: { kor: "펜타클 킹", eng: "King of Pentacles" }, img: "images/펜타클/펜타클 킹.jpg" }
    ];
    
    function getLocalizedCardNameByIndex(index, language) {
        const card = tarotData[index];
        return card ? card.name[language] || card.name.kor : `Card ${index}`;
    }
    
    const CONFIG = { CARDS_TO_PICK: 4 };
    const AUTO_LOCK_DURATION_MS = 10 * 60 * 1000;
    const AUTO_LOCK_STORAGE_KEY = 'ask_anything_auto_lock_until';

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
            reshuffleBtn: document.getElementById('reshuffle-btn'),
        },
        resultScreen: {
            loadingSection: document.getElementById('loading-section'),
            resultSections: document.getElementById('result-sections'),
            cardSection: document.getElementById('individual-cards-section'),
            summarySection: document.getElementById('summary-section'),
            actionPlanSection: document.getElementById('action-plan-section'),
            cardImage: document.getElementById('result-card-image'),
            overlayText: document.getElementById('card-overlay-text'),
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
        },
        musicBtn: document.getElementById('music-btn'),
        musicSliderContainer: document.getElementById('music-slider-container'),
        musicToggle: document.getElementById('music-toggle')
    };
    if (elements.sounds.shuffle) {
        elements.sounds.shuffle.loop = true;
    }

    // --- 4. 핵심 로직 (Core Logic) ---

    function render() {
        elements.screens.forEach(screen => {
            screen.style.display = screen.id === appState.currentScreen ? 'flex' : 'none';
        });
        applyAutoLockUiState();
        applyTranslations();
        switch (appState.currentScreen) {
            case 'mbti-test-screen': renderMbtiQuestion(); break;
            case 'mbti-result-screen': elements.mbtiResultScreen.display.textContent = appState.userMBTI; break;
            case 'card-select-screen': renderCardSelectScreen(); break;
            case 'result-screen': if (appState.fullResultData) { renderResultScreen(); } break;
        }
    }
    
    function navigateTo(screenId) {
        appState.currentScreen = screenId;
        render();
    }
    
    function resetApp() {
        stopShuffleSound();
        stopTypingEffect();
        // stopLoadingTyping(); // 로딩은 결과화면에서만 관리
        Object.assign(appState, {
            currentScreen: 'main-screen', userQuestion: '', userMBTI: '', selectedCards: [],
            deck: [], fullResultData: null, resultStage: 0,
            languageChosenManually: false, sessionLanguageMode: null, autoLockUntil: null,
            mbti: { answers: [], currentQuestionIndex: 0 },
        });
        try { localStorage.removeItem(AUTO_LOCK_STORAGE_KEY); } catch (e) {}
        elements.mbtiInput.value = '';
        elements.questionInput.value = '';
        document.querySelector('.lang-switcher-top-right').style.display = 'block';
        render();
    }

    // --- 5. 기능별 함수들 ---

    // 자동 잠금, 다국어, 사운드 등 유틸리티 함수들 ...
    function persistAutoLockIfNeeded() { /* ... */ }
    function shouldBlockAutoFlow() { /* ... */ return false; } // 단순화를 위해 비활성화
    function showAutoLockNotice() { /* ... */ }
    function applyAutoLockUiState() { /* ... */ }
    function startAutoLockCountdown() { /* ... */ }

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
        const langCodeMap = { 'kor': 'KO', 'eng': 'EN', 'can': 'CAN', 'vi': 'VI', 'id': 'ID', 'chn': 'CHN', 'fr': 'FR', 'es': 'ES', 'hin': 'HIN' };
        elements.langButton.textContent = langCodeMap[lang] || 'KO';
        initFortuneMenu();
    }

    function initFortuneMenu() { /* ... */ }
    function getNestedTranslation(translations, key) { /* ... */ }
    
    function playSound(type) {
        if (!appState.isMusicOn) return;
        const sound = elements.sounds[type];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => {});
        }
    }
    function startShuffleSound() { playSound('shuffle'); }
    function stopShuffleSound() {
        const sound = elements.sounds.shuffle;
        if (sound) {
            sound.pause();
            sound.currentTime = 0;
        }
    }

    // MBTI 로직 ...
    function startMbtiTest() { /* ... */ }
    function renderMbtiQuestion() { /* ... */ }
    function handleMbtiAnswer(score) { /* ... */ }
    function calculateMbti() { /* ... */ }

    // 카드 선택 로직 - Grok 개선안 적용
    function renderCardSelectScreen() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeCardSelect);
        } else {
            initializeCardSelect();
        }
    }

    function initializeCardSelect() {
        const cardContainer = document.getElementById('card-container');
        const shuffleStatus = document.getElementById('shuffle-status');
        if (!cardContainer || !shuffleStatus) { return; }
        
        cardContainer.innerHTML = '';
        shuffleStatus.textContent = UI_TEXTS[appState.language]?.shuffleStatus?.playing || '카드를 섞는 중...';
        shuffleStatus.style.opacity = '1';
        startShuffleSound();

        setTimeout(() => {
            stopShuffleSound();
            if (shuffleStatus) shuffleStatus.style.opacity = '0';
            createCards();
        }, 1500);
        
        updateCardCounter();
    }

    function createCards() {
        const cardContainer = document.getElementById('card-container');
        if (!cardContainer) return;
        cardContainer.innerHTML = '';
        const cardCount = 15;
        const containerWidth = cardContainer.offsetWidth || 800;
        const cardWidth = 100;
        
        for (let i = 0; i < cardCount; i++) {
            const card = document.createElement('div');
            card.className = 'card';
            const xPosition = (containerWidth / 2) - (cardWidth / 2);
            card.style.left = `${xPosition}px`;
            cardContainer.appendChild(card);
            
            const angle = (i - (cardCount - 1) / 2) * 8;
            const yOffset = -50;
            
            requestAnimationFrame(() => {
                setTimeout(() => {
                    card.style.transform = `rotate(${angle}deg) translateY(${yOffset}px)`;
                }, i * 80);
            });
            
            card.addEventListener('click', () => handleCardClick(card, i));
        }
    }

    function handleCardClick(card, cardIndex) {
        if (appState.selectedCards.length >= CONFIG.CARDS_TO_PICK || card.classList.contains("chosen")) return;

        card.style.transition = "all 0.5s ease";
        card.style.opacity = "0";
        card.style.transform += " scale(0.8)";
        card.classList.add("chosen");
        
        appState.selectedCards.push(cardIndex);
        playSound('select');
        
        setTimeout(() => { card.style.display = "none"; }, 500);
        
        updateCardCounter();
        
        if (appState.selectedCards.length === CONFIG.CARDS_TO_PICK) {
            setTimeout(fetchFullReading, 1000);
        }
    }

    function updateCardCounter() {
        const counterElement = document.getElementById('counter');
        const mainTitle = document.getElementById('main-title');
        const left = CONFIG.CARDS_TO_PICK - appState.selectedCards.length;
        if (counterElement) counterElement.textContent = `${left} cards left.`;
        if (left === 0 && mainTitle) mainTitle.textContent = UI_TEXTS[appState.language]?.selectCardsComplete || '선택이 완료되었습니다.';
    }

    function reshuffleCards() { /* ... */ }
    
    // API 호출
    async function fetchFullReading() {
        if (appState.isFetching) return;

        try {
            appState.isFetching = true;
            navigateTo('result-screen');
            elements.resultScreen.loadingSection.style.display = 'flex';
            elements.resultScreen.resultSections.style.display = 'none';
            // startLoadingTyping(); // 로딩 애니메이션으로 대체

            const cardNames = appState.selectedCards.map(index => getLocalizedCardNameByIndex(index, appState.language));
            const response = await fetch('/api/interpret', { /* ... */ });
            if (!response.ok) { throw new Error((await response.json()).message || `HTTP 에러: ${response.status}`); }
            const result = await response.json();
            if (!result.success || !result.data?.cardInterpretations) { throw new Error('API 데이터 형식이 올바르지 않습니다.'); }
            
            appState.fullResultData = result.data;
            appState.resultStage = 0;
            render();
        } catch (error) {
            console.error("API Error:", error);
            const loadingSection = document.getElementById('loading-section');
            if (loadingSection) {
                loadingSection.innerHTML = `<div class="error-message"><h3>오류 발생</h3><p>${error.message}</p><button onclick="window.location.reload()">처음으로</button></div>`;
            }
        } finally {
            appState.isFetching = false;
        }
    }

    // 결과 화면 렌더링
    function renderResultScreen() {
        // stopLoadingTyping();
        elements.resultScreen.loadingSection.style.display = 'none';
        elements.resultScreen.resultSections.style.display = 'block';
        updateResultStageContent();
    }

    function updateResultStageContent() {
        const { cardInterpretations, overallReading } = appState.fullResultData;
        const stage = appState.resultStage;

        stopTypingEffect();
        elements.resultScreen.cardSection.style.display = 'none';
        elements.resultScreen.summarySection.style.display = 'none';
        elements.resultScreen.actionPlanSection.style.display = 'none';
        
        if (stage < CONFIG.CARDS_TO_PICK) {
            elements.resultScreen.cardSection.style.display = 'block';
            prepareCardStage(stage, cardInterpretations[stage].interpretation);
        } else if (stage === CONFIG.CARDS_TO_PICK) {
            elements.resultScreen.summarySection.style.display = 'block';
            renderSummaryStage(overallReading);
        } else {
            elements.resultScreen.actionPlanSection.style.display = 'block';
            renderActionPlanStage(overallReading.mbtiActionPlan);
        }
    }

    // ⭐⭐⭐ 최종 완성된 결과 카드 애니메이션 로직 ⭐⭐⭐
    function prepareCardStage(stageIndex, text) {
        const imageEl = elements.resultScreen.cardImage;
        const overlayEl = elements.resultScreen.overlayText;
        if (!imageEl || !overlayEl) { return; }

        const cardData = appState.fullResultData.cardInterpretations[stageIndex];
        const cardIndex = appState.selectedCards[stageIndex];
        const cardName = getLocalizedCardNameByIndex(cardIndex, appState.language);

        document.getElementById('card-stage-title').textContent = `${stageIndex + 1}번째 카드: ${cardName}`;
        elements.resultScreen.keywordsArea.innerHTML = buildKeywordsHtml(cardData.keywords);

        imageEl.classList.remove('interactive-card', 'reveal-animation', 'blur');
        overlayEl.classList.remove('show');
        overlayEl.innerHTML = '';
        imageEl.onclick = null;
        
        imageEl.src = tarotData[cardIndex].img;
        imageEl.style.display = 'block';
        imageEl.classList.add('reveal-animation');
        
        const revealTimeout = setTimeout(() => {
            imageEl.classList.remove('reveal-animation');
            imageEl.classList.add('interactive-card');
        }, 700);

        const showCardText = () => {
            clearTimeout(revealTimeout); 
            playSound('card-select');
            imageEl.classList.remove('interactive-card', 'reveal-animation');
            imageEl.classList.add('blur');
            overlayEl.classList.add('show');
            imageEl.onclick = null;
            imageEl.style.cursor = 'default';
            startTypingEffect(overlayEl, text, () => {
                setTimeout(() => revealCardButtons(stageIndex), 2000);
            });
        };

        imageEl.onclick = showCardText;
        imageEl.style.cursor = 'pointer';
    }

    function renderSummaryStage(overallReading) { /* ... */ }
    function renderActionPlanStage(plan) { /* ... */ }

    // 타이핑 효과
    function startTypingEffect(element, fullText, onComplete) { /* ... */ }
    function stopTypingEffect() { /* ... */ }
    
    // 버튼 표시/숨김
    function revealCardButtons(stageIndex) { /* ... */ }
    function revealStageButtons(context) { /* ... */ }

    // 유틸리티
    function buildKeywordsHtml(keywords) { /* ... */ }
    function translationForKey(key, fallback) { /* ... */ }
    
    // PDF 생성
    async function generatePDF() { /* ... */ }
    function createPDFContent() { /* ... */ }

    // 이벤트 리스너 등록
    function initEventListeners() {
        // ... (음악 버튼 이벤트 리스너 포함한 모든 리스너) ...
    }

    // 배경음악 초기화
    function initBackgroundMusic() {
        const handpanSound = document.getElementById('handpan-sound');
        const handpan2Sound = document.getElementById('handpan2-sound');
        if (!handpanSound || !handpan2Sound) { return; }

        handpanSound.volume = 0.5;
        handpan2Sound.volume = 0.5;

        let currentTrack = 1;
        const playNextTrack = () => {
            if (!appState.isMusicOn) return;
            // ...
        };

        handpanSound.addEventListener('ended', playNextTrack);
        handpan2Sound.addEventListener('ended', playNextTrack);

        window.playBgMusic = () => {
            if (!appState.isMusicOn || handpanSound.currentTime > 0) return;
            handpanSound.play().catch(e => {});
        };
        window.stopBgMusic = () => {
            handpanSound.pause(); handpanSound.currentTime = 0;
            handpan2Sound.pause(); handpan2Sound.currentTime = 0;
        };
        
        const startMusicOnFirstInteraction = () => { if (appState.isMusicOn) window.playBgMusic(); };
        document.addEventListener('click', startMusicOnFirstInteraction, { once: true });
        document.addEventListener('touchstart', startMusicOnFirstInteraction, { once: true });
    }

    // --- 앱 시작 ---
    initEventListeners();
    initBackgroundMusic();
    resetApp();
});