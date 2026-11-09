// ---------------------------------------------------------------------------
// Project list. Edit here to add, remove or correct a site.
// group: "freelance" | "fivestones"   shot: file in assets/shots (null = no screenshot)
// tags: optional list of "responsive" | "renewal" | "mobile".
// Text fields take { en, ko }.
// ---------------------------------------------------------------------------
const PROJECTS = [
  { name: { en: "LAWnB", ko: "로앤비" }, group: "freelance", url: "https://www.lawnb.com", shot: "lawnb", tags: ["responsive"],
    sector: { en: "Legal information", ko: "법률 정보" }, stack: "HTML, CSS, JavaScript", years: "2025–2026",
    desc: { en: "Rebuilt the frontend of Thomson Reuters' Korean legal research portal.",
            ko: "톰슨로이터의 법률 정보 포털 로앤비의 프론트엔드를 새로 구축했습니다." } },
  { name: { en: "TCUBEit", ko: "티큐브잇" }, group: "freelance", url: "http://www.tcubeit.com", shot: "tcubeit", tags: ["responsive"],
    sector: { en: "Biotech", ko: "바이오" }, stack: "HTML, CSS, JavaScript, WordPress, PHP, GSAP", years: "2025–2026",
    desc: { en: "Custom WordPress theme for a cell-therapy company, with scroll animations and Korean and English content.",
            ko: "세포치료제 기업의 워드프레스 커스텀 테마를 제작했습니다. 스크롤 애니메이션과 국문/영문 페이지를 구현했습니다." } },
  { name: { en: "SEOULTECH Lifelong Education Center", ko: "서울과학기술대학교 평생교육원" }, group: "fivestones", url: "https://lifelong.seoultech.ac.kr", shot: "seoultech", tags: ["responsive"],
    sector: { en: "University", ko: "대학교" }, stack: "HTML, CSS, JavaScript, PHP, jQuery", years: "2024–2025",
    desc: { en: "Redesigned the custom PHP site of a university's continuing-education centre, then added features and maintained it.",
            ko: "PHP 기반 평생교육원 사이트를 리뉴얼하고, 이후 기능 추가와 유지보수를 맡았습니다." } },
  { name: { en: "J&E Korea (Dareuda by Kernels)", ko: "제이앤이 (다르다 by 커널스)" }, group: "fivestones", url: "http://www.jnekorea.com/", shot: "jne", tags: ["responsive"],
    sector: { en: "Food manufacturing", ko: "식품 제조" }, stack: "HTML, CSS, JavaScript, PHP, jQuery", years: "2023–2024",
    desc: { en: "Built the multilingual corporate site in Korean, English, Japanese and Chinese, and added new features.",
            ko: "국문, 영문, 일문, 중문 4개 언어 기업 사이트를 직접 구축하고 기능을 추가했습니다." } },
  { name: { en: "RENHAIM", ko: "레나임" }, group: "fivestones", url: "https://renhaim.com", shot: "renhaim", tags: ["responsive"],
    sector: { en: "Biotech", ko: "바이오" }, stack: "HTML, CSS, JavaScript, PHP, jQuery, Swiper",
    desc: { en: "Built the multilingual corporate website for a life-science company.",
            ko: "생명과학 기업의 다국어 기업 사이트를 직접 구축했습니다." } },
  { name: { en: "MOMENTUS", ko: "모멘터스" }, group: "freelance", url: "https://mmts2023.cafe24.com", shot: "moments", tags: ["responsive"],
    sector: { en: "Risk consulting", ko: "리스크 컨설팅" }, stack: "HTML, CSS, JavaScript, PHP, jQuery",
    desc: { en: "Corporate website for an online risk-management consultancy.",
            ko: "온라인 리스크 관리 컨설팅 기업의 사이트를 구축했습니다." } },
  { name: { en: "Gangnam Doga", ko: "강남도가" }, group: "freelance", url: "http://www.gangnamdoga.com", shot: "gangnamdoga", tags: ["responsive"],
    sector: { en: "Beverage brand", ko: "주류 브랜드" }, stack: "HTML, CSS, JavaScript",
    desc: { en: "Brand website for Chateau Gangnam, a Korean craft liquor maker.",
            ko: "전통주 브랜드 샤또강남의 브랜드 사이트를 구축했습니다." } },
  { name: { en: "OSCAR Bio", ko: "오스카" }, group: "fivestones", url: "http://oscarbio.co.kr", shot: "oscar", tags: ["responsive"],
    sector: { en: "Food and bio", ko: "식품·바이오" }, stack: "HTML, CSS, JavaScript, jQuery, Swiper, GSAP",
    desc: { en: "Corporate website. I built the GSAP scroll and motion animations across the company and product pages.",
            ko: "기업 사이트를 구축하고, 회사 소개와 제품 페이지의 GSAP 스크롤·모션 애니메이션을 직접 구현했습니다." } },
  { name: { en: "SEGI R&D (Magicar)", ko: "세기알앤디 (매직카)" }, group: "freelance", url: "https://www.magicar.com", shot: "magicar", tags: ["responsive"],
    sector: { en: "Connected vehicles", ko: "커넥티드카" }, stack: "HTML, CSS, JavaScript, PHP, jQuery",
    desc: { en: "Built the multilingual corporate website for a connected-car technology company.",
            ko: "커넥티드카 기술 기업의 다국어 기업 사이트를 직접 구축했습니다." } },
  { name: { en: "Gas Doctor", ko: "가스닥터" }, group: "freelance", url: "https://gadoc.azurewebsites.net", shot: "gadoc", tags: ["responsive"],
    sector: { en: "Gas safety service", ko: "가스 안전 서비스" }, stack: "HTML, CSS, JavaScript",
    desc: { en: "Frontend for a QR-based gas installation and inspection service.",
            ko: "QR 기반 가스 설치·점검 서비스의 프론트엔드를 작업했습니다." } },
  { name: { en: "City Island", ko: "씨티아일랜드" }, group: "fivestones", url: "http://www.cityisland.co.kr", shot: "cityisland", tags: ["responsive"],
    sector: { en: "Real estate", ko: "부동산" }, stack: "HTML, CSS, JavaScript, PHP, jQuery",
    desc: { en: "Sales website for a shopping and commercial complex.",
            ko: "복합 쇼핑몰 상업시설의 분양 사이트를 구축했습니다." } },
  { name: { en: "Gaeseong Mandu Koong online shop", ko: "개성만두 궁 온라인몰" }, group: "fivestones", url: "https://koong.co.kr", shot: "koong", tags: ["responsive", "renewal"],
    sector: { en: "Food retail", ko: "식품 쇼핑몰" }, stack: "HTML, CSS, JavaScript, PHP, GnuBoard, YoungCart, MySQL", years: "2021–2022",
    desc: { en: "Online shop for a dumpling restaurant: storefront, admin pages and database setup.",
            ko: "만두 전문점의 온라인 쇼핑몰입니다. 사용자·관리자 화면과 DB 설정을 맡았습니다." } },
  { name: { en: "Traffic Accident Compensation Supervisory Service", ko: "자동차손해배상진흥원" }, group: "fivestones", url: "https://tacss.or.kr", shot: "tacss", tags: ["responsive"],
    sector: { en: "Public agency", ko: "공공기관" }, stack: "HTML, CSS, JavaScript, PHP, MySQL", years: "2021", regionLocked: true,
    desc: { en: "Frontend and admin pages for a public agency. The frontend passed Korea's national web accessibility certification.",
            ko: "공공기관 사이트의 사용자·관리자 화면을 구축했습니다. 프론트엔드로 웹 접근성 인증마크를 받았습니다." } },
  { name: { en: "Korean Society of Product Culture Design", ko: "한국상품문화디자인학회" }, group: "fivestones", url: "http://kicpd.com", shot: "kicpd", tags: ["responsive"],
    sector: { en: "Academic society", ko: "학회" }, stack: "HTML, CSS, JavaScript, PHP, GnuBoard, MySQL", years: "2021",
    desc: { en: "Website for a design research society, including its international Blue Awards competition: frontend, admin pages and database setup.",
            ko: "디자인 학회 사이트와 국제 공모전 블루어워즈 페이지를 구축했습니다. 사용자·관리자 화면과 DB 설정을 맡았습니다." } },
  { name: { en: "Hansei Drone Academy", ko: "한세드론아카데미" }, group: "fivestones", url: "http://hanseidrone.com", shot: "hansei", tags: ["responsive"],
    sector: { en: "Training", ko: "교육" }, stack: "HTML, CSS, JavaScript, PHP, GnuBoard, MySQL", years: "2019–2020",
    desc: { en: "Course catalogue and enrolment site for a drone pilot school, with its frontend and admin pages.",
            ko: "드론 교육원의 과정 안내와 수강 신청 사이트를 구축했습니다. 사용자·관리자 화면을 맡았습니다." } },
  { name: { en: "Samsung MNS", ko: "삼성mns" }, group: "fivestones", url: "https://samsungmns.co.kr/", shot: "samsungmns", tags: [],
    sector: { en: "IT services", ko: "IT 서비스" }, stack: "HTML, CSS, JavaScript",
    desc: { en: "Corporate website.", ko: "기업 사이트를 구축했습니다." } },
  { name: { en: "Induk University Startup Support Group", ko: "인덕대학교 창업지원단" }, group: "fivestones", url: "https://bi.induk.ac.kr/", shot: "induk", tags: ["responsive"],
    sector: { en: "University", ko: "대학교" }, stack: "HTML, CSS, JavaScript",
    desc: { en: "Responsive website for a university startup support centre.", ko: "대학 창업지원단의 반응형 사이트를 구축했습니다." } },
  { name: { en: "plusminus-x", ko: "플러스마이너스엑스" }, group: "fivestones", url: "https://plusminus-x.com/", shot: "plusminusx", tags: ["responsive"],
    sector: { en: "Online shop", ko: "쇼핑몰" }, stack: "HTML, CSS, JavaScript, GnuBoard",
    desc: { en: "Responsive online shop for golf goods and accessories.", ko: "골프용품·잡화 브랜드의 반응형 쇼핑몰을 구축했습니다." } },
  { name: { en: "Seoul Knowledge Festival", ko: "서울지식이음축제" }, group: "fivestones", url: null, shot: "seoulfestival", tags: ["responsive"],
    sector: { en: "Public event", ko: "공공 행사" }, stack: "HTML, CSS, JavaScript",
    desc: { en: "Responsive website for a Seoul city festival.", ko: "서울시 축제의 반응형 사이트를 구축했습니다." } },
  { name: { en: "Seongbuk-gu Office", ko: "성북구청" }, group: "fivestones", url: null, shot: "seongbuk", tags: ["mobile"],
    sector: { en: "Local government", ko: "지자체" }, stack: "HTML, CSS, JavaScript",
    desc: { en: "Mobile website for a Seoul district office.", ko: "구청의 모바일 사이트를 구축했습니다." } },
  { name: { en: "Daecheon Gim", ko: "대천김" }, group: "fivestones", url: "http://daechungim.com/index.php", shot: "daechungim", tags: ["responsive", "renewal"],
    sector: { en: "Food", ko: "식품" }, stack: "HTML, CSS, JavaScript",
    desc: { en: "Redesigned the site of a seaweed brand as a responsive website.", ko: "김 브랜드의 사이트를 반응형으로 리뉴얼했습니다." } },
  { name: { en: "Woojung Foods", ko: "우정식품" }, group: "fivestones", url: "http://www.dangmyen.co.kr/", shot: "dangmyen", tags: ["responsive"],
    sector: { en: "Food manufacturing", ko: "식품 제조" }, stack: "HTML, CSS, JavaScript",
    desc: { en: "Corporate website for a glass-noodle maker.", ko: "당면 제조 기업의 사이트를 구축했습니다." } },
  { name: { en: "Magic Tteokbokki (Y&J Food)", ko: "마술떡볶이 (와이앤제이푸드)" }, group: "fivestones", url: "http://msauce.co.kr/", shot: "msauce", tags: ["responsive"],
    sector: { en: "Food", ko: "식품" }, stack: "HTML, CSS, JavaScript",
    desc: { en: "Responsive brand website for a tteokbokki brand.", ko: "떡볶이 브랜드의 반응형 사이트를 구축했습니다." } },
  { name: { en: "BESTECH", ko: "베스텍" }, group: "fivestones", url: "http://www.bestechworld.com/", shot: "bestech", tags: ["responsive"],
    sector: { en: "Antimicrobials and masks", ko: "항균제·마스크" }, stack: "HTML, CSS, JavaScript",
    desc: { en: "Responsive corporate website for an antimicrobial and mask maker.", ko: "항균제·마스크 기업의 반응형 사이트를 구축했습니다." } },
  { name: { en: "Korea Men's Choir", ko: "코리아남성합창단" }, group: "fivestones", url: "http://koreamc.org/index.php", shot: "koreamc", tags: ["responsive"],
    sector: { en: "Arts", ko: "예술 단체" }, stack: "HTML, CSS, JavaScript",
    desc: { en: "Responsive website for a men's choir.", ko: "남성 합창단의 반응형 사이트를 구축했습니다." } },
  { name: { en: "GNLST", ko: "GNLST" }, group: "fivestones", url: "http://gnlst.com/", shot: "gnlst", tags: ["responsive"],
    sector: { en: "Logistics and travel", ko: "물류·여행" }, stack: "HTML, CSS, JavaScript",
    desc: { en: "Responsive corporate website for a shipping and logistics company with a travel business.", ko: "해상운송·물류 기업의 반응형 사이트를 구축했습니다." } },
  { name: { en: "Etaek Rice Center (Etaek Mall)", ko: "이택라이스센터 (이택몰)" }, group: "fivestones", url: "https://etaekmall.com/", shot: "etaekmall", tags: ["responsive"],
    sector: { en: "Food retail", ko: "식품 쇼핑몰" }, stack: "HTML, CSS, JavaScript, GnuBoard",
    desc: { en: "Responsive online shop for a rice producer.", ko: "쌀 생산 업체의 반응형 쇼핑몰을 구축했습니다." } },
  { name: { en: "CDU Partners", ko: "CDU Partners" }, group: "fivestones", url: "https://cdupartners.com/", shot: "cdupartners", tags: ["responsive"],
    sector: { en: "Corporate", ko: "기업" }, stack: "HTML, CSS, JavaScript",
    desc: { en: "Responsive corporate website.", ko: "반응형 기업 사이트를 구축했습니다." } },
];

