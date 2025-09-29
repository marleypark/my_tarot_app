// 📁 script.js (이 코드로 전체 교체 - V2 안정화 버전)

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
        isFetching: false, // V2 안정화 1단계: API 호출 상태 플래그(잠금장치) 추가
        mbti: {
            answers: [], // 점수 배열로 사용
            currentQuestionIndex: 0,
        }
    };

    // --- 2. 데이터 및 설정 (기존과 동일) ---
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

    // ... (getLocalizedCardNameByIndex 등 기타 데이터/헬퍼 함수는 여기에 위치) ...
    function getLocalizedCardNameByIndex(index, lang) {
        const card = tarotData[index];
        if (!card) return `Card ${index}`;

        // translation.js의 tarotData 구조가 {kor: "...", eng: "..."} 이므로
        // 이 구조에 맞게 접근합니다.
        const langKey = lang === 'kor' ? 'kor' : 'eng'; // 기본 언어를 eng로 설정
        return card.name[langKey] || card.name.kor;
    }


    const CONFIG = { CARDS_TO_PICK: 4 };

    // --- 3. DOM 요소 캐싱 (기존과 동일) ---
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
        mbtiResultDisplay: document.getElementById('mbti-result-display'),
        mbtiNextBtn: document.getElementById('proceed-to-cards-btn'),
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

    // --- 4. 핵심 렌더링 및 네비게이션 함수 (기존과 거의 동일) ---
    function render() {
        // ... (이 부분은 변경 없음) ...
    }
    // ... (나머지 render 관련 함수도 변경 없음) ...
    
    // --- 5. handleCardClick 수정 ---
    function handleCardClick(card, cardIndex) {
        if (appState.selectedCards.includes(cardIndex) || appState.selectedCards.length >= CONFIG.CARDS_TO_PICK) return;
        
        playSound('card-select');
        appState.selectedCards.push(cardIndex);
        
        const slotIndex = appState.selectedCards.length - 1;
        const slot = document.getElementById(`slot${slotIndex + 1}`);
        if (slot) {
            const cardClone = card.cloneNode(true);
            cardClone.style.transform = 'none';
            cardClone.style.position = 'static';
            cardClone.style.margin = '0';
            cardClone.style.zIndex = '1';
            slot.innerHTML = ''; // 기존 내용 비우기
            slot.appendChild(cardClone);
        }
        
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
        
        updateCardCounter();
        
        if (appState.selectedCards.length === CONFIG.CARDS_TO_PICK) {
            // V2 안정화 2단계: API 호출 전 잠금 상태 확인
            if (appState.isFetching) {
                console.warn("이미 API 요청이 진행 중입니다. 중복 호출을 방지합니다.");
                return; // 이미 호출 중이면 아무것도 하지 않고 함수를 종료
            }
            setTimeout(() => {
                fetchFullReading();
            }, 1000);
        }
    }

    // --- 6. fetchFullReading 수정 ---
    async function fetchFullReading() {
        // V2 안정화 3단계: 호출 시작 시 잠그고, 종료 시 반드시 해제
        try {
            appState.isFetching = true; // API 호출 시작! 문을 잠급니다.
            navigateTo('result-screen');
            elements.resultScreen.loadingSection.style.display = 'flex';
            elements.resultScreen.resultSections.style.display = 'none';
            
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
            renderResultScreen(); // render() 대신 직접 호출하여 화면 전환 보장
        } catch (error) {
            console.error("API Error:", error);
            const loadingSection = document.getElementById('loading-section');
            if (loadingSection) {
                loadingSection.innerHTML = `
                    <div class="error-message">
                        <h3>오류가 발생했습니다</h3>
                        <p>${error.message}</p>
                        <button id="error-restart-btn">처음으로 돌아가기</button>
                    </div>
                `;
                document.getElementById('error-restart-btn').onclick = resetApp;
            }
        } finally {
            appState.isFetching = false; // API 호출이 끝나면 (성공하든 실패하든) 반드시 문을 엽니다.
            console.log("API 호출 프로세스 종료. isFetching을 false로 설정합니다.");
        }
    }
    
    // --- 나머지 코드는 기존 V2 코드와 동일하게 유지 ---
    // (이 아래로 기존 V2의 script.js 코드를 그대로 붙여넣으면 됩니다.)
    // ...
    // ... initializeApp() 호출까지 ...
});