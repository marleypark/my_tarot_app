// 언어 코드와 HTML lang 속성 매핑
const htmlLangByCode = {
    kor: 'ko',
    eng: 'en',
    can: 'zh-HK',
    vi: 'vi',
    id: 'id',
    chn: 'zh-CN',
    fr: 'fr',
    es: 'es'
};

// 다국어 텍스트 데이터
const UI_TEXTS = {
    kor: {
        mainTitle: "ASK ANYTHING",
        mainSubtitle: "카드를 클릭하여 시작하세요",
        questionDialogTitle: "질문을 어떻게 하시겠어요?",
        directInput: "직접입력",
        fortuneSelect: "운세 선택",
        mindQuestion: "마음속으로 질문하기",
        customQuestionTitle: "질문을 직접 입력해주세요",
        questionPlaceholder: "예: 새로운 직장에서 성공할 수 있을까요?",
        backButton: "이전",
        nextButton: "다음",
        mbtiInputTitle: "MBTI를 입력해주세요",
        mbtiInputDesc: "본인의 MBTI 유형을 알고 계신가요?",
        mbtiPlaceholder: "예) INFP, ENFJ",
        skipButton: "건너뛰기",
        mbtiUnknownButton: "MBTI를 모른다면? 검사하기",
        selectCards: "4장의 카드를 선택하세요.",
        interpreting: "당신의 운명을 불러오는 중...",
        individualCardsTitle: "개별 카드 해석",
        prevButton: "이전",
        pdfSaveButton: "PDF로 저장",
        restartButton: "처음으로",
        shuffleStatus: {
            playing: "카드를 섞는 중입니다...",
            completed: "카드 섞기가 완료되었습니다!"
        },
        fortuneOptions: {
            general: "전반적 운세",
            love: "연애운",
            business: "사업운",
            marriage: "결혼운",
            children: "자식운",
            career: "직장운",
            money: "재물운",
            health: "건강운",
            relationships: "인간관계운"
        },
        loadingLoopText: "당신의 운명을 불러오는 중...",
        cardStageTitleTemplate: "{num}번째 카드 해석",
        cardTouchHint: "카드를 터치하세요",
        keywordPositive: "긍정",
        keywordCaution: "주의",
        actionPlanButtonLabel: "현실 조언"
    },
    eng: {
        mainTitle: "ASK ANYTHING",
        mainSubtitle: "Click the card to start",
        questionDialogTitle: "How would you like to ask your question?",
        directInput: "Direct Input",
        fortuneSelect: "Fortune Selection",
        mindQuestion: "Ask in Your Mind",
        customQuestionTitle: "Please enter your question directly",
        questionPlaceholder: "e.g., Will I succeed in my new job?",
        backButton: "Back",
        nextButton: "Next",
        mbtiInputTitle: "Please enter your MBTI",
        mbtiInputDesc: "Do you know your MBTI type?",
        mbtiPlaceholder: "e.g., INFP, ENFJ",
        skipButton: "Skip",
        mbtiUnknownButton: "Don't know MBTI? Take the test",
        selectCards: "Select 4 cards.",
        interpreting: "Interpreting...",
        individualCardsTitle: "Individual Card Interpretations",
        prevButton: "Previous",
        pdfSaveButton: "Save as PDF",
        restartButton: "Start Over",
        shuffleStatus: {
            playing: "Shuffling the cards...",
            completed: "Shuffling complete!"
        },
        fortuneOptions: {
            general: "General Fortune",
            love: "Love Fortune",
            business: "Business Fortune",
            marriage: "Marriage Fortune",
            children: "Children Fortune",
            career: "Career Fortune",
            money: "Money Fortune",
            health: "Health Fortune",
            relationships: "Relationship Fortune"
        }
    }
    // 다른 언어들도 필요에 따라 추가...
};