// ---------------------------------------------------------------------------
// Enterprise projects at HUMAN-N-CIS, newest first.
// ---------------------------------------------------------------------------
const ENTERPRISE = [
  { client: { en: "Hyundai Motor Company", ko: "현대자동차" },
    title: { en: "Security certification activity management system", ko: "보안인증활동 관리시스템" },
    period: "09.2025 – 03.2026", team: "large",
    role: { en: "Backend development", ko: "백엔드 개발" },
    summary: { en: "A new system that brings Hyundai's security-certification process into one place: certification scopes, periodic and ad-hoc inspections, and inquiries, with interfaces to related internal systems.",
               ko: "현대자동차의 보안인증활동 관리 프로세스를 시스템화한 신규 구축 프로젝트입니다. 인증범위, 정기·상시 점검, 업무 문의를 관리하고 유관 시스템과 I/F로 연동합니다." },
    built: { en: ["User and admin dashboards, and dashboard settings for system admins",
                  "Certification scope management for users and admins",
                  "Periodic and ad-hoc inspection management",
                  "Work inquiry board",
                  "Mail templates and mail send history",
                  "Interfaces to related systems, and an H/W, S/W and DB structure designed for maintenance and growth"],
             ko: ["사용자·관리자 대시보드, 시스템 관리자용 대시보드 관리",
                  "사용자·관리자 인증범위 관리",
                  "정기·상시 활동 점검 관리",
                  "업무문의 게시판 관리",
                  "메일 템플릿 관리, 메일 발송 이력 관리",
                  "유관 시스템 I/F 연동, 유지보수와 확장성을 고려한 H/W·S/W·DB 구조 설계"] },
    stack: "Java, Spring Boot, MySQL, Vue.js, GitLab, Jenkins, SonarQube",
    press: "https://www.betanews.net/article/view/beta202508080063" },

  { client: { en: "Hyundai Motor Company", ko: "현대자동차" },
    title: { en: "Security rights management system (SRMS) rebuild", ko: "보안권한시스템(SRMS) 개편" },
    period: "10.2024 – 07.2025", team: "large",
    role: { en: "Backend development", ko: "백엔드 개발" },
    summary: { en: "A rebuild of the system Hyundai employees use to request and approve access rights, moved to a microservice architecture, with the request process redesigned and automated.",
               ko: "보안 권한 신청·관리 시스템을 MSA 기반으로 개편한 프로젝트입니다. 권한 신청 프로세스를 재설계하고 업무를 자동화했습니다." },
    built: { en: ["Request flows for server OS accounts, server account creation and server access",
                  "Request flows for DB encryption and decryption rights, account access, and SAC and DAC",
                  "Admin permission management and solution-owner management",
                  "Mail templates, Excel upload and download",
                  "Interfaces to security solutions",
                  "Data migration from the old system"],
             ko: ["서버 OS 계정 신청, 서버 계정 생성, 서버 접속 권한",
                  "DB 암복호화 권한 신청, ACCOUNT 접속 권한, SAC/DAC 신청",
                  "관리자 권한 관리, 솔루션 담당자 관리",
                  "메일 템플릿 기능, 엑셀 업로드·다운로드",
                  "보안 솔루션 간 I/F 연동",
                  "기존 시스템 데이터 마이그레이션"] },
    stack: "Java, MySQL, MSA, Vue.js, Git",
    press: "https://www.betanews.net/article/view/beta202404260080" },

  { client: { en: "KB Securities", ko: "KB증권" },
    title: { en: "GEDMIN general-affairs solution", ko: "총무 솔루션 GEDMIN(제드민)" },
    period: "05.2024 – 09.2024", team: "small",
    role: { en: "Backend development and maintenance", ko: "백엔드 개발 및 유지보수" },
    summary: { en: "Maintenance and new features for KB Securities' installation of GEDMIN, HUMAN-N-CIS's general-affairs product.",
               ko: "KB증권에 도입된 휴먼엔시스 총무 솔루션 GEDMIN의 유지보수와 기능 개선을 맡았습니다." },
    built: { en: ["New executive-secretary management feature",
                  "Improvements and stability fixes to existing features",
                  "Handling production issues"],
             ko: ["비서 관리 기능 신규 개발",
                  "기존 기능 개선 및 안정성 강화",
                  "운영 중 발생하는 이슈 대응"] },
    stack: "Java, Oracle, SVN",
    press: "https://www.betanews.net/article/view/beta202403040050",
    pressLabel: { en: "About GEDMIN (in Korean)", ko: "GEDMIN 관련 기사" } },

  { client: { en: "Hyundai Steel", ko: "현대제철" },
    title: { en: "Recruitment application system", ko: "입사지원 관리시스템" },
    period: "12.2023 – 03.2024", team: "small",
    role: { en: "Backend development", ko: "백엔드 개발" },
    summary: { en: "One secure system replacing several separate application sites, turning a largely manual hiring process into a digital one that can grow from general affairs into HR.",
               ko: "분산되어 있던 입사지원 시스템을 하나의 통합 관리 시스템으로 구축했습니다. 수작업 중심의 채용 업무를 디지털로 전환하고, 총무에서 인사 영역까지 확장할 수 있게 설계했습니다." },
    built: { en: ["The four-step online application flow",
                  "Security-hardened application management"],
             ko: ["입사지원 1–4단계 신청 흐름",
                  "보안을 강화한 입사지원 관리 기능"] },
    stack: "Java, MariaDB, Git",
    press: "https://www.betanews.net/article/view/beta202310260088" },

  { client: { en: "POSCO FLOW", ko: "포스코플로우" },
    title: { en: "General-affairs system", ko: "총무 업무시스템" },
    period: "05.2023 – 07.2023", team: "small",
    role: { en: "Backend development", ko: "백엔드 개발" },
    summary: { en: "A single system for general-affairs work that had been spread across manual processes, so requests are standardised and easier for employees.",
               ko: "흩어져 있던 총무 업무를 통합 관리하는 시스템입니다. 수작업 업무를 시스템화해 업무를 표준화하고 임직원 사용 편의성을 높였습니다." },
    built: { en: ["Requests for family-event support (weddings, funerals)",
                  "Contact-person directory",
                  "Business-card requests",
                  "Mail utilities"],
             ko: ["경조사 신청",
                  "담당자 안내",
                  "명함 신청",
                  "메일 유틸"] },
    stack: "Java, Git",
    press: "https://www.betanews.net/article/view/beta202303230466" },
];

