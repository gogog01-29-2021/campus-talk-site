(function () {
  const cfg = window.CAMPUS_TALK_CONFIG || {};
  const TEXT = {
    ko: {
      navHome: "홈", navGuide: "처음 쓰는 법", navIntl: "International", navSafety: "데이터와 안전", navFaq: "FAQ",
      menu: "메뉴", ctaKakao: "카카오톡에서 열기", ctaApp: "웹 앱 / 데모 열기", ctaDiscord: "디스코드 서버 참여",
      telegramSoon: "텔레그램 · 곧 출시",
      eyebrow: "서울과학기술대학교",
      pitch: "시간표부터 학사 일정, 공지와 공모전까지 챗봇과 웹에서 바로 보는 캠퍼스 도우미예요.",
      heroSecondary: "채널 보기",
      demoTitle: "실제 화면",
      demoLead: "데모 계정으로 만든 예시입니다. 시간표는 확인한 뒤에만 저장됩니다.",
      capTimetable: "시간표 사진을 읽고 확인하는 화면",
      capCalendar: "수업과 학사일정이 함께 보이는 주간 달력",
      capToday: "오늘 일정과 공지, 공모전을 모은 화면",
      capBrief: "아침 브리핑 예시 (데모 계정)",
      kakaoDemoTitle: "카카오톡에서 이렇게 물어보세요",
      kakaoDemoLead: "캠퍼스톡 채널에 짧게 보내면 챗봇이 바로 답해요. 실제 카카오톡 화면을 핵심만 잘라 만든 데모입니다.",
      kakaoDemoNote: "PC로 녹화한 화면이라 이모지가 작은 네모로 보일 수 있어요. 휴대폰 카카오톡에서는 정상으로 보여요.",
      capKakaoWeek: "「이번 주」라고 보내면 학사일정을 보여 줘요",
      capKakaoAsgn: "「과제」라고 보내면 마감을 확인해요",
      capKakaoMarket: "「장터」라고 보내면 중고장터 안내를 보여 줘요",
      capKakaoDate: "「데이트」라고 보내면 봇 데이트 시작 방법을 안내해요",
      howTitle: "이렇게 쓰면 돼요",
      how1T: "1. 시간표 사진을 올려 확인해요",
      how1B: "주간 시간표 사진을 올리면 수업 시간과 강의실을 읽어요. 확인한 뒤에만 저장돼요. 테스트 사진 5장에서는 칸 정보 52/60개(약 87%)를 맞게 읽었습니다. 항상 그 비율이 나온다고 보장하지는 않아요.",
      how2T: "2. 달력에서 한눈에 봐요",
      how2B: "일·주·월로 보고, 말로 일정을 부탁하면 미리보기를 확인한 뒤에 저장돼요.",
      how3T: "3. 오늘 할 일을 모아서 봐요",
      how3B: "수업, 마감, 학교 공지, 공모전을 한 화면에서 확인해요.",
      featTitle: "할 수 있는 일",
      f1T: "시간표", f1B: "주간 시간표 사진을 올리면 수업 시간과 강의실을 읽어요. 확인한 뒤에만 저장돼요. 테스트 사진 5장에서는 칸 정보 52/60개(약 87%)를 맞게 읽었습니다. 항상 그 비율이 나온다고 보장하지는 않아요.",
      f2T: "캘린더 · 학사일정", f2B: "일·주·월로 보고, 끌어 옮기거나 길이를 바꿀 수 있어요. AI에게 부탁하면 미리보기를 확인한 뒤에 저장돼요. 구글·애플 캘린더는 구독 주소로 볼 수 있어요.",
      f3T: "학교 공지 · 소식", f3B: "여러분이 공유한 e-class 공지와 캠퍼스 소식을 한 화면에서 모아 봐요. 서버가 대신 e-class에 로그인하지는 않아요.",
      f4T: "공모전", f4B: "내 조건에 맞는 공고를 골라 보여 주고, 일정에 담을 수 있어요.",
      f5T: "오늘 한눈에 · 브리핑", f5B: "오늘 수업과 마감을 웹과 채팅에서 직접 모아 볼 수 있어요.",
      f6T: "커넥트 · 할 일", f6B: "스터디 상대를 찾고, 오늘 해야 할 일을 확인할 수 있어요. 연락처는 서로 승인한 뒤에만 보여요.",
      soonTitle: "베타로 열려 있어요", soonBadge: "베타",
      soonTutorT: "또래 과외", soonTutorB: "같은 학교 학생끼리 과외를 찾고 연결할 수 있어요. 둘러보기는 로그인 없이 가능하고, 글을 올리거나 연락하려면 학교 메일(@seoultech.ac.kr) 인증과 만 19세 이상이 필요해요. 캠퍼스에서 직접 만나고, Campus Talk이 결제를 받거나 보관하지는 않아요. 초기 베타입니다.",
      soonMarketT: "중고장터", soonMarketB: "교재와 캠퍼스 물건을 사고팔 수 있어요. 게스트도 글을 둘러볼 수 있고, 글을 올리거나 연락하려면 학교 메일(@seoultech.ac.kr) 인증과 만 19세 이상이 필요해요. 캠퍼스 안 공공장소에서 직접 만나 거래하세요. Campus Talk은 결제를 받거나 보관하지 않아요. 사진으로 판매글 초안을 만들 수 있어요. 초기 베타입니다.",
      soonDateT: "봇 데이트", soonDateB: "학교 메일 인증, 만 19세 이상 자기 확인, 참여 동의가 필요해요. 사진은 받지 않아요. 연락 방법은 서로 승인한 뒤에만 열려요. 신고·차단·삭제를 할 수 있어요. 초기 베타입니다.",
      getTitle: "지금 쓰기",
      getKoT: "한국 학생",
      getKoB: "카카오톡 채널 캠퍼스톡에서 바로 대화를 시작할 수 있어요. 디스코드와 웹 앱도 열려 있어요.",
      getIntlT: "외국인·교환학생",
      getIntlB: "텔레그램은 곧 출시예요. 지금은 디스코드와 웹 앱에서 학교 메일(@seoultech.ac.kr)로 시작할 수 있어요.",
      moreIntl: "English guide for exchange students",
      trustTitle: "알아 두면 좋은 점",
      t1: "서울과학기술대학교 학생을 위한 서비스이며, 대학 공식 앱은 아니에요.",
      t2: "웹 로그인은 학교 메일(@seoultech.ac.kr)로만 할 수 있어요.",
      t3: "지금은 무료이며, 결제 기능은 연결되어 있지 않아요.",
      t4: "다른 대학 커뮤니티 앱을 크롤링하지 않아요.",
      closeT: "카카오톡에서 캠퍼스톡을 열어 보세요",
      closeB: "오늘 수업과 마감을 채팅이나 웹에서 바로 확인할 수 있어요.",
      footerNote: "서울과학기술대학교 학생을 위한 서비스이며, 대학 공식 앱은 아니에요.",
      footPrivacy: "개인정보처리방침", footTerms: "이용약관", footDelete: "계정 삭제",
      contactLabel: "연락처",
      contactTodo: "운영자 공개 이메일을 여기에 적어 주세요",
      guideTitle: "처음 쓰는 법",
      guideLead: "데모 화면을 본 다음, 학교 메일로 로그인하고, 자주 쓰는 채널을 연결하면 됩니다.",
      safetyTitle: "데이터와 안전",
      safetyLead: "어떤 정보를 쓰는지, 어디에 보관하는지, 어떻게 지울 수 있는지를 짧게 정리했어요.",
      faqTitle: "자주 묻는 질문",
      faq1Q: "무료인가요?", faq1A: "지금은 무료로 쓸 수 있어요. 결제 기능은 연결되어 있지 않아요.",
      faq2Q: "누가 쓸 수 있나요?", faq2A: "서울과학기술대학교 학생을 위한 서비스예요. 웹은 학교 메일(@seoultech.ac.kr)로 로그인해요. 대학 공식 앱은 아니에요.",
      faq3Q: "외국인·교환학생도 쓸 수 있나요?", faq3A: "가능해요. 텔레그램은 곧 출시예요. 지금은 디스코드와 웹 앱에서 학교 메일로 시작할 수 있어요.",
      faq4Q: "데이터는 어디서 오나요?", faq4A: "여러분이 올린 시간표 사진, 직접 넣은 일정, 학교 메일 로그인, 그리고 e-class에서 여러분이 보낸 공지·수업 정보만 써요. 다른 대학 커뮤니티 앱을 크롤링하거나, 그 앱의 로그인 정보를 받지 않아요. 서버가 대신 e-class에 로그인하지도 않아요.",
      faq5Q: "카카오톡 채널은 어디서 열나요?", faq5A: "카카오톡에서 캠퍼스톡 채널을 열면 바로 대화를 시작할 수 있어요. 위쪽의 ‘카카오톡에서 열기’ 버튼이 채팅으로 연결됩니다.",
      faq6Q: "프리미엄 아침 브리핑은 뭔가요?", faq6A: "봇이 먼저 보내 주는 아침 브리핑을 준비하고 있어요. 지금은 결제 창이 없고, 웹과 채팅에서 오늘 수업과 마감을 직접 볼 수 있어요.",
      faq7Q: "중고장터와 과외는 누가 쓰나요?", faq7A: "지금은 베타로 열려 있어요. 게스트도 글을 둘러볼 수 있어요. 글을 올리거나 연락하려면 학교 메일(@seoultech.ac.kr) 인증과 만 19세 이상이 필요해요. 캠퍼스 안 공공장소에서 직접 만나고, Campus Talk이 결제를 받거나 보관하지는 않아요.",
      faq8Q: "봇 데이트는 어떻게 되나요?", faq8A: "봇 데이트는 베타로 열려 있어요. 학교 메일 인증, 만 19세 이상 자기 확인, 참여 동의가 필요해요. 사진은 받지 않고, 연락 방법은 서로 승인한 뒤에만 열려요. 신고·차단·삭제를 할 수 있어요.",
      faq9Q: "시간표 사진은 얼마나 정확한가요?", faq9A: "테스트 사진 5장에서는 칸 정보 52/60개(약 87%)를 맞게 읽었습니다. 항상 그 비율이 나온다고 보장하지는 않아요. 저장하기 전에 꼭 확인해 주세요.",
      premiumTitle: "프리미엄 아침 브리핑",
      premiumBody: "봇이 먼저 보내 주는 아침 브리핑을 준비하고 있어요. 아래는 데모 계정으로 만든 예시예요. 지금은 결제 창이 없고, 웹과 채팅에서 오늘 수업과 마감을 직접 볼 수 있어요.",
      legalBanner: "이 문서는 현재 앱이 실제로 다루는 항목을 기준으로 초안을 작성한 것입니다. 법률 전문가의 검토를 권합니다.",
      g1T: "데모와 소개를 둘러보세요",
      g1B: "이 사이트의 화면과 브리핑 예시는 데모 계정으로 만든 것입니다. 웹 앱을 열면 실제 로그인·데모 흐름을 볼 수 있어요.",
      g2T: "학교 메일로 인증해요",
      g2B: "웹 로그인은 @seoultech.ac.kr 주소만 받아요. 채팅에서도 같은 학교 메일을 인증하면 일정이 같은 계정으로 묶여요.",
      g3T: "자주 쓰는 채널을 연결해요",
      g3B: "한국 학생은 카카오톡 채널, 누구나 디스코드와 웹 앱을 쓸 수 있어요. 텔레그램은 곧 출시예요.",
      g4T: "오늘과 캘린더를 확인해요",
      g4B: "시간표 사진을 올려 확인하고, 달력에서 일정을 보거나, 채팅에 ‘오늘’이라고 물어보면 됩니다.",
      pageGuide: "처음 쓰는 법",
      pageSafety: "데이터와 안전",
      pageFaq: "자주 묻는 질문",
      pagePrivacy: "개인정보처리방침",
      pageTerms: "이용약관",
      pageDelete: "계정 삭제",
      pageIntl: "For international & exchange students",
      footOpenWeb: "웹으로 열기",
      openWebTitle: "웹으로 열기",
      openWebLead: "웹 앱과 데모는 아래 버튼으로 열 수 있어요. 카카오톡이 더 편하면 그 채널을 그대로 쓰셔도 됩니다.",
      openWebNgrokT: "처음 한 번, 안내 화면이 열려요",
      openWebNgrokB: "지금은 무료 임시 주소(ngrok)로 웹 앱을 열고 있어서, 처음 들어갈 때 ‘Visit Site’라는 안내가 한 번 나올 수 있어요. 그 버튼을 누르면 웹 앱으로 이어집니다. 같은 브라우저에서는 보통 약 7일 동안 다시 묻지 않아요. 7일이 지나면 한 번 더 볼 수 있습니다.",
      openWebStableT: "웹 앱으로 이동합니다",
      openWebStableB: "아래 버튼을 누르면 캠퍼스톡 웹 앱이 열려요.",
      openWebCta: "웹 앱 열기",
      openWebKakao: "카카오톡에서 열기",
    },
    en: {
      navHome: "Home", navGuide: "How to start", navIntl: "International", navSafety: "Data & safety", navFaq: "FAQ",
      menu: "Menu", ctaKakao: "Open in KakaoTalk", ctaApp: "Open the web app / demo", ctaDiscord: "Join the Discord server",
      telegramSoon: "Telegram · Coming soon",
      eyebrow: "Seoul National University of Science and Technology",
      pitch: "A campus assistant for SeoulTech students. Check your timetable, academic calendar, notices, and contests in chat or on the web.",
      heroSecondary: "See channels",
      demoTitle: "Real screens",
      demoLead: "These samples were made with the demo account. A timetable is saved only after you confirm it.",
      capTimetable: "A confirmation screen for classes read from a timetable photo",
      capCalendar: "A weekly calendar with classes and academic dates",
      capToday: "Today’s classes, notices, and contests on one screen",
      capBrief: "Morning briefing sample (demo account)",
      kakaoDemoTitle: "Ask in KakaoTalk like this",
      kakaoDemoLead: "Send a short message in the Campus Talk channel and the bot replies. These clips are cut from a real KakaoTalk chat.",
      kakaoDemoNote: "Emoji may appear as small boxes in this PC recording. They display normally in the KakaoTalk mobile app.",
      capKakaoWeek: "Type “this week” to see academic dates",
      capKakaoAsgn: "Type “assignments” to check deadlines",
      capKakaoMarket: "Type “market” for the campus marketplace",
      capKakaoDate: "Type “dating” to see how Bot date starts",
      howTitle: "How it works",
      how1T: "1. Upload a timetable photo and confirm",
      how1B: "We read class times and rooms from a weekly timetable photo. Nothing is saved until you confirm. On five test photos we correctly read 52 of 60 cells (about 87%). That is not a guarantee for every photo.",
      how2T: "2. See everything on the calendar",
      how2B: "Switch between day, week, and month. If you ask the AI to add an event, you get a preview before it is saved.",
      how3T: "3. Review today in one place",
      how3B: "Classes, deadlines, school notices, and contests appear on one screen.",
      featTitle: "What you can do",
      f1T: "Timetable", f1B: "Upload a weekly timetable photo. We read class times and rooms, and save them only after you confirm. On five test photos we correctly read 52 of 60 cells (about 87%). That is not a guarantee for every photo.",
      f2T: "Calendar & academic dates", f2B: "Use day, week, and month views, then drag to move or resize events. Ask the AI and confirm a preview before saving. You can also subscribe from Google or Apple Calendar with an ICS link.",
      f3T: "School notices", f3B: "See e-class notices you share and campus updates on one screen. Our server does not log in to e-class on your behalf.",
      f4T: "Contests", f4B: "We highlight postings that fit your profile, and you can add their dates to your calendar.",
      f5T: "Today & briefing", f5B: "Review today’s classes and deadlines yourself on the web and in chat.",
      f6T: "Connect & to-dos", f6B: "Find a study partner and check what is due today. Contact details are shown only after both people approve.",
      soonTitle: "Open in beta", soonBadge: "Beta",
      soonTutorT: "Peer tutoring", soonTutorB: "SeoulTech students can find and offer tutoring. Guests can browse. Posting or contacting someone needs a verified @seoultech.ac.kr email and being 19 or older. Meet in person on campus. Campus Talk does not take or hold payments. This is an early beta.",
      soonMarketT: "Campus marketplace", soonMarketB: "Buy and sell textbooks and campus goods. Guests can browse listings. Posting or contacting a seller needs a verified @seoultech.ac.kr email and being 19 or older. Meet in person in a public place on campus. Campus Talk does not take or hold payments. You can draft a listing from a photo. This is an early beta.",
      soonDateT: "Bot date", soonDateB: "You need a verified school email, a 19+ self-attestation, and consent. We do not collect photos. Contact is shared only after both people say yes. You can report, block, or delete your data. This is an early beta.",
      getTitle: "Get Campus Talk",
      getKoT: "For Korean students",
      getKoB: "You can start a chat now on the Campus Talk KakaoTalk channel. Discord and the web app are also open.",
      getIntlT: "For international and exchange students",
      getIntlB: "Telegram is coming soon. You can start today on Discord or in the web app with your school email (@seoultech.ac.kr).",
      moreIntl: "English guide for exchange students",
      trustTitle: "Good to know",
      t1: "This is a service for SeoulTech students. It is not an official university app.",
      t2: "Web sign-in accepts only a school email ending in @seoultech.ac.kr.",
      t3: "It is free to use today. Payments are not connected.",
      t4: "We do not crawl other campus community apps.",
      closeT: "Open Campus Talk in KakaoTalk",
      closeB: "Check today’s classes and deadlines in chat or on the web.",
      footerNote: "A service for SeoulTech students. This is not an official university app.",
      footPrivacy: "Privacy policy", footTerms: "Terms of use", footDelete: "Delete your account",
      contactLabel: "Contact",
      contactTodo: "Add a public operator email here",
      guideTitle: "How to start",
      guideLead: "Look at the demo, sign in with your school email, then connect the channel you use most.",
      safetyTitle: "Data and safety",
      safetyLead: "A short overview of what we use, where it is stored, and how you can delete it.",
      faqTitle: "Frequently asked questions",
      faq1Q: "Is it free?", faq1A: "Yes. You can use it for free today. Payments are not connected.",
      faq2Q: "Who is it for?", faq2A: "It is for students at Seoul National University of Science and Technology (SeoulTech). The web app signs in with a school email (@seoultech.ac.kr). This is not an official university app.",
      faq3Q: "Can international and exchange students use it?", faq3A: "Yes. Telegram is coming soon. You can start today on Discord or in the web app with your school email.",
      faq4Q: "Where does the data come from?", faq4A: "We only use the timetable photo you upload, events you add, your school-email sign-in, and the notices or class info you send from e-class. We do not crawl other campus community apps, we do not ask for those apps’ logins, and our server does not log in to e-class on your behalf.",
      faq5Q: "How do I open the KakaoTalk channel?", faq5A: "Open the Campus Talk channel in KakaoTalk to start a chat. The “Open in KakaoTalk” button at the top goes to that chat.",
      faq6Q: "What is the premium morning briefing?", faq6A: "A briefing the bot sends first thing in the morning is being prepared. There is no checkout today. You can already review today’s classes and deadlines on the web and in chat.",
      faq7Q: "Who can use the marketplace and tutoring?", faq7A: "They are open in beta. Guests can browse. Posting or contacting someone needs a verified @seoultech.ac.kr email and being 19 or older. Meet in person in a public place on campus. Campus Talk does not take or hold payments.",
      faq8Q: "How does Bot date work?", faq8A: "Bot date is open in beta. You need a verified school email, a 19+ self-attestation, and consent. We do not collect photos. Contact is shared only after both people say yes. You can report, block, or delete your data.",
      faq9Q: "How accurate is timetable photo reading?", faq9A: "On five test photos we correctly read 52 of 60 cells (about 87%). That is not a guarantee for every photo. Please confirm the classes before they are saved.",
      premiumTitle: "Premium morning briefing",
      premiumBody: "A briefing the bot sends first thing in the morning is being prepared. The sample below is from the demo account. There is no checkout today. You can already review today’s classes and deadlines on the web and in chat.",
      legalBanner: "This document is a draft based on what the app actually handles today. A review by a legal professional is recommended.",
      g1T: "Browse the demo",
      g1B: "The screenshots and briefing sample on this site were made with the demo account. Open the web app to try the live sign-in and demo flow.",
      g2T: "Verify with your school email",
      g2B: "Web sign-in accepts only @seoultech.ac.kr addresses. If you also verify the same school email in chat, your schedule is linked to the same account.",
      g3T: "Connect the channel you use",
      g3B: "Korean students can use the KakaoTalk channel. Anyone can use Discord or the web app. Telegram is coming soon.",
      g4T: "Check today and the calendar",
      g4B: "Upload a timetable photo and confirm it, browse the calendar, or type “today” in chat.",
      pageGuide: "How to start",
      pageSafety: "Data and safety",
      pageFaq: "Frequently asked questions",
      pagePrivacy: "Privacy policy",
      pageTerms: "Terms of use",
      pageDelete: "Delete your account",
      pageIntl: "For international & exchange students",
      footOpenWeb: "Open on the web",
      openWebTitle: "Open on the web",
      openWebLead: "Use the button below to open the web app or demo. If KakaoTalk is easier, you can keep using that channel.",
      openWebNgrokT: "You may see a one-time notice",
      openWebNgrokB: "The web app is temporarily on a free ngrok address, so the first visit may show a “Visit Site” notice. Click that button once to continue. The same browser usually remembers this for about seven days. After that, the notice can appear once more.",
      openWebStableT: "Continue to the web app",
      openWebStableB: "The button below opens the Campus Talk web app.",
      openWebCta: "Open the web app",
      openWebKakao: "Open in KakaoTalk",
    },
  };

  function $(id) { return document.getElementById(id); }

  function applyConfig() {
    const app = (cfg.APP_URL || "").replace(/\/$/, "");
    const kakao = cfg.KAKAO_CHAT_URL || "https://pf.kakao.com/_AsxivX/chat";
    const discord = cfg.DISCORD_INVITE_URL || "https://discord.gg/F5wZcqBd22";
    const needsNgrokHint = /ngrok/i.test(app);
    document.querySelectorAll("[data-kakao]").forEach((el) => { el.href = kakao; });
    /* Main CTAs go to the explainer page, never the raw tunnel URL. */
    document.querySelectorAll("[data-app]").forEach((el) => { el.href = "open-web.html"; });
    document.querySelectorAll("[data-app-direct]").forEach((el) => {
      el.href = app ? (app + "/#login") : "#";
    });
    document.querySelectorAll("[data-discord]").forEach((el) => { el.href = discord; });
    document.querySelectorAll("[data-ngrok-hint]").forEach((el) => {
      el.hidden = !needsNgrokHint;
    });
    document.querySelectorAll("[data-stable-hint]").forEach((el) => {
      el.hidden = needsNgrokHint;
    });
    const email = String(cfg.CONTACT_EMAIL || "").trim();
    document.querySelectorAll("[data-contact]").forEach((el) => {
      if (email) {
        el.innerHTML = "";
        const a = document.createElement("a");
        a.href = "mailto:" + email;
        a.textContent = email;
        el.appendChild(a);
      }
    });
    document.querySelectorAll("[data-contact-placeholder]").forEach((el) => {
      el.hidden = Boolean(email);
    });
    document.querySelectorAll("[data-github]").forEach((el) => {
      if (cfg.CONTACT_GITHUB) el.href = cfg.CONTACT_GITHUB;
    });
  }

  function currentLang() {
    try {
      const stored = localStorage.getItem("campus-talk-lang");
      if (stored === "en" || stored === "ko") return stored;
    } catch { /* ignore */ }
    return document.documentElement.dataset.defaultLang === "en" ? "en" : "ko";
  }

  function applyLang(lang) {
    const pack = TEXT[lang] || TEXT.ko;
    document.documentElement.lang = lang === "en" ? "en" : "ko";
    document.body.classList.toggle("is-en", lang === "en");
    if ($("lang-ko")) $("lang-ko").setAttribute("aria-pressed", lang === "ko" ? "true" : "false");
    if ($("lang-en")) $("lang-en").setAttribute("aria-pressed", lang === "en" ? "true" : "false");
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const text = pack[el.dataset.i18n];
      if (text) el.textContent = text;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const text = pack[el.dataset.i18nAlt];
      if (text) el.alt = text;
    });
    document.querySelectorAll("[data-lang]").forEach((el) => {
      el.hidden = el.getAttribute("data-lang") !== lang;
    });
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll(".shot-demo video").forEach((video) => {
      const wrap = video.closest("[data-lang]");
      const visible = !wrap || wrap.getAttribute("data-lang") === lang;
      if (visible && !reduceMotion) {
        video.play().catch(() => { /* autoplay may be blocked */ });
      } else {
        video.pause();
      }
    });
    const titleKey = document.body.dataset.titleKey;
    if (titleKey && pack[titleKey]) document.title = pack[titleKey] + " · Campus Talk";
    else document.title = "Campus Talk";
    try { localStorage.setItem("campus-talk-lang", lang); } catch { /* ignore */ }
  }

  function initMenu() {
    const btn = $("menu-btn");
    const drawer = $("nav-drawer");
    if (!btn || !drawer) return;
    btn.addEventListener("click", () => {
      const open = drawer.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyConfig();
    applyLang(currentLang());
    initMenu();
    $("lang-ko") && $("lang-ko").addEventListener("click", () => applyLang("ko"));
    $("lang-en") && $("lang-en").addEventListener("click", () => applyLang("en"));
  });
})();
