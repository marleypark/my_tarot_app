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
        },
        resultScreen: {
            loadingSection: document.getElementById('loading-section'),
            resultSections: document.getElementById('result-sections'),
            errorContainer: document.createElement('div'), // 에러 표시용
            cardImage: document.getElementById('result-card-image'),
            cardTitle: document.getElementById('result-card-title'),
            keywordsArea: document.getElementById('keywords-area'),
            interpretationText: document.getElementById('interpretation-text'),
            prevBtn: document.getElementById('prev-btn'),
            nextBtn: document.getElementById('next-btn'),
            summaryTitle: document.getElementById('summary-title'),
            summaryCardsDisplay: document.getElementById('summary-cards-display'),
            summaryText: document.getElementById('summary-text'),
            actionPlanTitle: document.getElementById('action-plan-title'),
            actionPlanIntro: document.getElementById('action-plan-intro'),
            actionPlanPhases: document.getElementById('action-plan-phases'),
            pdfSaveBtn: document.getElementById('pdf-save-btn'),
            restartBtn: document.getElementById('restart-btn'),
        },
        sounds: {
            select: document.getElementById('select-sound'),
            button: document.getElementById('button-sound'),
        }
    };
    elements.resultScreen.errorContainer.className = 'error-message-container';

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
        Object.assign(appState, {
            currentScreen: 'main-screen', userQuestion: '', userMBTI: '',
            selectedCards: [], deck: [], fullResultData: null, currentResultIndex: 0,
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
        const cardsLeft = CONFIG.CARDS_TO_PICK - appState.selectedCards.length;
        elements.cardSelectScreen.cardsLeftText.textContent = `${cardsLeft} cards left.`;
    }
    
    function selectCard() {
        if (appState.selectedCards.length >= CONFIG.CARDS_TO_PICK) return;
        playSound('select');
        const cardIndex = appState.deck.pop();
        appState.selectedCards.push(cardIndex);

        const img = document.createElement('img');
        img.src = tarotData[cardIndex].img;
        elements.cardSelectScreen.previewArea.appendChild(img);
        
        render();

        if (appState.selectedCards.length === CONFIG.CARDS_TO_PICK) {
            setTimeout(fetchFullReading, 1000);
        }
    }
    
    // API 호출 (에러 처리 강화)
    async function fetchFullReading() {
        navigateTo('result-screen');
        elements.resultScreen.loadingSection.style.display = 'flex';
        elements.resultScreen.resultSections.style.display = 'none';

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
            appState.currentResultIndex = 0;
            render();

        } catch (error) {
            console.error("API Error:", error);
            // 사용자 친화적 에러 메시지 표시
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

        const { cardInterpretations, overallReading } = appState.fullResultData;
        
        // 개별 카드 렌더링
        displayIndividualCard(appState.currentResultIndex);

        // 총정리 렌더링
        elements.resultScreen.summaryTitle.textContent = overallReading.title;
        elements.resultScreen.summaryText.textContent = overallReading.summary;
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
    }

    function displayIndividualCard(index) {
        appState.currentResultIndex = index;
        const cardData = appState.fullResultData.cardInterpretations[index];
        const cardIndex = appState.selectedCards[index];
        
        elements.resultScreen.cardTitle.textContent = cardData.cardName;
        elements.resultScreen.cardImage.src = tarotData[cardIndex].img;
        elements.resultScreen.interpretationText.textContent = cardData.interpretation;
        
        elements.resultScreen.keywordsArea.innerHTML = '';
        if (cardData.keywords) {
            const { positive, caution } = cardData.keywords;
            let keywordsHtml = '';
            if (positive?.length) {
                keywordsHtml += `<div class="keyword-group"><span class="keyword-title">긍정:</span>${positive.map(k => `<span class="keyword positive">${k}</span>`).join('')}</div>`;
            }
            if (caution?.length) {
                keywordsHtml += `<div class="keyword-group"><span class="keyword-title">주의:</span>${caution.map(k => `<span class="keyword negative">${k}</span>`).join('')}</div>`;
            }
            elements.resultScreen.keywordsArea.innerHTML = keywordsHtml;
        }

        const cardInterpretations = appState.fullResultData.cardInterpretations;
        elements.resultScreen.prevBtn.disabled = index === 0;
        elements.resultScreen.nextBtn.disabled = index === cardInterpretations.length - 1;
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
            const element = document.getElementById('result-sections');
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#1a1a2e',
                onclone: (doc) => {
                    // PDF용으로 폰트 색상을 밝게 만듦
                    doc.querySelectorAll('#result-sections *').forEach(el => {
                        el.style.color = '#333';
                    });
                }
            });
            const imgData = canvas.toDataURL('image/jpeg', 0.9);
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [canvas.width, canvas.height]
            });
            pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
            pdf.save(`tarot-reading-${new Date().toISOString().slice(0,10)}.pdf`);
        } catch(e) {
            console.error("PDF 생성 오류", e);
            alert("PDF 생성 중 오류가 발생했습니다.");
        } finally {
            btn.textContent = originalText;
            btn.disabled = false;
        }
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

        // 결과 화면
        elements.resultScreen.prevBtn.addEventListener('click', () => displayIndividualCard(appState.currentResultIndex - 1));
        elements.resultScreen.nextBtn.addEventListener('click', () => displayIndividualCard(appState.currentResultIndex + 1));
        elements.resultScreen.restartBtn.addEventListener('click', resetApp);
        elements.resultScreen.pdfSaveBtn.addEventListener('click', generatePDF);
    }

    // --- 앱 시작 ---
    initEventListeners();
    resetApp();
});