// "09.2025 – 03.2026" -> months since Jan 2023 (start inclusive, end inclusive)
const toMonth = (s) => { const [m, y] = s.trim().split("."); return (Number(y) - 2023) * 12 + Number(m) - 1; };
const GANTT_START = 0, GANTT_END = 3 * 12 + 6; // Jan 2023 .. Jun 2026

function renderGantt() {
  const g = document.getElementById("gantt");
  const span = GANTT_END - GANTT_START;
  const pct = (m) => ((m - GANTT_START) / span) * 100;
  let axis = '<div class="gantt__axis" aria-hidden="true"><span></span><div class="gantt__years">';
  for (let y = 0; y < 4; y++) axis += `<span style="left:${pct(y * 12)}%">${2023 + y}</span>`;
  axis += "</div></div>";
  const rows = [...ENTERPRISE].reverse().map((p, i) => {
    const [a, b] = p.period.split("–").map(toMonth);
    const idx = ENTERPRISE.length - 1 - i;
    return `<a class="gantt__row" role="listitem" href="#proj-${idx}">
      <span class="gantt__label"><b>${p.client[lang]}</b><span>${p.title[lang]}</span><span class="gantt__period">${p.period}</span></span>
      <span class="gantt__track"><span class="gantt__bar" style="left:${pct(a)}%;width:${pct(b + 1) - pct(a)}%"><span class="gantt__dates">${p.period}</span></span></span>
    </a>`;
  }).join("");
  g.innerHTML = axis + rows;
}

