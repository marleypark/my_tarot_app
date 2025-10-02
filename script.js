const LOADING_RIPPLES_HTML = `
  <div class="ripple-inward"></div><div class="ripple-inward"></div><div class="ripple-inward"></div>
  <div class="ripple-inward"></div><div class="ripple-inward"></div><div class="ripple-inward"></div>`;
  
function resetLoadingSectionMarkup() {
  const el = document.getElementById('loading-section');
  if (el) el.innerHTML = LOADING_RIPPLES_HTML;
}

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
    lockTimer: null,
    readingRequested: false,      // 요청 예약 플래그
    currentFetchController: null, // 진행 중인 fetch 제어
    typing: {
        isRunning: false,
        timer: null,
        element: null,
        speed: 25,
        skipHandler: null,
    },
    tapHintTimer: null,
    tapHintEl: null,
    audio: {
        cosmicReady: false, // 로드 완료 여부
        cosmicError: false, // 로드 에러 여부
        cosmicStartedAt: 0,
        cosmicMinMs: 1800,  // 최소 재생 보장 시간 (1.8초)
        _fadeRaf: null,     // 페이드 애니메이션 프레임 ID
    },
    // 더 이상 사용하지 않는 오래된 상태값들 정리
    // currentResultIndex: 0, 
    // shufflePlaying: false,
    // cardRevealed: [],
    // summaryRevealed: false,
};

// appState 객체 바로 아래에 추가
let listenersInitialized = false;

