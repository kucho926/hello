const menuButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const langToggle = document.getElementById('langToggle');

const translations = {
  ko: {
    title: '윤승원 | Portfolio',
    description: '항공우주공학과 천문학에 관심이 있는 윤승원의 포트폴리오입니다.',
    navLabel: '주요 메뉴',
    menuOpen: '메뉴 열기',
    name: '윤승원',
    footerName: '윤승원',
    navAbout: '소개',
    navActivities: '활동',
    navCareer: '진로',
    heroSummary: '항공우주공학, 천문학에 관심이 있습니다.<br />직접 만들거나 실제 데이터를 다루는 활동을 좋아합니다.',
    aboutTitle: '소개',
    aboutKey: '관심',
    aboutP1: '항공우주공학, 천문학에 관심이 있습니다. 로켓을 볼 때 완성된 모습보다 구조가 어떻게 되어 있는지, 각 부품이 왜 필요한지, 실제로 만들고 시험할 때 어떤 문제가 생기는지가 더 궁금한 편입니다.',
    aboutP2: '그래서 학교에서도 가능하면 직접 만들어 보거나 실제 데이터를 다루는 활동을 하려고 합니다. 특히 발사체의 추진 방식과 시험 결과를 분석해 문제 원인을 찾는 과정, 망원경으로 직접 천체를 관측하고 관측 자료를 처리하는 과정에도 관심이 있습니다. 아직 세부 분야를 하나로 정해 두지는 않았고, 여러 활동을 해 보면서 알아가고 있습니다.',
    activitiesTitle: '활동',
    statusOngoing: '진행 중',
    statusPreparing: '준비 중',
    statusComplete: '완료',
    cansatTitle: 'CanSat 제작',
    cansatBody: '동아리에서 CanSat을 만들고 있습니다. Onshape로 원통형 본체와 뚜껑을 설계해 3D 프린터로 출력했고, 온습도 센서, 기압 센서, IMU를 사용할 예정입니다. 센서 값을 읽는 Arduino 코드를 준비했고 지금은 본체 안에서 센서를 어떻게 배치하고 고정할지 정하고 있습니다.',
    q3bTitle: 'CR3BP 저추력 유도 법칙 연구',
    q3bBody: '원형제한3체문제(CR3BP) 저추력 환경에서 사용할 수 있는 Q-law의 3체 버전을 만드는 연구를 준비하고 있습니다. 강화학습과 제약된 심볼릭 탐색을 이용해 닫힌 형태의 근접도 함수 V̂(s)를 찾고, 이를 greedy lookahead와 연결해 조향법칙을 얻는 것이 목표입니다. 저는 Invariant Manifold Transfers, Direct Transcription, Indirect Method 정리와 baseline 대비 성능 평가를 맡고 있습니다. 논문 작성 후 ASC/AIAA 2028 제출을 목표로 하고 있습니다.',
    pvTitle: '태양광 모듈 봉지재 연구',
    pvBody: '폐태양광 패널에서 봉지재 때문에 유리와 셀을 분리하기 어렵다는 문제를 다루고 있습니다. 기존 EVA를 분해하는 방향에서 시작했지만 실제 실험이 어려워 방향을 바꾸었고, PVA 물풀, HPMC, 풀루란을 후보로 두고 분리하기 쉬운 봉지재 가능성을 비교했습니다. 지금은 실험을 위한 물품을 구매해 놓았고, 도움 요청을 위해 한국에너지공과대학교 이승진 교수님께 자문을 구해 놓은 상태입니다.',
    gaasTitle: 'GaAs 태양전지 조사·발표',
    gaasBody: '수업에서 GaAs 태양전지가 높은 효율을 가지며 우주 분야에서 사용되고, 가격은 매우 높다는 내용을 듣고 그 이유를 더 조사했습니다. GaAs의 III-V족 반도체 특성, 태양전지의 작동 원리와 소재 물성, 실리콘 태양전지와의 차이, 에피택시를 포함한 제조공정과 비용 문제를 자료와 논문으로 정리해 발표했습니다.',
    hatTitle: 'HAT-P-23b 관측 자료 분석',
    hatBody: '덕흥천문대 1 m 망원경으로 촬영된 HAT-P-23b의 R 필터 자료 131장을 분석했습니다. 영상 전처리와 구경측광을 하고 비교성을 골라 광도곡선을 만들었으며, 실제 자료에 오차가 많아 별 검출 설정과 비교성을 여러 번 바꿔 보았습니다.',
    careerTitle: '진로',
    career1: '항공우주공학 전공',
    career2: '대학원 연구',
    career3: '우주 시스템 연구·시험',
    careerNote: '아직 구체적인 세부 분야를 하나로 정한 것은 아니지만, 로켓이나 우주비행체를 직접 연구하고 시험하는 일을 해 보고 싶습니다.'
  },
  en: {
    title: 'Seungwon Yoon | Portfolio',
    description: 'Seungwon Yoon’s portfolio focused on aerospace engineering, astronomy, hands-on projects, and research.',
    navLabel: 'Main navigation',
    menuOpen: 'Open menu',
    name: 'Seungwon Yoon',
    footerName: 'Seungwon Yoon',
    navAbout: 'About',
    navActivities: 'Activities',
    navCareer: 'Path',
    heroSummary: 'I am interested in aerospace engineering and astronomy.<br />I enjoy hands-on building and working with real data.',
    aboutTitle: 'About',
    aboutKey: 'Focus',
    aboutP1: 'I am interested in aerospace engineering and astronomy. When I look at rockets, I am more curious about how they are structured, why each component is needed, and what kinds of problems appear during real fabrication and testing than about the finished vehicle itself.',
    aboutP2: 'At school, I try to choose activities where I can build something myself or work with real data. I am especially interested in launch-vehicle propulsion, using test results to trace the causes of problems, and directly observing astronomical objects with telescopes before processing the resulting data. I have not fixed on one narrow specialty yet, and I am exploring different areas through projects and research.',
    activitiesTitle: 'Activities',
    statusOngoing: 'Ongoing',
    statusPreparing: 'Preparing',
    statusComplete: 'Completed',
    cansatTitle: 'CanSat Build',
    cansatBody: 'I am building a CanSat through a school club. I designed a cylindrical body and lid in Onshape and printed them with a 3D printer. The planned sensors include temperature and humidity, pressure, and an IMU. I have prepared the Arduino code for reading sensor values and am currently deciding how to arrange and secure the sensors inside the body.',
    q3bTitle: 'CR3BP Low-Thrust Guidance Law Research',
    q3bBody: 'I am preparing research on a three-body counterpart of Q-law for low-thrust guidance in the Circular Restricted Three-Body Problem (CR3BP). The goal is to use reinforcement learning and constrained symbolic search to discover a closed-form proximity function V̂(s), then derive a steering law through greedy lookahead. My role covers Invariant Manifold Transfers, Direct Transcription, Indirect Method, and baseline performance evaluation. We are aiming to submit the paper to ASC/AIAA 2028.',
    pvTitle: 'PV Module Encapsulant Research',
    pvBody: 'This project studies the difficulty of separating glass and cells from end-of-life photovoltaic panels because of the encapsulant layer. We first considered decomposing EVA, but changed direction because the experiment was difficult to carry out under our conditions. We compared PVA glue, HPMC, and pullulan as candidates for an easier-to-separate encapsulant. We have purchased the materials for the experiment and have also requested advice from Professor Seungjin Lee at Korea Institute of Energy Technology.',
    gaasTitle: 'GaAs Solar Cell Research & Presentation',
    gaasBody: 'After learning in class that GaAs solar cells can achieve high efficiency, are used in space applications, and are very expensive, I investigated why. I studied III-V semiconductor properties, solar-cell operation and material characteristics, differences from silicon solar cells, and manufacturing processes such as epitaxy, then organized the findings from papers and technical sources into a presentation.',
    hatTitle: 'HAT-P-23b Observation Data Analysis',
    hatBody: 'I analyzed 131 R-band images of HAT-P-23b taken with the 1 m telescope at Deokheung Observatory. I performed image preprocessing and aperture photometry, selected comparison stars, and generated a light curve. Because the real observation data contained substantial noise, I repeatedly adjusted star-detection settings and comparison-star selection.',
    careerTitle: 'Path',
    career1: 'Aerospace Engineering',
    career2: 'Graduate Research',
    career3: 'Space Systems R&D & Testing',
    careerNote: 'I have not chosen one narrow specialty yet, but I want to work on research and testing involving rockets and spacecraft.'
  }
};

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.title = dict.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute('content', dict.description);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key] !== undefined) element.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (dict[key] !== undefined) element.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const key = element.dataset.i18nAria;
    if (dict[key] !== undefined) element.setAttribute('aria-label', dict[key]);
  });

  const footerCopyright = document.querySelector('.footer-inner > span');
  if (footerCopyright) {
    footerCopyright.textContent = `© ${new Date().getFullYear()} ${dict.footerName}`;
  }

  if (langToggle) {
    langToggle.textContent = lang === 'ko' ? 'EN' : '한국어';
    langToggle.setAttribute('aria-label', lang === 'ko' ? '영어로 전환' : 'Switch to Korean');
  }

  localStorage.setItem('portfolio-language', lang);
}

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

langToggle?.addEventListener('click', () => {
  const nextLanguage = document.documentElement.lang === 'ko' ? 'en' : 'ko';
  applyLanguage(nextLanguage);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));

const savedLanguage = localStorage.getItem('portfolio-language');
applyLanguage(savedLanguage === 'en' ? 'en' : 'ko');