function renderEnterprise() {
  renderGantt();
  const el = document.getElementById("projects");
  const t = UI[lang];
  el.innerHTML = "";
  ENTERPRISE.forEach((p, idx) => {
    const li = document.createElement("li");
    li.className = "proj";
    li.id = `proj-${idx}`;
    li.innerHTML = `
      <div class="proj__when"><time></time><span class="proj__team"></span><span class="proj__role"></span></div>
      <div class="proj__body">
        <p class="proj__client"></p>
        <h3></h3>
        <p class="proj__sum"></p>
        <h4></h4>
        <ul class="ticks ticks--cols"></ul>
        <ul class="tags tags--small"></ul>
        <a class="proj__press" target="_blank" rel="noopener"></a>
      </div>`;
    li.querySelector("time").textContent = p.period;
    li.querySelector(".proj__team").textContent = t.team(p.team);
    li.querySelector(".proj__role").textContent = p.role[lang];
    li.querySelector(".proj__client").textContent = p.client[lang];
    li.querySelector("h3").textContent = p.title[lang];
    li.querySelector(".proj__sum").textContent = p.summary[lang];
    li.querySelector("h4").textContent = t.built;
    const ul = li.querySelector(".ticks");
    p.built[lang].forEach((b) => { const x = document.createElement("li"); x.textContent = b; ul.appendChild(x); });
    const tags = li.querySelector(".tags");
    p.stack.split(", ").forEach((s) => { const x = document.createElement("li"); x.textContent = s; tags.appendChild(x); });
    const a = li.querySelector(".proj__press");
    a.href = p.press;
    a.textContent = p.pressLabel ? p.pressLabel[lang] : t.press;
    el.appendChild(li);
  });
}