// 👇 잠금 대상 화면 목록 정의
const LOCK_APPLIES_TO_SCREENS = new Set([
    'question-dialog-screen',
    'custom-question-screen',
    'mbti-entry-screen',
    'mbti-test-screen',
    'mbti-result-screen',
    'card-select-screen'
]);

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
            cosmic: document.getElementById('cosmic-sound'),
            handpan2: document.getElementById('handpan2-sound'),
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
        
        applyTranslations();
        applyAutoLockUiState(); // 모든 화면 전환 시 잠금 상태를 체크하여 '벽'을 세울지 결정

        switch (appState.currentScreen) {
            case 'mbti-test-screen': renderMbtiQuestion(); break;
            case 'mbti-result-screen': elements.mbtiResultScreen.display.textContent = appState.userMBTI; break;
            case 'card-select-screen': renderCardSelectScreen(); break;
            case 'result-screen': if (appState.fullResultData) { renderResultScreen(); } break;
        }
    }
    
    function navigateTo(screenId) {
        appState.currentScreen = screenId;
        render(); // 오직 화면 전환과 렌더링만 담당
    }
    
    // --- 잠금 관리 로직 ---
    function isLocked() {
        const until = localStorage.getItem(AUTO_LOCK_STORAGE_KEY);
        if (!until) return false;
        // 언어를 수동으로 선택했다면, 잠금을 무시합니다.
        if (appState.languageChosenManually) return false;
        return Date.now() < parseInt(until, 10);
    }

    function setLock() {
        const until = Date.now() + AUTO_LOCK_DURATION_MS;
        try {
            localStorage.setItem(AUTO_LOCK_STORAGE_KEY, String(until));
        } catch (e) {
            console.error("Failed to set lock in localStorage", e);
        }
    }

    function clearLock() {
        appState.autoLockUntil = null;
        if (appState.lockTimer) clearInterval(appState.lockTimer);
        try {
            localStorage.removeItem(AUTO_LOCK_STORAGE_KEY);
        } catch (e) {
            console.error("Failed to clear lock from localStorage", e);
        }
        applyAutoLockUiState(); // UI 즉시 갱신
    }

    function applyAutoLockUiState() {
        const overlay = document.getElementById('lock-overlay');
        if (!overlay) return;

        const locked = isLocked();
        // 현재 화면이 잠금 대상 화면 목록에 포함되어 있을 때만 오버레이를 보여줌
        const shouldShowOverlay = locked && LOCK_APPLIES_TO_SCREENS.has(appState.currentScreen);

        overlay.style.display = shouldShowOverlay ? 'flex' : 'none';

        if (shouldShowOverlay) {
            const msgEl = document.getElementById('lock-msg');
            const updateTimer = () => {
                const until = parseInt(localStorage.getItem(AUTO_LOCK_STORAGE_KEY) || '0', 10);
                const remain = Math.max(0, until - Date.now());

                if (remain === 0) {
                    if (appState.lockTimer) clearInterval(appState.lockTimer);
                    // 잠금이 풀리면 현재 화면을 다시 렌더링하여 오버레이를 없앰
        render();
                    return;
                }

                const mm = String(Math.floor(remain / 60000)).padStart(2, '0');
                const ss = String(Math.floor((remain % 60000) / 1000)).padStart(2, '0');
                msgEl.textContent = `잠시 후 다시 이용할 수 있습니다. (남은 시간 ${mm}:${ss})`;
            };

            if (appState.lockTimer) clearInterval(appState.lockTimer);
            updateTimer();
            appState.lockTimer = setInterval(updateTimer, 1000);
        } else {
            if (appState.lockTimer) {
                clearInterval(appState.lockTimer);
                appState.lockTimer = null;
            }
        }
    }
    
    function resetApp() {
        console.log("Resetting application...");
        // AudioManager.setTheme('main'); // ✅ 사용자 상호작용 후에만 실행되도록 제거
        clearTextGuide(); // ✅ 추가
        stopShuffleSound();
        stopTypingEffect();

        // 모든 비동기 작업 확실하게 정리
        if (appState.lockTimer) { clearInterval(appState.lockTimer); appState.lockTimer = null; }
        if (appState.readingTimer) { clearTimeout(appState.readingTimer); appState.readingTimer = null; }
        if (appState.currentFetchController) {
            try { appState.currentFetchController.abort(); } catch {}
            appState.currentFetchController = null;
        }

        Object.assign(appState, {
            currentScreen: 'main-screen',
            userQuestion: '',
            userMBTI: '',
            selectedCards: [],
            fullResultData: null,
            resultStage: 0,
            isFetching: false,
            readingRequested: false,
            languageChosenManually: false, // 👈 이 부분이 반드시 false로 초기화되어야 함
        });
        
        // 오타 수정: mbiInput -> mbtiInput
        if (elements.mbtiInput) elements.mbtiInput.value = '';
        if (elements.questionInput) elements.questionInput.value = '';

        navigateTo('main-screen');
    }

    // --- 5. 기능별 함수들 ---

    // 자동 잠금, 다국어, 사운드 등 유틸리티 함수들 ...
    function persistAutoLockIfNeeded() { /* ... */ }
    function shouldBlockAutoFlow() { /* ... */ return false; } // 단순화를 위해 비활성화
    function showAutoLockNotice() { /* ... */ }
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
    
    // 사운드 프리로딩 및 재생
    const soundCache = {};
    
    // clamp01 헬퍼 함수 - 음량 값을 0-1 사이로 제한
    function clamp01(n) {
        if (!Number.isFinite(n)) return 0; // NaN/Infinity 방어
        return Math.max(0, Math.min(1, n));
    }
    
    // 동시성-안전한 fadeAudio를 위한 WeakMap
    const _fadeState = new WeakMap(); // audio -> { rafId, resolve }
    
    function preloadSounds() {
        const soundTypes = ['select', 'button', 'shuffle', 'typing', 'cosmic', 'handpan2'];
        soundTypes.forEach(type => {
            const sound = elements.sounds[type];
            if (sound) {
                sound.load();
                soundCache[type] = sound;
            }
        });
    }
    
    function playSound(type) {
        if (!appState.isMusicOn) return;
        const sound = soundCache[type] || elements.sounds[type];
        if (sound) {
            // 딜레이 최소화를 위해 즉시 재생
            sound.currentTime = 0;
            const playPromise = sound.play();
            if (playPromise !== undefined) {
                playPromise.catch(e => {
                    console.log('Sound play failed:', e);
                });
            }
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

    // 타이핑 사운드 제어 함수들
    function startTypingSound() {
        if (!appState.isMusicOn) return;
        const s = elements.sounds.typing;
        if (!s) return;
        try {
            s.loop = true;
            s.currentTime = 0;
            const p = s.play();
            if (p && p.catch) p.catch(() => {});
        } catch (e) {
            console.log('Typing sound start failed:', e);
        }
    }

    function stopTypingSound() {
        const s = elements.sounds.typing;
        if (!s) return;
        try {
            s.pause();
            s.currentTime = 0;
            s.loop = false;
        } catch (e) {}
    }

    function fadeAudio(audio, toVol = 1, duration = 420) {
        return new Promise(resolve => {
            if (!audio) return resolve();

            // 이전 페이드가 있으면 안전 취소 + 즉시 resolve
            const prev = _fadeState.get(audio);
            if (prev) {
                cancelAnimationFrame(prev.rafId || 0);
                try { prev.resolve && prev.resolve(); } catch {}
            }

            const from = clamp01(audio.volume ?? 1);
            const target = clamp01(toVol);
            if (duration <= 0 || from === target) {
                try { audio.volume = target; } catch {}
                _fadeState.delete(audio);
                return resolve();
            }

            const start = performance.now();
            const state = { rafId: 0, resolve };
            _fadeState.set(audio, state);

            const step = (now) => {
                if (_fadeState.get(audio) !== state) return; // 이미 취소되었으면 중단
                const t = Math.min(1, (now - start) / duration);
                const v = clamp01(from + (target - from) * t);
                try { audio.volume = v; } catch {}
                if (t < 1) {
                    state.rafId = requestAnimationFrame(step);
                } else {
                    _fadeState.delete(audio);
                    resolve();
                }
            };
            state.rafId = requestAnimationFrame(step);
        });
    }

    // AudioManager - 음악 감독 시스템
    const AudioManager = (() => {
        const tracks = {
            main:   document.getElementById('handpan-sound'),
            result: document.getElementById('handpan2-sound'),
            cosmic: document.getElementById('cosmic-sound'),
        };
        const targetVol = { main: 0.3, result: 0.32, cosmic: 0.9 };
        let currentTheme = null;
        let cosmicActive = false;

        async function playSafe(audio) {
            if (!audio || audio.error) return;
            try {
                if(audio.paused) await audio.play();
            } catch (e) { console.warn(`Audio play failed for ${audio.id}`, e); }
        }
        function pauseSafe(audio) { if (audio) audio.pause(); }

        async function crossfade(fromAudio, toAudio, toVol) {
            if (!appState.isMusicOn) return;

            // ✅ 방어 로직 추가
            if (fromAudio === toAudio) {
                if (toAudio) await playSafe(toAudio);
                return;
            }

            await Promise.all([
                fromAudio ? fadeAudio(fromAudio, 0, 380) : Promise.resolve(),
                (async () => {
                    if (toAudio) {
                        await playSafe(toAudio);
                        await fadeAudio(toAudio, toVol, 420);
                    }
                })()
            ]);
            if (fromAudio) pauseSafe(fromAudio);
        }

        return {
            async setTheme(theme) { // 'main' | 'result' | null
                if (!appState.isMusicOn || theme === currentTheme) return;
                
                const fromAudio = currentTheme ? tracks[currentTheme] : (cosmicActive ? tracks.cosmic : null);
                const toAudio = theme ? tracks[theme] : null;
                
                await crossfade(fromAudio, toAudio, toAudio ? targetVol[theme] : 0);

                currentTheme = theme;
                if (fromAudio === tracks.cosmic) cosmicActive = false;
            },
            async startCosmic() {
                if (!appState.isMusicOn || cosmicActive) return;
                const fromAudio = currentTheme ? tracks[currentTheme] : null;
                await crossfade(fromAudio, tracks.cosmic, targetVol.cosmic);
                cosmicActive = true;
                currentTheme = null;
                appState.audio.cosmicStartedAt = Date.now();
            },
            async stopCosmic() {
                if (!cosmicActive) return;
                const elapsed = Date.now() - (appState.audio.cosmicStartedAt || 0);
                const wait = Math.max(0, appState.audio.cosmicMinMs - elapsed);
                
                const endCosmic = async () => {
                    await fadeAudio(tracks.cosmic, 0, 360);
                    pauseSafe(tracks.cosmic);
                    cosmicActive = false;
                };

                if (wait > 0) await new Promise(res => setTimeout(res, wait));
                await endCosmic();
            },
        };
    })();



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
            card.style.marginLeft = '0'; // ← CSS 중복 보정 방지
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
            if (appState.readingRequested) return; // 🛡️ 이미 예약되었다면 중복 방지
            appState.readingRequested = true;
            
            console.log("All cards selected. Scheduling API call.");
            // 타이머 ID를 상태에 저장
            appState.readingTimer = setTimeout(() => {
                appState.readingTimer = null; // 타이머 실행 후 ID 제거
                fetchFullReading();
            }, 1000);
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
        if (isLocked()) {
            appState.readingRequested = false; 
            // main-screen이 아닌, 오버레이가 즉시 나타날 수 있는 화면으로 보낸다.
            navigateTo('question-dialog-screen'); 
            return;
        }
        
        // 🛡️ 이전 요청이 진행 중이면 취소 (최종 방어선)
        if (appState.currentFetchController) {
            appState.currentFetchController.abort();
            console.warn("Previous fetch request aborted.");
        }
        const controller = new AbortController();
        appState.currentFetchController = controller;

        try {
            appState.isFetching = true;
            navigateTo('result-screen');
            elements.resultScreen.loadingSection.style.display = 'flex';
            elements.resultScreen.resultSections.style.display = 'none';

            // ✅ 로딩 음악 시작 (fire-and-forget)
            AudioManager.startCosmic();

            const cardNames = appState.selectedCards.map(index => getLocalizedCardNameByIndex(index, appState.language));
            console.log(`[API Request] cards: [${cardNames.join(', ')}], lang: ${appState.language}`);

            const response = await fetch('/api/interpret', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    question: appState.userQuestion,
                    mbti: appState.userMBTI,
                    cardNames: cardNames,
                    language: appState.language
                }),
                signal: controller.signal // AbortController 신호 연결
            });

            if (!response.ok) {
                let errorData;
                try { errorData = await response.json(); } catch {}
                throw new Error(errorData?.message || `HTTP Error: ${response.status}`);
            }

            const result = await response.json();
            if (!result.success || !result.data?.cardInterpretations) {
                throw new Error('API 데이터 형식이 올바르지 않습니다.');
            }
            
            appState.fullResultData = result.data;
            appState.resultStage = 0;

            if (!appState.languageChosenManually) setLock();
            render();

        } catch (err) {
            if (err.name === 'AbortError') {
                console.log("Fetch request was successfully aborted.");
                return;
            }
            console.error('API Error:', err);
            
            AudioManager.setTheme('main'); // ✅ 실패 시 메인 테마로 복귀

            const msg = String(err?.message || '');
            const isOverload = /503|service unavailable|unavailable|overload/i.test(msg);
            
            const loadingSection = document.getElementById('loading-section');
            if (loadingSection) {
                const errorTitle = UI_TEXTS[appState.language]?.errorTitle || '오류 발생';
                const friendlyMsg = isOverload
                  ? (UI_TEXTS[appState.language]?.serverOverloaded || '현재 접속이 많아 응답이 지연되고 있습니다.')
                  : (UI_TEXTS[appState.language]?.genericError || '문제가 발생했습니다. 다시 시도해 주세요.');
                const retryBtnText = UI_TEXTS[appState.language]?.retryButton || '재시도';
                const restartBtnText = UI_TEXTS[appState.language]?.restartButton || '처음으로';

                loadingSection.innerHTML = `
                  <div class="error-message">
                    <h3>${errorTitle}</h3>
                    <p>${friendlyMsg}</p>
                    <div style="display:flex; gap:12px; justify-content:center;">
                      <button id="error-retry-btn">${retryBtnText}</button>
                      <button id="error-reset-btn">${restartBtnText}</button>
                    </div>
                  </div>`;

                document.getElementById('error-retry-btn')?.addEventListener('click', () => {
                  resetLoadingSectionMarkup();
                  // API 호출만 다시 실행
                  fetchFullReading(); 
                });
                document.getElementById('error-reset-btn')?.addEventListener('click', resetApp);
            }
        } finally {
            // ✅ 로딩 음악 정리는 renderResultScreen에서 처리

            appState.isFetching = false;
            if (appState.currentFetchController === controller) {
                appState.currentFetchController = null;
            }
            // finally 에서는 readingRequested를 false로 바꾸지 않습니다.
            // 오직 resetApp을 통해서만 초기화되어야 게임의 한 사이클이 보장됩니다.
        }
    }

    // 결과 화면 렌더링
    function renderResultScreen() {
        // ✅ cosmic 음악 정리 후 결과 테마 시작
        AudioManager.stopCosmic().then(() => {
            AudioManager.setTheme('result');
        });
        
        // stopLoadingTyping();
        elements.resultScreen.loadingSection.style.display = 'none';
        elements.resultScreen.resultSections.style.display = 'block';
        
        // 결과 화면 진입 시 모든 하단 버튼들 숨기기
        const pdfSaveBtn = document.getElementById('pdf-save-btn');
        const restartBtn = document.getElementById('restart-btn');
        const bottomNav = document.querySelector('.bottom-navigation');
        
        if (pdfSaveBtn) pdfSaveBtn.style.display = 'none';
        if (restartBtn) restartBtn.style.display = 'none';
        if (bottomNav) bottomNav.style.display = 'none';
        
        updateResultStageContent();
    }

    function updateResultStageContent() {
        clearTextGuide(); // ✅ 추가
        const { cardInterpretations, overallReading } = appState.fullResultData;
        const stage = appState.resultStage;

        stopTypingEffect();
        elements.resultScreen.cardSection.style.display = 'none';
        elements.resultScreen.summarySection.style.display = 'none';
        elements.resultScreen.actionPlanSection.style.display = 'none';
        
        // PDF 버튼과 하단 네비게이션 버튼들 숨기기
        const pdfSaveBtn = document.getElementById('pdf-save-btn');
        const restartBtn = document.getElementById('restart-btn');
        const bottomNav = document.querySelector('.bottom-navigation');
        
        if (pdfSaveBtn) pdfSaveBtn.style.display = 'none';
        if (restartBtn) restartBtn.style.display = 'none';
        if (bottomNav) bottomNav.style.display = 'none';
        
        if (stage < CONFIG.CARDS_TO_PICK) {
            elements.resultScreen.cardSection.style.display = 'block';
            prepareCardStage(stage, cardInterpretations[stage].interpretation);
        } else if (stage === CONFIG.CARDS_TO_PICK) {
            elements.resultScreen.summarySection.style.display = 'block';
            renderSummaryStage(overallReading);
        } else {
            elements.resultScreen.actionPlanSection.style.display = 'block';
            renderActionPlanStage(overallReading.mbtiActionPlan);
            // 마지막 화면에서만 PDF 버튼과 하단 네비게이션 표시
            if (pdfSaveBtn) pdfSaveBtn.style.display = 'block';
            if (restartBtn) restartBtn.style.display = 'block';
            if (bottomNav) bottomNav.style.display = 'flex';
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
        elements.resultScreen.keywordsArea.style.display = 'block';

        const cardNextBtn = document.getElementById('card-next-btn');
        const cardPrevBtn = document.getElementById('card-prev-btn');
        if (cardNextBtn) cardNextBtn.style.display = 'none';
        if (cardPrevBtn) cardPrevBtn.style.display = 'none';

        imageEl.classList.remove('interactive-card', 'reveal-animation', 'blur');
        overlayEl.classList.remove('show');
        overlayEl.innerHTML = '';
        imageEl.onclick = null;
        
        // ✅ 이전 힌트 정리
        clearTextGuide(); 
        
        imageEl.src = tarotData[cardIndex].img;
        imageEl.style.display = 'block';
        imageEl.classList.add('reveal-animation');
        
        const revealTimeout = setTimeout(() => {
            imageEl.classList.remove('reveal-animation');
            imageEl.classList.add('interactive-card');
            
            // ✅ 수정 지점: 첫 번째 카드일 때만 텍스트 가이드 표시
            if (stageIndex === 0) {
                scheduleTextGuide(imageEl);
            }
        }, 700);

        const showCardText = () => {
            clearTimeout(revealTimeout); 
            // ✅ 클릭 시 힌트 즉시 제거
            clearTextGuide(); 
            playSound('card-select');

            imageEl.classList.remove('interactive-card', 'reveal-animation');
            imageEl.classList.add('blur');
            overlayEl.classList.add('show');
            imageEl.onclick = null;
            imageEl.style.cursor = 'default';

            revealCardButtons(stageIndex);

            startTypingEffect(overlayEl, text, () => {
                revealCardButtons(stageIndex);
            });
        };

        imageEl.onclick = showCardText;
        imageEl.style.cursor = 'pointer';
    }

    function renderSummaryStage(overallReading) {
        if (!overallReading) return;

        // 1. 총정리 제목 설정
        const summaryTitleEl = document.getElementById('summary-title');
        if (summaryTitleEl) {
            summaryTitleEl.textContent = overallReading.title || '카드 조합 총정리';
        }

        // 2. 선택된 카드 이미지들 표시
        const summaryCardsDisplayEl = document.getElementById('summary-cards-display');
        if (summaryCardsDisplayEl) {
            summaryCardsDisplayEl.innerHTML = appState.selectedCards.map(cardIndex => {
                const cardData = tarotData[cardIndex];
                const cardName = getLocalizedCardNameByIndex(cardIndex, appState.language);
                return `
                    <div class="summary-card-container">
                        <img src="${cardData.img}" alt="${cardName}">
                        <span class="summary-card-name">${cardName}</span>
                    </div>
                `;
            }).join('');
        }

        // 3. 타이핑 효과로 총정리 텍스트 표시
        const summaryTextEl = document.getElementById('summary-text');
        if (summaryTextEl) {
            // 다음/이전 버튼을 위한 로직 추가
            const stageNav = document.querySelector('.stage-navigation');
            const nextBtn = document.getElementById('next-stage-btn');
            if (stageNav) stageNav.style.display = 'none'; // 타이핑 시작 전에는 숨김

            startTypingEffect(summaryTextEl, overallReading.summary, () => {
                // 타이핑 완료 후 '다음' 버튼 표시
                if (stageNav) stageNav.style.display = 'flex';
                if (nextBtn) {
                    nextBtn.classList.add('show');
                    // 이전 버튼은 이 단계에서 필요 없으므로 숨김 처리
                    document.getElementById('prev-stage-btn').classList.remove('show');
                }
            });
        }
    }
    
    function renderActionPlanStage(plan) { /* ... */ }

    // 타이핑 효과
    function startTypingEffect(element, fullText, onComplete) {
        // 진행 중인 타이핑이 있다면 먼저 정리
        stopTypingEffect();

        if (!element || !fullText) return;

        const t = appState.typing;
        t.isRunning = true;
        t.element = element;
        element.innerHTML = '';
        element.style.cursor = 'pointer';

        let i = 0;

        // 클릭 직후 사운드 루프 시작
        startTypingSound();

        const step = () => {
            if (!t.isRunning) return;
            if (i < fullText.length) {
                element.innerHTML += fullText[i++];
                t.timer = setTimeout(step, t.speed || 50);
            } else {
                // 완료
                t.isRunning = false;
                stopTypingSound();
                if (onComplete) onComplete();
            }
        };

        t.skipHandler = () => {
            if (!t.isRunning) return;
            t.isRunning = false;
            if (t.timer) { clearTimeout(t.timer); t.timer = null; }
            element.innerHTML = fullText; // 전체 즉시 표시
            stopTypingSound();            // 즉시 소리 정지
            if (onComplete) onComplete();
        };

        // 텍스트 클릭 시 스킵
        element.addEventListener('click', t.skipHandler, { once: true });

        // 타이핑 시작
        t.timer = setTimeout(step, t.speed || 50);
    }

    function stopTypingEffect() {
        const t = appState.typing;
        if (!t) return; // appState.typing이 정의되지 않은 경우를 대비한 가드

        if (t.timer) { clearTimeout(t.timer); t.timer = null; }
        if (t.element && t.skipHandler) {
            try { t.element.removeEventListener('click', t.skipHandler); } catch {}
        }
        stopTypingSound();

        t.isRunning = false;
        t.element = null;
        t.skipHandler = null;
    }
    
    // 버튼 표시/숨김
    function revealCardButtons(stageIndex) {
        const cardNextBtn = document.getElementById('card-next-btn');
        const cardPrevBtn = document.getElementById('card-prev-btn');

        if (cardNextBtn) {
            cardNextBtn.style.display = 'inline-flex'; // block 대신 inline-flex로 변경하여 정렬에 유리하게
            cardNextBtn.classList.add('show');
        }

        if (cardPrevBtn) {
            if (stageIndex > 0) {
                cardPrevBtn.style.display = 'inline-flex';
                cardPrevBtn.classList.add('show');
            } else {
                cardPrevBtn.classList.remove('show');
                cardPrevBtn.style.display = 'none';
            }
        }
    }
    function revealStageButtons(context) { /* ... */ }

    // 유틸리티
    function buildKeywordsHtml(keywords) {
        // 키워드 데이터가 없거나 형식이 맞지 않으면 빈 문자열을 반환하여 오류를 방지합니다.
        if (!keywords || typeof keywords !== 'object') {
            return '';
        }

        let html = '';
        const lang = appState.language;

        // 긍정 키워드 생성
        if (keywords.positive && keywords.positive.length > 0) {
            const positiveTitle = UI_TEXTS[lang]?.keywordPositive || '긍정';
            html += `
                <div class="keyword-group">
                    <span class="keyword-title positive">${positiveTitle}:</span>
                    ${keywords.positive.map(kw => `<span class="keyword positive">${kw}</span>`).join('')}
                </div>
            `;
        }

        // 주의(부정) 키워드 생성
        if (keywords.caution && keywords.caution.length > 0) {
            const cautionTitle = UI_TEXTS[lang]?.keywordCaution || '주의';
            html += `
                <div class="keyword-group">
                    <span class="keyword-title negative">${cautionTitle}:</span>
                    ${keywords.caution.map(kw => `<span class="keyword negative">${kw}</span>`).join('')}
                </div>
            `;
        }

        return html;
    }
    function translationForKey(key, fallback) { /* ... */ }
    
    // PDF 생성
    async function generatePDF() { /* ... */ }
    function createPDFContent() { /* ... */ }

    // 이벤트 리스너 등록
    function initEventListeners() {
        if (listenersInitialized) return; // 🛡️ 중복 실행 원천 차단
        listenersInitialized = true;
        console.log("Initializing event listeners for the first time.");

        // --- 메인 화면 ---
        elements.mainShuffleArea.addEventListener('click', () => {
            playSound('button');
            // 잠금 여부 체크 없이 무조건 다음 화면으로 이동 요청
            navigateTo('question-dialog-screen');
        });

        // --- 언어 메뉴 ---
        const languages = [
          { code: 'kor', label: 'KO' }, { code: 'eng', label: 'EN' },
          { code: 'can', label: 'CAN' }, { code: 'vi', label: 'VI' },
          { code: 'id', label: 'ID' }, { code: 'chn', label: 'CHN' },
          { code: 'fr', label: 'FR' }, { code: 'es', label: 'ES' },
          { code: 'hin', label: 'HIN' },
        ];
        if (elements.langMenu) {
            elements.langMenu.innerHTML = '';
            languages.forEach(({ code, label }) => {
                const li = document.createElement('li');
                li.textContent = label;
                li.addEventListener('click', () => {
                    appState.language = code;
                    appState.languageChosenManually = true;
                    clearLock();
                    elements.langMenu.classList.remove('show');
                    applyTranslations();
                    // 언어 선택 후 질문 방식 선택 화면으로 이동
                    navigateTo('question-dialog-screen');
                });
                elements.langMenu.appendChild(li);
            });
            elements.langButton.addEventListener('click', (e) => {
                e.stopPropagation();
                elements.langMenu.classList.toggle('show');
            });
            document.addEventListener('click', () => {
                elements.langMenu.classList.remove('show');
            });
        }

        // --- 질문 방식 선택 화면 ( 여기가 누락된 부분이었습니다! ) ---
        if (elements.directInputBtn) {
            elements.directInputBtn.addEventListener('click', () => {
                playSound('button');
                navigateTo('custom-question-screen');
            });
        }

        if (elements.fortuneSelectBtn) {
            elements.fortuneSelectBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                playSound('button');
                initFortuneMenu(); // 메뉴 내용을 다시 채우고
                elements.fortuneMenu.classList.toggle('show'); // 보여주기/숨기기
            });
        }

        if (elements.fortuneMenu) {
            elements.fortuneMenu.addEventListener('click', (e) => {
                if (e.target.tagName === 'LI') {
                    playSound('button');
                    appState.userQuestion = e.target.textContent;
                    elements.fortuneMenu.classList.remove('show');
                    navigateTo('mbti-entry-screen');
                }
            });
        }

        if (elements.mindQuestionBtn) {
            elements.mindQuestionBtn.addEventListener('click', () => {
                playSound('button');
                appState.userQuestion = UI_TEXTS[appState.language]?.mindQuestion || "Question in mind";
                navigateTo('mbti-entry-screen');
            });
        }
        
        // --- 질문 직접 입력 화면 ---
        if(elements.backToDialogBtn) {
            elements.backToDialogBtn.addEventListener('click', () => {
                playSound('button');
                navigateTo('question-dialog-screen');
            });
        }

        if(elements.submitQuestionBtn) {
            elements.submitQuestionBtn.addEventListener('click', () => {
                if (elements.questionInput.value.trim() === '') {
                    alert(UI_TEXTS[appState.language]?.questionPlaceholder || "Please enter a question.");
                    return;
                }
                playSound('button');
                appState.userQuestion = elements.questionInput.value;
                navigateTo('mbti-entry-screen');
            });
        }

        // --- MBTI 입력 화면 ---
        if (elements.mbtiSkipBtn) {
            elements.mbtiSkipBtn.addEventListener('click', () => {
                playSound('button');
                appState.userMBTI = '';
                navigateTo('card-select-screen');
            });
        }

        if (elements.mbtiSubmitBtn) {
            elements.mbtiSubmitBtn.addEventListener('click', () => {
                const mbtiValue = elements.mbtiInput.value.trim().toUpperCase();
                if (mbtiValue === '') {
                    alert(UI_TEXTS[appState.language]?.mbtiPlaceholder || "Please enter your MBTI type.");
                    return;
                }
                playSound('button');
                appState.userMBTI = mbtiValue;
                navigateTo('card-select-screen');
            });
        }

        // MBTI 검사 시작 버튼
        const startMbtiTestBtn = document.getElementById('start-mbti-test-btn');
        if (startMbtiTestBtn) {
            startMbtiTestBtn.addEventListener('click', () => {
                playSound('button');
                navigateTo('mbti-test-screen');
            });
        }

        // MBTI 검사 화면의 뒤로가기 버튼
        if (elements.mbtiBackBtn) {
            elements.mbtiBackBtn.addEventListener('click', () => {
                playSound('button');
                navigateTo('mbti-entry-screen');
            });
        }

        // --- 카드 네비게이션 버튼 ---
        const cardNextBtn = document.getElementById('card-next-btn');
        const cardPrevBtn = document.getElementById('card-prev-btn');
        
        if (cardNextBtn) {
            cardNextBtn.addEventListener('click', () => {
                playSound('button');
                if (appState.resultStage < CONFIG.CARDS_TO_PICK - 1) {
                    appState.resultStage++;
                    updateResultStageContent();
                } else {
                    // 마지막 카드 후 다음 단계로
                    appState.resultStage = CONFIG.CARDS_TO_PICK;
                    updateResultStageContent();
                }
            });
        }
        
        if (cardPrevBtn) {
            cardPrevBtn.addEventListener('click', () => {
                playSound('button');
                if (appState.resultStage > 0) {
                    appState.resultStage--;
                    updateResultStageContent();
                }
            });
        }

        // --- "처음으로" 버튼들 ---
        elements.resultScreen.restartBtn?.addEventListener('click', () => {
            playSound('button');
            resetApp();
        });

        // 에러 발생 시의 "처음으로" 버튼은 fetchFullReading에서 동적으로 추가됩니다.
    }

    // 배경음악 초기화
    function initBackgroundMusic() {
        const handpanSound = document.getElementById('handpan-sound');
        const handpan2Sound = document.getElementById('handpan2-sound');
        if (!handpanSound || !handpan2Sound) { 
            console.log('Handpan sounds not found');
            return; 
        }

        handpanSound.volume = 0.3;
        handpan2Sound.volume = 0.32;
        handpanSound.loop = true; // 첫 번째 트랙을 반복 재생
        handpan2Sound.loop = true; // 두 번째 트랙도 반복 재생

        // 사운드 프리로딩
        handpanSound.load();
        handpan2Sound.load();

        // 전역 play/stop 함수도 AudioManager와 연결 (기존 코드 호환성)
        window.playBgMusic = () => AudioManager.setTheme('main');
        window.stopBgMusic = () => AudioManager.setTheme(null);
        
        // 첫 번째 상호작용 시 음악 시작
        const startMusicOnFirstInteraction = () => { 
            console.log('First interaction detected, starting music');
            if (appState.isMusicOn) AudioManager.setTheme('main'); 
        };
        
        document.addEventListener('click', startMusicOnFirstInteraction, { once: true });
        document.addEventListener('touchstart', startMusicOnFirstInteraction, { once: true });
        
        // 앱 시작 시 자동으로 음악 시작 제거 (사용자 상호작용 필요)
        // setTimeout(() => {
        //     if (appState.isMusicOn) {
        //         AudioManager.setTheme('main');
        //     }
        // }, 1000);
    }

    // --- 앱 시작 ---
    initEventListeners();
    initBackgroundMusic();
    preloadSounds(); // 사운드 프리로딩
    
    // cosmic 사운드 상태 추적 로직 추가
    const cosmicAudioEl = document.getElementById('cosmic-sound');
    if (cosmicAudioEl) {
        cosmicAudioEl.addEventListener('canplaythrough', () => { appState.audio.cosmicReady = true; });
        cosmicAudioEl.addEventListener('error', (e) => { 
            appState.audio.cosmicError = true; 
            console.error('Cosmic audio file error:', e);
        });
    }
    
    resetApp();
    
    // 앱 시작 시 잠금 상태 확인 및 UI 업데이트
    applyAutoLockUiState();
    
    // 리사이즈/회전에도 재정렬
    window.addEventListener('resize', (() => {
        let t;
        return () => {
            clearTimeout(t);
            t = setTimeout(() => {
                if (appState.currentScreen === 'card-select-screen') {
                    createCards();
                }
            }, 150);
        };
    })());

    // 새로운 텍스트 가이드 제어 함수
    function scheduleTextGuide(imageEl) {
        clearTextGuide(); // 이전 가이드 정리
        const wrapper = imageEl.closest('.card-image-wrapper');
        if (!wrapper) return;
        const guide = document.createElement('div');
        guide.className = 'touch-guide';
        
        const lang = appState.language;
        const key = 'cardTouchHint';
        // 번역 텍스트를 직접 가져와 설정 (i18n 속성 방식보다 안정적)
        guide.textContent = (UI_TEXTS[lang] && UI_TEXTS[lang][key]) ? UI_TEXTS[lang][key] : 'Tap the card';

        wrapper.appendChild(guide);
        // requestAnimationFrame을 사용하여 다음 프레임에서 show 클래스를 추가해 CSS transition이 작동하도록 함
        requestAnimationFrame(() => {
            guide.classList.add('show');
        });

        appState.tapHintEl = guide; // 전역 상태에 참조 저장
    }

    function clearTextGuide() {
        if (appState.tapHintEl) {
            appState.tapHintEl.classList.remove('show');
            // transition이 끝난 후 DOM에서 제거하여 부드러운 사라짐 효과 구현
            setTimeout(() => {
                try { appState.tapHintEl?.remove(); } catch {}
                if (appState.tapHintEl === appState.tapHintEl) { // 이중 체크
                     appState.tapHintEl = null;
                }
            }, 300); // CSS transition 시간과 일치시킴
        }
    }
});