const MBTI_QUESTIONS_I18N = {
    kor: [
      { question: "📱 SNS 사용 패턴", options: [ { text: "일상의 소소한 순간들을 자주 포스팅하고, 친구들의 게시물에 적극적으로 댓글과 반응을 남기며 활발하게 소통한다.", type: "E" }, { text: "정말 특별한 순간이나 의미 있는 생각이 있을 때만 포스팅하고, 주로 다른 사람들의 글을 조용히 구경하는 편이다.", type: "I" } ] },
      { question: "🎉 생일파티 스타일", options: [ { text: "많은 친구들을 초대해서 왁자지껄하고 활기찬 파티를 열고, 다양한 사람들과 어울리며 즐기는 것이 좋다.", type: "E" }, { text: "정말 가까운 소수의 친구들과 조용하고 아늑한 분위기에서 깊이 있는 시간을 보내는 것이 더 의미 있다.", type: "I" } ] },
      { question: "💭 아이디어 발전 과정", options: [ { text: "생각이 떠오르면 즉시 다른 사람들과 공유하고 대화하면서 아이디어를 발전시켜 나간다. 말하면서 생각이 정리된다.", type: "E" }, { text: "머릿속으로 충분히 생각하고 정리한 후에 다른 사람에게 이야기한다. 혼자 생각할 때 더 창의적인 아이디어가 나온다.", type: "I" } ] },
      { question: "🏢 회사 점심시간", options: [ { text: "동료들과 함께 밖에 나가서 식사하며 대화하는 것이 자연스럽고, 혼자 먹는 것은 좀 심심하다.", type: "E" }, { text: "혼자만의 시간을 가지며 조용히 식사하거나, 친한 동료 1-2명과만 함께하는 것이 편하다.", type: "I" } ] },
      { question: "📞 전화 vs 문자", options: [ { text: "복잡한 이야기는 전화로 직접 대화하는 것이 빠르고 효율적이며, 상대방의 목소리를 들으면서 소통하는 것이 좋다.", type: "E" }, { text: "문자나 메신저로 충분히 생각하고 정리해서 전달하는 것이 편하고, 전화는 갑작스러워서 부담스럽다.", type: "I" } ] },
      { question: "🗞️ 뉴스 읽기 패턴", options: [ { text: "구체적인 사실과 통계, 실제 사례에 집중하며, '언제, 어디서, 누가, 무엇을'에 대한 정확한 정보를 중요하게 생각한다.", type: "S" }, { text: "사건의 배경과 맥락, 미래에 미칠 영향과 의미를 파악하는 것에 더 관심이 있고, 여러 가능성을 상상해본다.", type: "N" } ] },
      { question: "🎬 영화 감상 후 대화", options: [ { text: "'액션 씬이 정말 박진감 넘쳤어', '주인공 연기가 자연스러웠어' 등 실제로 보고 들은 구체적인 장면과 연출에 대해 이야기한다.", type: "S" }, { text: "'이 영화가 현대 사회에 던지는 메시지가 뭘까?', '감독이 진짜 말하고 싶었던 것은...' 등 숨겨진 의미와 상징에 대해 이야기한다.", type: "N" } ] },
      { question: "🛠️ 문제 해결 접근법", options: [ { text: "과거의 경험이나 검증된 방법을 활용해서 단계별로 차근차근 문제를 해결해 나간다. '이전에 이런 식으로 해결했으니까.'", type: "S" }, { text: "기존의 틀에서 벗어나 새로운 관점에서 접근하고, 창의적이고 혁신적인 해결책을 찾으려고 한다.", type: "N" } ] },
      { question: "📚 학습할 때 선호하는 방식", options: [ { text: "실제 사례와 구체적인 예시가 많이 포함된 내용을 선호하고, 실습이나 체험을 통해 직접 경험하며 배우는 것이 효과적이다.", type: "S" }, { text: "전체적인 이론과 개념을 먼저 이해하고, 원리와 패턴을 파악한 후 응용하는 방식을 선호한다.", type: "N" } ] },
      { question: "🔮 미래에 대한 관심", options: [ { text: "'내일 뭐 입을까?', '다음 주말에 뭐 할까?' 등 가까운 미래의 구체적이고 현실적인 계획에 더 집중한다.", type: "S" }, { text: "'10년 후 세상은 어떻게 바뀔까?', '인공지능이 인간을 대체할까?' 등 먼 미래의 가능성과 변화를 상상하는 것을 즐긴다.", type: "N" } ] },
      { question: "🤝 갈등 상황에서의 중재 방식", options: [ { text: "객관적인 사실을 바탕으로 누가 옳고 그른지 논리적으로 분석하고, 합리적인 해결책을 제시한다.", type: "T" }, { text: "양쪽의 감정과 입장을 충분히 들어보고 공감한 후, 모두가 상처받지 않는 조화로운 해결책을 찾는다.", type: "F" } ] },
      { question: "💼 팀 프로젝트에서 중요하게 생각하는 것", options: [ { text: "역할 분담의 명확성, 일정 관리의 체계성, 결과물의 품질과 효율성을 가장 중요하게 생각한다.", type: "T" }, { text: "팀원들 간의 화합과 소통, 모두가 만족할 수 있는 과정, 개인의 기여도와 만족도를 중요하게 생각한다.", type: "F" } ] },
      { question: "😢 친구가 힘들어할 때 나의 반응", options: [ { text: "'왜 그런 일이 생겼는지 차근차근 분석해보자'며 문제의 원인을 파악하고 논리적인 해결방안을 제시한다.", type: "T" }, { text: "'정말 힘들겠다. 나도 비슷한 경험이 있어'라며 먼저 공감하고 감정적으로 위로해준다.", type: "F" } ] },
      { question: "🎯 성공의 기준", options: [ { text: "명확하고 측정 가능한 성과와 객관적인 인정. 실력과 능력으로 평가받는 것이 중요하다.", type: "T" }, { text: "주변 사람들과의 좋은 관계와 서로에게 긍정적인 영향을 주고받는 것이 진정한 성공이라고 생각한다.", type: "F" } ] },
      { question: "⚖️ 규칙에 대한 관점", options: [ { text: "규칙은 모든 사람에게 공평하게 적용되어야 하며, 예외를 만드는 것은 공정성을 해친다고 생각한다.", type: "T" }, { text: "규칙보다는 사람이 우선이며, 특별한 사정이 있다면 융통성을 발휘하는 것이 더 인간적이라고 생각한다.", type: "F" } ] },
      { question: "🧳 휴가 계획 수립", options: [ { text: "최소 1-2달 전부터 여행지, 숙소, 일정을 상세히 계획하고 예약을 완료해놓는다. 계획표가 있어야 안심이 된다.", type: "J" }, { text: "큰 틀만 정해두고 현지에서 즉흥적으로 결정하는 것을 즐긴다. 예상치 못한 발견과 경험이 여행의 묘미다.", type: "P" } ] },
      { question: "🏠 방 정리 스타일", options: [ { text: "모든 물건이 정해진 자리에 있어야 하고, 주기적으로 정리정돈을 한다. 어수선한 환경에서는 집중이 안 된다.", type: "J" }, { text: "겉보기에는 약간 어수선해 보여도 나만의 시스템이 있고, 필요한 것은 어디 있는지 안다. 너무 깔끔하면 오히려 부담스럽다.", type: "P" } ] },
      { question: "📅 약속 잡기", options: [ { text: "'다음 주 화요일 오후 3시에 강남역 2번 출구에서 만나자'처럼 구체적으로 정해야 마음이 편하다.", type: "J" }, { text: "'다음 주 중에 시간 될 때 연락해서 만나자'는 식으로 유동적으로 두는 것이 부담스럽지 않다.", type: "P" } ] },
      { question: "🛒 쇼핑 패턴", options: [ { text: "필요한 것들을 미리 리스트로 작성하고, 계획적으로 구매한다. 충동구매는 거의 하지 않는다.", type: "J" }, { text: "쇼핑하면서 마음에 드는 것이 있으면 즉석에서 구매 결정을 한다. 계획에 없던 것도 자주 산다.", type: "P" } ] },
      { question: "⏰ 마감 기한에 대한 태도", options: [ { text: "마감일보다 훨씬 일찍 완료하고, 여유시간을 두고 검토하고 수정하는 것을 선호한다.", type: "J" }, { text: "마감 압박이 있을 때 오히려 집중력과 창의력이 극대화되며, 아슬아슬하게 완성하는 것도 나름의 재미가 있다.", type: "P" } ] },
      { question: "🎪 예상치 못한 변화 상황", options: [ { text: "갑작스러운 일정 변경이나 계획 수정이 생기면 스트레스를 받고, 가능하면 원래 계획을 고수하려고 한다.", type: "J" }, { text: "예상치 못한 변화나 새로운 기회가 생기면 오히려 흥미롭고, 유연하게 적응하며 새로운 가능성을 탐색한다.", type: "P" } ] },
      { question: "🎨 창작 활동 스타일", options: [ { text: "기존의 기법과 방식을 충실히 따라하면서 점진적으로 실력을 향상시켜 나간다. 기초가 탄탄해야 한다고 생각한다.", type: "S" }, { text: "독창적이고 남들과 다른 나만의 스타일을 추구하며, 실험적이고 도전적인 시도를 즐긴다.", type: "N" } ] },
      { question: "💡 아이디어 실행 과정", options: [ { text: "아이디어가 생기면 실현 가능성을 체크하고 구체적인 실행 계획을 세운 후 단계별로 진행한다.", type: "J" }, { text: "재미있는 아이디어가 생기면 일단 시도해보고, 진행하면서 방향을 조정하거나 더 좋은 아이디어가 떠오르면 바꾸기도 한다.", type: "P" } ] },
      { question: "🤔 복잡한 문제를 만났을 때", options: [ { text: "검증된 방법이나 전문가의 조언을 참고해서 안전하고 확실한 해결책을 찾는다.", type: "S" }, { text: "여러 가지 가능성을 고려하고 창의적인 접근 방식을 시도하며, 실패해도 배움의 기회로 생각한다.", type: "N" } ] },
      { question: "👥 사람들과의 관계에서", options: [ { text: "소수의 사람들과 깊고 지속적인 관계를 유지하는 것을 더 소중하게 여긴다.", type: "I" }, { text: "다양한 부류의 많은 사람들과 폭넓은 관계를 맺고 네트워크를 확장하는 것을 즐긴다.", type: "E" } ] }
    ],
    can: [
      {
        "question": "📱 社交媒體使用習慣",
        "options": [
          { "text": "經常分享生活點滴，並積極喺朋友嘅貼文留言、俾反應，享受活躍嘅互動。", "type": "E" },
          { "text": "只會喺特別時刻或有意義嘅想法時先出post，平時多數係靜靜地睇其他人嘅動態。", "type": "I" }
        ]
      },
      {
        "question": "🎉 生日派對風格",
        "options": [
          { "text": "鍾意請好多朋友，搞一個熱鬧、充滿活力嘅派對，享受同唔同人交流嘅樂趣。", "type": "E" },
          { "text": "覺得同幾個真心朋友喺一個安靜、舒適嘅環境深入交流，更有意義。", "type": "I" }
        ]
      },
      {
        "question": "💭 想法發展過程",
        "options": [
          { "text": "一有諗法就即刻同人分享討論，喺傾偈嘅過程中將想法變得更完整。講出嚟先會諗得更清楚。", "type": "E" },
          { "text": "會喺腦入面諗清諗楚、整理好之後再同人講。自己一個靜靜地諗嗰陣，最有創意。", "type": "I" }
        ]
      },
      {
        "question": "🏢 公司午餐時間",
        "options": [
          { "text": "同同事一齊出去食飯傾偈係一件好自然嘅事，自己一個食會覺得有啲悶。", "type": "E" },
          { "text": "比較享受自己一個人嘅時間，靜靜地食飯，或者只係同最熟嘅一兩個同事一齊。", "type": "I" }
        ]
      },
      {
        "question": "📞 電話 vs 短訊",
        "options": [
          { "text": "複雜嘅事用電話直接講會快啲、有效率啲，而且可以聽到對方把聲，溝通起嚟實在啲。", "type": "E" },
          { "text": "用短訊或通訊App可以諗清楚再覆，感覺舒服啲。突然打嚟嘅電話會有啲壓力。", "type": "I" }
        ]
      },
      {
        "question": "🗞️ 閱讀新聞嘅模式",
        "options": [
          { "text": "注重具體事實、數據同真實案例，關心「幾時、邊度、邊個、做咗啲咩」呢啲準確資訊。", "type": "S" },
          { "text": "對事件嘅背景、脈絡、未來可能嘅影響同意義更感興趣，鍾意想像各種可能性。", "type": "N" }
        ]
      },
      {
        "question": "🎬 睇完戲之後傾啲咩",
        "options": [
          { "text": "會傾「啲動作場面好刺激」、「主角做得好自然」呢類實際睇到、聽到嘅具體場景同表現。", "type": "S" },
          { "text": "會傾「套戲想帶出咩訊息？」、「導演真正想講嘅可能係…」呢類背後嘅含意同象徵。", "type": "N" }
        ]
      },
      {
        "question": "🛠️ 解決問題嘅方法",
        "options": [
          { "text": "利用過去嘅經驗或者已經證實有效嘅方法，一步一步解決問題。「上次都係咁搞掂嘅。」", "type": "S" },
          { "text": "嘗試跳出固有框架，用新嘅角度去睇問題，尋求有創意、革新嘅解決方案。", "type": "N" }
        ]
      },
      {
        "question": "📚 學習時偏好嘅方式",
        "options": [
          { "text": "鍾意多啲真實案例同具體例子嘅內容，透過實習或親身體驗去學嘢會更有效。", "type": "S" },
          { "text": "傾向先理解整體理論同概念，掌握咗原理同模式之後再應用到唔同地方。", "type": "N" }
        ]
      },
      {
        "question": "🔮 對未來嘅關注點",
        "options": [
          { "text": "比較關注「聽日著咩衫？」、「下個週末做咩好？」呢類短期、具體、現實嘅計劃。", "type": "S" },
          { "text": "鍾意想像「十年後個世界會變成點？」、「AI會唔會取代人類？」呢類長遠嘅可能性同變化。", "type": "N" }
        ]
      },
      {
        "question": "🤝 處理衝突嘅方式",
        "options": [
          { "text": "基於客觀事實，理性分析邊個啱邊個錯，然後提出一個合理嘅解決辦法。", "type": "T" },
          { "text": "會先聆聽同理解雙方嘅感受同立場，然後搵一個大家都唔會受傷、和諧嘅解決方法。", "type": "F" }
        ]
      },
      {
        "question": "💼 團隊項目中重視嘅嘢",
        "options": [
          { "text": "最重視嘅係角色分工清晰、時間管理有系統，以及成果嘅質素同效率。", "type": "T" },
          { "text": "最重視嘅係團隊成員之間嘅和諧同溝通，一個令大家都滿意嘅過程，同埋個人嘅貢獻同滿足感。", "type": "F" }
        ]
      },
      {
        "question": "😢 朋友唔開心時你嘅反應",
        "options": [
          { "text": "會話「不如我哋逐步分析下點解會咁」，嘗試幫佢搵出問題嘅根源同解決方法。", "type": "T" },
          { "text": "會話「辛苦晒你啦，我明嘅」，首先會表示同情同安慰，俾佢知道你喺度。", "type": "F" }
        ]
      },
      {
        "question": "🎯 成功嘅定義",
        "options": [
          { "text": "成功係清晰、可以衡量嘅成果同客觀嘅認可。用實力同能力去證明自己好重要。", "type": "T" },
          { "text": "成功係同身邊嘅人建立良好關係，互相帶嚟正面影響。呢啲先係真正嘅成功。", "type": "F" }
        ]
      },
      {
        "question": "⚖️ 對規則嘅睇法",
        "options": [
          { "text": "規則應該對所有人都一視同仁，製造例外會破壞公平性。", "type": "T" },
          { "text": "人比規則重要，如果有特殊情況，靈活處理會更有人情味。", "type": "F" }
        ]
      },
      {
        "question": "🧳 假期計劃嘅方式",
        "options": [
          { "text": "最少一兩個月前就plan好晒行程、訂好酒店機票。有個詳細計劃會覺得安心啲。", "type": "J" },
          { "text": "大概有個方向就算，去到當地再隨心決定。享受旅程中嘅意外發現同驚喜。", "type": "P" }
        ]
      },
      {
        "question": "🏠 你間房嘅整理風格",
        "options": [
          { "text": "所有嘢都要放喺固定位置，會定期執拾。環境亂會令我分心。", "type": "J" },
          { "text": "表面上可能有啲亂，但其實有自己一套系統，要搵嘅嘢都搵到。太整齊反而有壓力。", "type": "P" }
        ]
      },
      {
        "question": "📅 約人嘅習慣",
        "options": [
          { "text": "鍾意即刻定好具體日期同時間，例如「下星期二晚七點喺旺角等」。咁樣先實在。", "type": "J" },
          { "text": "鍾意保持彈性，例如「下個禮拜得閒再約啦」。唔想咁快定死。", "type": "P" }
        ]
      },
      {
        "question": "🛒 買嘢嘅模式",
        "options": [
          { "text": "會預先寫好購物清單，有計劃咁買嘢，好少會衝動消費。", "type": "J" },
          { "text": "行街嗰陣見到鍾意嘅嘢就會即刻決定買，經常會買啲計劃以外嘅嘢。", "type": "P" }
        ]
      },
      {
        "question": "⏰ 對deadline嘅態度",
        "options": [
          { "text": "習慣早啲開始做，預留充足時間檢查同修改，輕鬆完成。", "type": "J" },
          { "text": "臨近deadline嗰陣壓力愈大，專注力同創意就愈強，壓線完成都係一種樂趣。", "type": "P" }
        ]
      },
      {
        "question": "🎪 面對突發變化",
        "options": [
          { "text": "突然嘅行程變動會令我好大壓力，會想盡快回復返原本嘅計劃。", "type": "J" },
          { "text": "覺得突發變化好有趣，係一個新嘅機會，享受靈活應變嘅過程。", "type": "P" }
        ]
      },
      {
        "question": "🎨 創作活動嘅風格",
        "options": [
          { "text": "會跟隨傳統技巧同方法，一步步提升自己嘅實力。覺得打好基礎好重要。", "type": "S" },
          { "text": "追求獨一無二、與眾不同嘅個人風格，鍾意做實驗性同挑戰性嘅嘗試。", "type": "N" }
        ]
      },
      {
        "question": "💡 執行想法嘅過程",
        "options": [
          { "text": "有新想法之後，會先評估可行性，制定具體計劃，然後按部就班咁執行。", "type": "J" },
          { "text": "有好玩嘅想法就即刻試下先，喺過程中再調整方向，或者轉做其他更有趣嘅諗法。", "type": "P" }
        ]
      },
      {
        "question": "🤔 遇到複雜問題時",
        "options": [
          { "text": "會參考已經證實有效嘅方法或者專家意見，尋求一個穩陣、可靠嘅解決方案。", "type": "S" },
          { "text": "會考慮各種可能性，嘗試用有創意嘅方式去解決，就算失敗都當係一個學習機會。", "type": "N" }
        ]
      },
      {
        "question": "👥 處理人際關係",
        "options": [
          { "text": "比較重視同少數人維持深入、持久嘅關係。", "type": "I" },
          { "text": "鍾意同唔同類型嘅人建立廣泛嘅聯繫，擴大自己嘅社交網絡。", "type": "E" }
        ]
      }
    ],
    vi: [
      {
        "question": "📱 Thói quen sử dụng mạng xã hội",
        "options": [
          { "text": "Thường xuyên chia sẻ những khoảnh khắc nhỏ trong cuộc sống và tích cực bình luận, phản ứng với bài đăng của bạn bè, giao tiếp sôi nổi.", "type": "E" },
          { "text": "Chỉ đăng bài khi có những khoảnh khắc đặc biệt hoặc suy nghĩ có ý nghĩa, chủ yếu lặng lẽ xem nội dung của người khác.", "type": "I" }
        ]
      },
      {
        "question": "🎉 Phong cách tiệc sinh nhật",
        "options": [
          { "text": "Mời nhiều bạn bè để tổ chức một bữa tiệc ồn ào, sôi động và vui vẻ với nhiều người khác nhau.", "type": "E" },
          { "text": "Dành thời gian sâu sắc với một số ít bạn bè thân thiết trong bầu không khí yên tĩnh và ấm cúng có ý nghĩa hơn.", "type": "I" }
        ]
      },
      {
        "question": "💭 Quá trình phát triển ý tưởng",
        "options": [
          { "text": "Khi có ý tưởng, ngay lập tức chia sẻ và thảo luận với người khác để phát triển ý tưởng. Nói ra giúp suy nghĩ rõ ràng hơn.", "type": "E" },
          { "text": "Suy nghĩ và sắp xếp đầy đủ trong đầu trước khi nói với người khác. Khi suy nghĩ một mình, ý tưởng sáng tạo hơn.", "type": "I" }
        ]
      },
      {
        "question": "🏢 Giờ ăn trưa ở công ty",
        "options": [
          { "text": "Đi ăn cùng đồng nghiệp và trò chuyện là điều tự nhiên, ăn một mình hơi buồn.", "type": "E" },
          { "text": "Thích có thời gian riêng để ăn uống yên tĩnh hoặc chỉ với 1-2 đồng nghiệp thân thiết.", "type": "I" }
        ]
      },
      {
        "question": "📞 Điện thoại vs Tin nhắn",
        "options": [
          { "text": "Những câu chuyện phức tạp nên nói chuyện trực tiếp qua điện thoại sẽ nhanh và hiệu quả hơn, nghe giọng nói của đối phương tốt hơn.", "type": "E" },
          { "text": "Tin nhắn hoặc messenger có thể suy nghĩ kỹ và sắp xếp trước khi trả lời, thoải mái hơn. Điện thoại đột ngột hơi áp lực.", "type": "I" }
        ]
      },
      {
        "question": "🗞️ Cách đọc tin tức",
        "options": [
          { "text": "Tập trung vào sự kiện cụ thể và thống kê, các trường hợp thực tế, coi trọng thông tin chính xác về 'khi nào, ở đâu, ai, làm gì'.", "type": "S" },
          { "text": "Quan tâm hơn đến bối cảnh và ý nghĩa của sự kiện, tác động và ý nghĩa trong tương lai, tưởng tượng nhiều khả năng.", "type": "N" }
        ]
      },
      {
        "question": "🎬 Trò chuyện sau khi xem phim",
        "options": [
          { "text": "Nói về 'cảnh hành động thật kịch tính', 'diễn xuất của diễn viên chính tự nhiên' - những cảnh cụ thể đã thấy và nghe.", "type": "S" },
          { "text": "Nói về 'thông điệp mà bộ phim gửi đến xã hội hiện đại là gì?', 'điều đạo diễn thực sự muốn nói là...' - ý nghĩa ẩn và biểu tượng.", "type": "N" }
        ]
      },
      {
        "question": "🛠️ Cách tiếp cận giải quyết vấn đề",
        "options": [
          { "text": "Sử dụng kinh nghiệm quá khứ hoặc phương pháp đã được chứng minh để giải quyết vấn đề từng bước một cách cẩn thận. 'Trước đây đã giải quyết như vậy.'", "type": "S" },
          { "text": "Thoát khỏi khuôn khổ hiện có, tiếp cận từ góc độ mới và tìm kiếm giải pháp sáng tạo, đổi mới.", "type": "N" }
        ]
      },
      {
        "question": "📚 Cách học ưa thích",
        "options": [
          { "text": "Ưa thích nội dung có nhiều trường hợp thực tế và ví dụ cụ thể, học qua thực hành hoặc trải nghiệm trực tiếp hiệu quả hơn.", "type": "S" },
          { "text": "Ưa thích hiểu lý thuyết tổng thể và khái niệm trước, nắm bắt nguyên lý và mẫu hình rồi áp dụng.", "type": "N" }
        ]
      },
      {
        "question": "🔮 Quan tâm về tương lai",
        "options": [
          { "text": "Tập trung hơn vào kế hoạch cụ thể và thực tế của tương lai gần như 'ngày mai mặc gì?', 'cuối tuần sau làm gì?'.", "type": "S" },
          { "text": "Thích tưởng tượng '10 năm nữa thế giới sẽ thay đổi như thế nào?', 'AI có thay thế con người không?' - khả năng và thay đổi tương lai xa.", "type": "N" }
        ]
      },
      {
        "question": "🤝 Cách hòa giải trong tình huống xung đột",
        "options": [
          { "text": "Dựa trên sự kiện khách quan, phân tích logic ai đúng ai sai và đưa ra giải pháp hợp lý.", "type": "T" },
          { "text": "Lắng nghe đầy đủ cảm xúc và lập trường của cả hai bên, đồng cảm trước, sau đó tìm giải pháp hài hòa không ai bị tổn thương.", "type": "F" }
        ]
      },
      {
        "question": "💼 Điều quan trọng trong dự án nhóm",
        "options": [
          { "text": "Coi trọng nhất sự rõ ràng trong phân công vai trò, tính hệ thống trong quản lý thời gian, chất lượng và hiệu quả của kết quả.", "type": "T" },
          { "text": "Coi trọng nhất sự hài hòa và giao tiếp giữa các thành viên nhóm, quá trình khiến mọi người hài lòng, sự đóng góp và hài lòng cá nhân.", "type": "F" }
        ]
      },
      {
        "question": "😢 Phản ứng khi bạn bè gặp khó khăn",
        "options": [
          { "text": "Nói 'hãy phân tích từng bước tại sao lại xảy ra chuyện như vậy' để tìm nguyên nhân và giải pháp logic.", "type": "T" },
          { "text": "Nói 'chắc là khó khăn lắm. Tôi cũng có kinh nghiệm tương tự' để đồng cảm và an ủi về mặt cảm xúc trước.", "type": "F" }
        ]
      },
      {
        "question": "🎯 Tiêu chuẩn thành công",
        "options": [
          { "text": "Thành tích rõ ràng và có thể đo lường, sự công nhận khách quan. Được đánh giá bằng thực lực và năng lực là quan trọng.", "type": "T" },
          { "text": "Mối quan hệ tốt với những người xung quanh và ảnh hưởng tích cực lẫn nhau là thành công thực sự.", "type": "F" }
        ]
      },
      {
        "question": "⚖️ Quan điểm về quy tắc",
        "options": [
          { "text": "Quy tắc phải được áp dụng công bằng cho tất cả mọi người, tạo ngoại lệ sẽ làm tổn hại tính công bằng.", "type": "T" },
          { "text": "Con người quan trọng hơn quy tắc, nếu có tình huống đặc biệt thì linh hoạt sẽ nhân văn hơn.", "type": "F" }
        ]
      },
      {
        "question": "🧳 Lập kế hoạch nghỉ lễ",
        "options": [
          { "text": "Ít nhất 1-2 tháng trước đã lên kế hoạch chi tiết địa điểm du lịch, chỗ ở, lịch trình và hoàn thành đặt chỗ. Có bảng kế hoạch mới yên tâm.", "type": "J" },
          { "text": "Chỉ định hướng lớn và quyết định tùy hứng tại chỗ. Thích khám phá và trải nghiệm bất ngờ trong chuyến đi.", "type": "P" }
        ]
      },
      {
        "question": "🏠 Phong cách dọn dẹp phòng",
        "options": [
          { "text": "Mọi thứ phải ở vị trí cố định, dọn dẹp định kỳ. Môi trường lộn xộn không thể tập trung.", "type": "J" },
          { "text": "Nhìn bề ngoài có vẻ hơi lộn xộn nhưng có hệ thống riêng, biết thứ cần thiết ở đâu. Quá gọn gàng lại áp lực.", "type": "P" }
        ]
      },
      {
        "question": "📅 Hẹn hò",
        "options": [
          { "text": "Phải hẹn cụ thể như 'thứ ba tuần sau 3 giờ chiều gặp ở cửa số 2 ga Gangnam' mới yên tâm.", "type": "J" },
          { "text": "Để linh hoạt như 'tuần sau có thời gian thì liên lạc gặp nhau' không áp lực.", "type": "P" }
        ]
      },
      {
        "question": "🛒 Kiểu mua sắm",
        "options": [
          { "text": "Viết danh sách những thứ cần thiết trước và mua có kế hoạch. Hầu như không mua bốc đồng.", "type": "J" },
          { "text": "Khi đi mua sắm thấy thích thì quyết định mua ngay tại chỗ. Thường mua những thứ không có trong kế hoạch.", "type": "P" }
        ]
      },
      {
        "question": "⏰ Thái độ với hạn chót",
        "options": [
          { "text": "Hoàn thành sớm hơn hạn chót rất nhiều, dành thời gian dư để kiểm tra và sửa chữa.", "type": "J" },
          { "text": "Khi áp lực hạn chót càng lớn, khả năng tập trung và sáng tạo càng cao, hoàn thành sát nút cũng có thú vị riêng.", "type": "P" }
        ]
      },
      {
        "question": "🎪 Tình huống thay đổi bất ngờ",
        "options": [
          { "text": "Thay đổi lịch trình đột ngột hoặc sửa kế hoạch gây căng thẳng, cố gắng giữ kế hoạch ban đầu.", "type": "J" },
          { "text": "Thay đổi bất ngờ hoặc cơ hội mới sinh ra thú vị, thích ứng linh hoạt và khám phá khả năng mới.", "type": "P" }
        ]
      },
      {
        "question": "🎨 Phong cách hoạt động sáng tạo",
        "options": [
          { "text": "Theo đúng kỹ thuật và phương pháp hiện có, nâng cao thực lực từng bước. Nghĩ nền tảng vững chắc mới quan trọng.", "type": "S" },
          { "text": "Theo đuổi phong cách độc đáo và khác biệt của riêng mình, thích thử nghiệm và thử thách.", "type": "N" }
        ]
      },
      {
        "question": "💡 Quá trình thực hiện ý tưởng",
        "options": [
          { "text": "Khi có ý tưởng, kiểm tra tính khả thi và lập kế hoạch thực hiện cụ thể rồi tiến hành từng bước.", "type": "J" },
          { "text": "Có ý tưởng thú vị thì thử ngay, trong quá trình điều chỉnh hướng hoặc chuyển sang ý tưởng khác hay hơn.", "type": "P" }
        ]
      },
      {
        "question": "🤔 Khi gặp vấn đề phức tạp",
        "options": [
          { "text": "Tham khảo phương pháp đã được chứng minh hoặc lời khuyên chuyên gia để tìm giải pháp an toàn và chắc chắn.", "type": "S" },
          { "text": "Xem xét nhiều khả năng và thử cách tiếp cận sáng tạo, coi thất bại là cơ hội học hỏi.", "type": "N" }
        ]
      },
      {
        "question": "👥 Trong mối quan hệ với mọi người",
        "options": [
          { "text": "Coi trọng hơn việc duy trì mối quan hệ sâu sắc và lâu dài với số ít người.", "type": "I" },
          { "text": "Thích thiết lập mối quan hệ rộng rãi với nhiều loại người khác nhau và mở rộng mạng lưới.", "type": "E" }
        ]
      }
    ],
    id: [
      {
        "question": "📱 Pola penggunaan media sosial",
        "options": [
          { "text": "Sering membagikan momen-momen kecil dalam kehidupan dan aktif berkomentar, bereaksi pada postingan teman, berkomunikasi dengan antusias.", "type": "E" },
          { "text": "Hanya memposting saat ada momen khusus atau pemikiran yang bermakna, kebanyakan diam-diam melihat konten orang lain.", "type": "I" }
        ]
      },
      {
        "question": "🎉 Gaya pesta ulang tahun",
        "options": [
          { "text": "Mengundang banyak teman untuk mengadakan pesta yang ramai dan bersemangat, bersenang-senang dengan berbagai orang.", "type": "E" },
          { "text": "Menghabiskan waktu yang bermakna dengan beberapa teman dekat dalam suasana yang tenang dan nyaman lebih berarti.", "type": "I" }
        ]
      },
      {
        "question": "💭 Proses pengembangan ide",
        "options": [
          { "text": "Ketika ada ide, langsung berbagi dan berdiskusi dengan orang lain untuk mengembangkannya. Berbicara membantu mengorganisir pikiran.", "type": "E" },
          { "text": "Berpikir dan mengorganisir dengan matang dalam kepala sebelum berbicara dengan orang lain. Saat berpikir sendiri, ide lebih kreatif.", "type": "I" }
        ]
      },
      {
        "question": "🏢 Jam makan siang di kantor",
        "options": [
          { "text": "Makan bersama rekan kerja dan mengobrol adalah hal yang wajar, makan sendiri agak membosankan.", "type": "E" },
          { "text": "Lebih suka memiliki waktu sendiri untuk makan dengan tenang atau hanya dengan 1-2 rekan dekat.", "type": "I" }
        ]
      },
      {
        "question": "📞 Telepon vs Pesan",
        "options": [
          { "text": "Cerita yang rumit lebih baik dibicarakan langsung melalui telepon, lebih cepat dan efisien, mendengar suara lawan bicara lebih baik.", "type": "E" },
          { "text": "Pesan atau messenger cukup untuk berpikir dan mengorganisir sebelum menyampaikan, lebih nyaman. Telepon mendadak agak menekan.", "type": "I" }
        ]
      },
      {
        "question": "🗞️ Pola membaca berita",
        "options": [
          { "text": "Fokus pada fakta konkret dan statistik, kasus nyata, menganggap penting informasi akurat tentang 'kapan, di mana, siapa, apa'.", "type": "S" },
          { "text": "Lebih tertarik pada latar belakang dan konteks peristiwa, dampak dan makna di masa depan, membayangkan berbagai kemungkinan.", "type": "N" }
        ]
      },
      {
        "question": "🎬 Percakapan setelah menonton film",
        "options": [
          { "text": "Membicarakan 'adegan aksi yang sangat menegangkan', 'akting pemeran utama yang natural' - adegan konkret yang dilihat dan didengar.", "type": "S" },
          { "text": "Membicarakan 'pesan apa yang ingin disampaikan film ini ke masyarakat modern?', 'yang benar-benar ingin dikatakan sutradara...' - makna tersembunyi dan simbol.", "type": "N" }
        ]
      },
      {
        "question": "🛠️ Pendekatan pemecahan masalah",
        "options": [
          { "text": "Menggunakan pengalaman masa lalu atau metode yang sudah terbukti untuk memecahkan masalah langkah demi langkah dengan hati-hati. 'Dulu sudah menyelesaikan seperti ini.'", "type": "S" },
          { "text": "Keluar dari kerangka yang ada, mendekati dari perspektif baru dan mencari solusi kreatif dan inovatif.", "type": "N" }
        ]
      },
      {
        "question": "📚 Cara belajar yang disukai",
        "options": [
          { "text": "Menyukai konten yang banyak berisi kasus nyata dan contoh konkret, belajar melalui praktik atau pengalaman langsung lebih efektif.", "type": "S" },
          { "text": "Menyukai memahami teori dan konsep keseluruhan terlebih dahulu, menangkap prinsip dan pola kemudian menerapkannya.", "type": "N" }
        ]
      },
      {
        "question": "🔮 Ketertarikan pada masa depan",
        "options": [
          { "text": "Lebih fokus pada rencana konkret dan realistis masa depan dekat seperti 'besok pakai apa?', 'akhir pekan depan ngapain?'.", "type": "S" },
          { "text": "Suka membayangkan '10 tahun lagi dunia akan berubah seperti apa?', 'apakah AI akan menggantikan manusia?' - kemungkinan dan perubahan masa depan jauh.", "type": "N" }
        ]
      },
      {
        "question": "🤝 Cara mediasi dalam situasi konflik",
        "options": [
          { "text": "Berdasarkan fakta objektif, menganalisis secara logis siapa yang benar dan salah, kemudian memberikan solusi yang masuk akal.", "type": "T" },
          { "text": "Mendengarkan dengan baik perasaan dan posisi kedua belah pihak, berempati terlebih dahulu, kemudian mencari solusi harmonis yang tidak menyakiti siapa pun.", "type": "F" }
        ]
      },
      {
        "question": "💼 Hal penting dalam proyek tim",
        "options": [
          { "text": "Menganggap paling penting kejelasan pembagian peran, sistematis dalam manajemen waktu, kualitas dan efisiensi hasil.", "type": "T" },
          { "text": "Menganggap paling penting harmoni dan komunikasi antar anggota tim, proses yang memuaskan semua orang, kontribusi dan kepuasan individu.", "type": "F" }
        ]
      },
      {
        "question": "😢 Reaksi saat teman mengalami kesulitan",
        "options": [
          { "text": "Mengatakan 'mari kita analisis langkah demi langkah mengapa hal ini terjadi' untuk mencari penyebab dan solusi logis.", "type": "T" },
          { "text": "Mengatakan 'pasti sulit sekali. Saya juga punya pengalaman serupa' untuk berempati dan menghibur secara emosional terlebih dahulu.", "type": "F" }
        ]
      },
      {
        "question": "🎯 Kriteria sukses",
        "options": [
          { "text": "Prestasi yang jelas dan dapat diukur, pengakuan objektif. Dinilai berdasarkan kemampuan dan kompetensi adalah penting.", "type": "T" },
          { "text": "Hubungan baik dengan orang-orang sekitar dan saling memberikan pengaruh positif adalah sukses yang sesungguhnya.", "type": "F" }
        ]
      },
      {
        "question": "⚖️ Pandangan tentang aturan",
        "options": [
          { "text": "Aturan harus diterapkan secara adil untuk semua orang, membuat pengecualian akan merusak keadilan.", "type": "T" },
          { "text": "Manusia lebih penting daripada aturan, jika ada situasi khusus maka fleksibilitas akan lebih manusiawi.", "type": "F" }
        ]
      },
      {
        "question": "🧳 Perencanaan liburan",
        "options": [
          { "text": "Minimal 1-2 bulan sebelumnya sudah merencanakan detail destinasi, akomodasi, jadwal dan menyelesaikan reservasi. Ada jadwal baru tenang.", "type": "J" },
          { "text": "Hanya menentukan kerangka besar dan memutuskan secara spontan di tempat. Menyukai penemuan dan pengalaman tak terduga dalam perjalanan.", "type": "P" }
        ]
      },
      {
        "question": "🏠 Gaya merapikan kamar",
        "options": [
          { "text": "Semua barang harus ada di tempat yang ditentukan, merapikan secara berkala. Lingkungan berantakan tidak bisa fokus.", "type": "J" },
          { "text": "Meski terlihat agak berantakan, ada sistem sendiri, tahu di mana barang yang dibutuhkan. Terlalu rapi malah menekan.", "type": "P" }
        ]
      },
      {
        "question": "📅 Membuat janji",
        "options": [
          { "text": "Harus janji secara spesifik seperti 'selasa minggu depan jam 3 sore ketemu di pintu keluar 2 stasiun Gangnam' baru tenang.", "type": "J" },
          { "text": "Dibiarkan fleksibel seperti 'minggu depan ada waktu hubungi untuk ketemu' tidak menekan.", "type": "P" }
        ]
      },
      {
        "question": "🛒 Pola belanja",
        "options": [
          { "text": "Membuat daftar barang yang dibutuhkan terlebih dahulu dan membeli secara terencana. Hampir tidak pernah belanja impulsif.", "type": "J" },
          { "text": "Saat belanja melihat barang yang disukai langsung memutuskan membeli di tempat. Sering membeli barang yang tidak ada dalam rencana.", "type": "P" }
        ]
      },
      {
        "question": "⏰ Sikap terhadap deadline",
        "options": [
          { "text": "Biasanya mulai lebih awal, menyisihkan waktu cukup untuk memeriksa dan memperbaiki, menyelesaikan dengan santai.", "type": "J" },
          { "text": "Saat tekanan deadline semakin besar, kemampuan fokus dan kreativitas semakin tinggi, menyelesaikan tepat waktu juga ada kesenangannya.", "type": "P" }
        ]
      },
      {
        "question": "🎪 Situasi perubahan tak terduga",
        "options": [
          { "text": "Perubahan jadwal mendadak atau revisi rencana menyebabkan stres, berusaha mempertahankan rencana asli.", "type": "J" },
          { "text": "Perubahan tak terduga atau peluang baru yang muncul menarik, beradaptasi dengan fleksibel dan mengeksplorasi kemungkinan baru.", "type": "P" }
        ]
      },
      {
        "question": "🎨 Gaya aktivitas kreatif",
        "options": [
          { "text": "Mengikuti teknik dan metode yang ada dengan setia, meningkatkan kemampuan secara bertahap. Berpikir fondasi yang kuat baru penting.", "type": "S" },
          { "text": "Mengejar gaya unik dan berbeda dari diri sendiri, menyukai eksperimen dan tantangan.", "type": "N" }
        ]
      },
      {
        "question": "💡 Proses pelaksanaan ide",
        "options": [
          { "text": "Ketika ada ide, memeriksa kelayakan dan membuat rencana pelaksanaan konkret kemudian melaksanakan langkah demi langkah.", "type": "J" },
          { "text": "Ada ide menarik langsung dicoba, dalam proses menyesuaikan arah atau beralih ke ide lain yang lebih baik.", "type": "P" }
        ]
      },
      {
        "question": "🤔 Saat menghadapi masalah kompleks",
        "options": [
          { "text": "Mengacu pada metode yang sudah terbukti atau saran ahli untuk mencari solusi yang aman dan pasti.", "type": "S" },
          { "text": "Mempertimbangkan berbagai kemungkinan dan mencoba pendekatan kreatif, menganggap kegagalan sebagai kesempatan belajar.", "type": "N" }
        ]
      },
      {
        "question": "👥 Dalam hubungan dengan orang-orang",
        "options": [
          { "text": "Lebih menghargai mempertahankan hubungan yang dalam dan berkelanjutan dengan sedikit orang.", "type": "I" },
          { "text": "Suka membangun hubungan yang luas dengan berbagai jenis orang dan memperluas jaringan.", "type": "E" }
        ]
      }
    ],
    chn: [
      {
        "question": "📱 社交媒体使用习惯",
        "options": [
          { "text": "经常分享生活中的小瞬间，并积极在朋友的帖子下留言、点赞，享受活跃的互动。", "type": "E" },
          { "text": "只在特别时刻或有意义的想法时才发帖，平时多数是静静地看着其他人的动态。", "type": "I" }
        ]
      },
      {
        "question": "🎉 生日派对风格",
        "options": [
          { "text": "邀请很多朋友举办热闹、充满活力的派对，与各种人交往并享受其中。", "type": "E" },
          { "text": "与少数几个亲密朋友在安静、温馨的氛围中度过有意义的时光更有意义。", "type": "I" }
        ]
      },
      {
        "question": "💭 想法发展过程",
        "options": [
          { "text": "有想法时立即与他人分享并讨论来发展想法。说话有助于整理思路。", "type": "E" },
          { "text": "在头脑中充分思考和整理后再与他人交谈。独自思考时更有创意。", "type": "I" }
        ]
      },
      {
        "question": "🏢 公司午餐时间",
        "options": [
          { "text": "与同事一起外出用餐并聊天是很自然的，独自吃饭有点无聊。", "type": "E" },
          { "text": "更喜欢有独处时间安静用餐，或只与1-2个亲密同事一起。", "type": "I" }
        ]
      },
      {
        "question": "📞 电话 vs 短信",
        "options": [
          { "text": "复杂的事情通过电话直接交谈更快更高效，听到对方声音更好。", "type": "E" },
          { "text": "短信或即时消息可以充分思考和整理后再传达，更舒适。突然的电话有点压力。", "type": "I" }
        ]
      },
      {
        "question": "🗞️ 新闻阅读模式",
        "options": [
          { "text": "专注于具体事实和统计数据、实际案例，重视关于'何时、何地、谁、什么'的准确信息。", "type": "S" },
          { "text": "更关心事件的背景和语境、对未来产生的影响和意义，想象各种可能性。", "type": "N" }
        ]
      },
      {
        "question": "🎬 看电影后的对话",
        "options": [
          { "text": "谈论'动作场面真的很刺激'、'主角演技很自然'等具体看到和听到的场景。", "type": "S" },
          { "text": "谈论'这部电影想向现代社会传达什么信息？'、'导演真正想说的是...'等隐藏意义和象征。", "type": "N" }
        ]
      },
      {
        "question": "🛠️ 问题解决方法",
        "options": [
          { "text": "使用过去的经验或验证过的方法，逐步谨慎地解决问题。'以前就是这样解决的。'", "type": "S" },
          { "text": "跳出现有框架，从新角度接近，寻找创新和革命性的解决方案。", "type": "N" }
        ]
      },
      {
        "question": "📚 学习偏好方式",
        "options": [
          { "text": "喜欢包含大量实际案例和具体例子的内容，通过实践或直接体验学习更有效。", "type": "S" },
          { "text": "喜欢先理解整体理论和概念，掌握原理和模式然后应用。", "type": "N" }
        ]
      },
      {
        "question": "🔮 对未来的关注",
        "options": [
          { "text": "更专注于近未来的具体和现实计划，如'明天穿什么？'、'下周末做什么？'。", "type": "S" },
          { "text": "喜欢想象'10年后世界会如何变化？'、'AI会取代人类吗？'等遥远的可能性和变化。", "type": "N" }
        ]
      },
      {
        "question": "🤝 冲突情况下的调解方式",
        "options": [
          { "text": "基于客观事实，逻辑分析谁对谁错，然后提出合理的解决方案。", "type": "T" },
          { "text": "充分听取双方的情感和立场，先共情，然后寻找不伤害任何人的和谐解决方案。", "type": "F" }
        ]
      },
      {
        "question": "💼 团队项目中重视的事情",
        "options": [
          { "text": "最重视角色分工的明确性、时间管理的系统性、结果的质量和效率。", "type": "T" },
          { "text": "最重视团队成员之间的和谐和沟通、让所有人都满意的过程、个人贡献和满意度。", "type": "F" }
        ]
      },
      {
        "question": "😢 朋友遇到困难时的反应",
        "options": [
          { "text": "说'让我们逐步分析为什么会发生这样的事'来寻找原因和逻辑解决方案。", "type": "T" },
          { "text": "说'一定很困难。我也有类似经历'先共情并在情感上安慰。", "type": "F" }
        ]
      },
      {
        "question": "🎯 成功标准",
        "options": [
          { "text": "明确可衡量的成就和客观认可。基于实力和能力被评价是重要的。", "type": "T" },
          { "text": "与周围人的良好关系和相互积极影响是真正的成功。", "type": "F" }
        ]
      },
      {
        "question": "⚖️ 对规则的观点",
        "options": [
          { "text": "规则必须公平地适用于所有人，制造例外会损害公正性。", "type": "T" },
          { "text": "人比规则更重要，如果有特殊情况，灵活性会更人性化。", "type": "F" }
        ]
      },
      {
        "question": "🧳 假期计划制定",
        "options": [
          { "text": "至少提前1-2个月详细计划目的地、住宿、日程并完成预订。有计划表才安心。", "type": "J" },
          { "text": "只确定大框架，在当地即兴决定。喜欢旅行中的意外发现和体验。", "type": "P" }
        ]
      },
      {
        "question": "🏠 房间整理风格",
        "options": [
          { "text": "所有东西必须在固定位置，定期整理。混乱的环境无法集中注意力。", "type": "J" },
          { "text": "虽然看起来有点乱，但有自己的一套系统，知道需要的东西在哪里。太整洁反而有压力。", "type": "P" }
        ]
      },
      {
        "question": "📅 约会安排",
        "options": [
          { "text": "必须具体约定如'下周二下午3点在江南站2号出口见面'才安心。", "type": "J" },
          { "text": "灵活安排如'下周有时间联系见面'没有压力。", "type": "P" }
        ]
      },
      {
        "question": "🛒 购物模式",
        "options": [
          { "text": "提前列出需要的东西，有计划地购买。几乎不冲动购物。", "type": "J" },
          { "text": "购物时看到喜欢的东西当场决定购买。经常买计划外的东西。", "type": "P" }
        ]
      },
      {
        "question": "⏰ 对截止日期的态度",
        "options": [
          { "text": "习惯提前开始，留出充足时间检查和修改，轻松完成。", "type": "J" },
          { "text": "截止日期压力越大，专注力和创造力越强，压线完成也有乐趣。", "type": "P" }
        ]
      },
      {
        "question": "🎪 面对意外变化",
        "options": [
          { "text": "突然的日程变更或计划修改会产生压力，尽量坚持原计划。", "type": "J" },
          { "text": "意外变化或新机会出现很有趣，灵活适应并探索新可能性。", "type": "P" }
        ]
      },
      {
        "question": "🎨 创作活动风格",
        "options": [
          { "text": "忠实遵循现有技巧和方法，逐步提高实力。认为扎实的基础才重要。", "type": "S" },
          { "text": "追求独特和与众不同的个人风格，喜欢实验和挑战。", "type": "N" }
        ]
      },
      {
        "question": "💡 想法执行过程",
        "options": [
          { "text": "有想法时检查可行性，制定具体执行计划然后逐步进行。", "type": "J" },
          { "text": "有有趣想法立即尝试，过程中调整方向或转向更好的想法。", "type": "P" }
        ]
      },
      {
        "question": "🤔 遇到复杂问题时",
        "options": [
          { "text": "参考已验证的方法或专家建议，寻找安全确定的解决方案。", "type": "S" },
          { "text": "考虑多种可能性，尝试创新方法，将失败视为学习机会。", "type": "N" }
        ]
      },
      {
        "question": "👥 人际关系中",
        "options": [
          { "text": "更重视与少数人维持深入、持久的关系。", "type": "I" },
          { "text": "喜欢与各种人建立广泛关系，扩大社交网络。", "type": "E" }
        ]
      }
    ],
    fr: [
      {
        "question": "📱 Habitudes d'utilisation des réseaux sociaux",
        "options": [
          { "text": "Partage souvent les petits moments de la vie quotidienne et commente activement, réagit aux publications des amis, communique de manière vivante.", "type": "E" },
          { "text": "Ne publie que lors de moments spéciaux ou d'idées significatives, regarde principalement en silence le contenu des autres.", "type": "I" }
        ]
      },
      {
        "question": "🎉 Style de fête d'anniversaire",
        "options": [
          { "text": "Invite beaucoup d'amis pour organiser une fête bruyante et animée, s'amuse avec diverses personnes.", "type": "E" },
          { "text": "Passe du temps significatif avec quelques amis proches dans une atmosphère calme et chaleureuse est plus significatif.", "type": "I" }
        ]
      },
      {
        "question": "💭 Processus de développement d'idées",
        "options": [
          { "text": "Quand une idée vient, la partage immédiatement et discute avec d'autres pour la développer. Parler aide à organiser les pensées.", "type": "E" },
          { "text": "Pense et organise suffisamment dans sa tête avant de parler aux autres. Quand on pense seul, les idées sont plus créatives.", "type": "I" }
        ]
      },
      {
        "question": "🏢 Heure de déjeuner au bureau",
        "options": [
          { "text": "Manger avec les collègues et discuter est naturel, manger seul est un peu ennuyeux.", "type": "E" },
          { "text": "Préfère avoir du temps seul pour manger tranquillement ou seulement avec 1-2 collègues proches.", "type": "I" }
        ]
      },
      {
        "question": "📞 Téléphone vs Message",
        "options": [
          { "text": "Les histoires complexes sont mieux discutées directement par téléphone, plus rapide et efficace, entendre la voix de l'interlocuteur est mieux.", "type": "E" },
          { "text": "Les messages ou messagerie permettent de bien réfléchir et organiser avant de répondre, plus confortable. Le téléphone soudain fait un peu pression.", "type": "I" }
        ]
      },
      {
        "question": "🗞️ Mode de lecture des actualités",
        "options": [
          { "text": "Se concentre sur les faits concrets et les statistiques, les cas réels, considère important l'information précise sur 'quand, où, qui, quoi'.", "type": "S" },
          { "text": "S'intéresse plus au contexte et au sens de l'événement, à l'impact et au sens dans le futur, imagine diverses possibilités.", "type": "N" }
        ]
      },
      {
        "question": "🎬 Conversation après avoir regardé un film",
        "options": [
          { "text": "Parle de 'la scène d'action était vraiment palpitante', 'le jeu de l'acteur principal était naturel' - scènes concrètes vues et entendues.", "type": "S" },
          { "text": "Parle de 'quel message ce film veut-il transmettre à la société moderne ?', 'ce que le réalisateur voulait vraiment dire...' - sens caché et symboles.", "type": "N" }
        ]
      },
      {
        "question": "🛠️ Approche de résolution de problèmes",
        "options": [
          { "text": "Utilise l'expérience passée ou les méthodes éprouvées pour résoudre les problèmes étape par étape avec prudence. 'C'est comme ça qu'on résolvait avant.'", "type": "S" },
          { "text": "Sort du cadre existant, approche sous un nouvel angle et cherche des solutions créatives et innovantes.", "type": "N" }
        ]
      },
      {
        "question": "📚 Méthode d'apprentissage préférée",
        "options": [
          { "text": "Préfère le contenu avec beaucoup de cas réels et d'exemples concrets, apprendre par la pratique ou l'expérience directe est plus efficace.", "type": "S" },
          { "text": "Préfère comprendre d'abord la théorie et les concepts globaux, saisir les principes et les modèles puis les appliquer.", "type": "N" }
        ]
      },
      {
        "question": "🔮 Intérêt pour l'avenir",
        "options": [
          { "text": "Se concentre plus sur les plans concrets et réalistes de l'avenir proche comme 'que porter demain ?', 'que faire le week-end prochain ?'.", "type": "S" },
          { "text": "Aime imaginer 'comment le monde changera-t-il dans 10 ans ?', 'l'IA remplacera-t-elle les humains ?' - possibilités et changements futurs lointains.", "type": "N" }
        ]
      },
      {
        "question": "🤝 Méthode de médiation en situation de conflit",
        "options": [
          { "text": "Basé sur les faits objectifs, analyse logiquement qui a raison et qui a tort, puis propose une solution raisonnable.", "type": "T" },
          { "text": "Écoute suffisamment les sentiments et positions des deux parties, fait preuve d'empathie d'abord, puis cherche une solution harmonieuse qui ne blesse personne.", "type": "F" }
        ]
      },
      {
        "question": "💼 Choses importantes dans un projet d'équipe",
        "options": [
          { "text": "Considère le plus important la clarté de la répartition des rôles, la systématicité dans la gestion du temps, la qualité et l'efficacité des résultats.", "type": "T" },
          { "text": "Considère le plus important l'harmonie et la communication entre les membres de l'équipe, le processus qui satisfait tout le monde, la contribution et la satisfaction individuelles.", "type": "F" }
        ]
      },
      {
        "question": "😢 Réaction quand un ami a des difficultés",
        "options": [
          { "text": "Dit 'analysons étape par étape pourquoi cela s'est produit' pour chercher la cause et une solution logique.", "type": "T" },
          { "text": "Dit 'ça doit être difficile. J'ai aussi eu une expérience similaire' pour faire preuve d'empathie et réconforter émotionnellement d'abord.", "type": "F" }
        ]
      },
      {
        "question": "🎯 Critères de succès",
        "options": [
          { "text": "Réalisations claires et mesurables, reconnaissance objective. Être évalué sur la compétence et les capacités est important.", "type": "T" },
          { "text": "De bonnes relations avec les gens autour et une influence positive mutuelle est le vrai succès.", "type": "F" }
        ]
      },
      {
        "question": "⚖️ Point de vue sur les règles",
        "options": [
          { "text": "Les règles doivent être appliquées équitablement à tous, créer des exceptions nuit à l'équité.", "type": "T" },
          { "text": "Les gens sont plus importants que les règles, s'il y a des circonstances spéciales, la flexibilité sera plus humaine.", "type": "F" }
        ]
      },
      {
        "question": "🧳 Planification de vacances",
        "options": [
          { "text": "Au moins 1-2 mois à l'avance, planifie en détail la destination, l'hébergement, l'emploi du temps et termine les réservations. Avoir un planning rassure.", "type": "J" },
          { "text": "Ne détermine que le cadre général et décide spontanément sur place. Aime les découvertes et expériences inattendues en voyage.", "type": "P" }
        ]
      },
      {
        "question": "🏠 Style de rangement de chambre",
        "options": [
          { "text": "Tout doit être à sa place fixe, range régulièrement. Un environnement désordonné empêche la concentration.", "type": "J" },
          { "text": "Bien qu'un peu désordonné en apparence, a son propre système, sait où sont les choses nécessaires. Trop ordonné fait pression.", "type": "P" }
        ]
      },
      {
        "question": "📅 Prise de rendez-vous",
        "options": [
          { "text": "Doit prendre rendez-vous spécifiquement comme 'mardi prochain 15h à la sortie 2 de la station Gangnam' pour être rassuré.", "type": "J" },
          { "text": "Laisse flexible comme 'la semaine prochaine quand il y a du temps, contactes pour se voir' sans pression.", "type": "P" }
        ]
      },
      {
        "question": "🛒 Mode d'achat",
        "options": [
          { "text": "Fait une liste des choses nécessaires à l'avance et achète de manière planifiée. N'achète presque jamais impulsivement.", "type": "J" },
          { "text": "En faisant du shopping, quand on voit quelque chose qu'on aime, décide d'acheter sur place. Achète souvent des choses non planifiées.", "type": "P" }
        ]
      },
      {
        "question": "⏰ Attitude envers les échéances",
        "options": [
          { "text": "Commence habituellement tôt, réserve suffisamment de temps pour vérifier et corriger, termine facilement.", "type": "J" },
          { "text": "Plus la pression de l'échéance est grande, plus la capacité de concentration et de créativité est élevée, terminer juste à temps a aussi son plaisir.", "type": "P" }
        ]
      },
      {
        "question": "🎪 Situation de changement inattendu",
        "options": [
          { "text": "Un changement soudain d'emploi du temps ou une révision de plan cause du stress, essaie de maintenir le plan original.", "type": "J" },
          { "text": "Un changement inattendu ou une nouvelle opportunité qui apparaît est intéressant, s'adapte avec flexibilité et explore de nouvelles possibilités.", "type": "P" }
        ]
      },
      {
        "question": "🎨 Style d'activité créative",
        "options": [
          { "text": "Suit fidèlement les techniques et méthodes existantes, améliore ses capacités progressivement. Pense qu'une base solide est importante.", "type": "S" },
          { "text": "Poursuit un style unique et différent de soi-même, aime expérimenter et relever des défis.", "type": "N" }
        ]
      },
      {
        "question": "💡 Processus d'exécution d'idées",
        "options": [
          { "text": "Quand il y a une idée, vérifie la faisabilité et établit un plan d'exécution concret puis procède étape par étape.", "type": "J" },
          { "text": "Quand il y a une idée intéressante, l'essaie immédiatement, dans le processus ajuste la direction ou passe à une meilleure idée.", "type": "P" }
        ]
      },
      {
        "question": "🤔 Face à un problème complexe",
        "options": [
          { "text": "Se réfère aux méthodes éprouvées ou aux conseils d'experts pour chercher une solution sûre et certaine.", "type": "S" },
          { "text": "Considère diverses possibilités et essaie des approches créatives, considère l'échec comme une opportunité d'apprentissage.", "type": "N" }
        ]
      },
      {
        "question": "👥 Dans les relations avec les gens",
        "options": [
          { "text": "Apprécie plus maintenir des relations profondes et durables avec peu de gens.", "type": "I" },
          { "text": "Aime établir des relations larges avec divers types de personnes et élargir le réseau.", "type": "E" }
        ]
      }
    ],
    es: [
      {
        "question": "📱 Hábitos de uso de redes sociales",
        "options": [
          { "text": "Comparte frecuentemente pequeños momentos de la vida cotidiana y comenta activamente, reacciona a las publicaciones de amigos, se comunica de manera animada.", "type": "E" },
          { "text": "Solo publica en momentos especiales o ideas significativas, principalmente observa en silencio el contenido de otros.", "type": "I" }
        ]
      },
      {
        "question": "🎉 Estilo de fiesta de cumpleaños",
        "options": [
          { "text": "Invita a muchos amigos para organizar una fiesta ruidosa y animada, se divierte con varias personas.", "type": "E" },
          { "text": "Pasar tiempo significativo con unos pocos amigos cercanos en una atmósfera tranquila y acogedora es más significativo.", "type": "I" }
        ]
      },
      {
        "question": "💭 Proceso de desarrollo de ideas",
        "options": [
          { "text": "Cuando surge una idea, la comparte inmediatamente y discute con otros para desarrollarla. Hablar ayuda a organizar los pensamientos.", "type": "E" },
          { "text": "Piensa y organiza suficientemente en su cabeza antes de hablar con otros. Cuando piensa solo, las ideas son más creativas.", "type": "I" }
        ]
      },
      {
        "question": "🏢 Hora del almuerzo en la oficina",
        "options": [
          { "text": "Comer con colegas y charlar es natural, comer solo es un poco aburrido.", "type": "E" },
          { "text": "Prefiere tener tiempo solo para comer tranquilamente o solo con 1-2 colegas cercanos.", "type": "I" }
        ]
      },
      {
        "question": "📞 Teléfono vs Mensaje",
        "options": [
          { "text": "Las historias complejas se discuten mejor directamente por teléfono, más rápido y eficiente, escuchar la voz del interlocutor es mejor.", "type": "E" },
          { "text": "Los mensajes o mensajería permiten pensar bien y organizar antes de responder, más cómodo. El teléfono repentino ejerce presión.", "type": "I" }
        ]
      },
      {
        "question": "🗞️ Patrón de lectura de noticias",
        "options": [
          { "text": "Se enfoca en hechos concretos y estadísticas, casos reales, considera importante la información precisa sobre 'cuándo, dónde, quién, qué'.", "type": "S" },
          { "text": "Se interesa más en el contexto y significado del evento, el impacto y significado en el futuro, imagina varias posibilidades.", "type": "N" }
        ]
      },
      {
        "question": "🎬 Conversación después de ver una película",
        "options": [
          { "text": "Habla de 'la escena de acción fue realmente emocionante', 'la actuación del protagonista fue natural' - escenas concretas vistas y escuchadas.", "type": "S" },
          { "text": "Habla de '¿qué mensaje quiere transmitir esta película a la sociedad moderna?', 'lo que el director realmente quería decir...' - significado oculto y símbolos.", "type": "N" }
        ]
      },
      {
        "question": "🛠️ Enfoque de resolución de problemas",
        "options": [
          { "text": "Usa experiencia pasada o métodos probados para resolver problemas paso a paso con cuidado. 'Así se resolvía antes.'", "type": "S" },
          { "text": "Sale del marco existente, se acerca desde un nuevo ángulo y busca soluciones creativas e innovadoras.", "type": "N" }
        ]
      },
      {
        "question": "📚 Método de aprendizaje preferido",
        "options": [
          { "text": "Prefiere contenido con muchos casos reales y ejemplos concretos, aprender a través de práctica o experiencia directa es más efectivo.", "type": "S" },
          { "text": "Prefiere entender primero la teoría y conceptos generales, captar principios y patrones luego aplicarlos.", "type": "N" }
        ]
      },
      {
        "question": "🔮 Interés en el futuro",
        "options": [
          { "text": "Se enfoca más en planes concretos y realistas del futuro cercano como '¿qué usar mañana?', '¿qué hacer el próximo fin de semana?'.", "type": "S" },
          { "text": "Le gusta imaginar '¿cómo cambiará el mundo en 10 años?', '¿la IA reemplazará a los humanos?' - posibilidades y cambios futuros lejanos.", "type": "N" }
        ]
      },
      {
        "question": "🤝 Método de mediación en situación de conflicto",
        "options": [
          { "text": "Basado en hechos objetivos, analiza lógicamente quién tiene razón y quién no, luego propone una solución razonable.", "type": "T" },
          { "text": "Escucha suficientemente los sentimientos y posiciones de ambas partes, muestra empatía primero, luego busca una solución armoniosa que no lastime a nadie.", "type": "F" }
        ]
      },
      {
        "question": "💼 Cosas importantes en proyecto de equipo",
        "options": [
          { "text": "Considera más importante la claridad en la división de roles, sistematicidad en gestión del tiempo, calidad y eficiencia de resultados.", "type": "T" },
          { "text": "Considera más importante la armonía y comunicación entre miembros del equipo, proceso que satisface a todos, contribución y satisfacción individual.", "type": "F" }
        ]
      },
      {
        "question": "😢 Reacción cuando un amigo tiene dificultades",
        "options": [
          { "text": "Dice 'analicemos paso a paso por qué ocurrió esto' para buscar la causa y una solución lógica.", "type": "T" },
          { "text": "Dice 'debe ser difícil. También tuve una experiencia similar' para mostrar empatía y consolar emocionalmente primero.", "type": "F" }
        ]
      },
      {
        "question": "🎯 Criterios de éxito",
        "options": [
          { "text": "Logros claros y medibles, reconocimiento objetivo. Ser evaluado por competencia y habilidades es importante.", "type": "T" },
          { "text": "Buenas relaciones con las personas alrededor e influencia positiva mutua es el verdadero éxito.", "type": "F" }
        ]
      },
      {
        "question": "⚖️ Punto de vista sobre reglas",
        "options": [
          { "text": "Las reglas deben aplicarse equitativamente a todos, crear excepciones daña la equidad.", "type": "T" },
          { "text": "Las personas son más importantes que las reglas, si hay circunstancias especiales, la flexibilidad será más humana.", "type": "F" }
        ]
      },
      {
        "question": "🧳 Planificación de vacaciones",
        "options": [
          { "text": "Al menos 1-2 meses antes, planifica en detalle el destino, alojamiento, horario y completa las reservas. Tener un horario tranquiliza.", "type": "J" },
          { "text": "Solo determina el marco general y decide espontáneamente en el lugar. Le gustan los descubrimientos y experiencias inesperadas en el viaje.", "type": "P" }
        ]
      },
      {
        "question": "🏠 Estilo de organización de habitación",
        "options": [
          { "text": "Todo debe estar en su lugar fijo, organiza regularmente. Un ambiente desordenado impide la concentración.", "type": "J" },
          { "text": "Aunque se ve un poco desordenado, tiene su propio sistema, sabe dónde están las cosas necesarias. Demasiado ordenado ejerce presión.", "type": "P" }
        ]
      },
      {
        "question": "📅 Hacer citas",
        "options": [
          { "text": "Debe citar específicamente como 'martes próximo 3pm en salida 2 estación Gangnam' para estar tranquilo.", "type": "J" },
          { "text": "Lo deja flexible como 'próxima semana cuando haya tiempo, contacta para verse' sin presión.", "type": "P" }
        ]
      },
      {
        "question": "🛒 Patrón de compras",
        "options": [
          { "text": "Hace lista de cosas necesarias de antemano y compra de manera planificada. Casi nunca compra impulsivamente.", "type": "J" },
          { "text": "Al comprar, cuando ve algo que le gusta, decide comprar en el lugar. A menudo compra cosas no planificadas.", "type": "P" }
        ]
      },
      {
        "question": "⏰ Actitud hacia fechas límite",
        "options": [
          { "text": "Usualmente comienza temprano, reserva tiempo suficiente para revisar y corregir, termina fácilmente.", "type": "J" },
          { "text": "Mientras mayor la presión de la fecha límite, mayor la capacidad de concentración y creatividad, terminar justo a tiempo también tiene su placer.", "type": "P" }
        ]
      },
      {
        "question": "🎪 Situación de cambio inesperado",
        "options": [
          { "text": "El cambio repentino de horario o revisión de plan causa estrés, trata de mantener el plan original.", "type": "J" },
          { "text": "El cambio inesperado o nueva oportunidad que aparece es interesante, se adapta con flexibilidad y explora nuevas posibilidades.", "type": "P" }
        ]
      },
      {
        "question": "🎨 Estilo de actividad creativa",
        "options": [
          { "text": "Sigue fielmente técnicas y métodos existentes, mejora habilidades progresivamente. Piensa que una base sólida es importante.", "type": "S" },
          { "text": "Persigue un estilo único y diferente de sí mismo, le gusta experimentar y enfrentar desafíos.", "type": "N" }
        ]
      },
      {
        "question": "💡 Proceso de ejecución de ideas",
        "options": [
          { "text": "Cuando hay una idea, verifica viabilidad y hace plan de ejecución concreto luego procede paso a paso.", "type": "J" },
          { "text": "Cuando hay una idea interesante, la prueba inmediatamente, en el proceso ajusta dirección o cambia a mejor idea.", "type": "P" }
        ]
      },
      {
        "question": "🤔 Al enfrentar problema complejo",
        "options": [
          { "text": "Se refiere a métodos probados o consejos de expertos para buscar solución segura y cierta.", "type": "S" },
          { "text": "Considera varias posibilidades y prueba enfoques creativos, considera el fracaso como oportunidad de aprendizaje.", "type": "N" }
        ]
      },
      {
        "question": "👥 En relaciones con personas",
        "options": [
          { "text": "Valora más mantener relaciones profundas y duraderas con pocas personas.", "type": "I" },
          { "text": "Le gusta establecer relaciones amplias con varios tipos de personas y expandir la red.", "type": "E" }
        ]
      }
    ]
};

// 타로 카드 데이터 (기존 데이터 유지)
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

// 카드 이름을 언어별로 가져오는 함수
function getLocalizedCardNameByIndex(index, language) {
    const card = tarotData[index];
    return card ? card.name[language] || card.name.kor : `Card ${index}`;
}