// ---------------------------------------------------------------------------
// Korean copy for the static page. English lives in index.html itself.
// ---------------------------------------------------------------------------
const KO = {
  "skip": "프로젝트로 바로가기",
  "name": "전지혜",
  "nav.work": "웹사이트", "nav.enterprise": "엔터프라이즈", "nav.experience": "경력", "nav.contact": "연락처", "nav.blog": "블로그", "ct.blog": "블로그",
  "hero.name": "전지혜",
  "hero.alt": "Jihye Jeon",
  "hero.lede": "자바와 스프링 부트로 업무용 소프트웨어를 만드는 개발자입니다. 첫 테이블 설계부터 완성된 화면까지 직접 만듭니다. 대기업의 기업 시스템을 개발했고, 기업·대학·공공기관 웹사이트를 25개 넘게 구축했습니다.",
  "clients.label": "기업 시스템을 개발한 고객사",
  "clients.1": "현대자동차", "clients.2": "현대제철", "clients.3": "KB증권", "clients.4": "포스코플로우",
  "hero.email": "이메일 보내기",
  "hero.cv": "CV 다운로드 (PDF)",
  "rec.based": "거주지", "rec.based.v": "독일 본. 독일 내 이주 가능.",
  "rec.exp": "경력", "rec.exp.v": "6년, 백엔드와 프론트엔드",
  "rec.stack": "주요 기술", "rec.stack.v": "Java, Spring Boot, SQL (MySQL, MariaDB, Oracle)",
  "rec.domain": "업무 분야", "rec.domain.v": "기업 시스템: 총무, 인사, 보안 권한",
  "rec.permit": "체류 자격", "rec.permit.v": "워킹홀리데이 비자 (2027.05까지). EU 블루카드 신청 가능.",
  "rec.lang": "언어", "rec.lang.v": "한국어 (모국어), 영어 (C1), 독일어 (A1, 학습 중)",
  "work.title": "제가 만든 웹사이트",
  "work.intro": "파이브스톤즈에서 일한 3년과 2022년부터 이어온 프리랜서 작업입니다. 행을 선택하면 사이트 화면을 볼 수 있습니다.",
  "f.all": "전체", "f.freelance": "프리랜서", "f.fivestones": "파이브스톤즈",
  "th.client": "고객사", "th.sector": "분야", "th.stack": "기술", "th.site": "사이트",
  "ent.title": "휴먼엔시스 기업 시스템 개발",
  "ent.intro": "2023년부터 2026년까지 대기업용 총무·인사·보안 관리 시스템을 만드는 휴먼엔시스에서 백엔드 개발자로 일했습니다. 사내 시스템이라 외부에 공개되지 않아, 프로젝트마다 공개된 수주 기사를 함께 연결했습니다.",
  "erp.note": "개발자가 되기 전에 경영학을 전공했고 ERP 회계·인사정보관리사 자격을 취득했습니다. 결재선이나 비용 센터가 실제 사용자에게 어떤 의미인지 알고 개발합니다.",
  "exp.title": "경력",
  "exp.1.t": "백엔드 개발자, 휴먼엔시스",
  "exp.1.d": "현대자동차, 현대제철, KB증권, 포스코플로우 기업 시스템 개발. Java, Spring Boot, MySQL.",
  "exp.2.when": "04.2022 – 현재",
  "exp.2.t": "프리랜서 웹 개발자",
  "exp.2.d": "재직과 병행하여 고객사 웹사이트 구축. 로앤비, 티큐브잇, 매직카, 강남도가 외 다수.",
  "exp.4.t": "프론트엔드 개발자, 파이브스톤즈",
  "exp.4.d": "반응형·크로스브라우징 웹사이트와 쇼핑몰, 관리자 화면, PHP와 워드프레스 개발. 서울과기대 평생교육원, 제이앤이, 자동차손해배상진흥원 외 다수.",
  "edu.title": "학력",
  "edu.1.t": "자바·파이썬 빅데이터 처리 과정, 하이미디어아카데미",
  "edu.1.d": "국비지원 전일제 과정. 우수상 수상.",
  "edu.2.t": "한국방송통신대학교 컴퓨터과학과 학사",
  "edu.2.d": "직장과 병행하며 졸업.",
  "edu.3.t": "HTML5 웹 기반 스마트콘텐츠 개발 과정, 한국IT방송미디어교육원",
  "edu.4.t": "신흥대학교 경영학과 전문학사",
  "edu.4.d": "현 신한대학교.",
  "sk.backend": "백엔드", "sk.frontend": "프론트엔드", "sk.data": "데이터",
  "sk.title": "기술과 자격증",
  "sk.schema": "스키마 설계", "sk.tuning": "SQL 튜닝",
  "sk.delivery": "배포·협업",
  "sk.c1": "SQL개발자 (SQLD), 한국데이터산업진흥원",
  "sk.c3": "정보처리기사, 한국산업인력공단",
  "sk.c5": "ERP 인사정보관리사 2급 (국가공인), 한국생산성본부",
  "sk.c6": "ERP 회계정보관리사 2급 (국가공인), 한국생산성본부",
  "ct.title": "자바·풀스택 개발자를 찾고 계신가요?",
  "ct.sub": "바로 일할 수 있습니다. 편하게 연락 주세요.",
  "ct.cv": "CV (PDF)",
};

