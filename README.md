# Campus Talk 소개 사이트

서울과학기술대학교 학생을 위한 캠퍼스톡(Campus Talk) 공개 소개 사이트입니다. 대학 공식 앱이 아닙니다.

라이브 주소: https://zavis.chat/campus-talk-site/

이 저장소는 정적 HTML만 담고 있습니다. GitHub Pages(무료)의 `main` 브랜치 루트에서 호스팅합니다.

## 웹 앱 주소는 여기만 고치면 됩니다

파일: [`site-config.js`](site-config.js)

상수: `window.CAMPUS_TALK_CONFIG.APP_URL`

지금은 무료 ngrok 주소입니다. 나중에 `*.workers.dev` 같은 안정적인 주소로 옮기면 **이 값만** 바꾸면 됩니다.

메인 버튼(“웹 앱 / 데모 열기”)은 ngrok 주소를 바로 열지 않고 [`open-web.html`](open-web.html)로 갑니다. 그 페이지가 처음 한 번 나오는 ngrok “Visit Site” 안내를 설명한 뒤, `APP_URL`로 이어지는 버튼을 보여 줍니다. `APP_URL`에 `ngrok`이 더 이상 없으면 그 안내는 자동으로 숨깁니다.

## 카카오톡 데모 클립

홈과 International 페이지의 “카카오톡에서 이렇게 물어보세요” 섹션은 `assets/demo/`의 짧은 클립을 보여 줍니다. 언어 버튼에 따라 한국어·영어 클립이 바뀝니다. 각 장면은 GIF와 더 작은 MP4(`<video autoplay muted loop playsinline>`)를 함께 둡니다.

원본 데모 영상에서 핵심 장면만 잘라 만들었고, 메시지 사이 대기 시간은 뺐습니다.

## 페이지

- `index.html` — 홈
- `guide.html` — 처음 쓰는 법
- `international.html` — exchange / international (기본 언어 영어)
- `safety.html` — 데이터와 안전
- `faq.html` — FAQ
- `privacy.html` — 개인정보처리방침
- `terms.html` — 이용약관
- `delete-account.html` — 계정 삭제
- `open-web.html` — 웹으로 열기 (ngrok 안내 + 웹 앱 버튼)
- 뉴스 페이지는 아직 없습니다.

한국어/영어는 오른쪽 위 KO·EN 버튼으로 바꿉니다.

주요 CTA는 “카카오톡에서 열기”이며 [카카오톡 채널 채팅](https://pf.kakao.com/_AsxivX/chat)으로 연결됩니다. 디스코드 초대는 https://discord.gg/F5wZcqBd22 입니다. 텔레그램은 “곧 출시”입니다. WhatsApp은 제공하지 않습니다. 중고장터, 또래 과외, 봇 데이트는 초기 베타로 열려 있습니다.

## 운영자가 채워야 하는 것

- `site-config.js`의 `CONTACT_EMAIL`에 공개 문의/계정 삭제용 이메일을 넣으세요. 비어 있으면 페이지에 노란 자리 표시가 남습니다.
- 개인정보처리방침과 이용약관은 현재 앱이 실제로 다루는 항목을 기준으로 한 **초안**입니다. **법률 전문가의 검토를 권합니다.**

## 로컬에서 보기

저장소 루트에서 정적 서버를 열면 됩니다. 예: `python3 -m http.server 4177`

Globee나 다른 제품의 코드·디자인을 복사하지 마세요. 색은 캠퍼스톡의 카카오 노랑(`#fee500`)을 씁니다.