const UI = {
  en: { visit: "Visit", notPublic: "Not public", tag: { responsive: "Responsive", renewal: "Redesign", mobile: "Mobile" }, toggle: "한국어", toggleLabel: "한국어로 보기",
        noShot: "No screenshot yet.", offline: "This site isn't publicly available, so there is no screenshot.",
        region: "The site may only load from inside Korea.", freelance: "Freelance", fivestones: "At FiveStones",
        visitLabel: (n) => `Visit ${n} (opens in a new tab)`, shotAlt: (n) => `Homepage of ${n}`,
        title: "Jihye Jeon, Java Developer",
        team: (n) => (n === "large" ? "Team of 10+" : "Small team"), built: "What I built", press: "Press release (in Korean)" },
  ko: { visit: "방문", notPublic: "비공개", tag: { responsive: "반응형", renewal: "리뉴얼", mobile: "모바일" }, toggle: "English", toggleLabel: "View in English",
        noShot: "아직 스크린샷이 없습니다.", offline: "공개되지 않은 사이트라 스크린샷이 없습니다.",
        region: "이 사이트는 국내에서만 접속될 수 있습니다.", freelance: "프리랜서", fivestones: "파이브스톤즈 재직 중",
        visitLabel: (n) => `${n} 방문 (새 탭)`, shotAlt: (n) => `${n} 홈페이지`,
        title: "전지혜, 자바 개발자",
        team: (n) => (n === "large" ? "10명 이상 팀" : "소규모 팀"), built: "담당 기능", press: "수주 기사 보기" },
};

// ---------------------------------------------------------------------------
let lang = "en";
let filter = "all";
const EN = {};
document.querySelectorAll("[data-i18n]").forEach((el) => { EN[el.dataset.i18n] = el.textContent.trim().replace(/\s+/g, " "); });

const body = document.getElementById("ledger-body");
const v = {
  img: document.getElementById("viewer-img"),
  empty: document.getElementById("viewer-empty"),
  url: document.getElementById("viewer-url"),
  title: document.getElementById("viewer-title"),
  desc: document.getElementById("viewer-desc"),
  meta: document.getElementById("viewer-meta"),
};
const host = (u) => u.replace(/^https?:\/\//, "").replace(/\/$/, "");
const other = (l) => (l === "en" ? "ko" : "en");

// Preload screenshots so the viewer never shows the previous site while the next one loads.
PROJECTS.forEach((p) => { if (p.shot) new Image().src = `assets/shots/${p.shot}.webp`; });

function show(p, row) {
  const t = UI[lang];
  body.querySelectorAll(".ledger__row").forEach((r) => r.classList.toggle("is-active", r === row));
  if (p.shot) {
    v.img.removeAttribute("src");
    v.img.src = `assets/shots/${p.shot}.webp`;
    v.img.alt = t.shotAlt(p.name[lang]);
    v.img.hidden = false; v.empty.hidden = true;
  } else {
    v.img.hidden = true; v.empty.hidden = false;
    v.empty.textContent = p.url ? t.noShot : t.offline;
  }
  v.url.textContent = p.url ? host(p.url) : "";
  v.title.textContent = p.name[lang];
  v.desc.textContent = p.desc[lang];
  v.meta.textContent = [t[p.group], (p.tags || []).map((k) => t.tag[k]).join(", "), p.years, p.regionLocked ? t.region : ""].filter(Boolean).join(". ");
}

function render() {
  const t = UI[lang];
  body.innerHTML = "";
  const list = PROJECTS.filter((p) => filter === "all" || p.group === filter);
  list.forEach((p, i) => {
    const row = document.createElement("div");
    row.className = "ledger__row";
    row.setAttribute("role", "row");
    row.tabIndex = 0;
    row.innerHTML = `
      <span class="c-thumb" aria-hidden="true"></span>
      <span role="cell" class="c-name"><strong></strong><small></small></span>
      <span role="cell" class="c-sector"></span>
      <span role="cell" class="c-stack"></span>
      <span role="cell" class="c-link ta-r"></span>`;
    const sub = p.name[other(lang)];
    row.querySelector("strong").textContent = p.name[lang];
    const small = row.querySelector("small");
    if (sub && sub !== p.name[lang]) { small.textContent = sub; small.lang = other(lang); } else small.remove();
    if (p.tags && p.tags.length) {
      const ul = document.createElement("ul");
      ul.className = "badges";
      p.tags.forEach((k) => { const li = document.createElement("li"); li.textContent = t.tag[k]; li.dataset.tag = k; ul.appendChild(li); });
      row.querySelector(".c-name").appendChild(ul);
    }
    row.querySelector(".c-sector").textContent = p.sector[lang];
    row.querySelector(".c-stack").textContent = p.stack;
    const link = row.querySelector(".c-link");
    if (p.url) {
      const a = document.createElement("a");
      a.href = p.url; a.target = "_blank"; a.rel = "noopener";
      a.textContent = t.visit;
      a.setAttribute("aria-label", t.visitLabel(p.name[lang]));
      link.appendChild(a);
    } else {
      link.innerHTML = `<span class="muted">${t.notPublic}</span>`;
    }
    if (p.shot) {
      const im = document.createElement("img");
      im.src = `assets/shots/${p.shot}.webp`; im.alt = ""; im.loading = "lazy"; im.width = 960; im.height = 600;
      row.querySelector(".c-thumb").appendChild(im);
    }
    const pick = () => show(p, row);
    row.addEventListener("mouseenter", pick);
    row.addEventListener("focus", pick);
    row.addEventListener("click", (e) => { if (!e.target.closest("a")) pick(); });
    body.appendChild(row);
    if (i === 0) show(p, row);
  });
}

function setLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.title = UI[lang].title;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.dataset.i18n;
    el.textContent = lang === "ko" && KO[k] ? KO[k] : EN[k];
  });
  const btn = document.getElementById("lang-toggle");
  btn.textContent = UI[lang].toggle;
  btn.lang = other(lang);
  btn.setAttribute("aria-label", UI[lang].toggleLabel);
  try { localStorage.setItem("lang", lang); } catch (e) { /* storage unavailable */ }
  const url = new URL(location.href);
  if (lang === "ko") url.searchParams.set("lang", "ko"); else url.searchParams.delete("lang");
  history.replaceState(null, "", url);
  render();
  renderEnterprise();
}

document.querySelectorAll(".count").forEach((el) => {
  const k = el.dataset.count;
  el.textContent = PROJECTS.filter((p) => k === "all" || p.group === k).length;
});
document.querySelectorAll(".filter").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((x) => x.setAttribute("aria-pressed", x === b));
    filter = b.dataset.filter;
    render();
  })
);
document.getElementById("lang-toggle").addEventListener("click", () => setLang(other(lang)));

// Language: ?lang=ko in the URL, then the saved choice, then the browser language.
let initial = new URLSearchParams(location.search).get("lang");
if (!initial) { try { initial = localStorage.getItem("lang"); } catch (e) { /* ignore */ } }
if (!initial) initial = (navigator.language || "").toLowerCase().startsWith("ko") ? "ko" : "en";
setLang(initial === "ko" ? "ko" : "en");
