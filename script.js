/* ═══════════════════════════════════════════════════════════════════════════
   PORTFOLIO SCRIPT — VEERA VENKAT SAI KONDAIAHPALPU
   Custom cursor · Typewriter · Count-up · Reveal · Projects · Modal · Lightbox
═══════════════════════════════════════════════════════════════════════════ */

/* ── Project Data ─────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: '01',
    domain: 'AI / LLM · Master\'s Thesis',
    title: 'LevelUp AI',
    type: 'Full Stack · QLoRA Fine-Tuning',
    typeBadges: ['Master\'s Thesis', 'Full Stack'],
    featured: true,
    preview2: 'A gamified self-improvement app powered by a QLoRA fine-tuned LLaMA 3.2 model, delivering personalised RPG-style coaching quests. Achieved ROUGE-L scores of 90–94% across all user archetypes — a 10× improvement over the baseline.',
    description: `LevelUp AI is the centrepiece of my Master's thesis — a production-ready self-improvement platform that fuses gamified RPG mechanics with a domain-adapted large language model. Users are classified into one of seven archetypes (TITAN, ORACLE, PHANTOM, SAGE, MUSE, EMPIRE, GG) and receive AI-generated weekly quests tailored to their personality and goals.

The core innovation is a QLoRA fine-tuned LLaMA 3.2 model trained on a curated dataset of self-improvement content structured as few-shot prompts. After fine-tuning, ROUGE-L scores jumped from ~9% to over 91% on average — validating that domain adaptation dramatically outperforms zero-shot prompting for structured coaching output.`,
    stats: [
      { val: '92.6%', lbl: 'Avg ROUGE-L' },
      { val: '4-bit', lbl: 'QLoRA Quant' },
      { val: '7',     lbl: 'User Archetypes' },
      { val: '10×',   lbl: 'Score Gain' },
    ],
    tech: ['LLaMA 3.2', 'QLoRA', 'LoRA', 'FastAPI', 'React Native', 'MongoDB', 'Redis', 'Google Cloud', 'Python', 'HuggingFace'],
    bullets: [
      'Fine-tuned LLaMA 3.2 with QLoRA (4-bit quantisation) on structured few-shot self-improvement data.',
      'Designed 7-archetype user classification system; each archetype receives tailored quest generation prompts.',
      'Built FastAPI backend with multi-database architecture: MongoDB (user data), Redis (sessions/cache), Neo4j (relationships).',
      'Evaluated with ROUGE-L metric across all 7 archetypes — average score of 92.6% vs ~9.4% baseline.',
      'Integrated sentiment analysis (Voting Ensemble, 87.3% accuracy) to track user emotional trajectory.',
      'Anomaly detection pipeline (Random Forest, AUC-ROC 0.991) flags disengagement patterns in real time.',
      'Deployed model inference on Google Cloud Vertex AI for scalable serving.',
    ],
    images: [
      { src: 'images/levelup_ui_splash.png',       cap: 'Splash & Login Screen' },
      { src: 'images/levelup_ui_archetypes.png',   cap: 'Choose Your Build — Archetype Selection' },
      { src: 'images/levelup_ui_dashboard.png',    cap: 'Main Dashboard — XP & Quest Progress' },
      { src: 'images/levelup_ui_chat.png',         cap: 'AI Coach Chat Interface' },
      { src: 'images/levelup_ui_logactivity.png',  cap: 'Log Activity Screen' },
      { src: 'images/levelup_ui_buildconfirm.png', cap: 'Build Confirmation — Quest Generated' },
      { src: 'images/levelup_ui_oracle.png',       cap: 'Oracle Archetype — Personalised Quest' },
      { src: 'images/levelup_rouge.png',           cap: 'ROUGE-L: Before vs After Few-Shot Prompting' },
      { src: 'images/levelup_sentiment.png',       cap: 'Sentiment Analysis — Model Comparison' },
      { src: 'images/levelup_anomaly.png',         cap: 'Anomaly Detection — Model Comparison' },
      { src: 'images/levelup_per_class_f1.png',    cap: 'Voting Ensemble — Per-Class F1 Score' },
    ],
    github: 'https://github.com/veeravenkatsaikondaiahpalpu-hue',
    live: null,
  },
  {
    id: '02',
    domain: 'ML · Risk Modelling',
    title: 'Hybrid Loan Risk Evaluation',
    type: 'ML Pipeline · NLP · Cloud',
    typeBadges: ['Ensemble ML', 'NLP'],
    featured: false,
    preview2: 'A hybrid loan risk platform combining classical ML classifiers with NLP-driven sentiment extraction from borrower statements. Deployed on Google Cloud Vertex AI with a real-time Streamlit dashboard.',
    description: `A production-grade loan risk evaluation system that goes beyond numeric features by analysing borrower-submitted text using NLP sentiment analysis. The system fuses structured financial data with unstructured text signals through an ensemble model stack, then exposes predictions via a Streamlit dashboard.

The pipeline ingests applicant data, runs TF-IDF + logistic regression for sentiment scoring on free-text fields, and merges the sentiment features with traditional financial indicators before feeding into XGBoost and LightGBM ensemble classifiers. The final model achieves strong AUC-ROC performance with explainable outputs for risk officers.`,
    stats: [
      { val: '0.99',  lbl: 'ROC-AUC' },
      { val: '96.8%', lbl: 'RF Accuracy' },
      { val: '2',     lbl: 'Model Types' },
      { val: 'GCP',   lbl: 'Deployed On' },
    ],
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'LightGBM', 'NLP', 'TF-IDF', 'Streamlit', 'Google Cloud Vertex AI', 'Pandas', 'NumPy'],
    bullets: [
      'Built hybrid ML pipeline merging numeric financial features with NLP sentiment scores from free-text applicant statements.',
      'Implemented TF-IDF vectorisation + logistic regression for sentiment extraction as engineered feature input.',
      'Trained and compared Logistic Regression, Decision Tree, and Random Forest classifiers; Random Forest achieved 96.8% accuracy, AUC-ROC 0.991.',
      'Feature importance analysis with SHAP values — identified top 8 predictors driving default risk.',
      'Deployed inference endpoint on Google Cloud Vertex AI; built real-time Streamlit dashboard for risk officers.',
      'Implemented learning curve analysis to detect and mitigate overfitting on imbalanced loan datasets.',
    ],
    images: [
      { src: 'images/learning_curve_accuracy.png',  cap: 'Learning Curve — Accuracy' },
      { src: 'images/learning_curve_severity.png',  cap: 'Learning Curve — Severity Score' },
      { src: 'images/rf_feature_importance.png',    cap: 'Random Forest — Feature Importance' },
      { src: 'images/gb_feature_importance.png',    cap: 'Gradient Boosting — Feature Importance' },
    ],
    github: 'https://github.com/veeravenkatsaikondaiahpalpu-hue',
    live: null,
  },
  {
    id: '03',
    domain: 'Space · Real-Time Data',
    title: 'ISS & Space Events Tracker',
    type: 'Backend · Real-Time · APIs',
    typeBadges: ['Open Source Contributor', 'Backend'],
    featured: false,
    preview2: 'A real-time ISS tracking backend with live orbital position feeds, astronaut manifest, and upcoming launch schedule — built as key backend developer in the SRH university open-source project.',
    description: `A collaborative open-source project built with SRH Stuttgart classmates to track the International Space Station's live position and aggregate space event data. I served as the key backend developer, architecting the API layer, data pipeline, and real-time update system.

The backend polls multiple space APIs (Open Notify, NASA, SpaceX) at configurable intervals, processes and normalises the data, and exposes a clean RESTful interface. Redis is used for caching rapid-changing orbital data, while MongoDB stores historical passes and events.`,
    stats: [
      { val: 'Live', lbl: 'Orbital Data' },
      { val: '3+',   lbl: 'APIs Integrated' },
      { val: 'Redis', lbl: 'Cache Layer' },
      { val: 'REST',  lbl: 'API Design' },
    ],
    tech: ['Python', 'FastAPI', 'Redis', 'MongoDB', 'REST APIs', 'Open Notify API', 'NASA API', 'Real-Time Processing'],
    bullets: [
      'Architected the FastAPI backend from scratch as the primary backend developer in the group project.',
      'Integrated Open Notify, NASA EONET, and SpaceX APIs for live ISS position, astronaut manifest, and launches.',
      'Implemented Redis caching strategy to handle high-frequency orbital coordinate updates with sub-second latency.',
      'Designed MongoDB schema for storing historical ISS pass data and upcoming space events.',
      'Built modular API router structure enabling clean separation of tracking, events, and astronaut endpoints.',
    ],
    images: [],
    github: 'https://github.com/Students-SRH/ISS_and_Space_Events_Tracker',
    live: null,
  },
  {
    id: '04',
    domain: 'Smart City · Academic',
    title: 'Smart City Traffic & Vehicle Tracking',
    type: 'Academic · Group Project · SRH Stuttgart',
    typeBadges: ['Academic', 'Group Project'],
    featured: false,
    preview2: 'An academic smart city platform using multi-database architecture (Redis, MongoDB, Neo4j) and FastAPI to simulate real-time vehicle tracking, traffic pattern analysis, and graph-based route intelligence.',
    description: `A multi-database smart city simulation project completed as a group at SRH Hochschule Stuttgart. The system models urban vehicle flows and traffic patterns using a purpose-built backend that leverages each database's strengths: Redis for live state, MongoDB for event history, and Neo4j for graph-based road network queries.

The project explored how hybrid data architectures can support smart city analytics, combining real-time data ingestion with complex graph traversals for route optimisation and anomaly identification in traffic patterns.`,
    stats: [
      { val: '3',     lbl: 'Database Types' },
      { val: 'Graph', lbl: 'Neo4j Routes' },
      { val: 'Live',  lbl: 'Redis State' },
      { val: 'SRH',   lbl: 'University' },
    ],
    tech: ['Python', 'FastAPI', 'Redis', 'MongoDB', 'Neo4j', 'Cypher Query', 'REST API', 'Data Modelling'],
    bullets: [
      'Designed multi-database architecture: Redis for real-time vehicle positions, MongoDB for event logs, Neo4j for road network graph.',
      'Built FastAPI REST API exposing live vehicle queries, route recommendations, and traffic density analytics.',
      'Implemented Cypher graph queries in Neo4j for shortest-path and congestion-aware routing algorithms.',
      'Contributed to system design, backend implementation, and data model normalisation across three database paradigms.',
      'Presented results to SRH faculty demonstrating urban simulation use-cases and scalability trade-offs.',
    ],
    images: [],
    github: null,
    live: null,
  },
  {
    id: '05',
    domain: 'ML · Classification',
    title: 'Study Abroad Decision Predictor',
    type: 'ML · Scikit-learn · High Accuracy',
    typeBadges: ['Classification', 'High Accuracy'],
    featured: false,
    preview2: 'A classification system predicting whether a student will pursue study abroad opportunities, achieving ROC-AUC 0.99 through rigorous feature engineering and ensemble validation on an imbalanced dataset.',
    description: `A supervised classification project built to predict a student's likelihood of pursuing study abroad opportunities based on academic and demographic features. The project focused on careful EDA, feature engineering, and model selection to handle class imbalance and achieve production-level accuracy.

Starting from raw tabular data, the pipeline includes outlier removal, encoding of categorical variables, cross-validation model comparison, and a final Random Forest classifier that achieved a near-perfect ROC-AUC score of 0.99.`,
    stats: [
      { val: '0.99',  lbl: 'ROC-AUC' },
      { val: '5+',    lbl: 'Models Compared' },
      { val: 'CV',    lbl: 'Cross-Validation' },
      { val: 'Clean', lbl: 'Pipeline' },
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Random Forest', 'XGBoost', 'Cross-Validation', 'EDA'],
    bullets: [
      'Performed comprehensive EDA: distribution analysis, correlation heatmaps, outlier detection, class imbalance assessment.',
      'Engineered new features from raw academic records; applied label encoding and one-hot encoding for categoricals.',
      'Trained and compared Logistic Regression, Decision Tree, Random Forest, XGBoost, and SVM classifiers using stratified k-fold CV.',
      'Random Forest achieved ROC-AUC 0.99 with precision/recall balanced across both classes.',
      'Produced full visualisation suite: confusion matrices, ROC curves, feature importance bar charts.',
    ],
    images: [],
    github: 'https://github.com/veeravenkatsaikondaiahpalpu-hue',
    live: null,
  },
];

/* ── Custom Cursor ─────────────────────────────────────────────────────── */
(function initCursor() {
  const dot  = document.getElementById('c-dot');
  const ring = document.getElementById('c-ring');
  if (!dot || !ring) return;

  let mx = -200, my = -200;
  let rx = -200, ry = -200;
  let raf;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  }, { passive: true });

  // Ring follows with lag via RAF
  function animateRing() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    raf = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover state via event delegation
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .proj-card, .mb-img-wrap, .social-chip, .pills span')) {
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, .proj-card, .mb-img-wrap, .social-chip, .pills span')) {
      document.body.classList.remove('cursor-hover');
    }
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    cancelAnimationFrame(raf);
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
    animateRing();
  });
})();

/* ── Navbar ─────────────────────────────────────────────────────────────── */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');
const burger   = document.getElementById('nav-burger');
const navMenu  = document.getElementById('nav-links');

// Scroll: shadow + active link
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

// Mobile burger toggle
burger.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  });
});

document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) {
    navMenu.classList.remove('open');
    burger.classList.remove('open');
  }
});

/* ── Smooth Scroll ──────────────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 20;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

/* ── Reveal on Scroll ───────────────────────────────────────────────────── */
const revealObs = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  }),
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── Count-Up Animation ─────────────────────────────────────────────────── */
function countUp(el) {
  const target = +el.dataset.target;
  const duration = 1600;
  const step = 16;
  const increment = target / (duration / step);
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current);
  }, step);
}

const statsObs = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.count').forEach(countUp);
      statsObs.unobserve(entry.target);
    }
  }),
  { threshold: 0.5 }
);
const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObs.observe(heroStats);

/* ── Typewriter / Role Cycler ───────────────────────────────────────────── */
const roles = [
  'a Data Analyst',
  'an ML Engineer',
  'an AI Researcher',
  'a Backend Developer',
  'a Problem Solver',
];
const typedEl = document.getElementById('role-typed');

if (typedEl) {
  let roleIdx = 0, charIdx = 0, deleting = false;

  function typeStep() {
    const role = roles[roleIdx];
    if (!deleting) {
      typedEl.textContent = role.slice(0, ++charIdx);
      if (charIdx === role.length) {
        setTimeout(() => { deleting = true; typeStep(); }, 1800);
        return;
      }
    } else {
      typedEl.textContent = role.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(typeStep, deleting ? 48 : 80);
  }
  setTimeout(typeStep, 900);
}

/* ── Project Cards ──────────────────────────────────────────────────────── */
const grid = document.getElementById('proj-grid');

function renderProjects() {
  if (!grid) return;
  grid.innerHTML = '';

  PROJECTS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'proj-card reveal' + (p.featured ? ' featured' : '');

    card.innerHTML = `
      <div class="pc-top">
        <span class="pc-num">${p.id}</span>
        <span class="pc-type-badge">${p.typeBadges[0]}</span>
      </div>
      <div>
        <div class="pc-domain">${p.domain}</div>
        <div class="pc-title">${p.title}</div>
        <div class="pc-preview">${p.type}</div>
      </div>
      <div class="pc-overlay">
        <p class="pc-ov-txt">${p.preview2}</p>
        <span class="pc-cta">
          Explore project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
        <div class="pc-tech-row">
          ${p.tech.slice(0, 5).map(t => `<span>${t}</span>`).join('')}
          ${p.tech.length > 5 ? `<span>+${p.tech.length - 5} more</span>` : ''}
        </div>
      </div>
    `;

    card.addEventListener('click', () => openModal(p));
    grid.appendChild(card);

    // Observe for reveal
    revealObs.observe(card);
  });
}

renderProjects();

/* ── Modal ───────────────────────────────────────────────────────────────── */
const modalBg   = document.getElementById('modal-bg');
const modalBody = document.getElementById('modal-body');
const modalX    = document.getElementById('modal-x');

function openModal(p) {
  if (!modalBg || !modalBody) return;

  const badgesHTML = p.typeBadges
    .map((b, i) => `<span class="mb-badge${i > 0 ? ' secondary' : ''}">${b}</span>`)
    .join('');

  const statsHTML = p.stats
    .map(s => `<div class="mb-stat"><div class="mb-stat-val">${s.val}</div><div class="mb-stat-lbl">${s.lbl}</div></div>`)
    .join('');

  const techHTML = p.tech
    .map(t => `<span>${t}</span>`)
    .join('');

  const bulletsHTML = p.bullets
    .map(b => `<li>${b}</li>`)
    .join('');

  const imagesHTML = p.images.length
    ? `<div class="mb-section-title">Results &amp; Visuals</div>
       <div class="mb-gallery">
         ${p.images.map(img => `
           <div class="mb-img-wrap" data-src="${img.src}" data-cap="${img.cap}">
             <img src="${img.src}" alt="${img.cap}" loading="lazy">
             <div class="mb-img-cap">${img.cap}</div>
           </div>`).join('')}
       </div>`
    : '';

  const linksHTML = (() => {
    const parts = [];
    if (p.github) parts.push(`
      <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-solid">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        View on GitHub
      </a>`);
    if (p.live) parts.push(`
      <a href="${p.live}" target="_blank" rel="noopener" class="btn btn-ghost">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        Live Demo
      </a>`);
    if (!p.github && !p.live) parts.push(`<span style="color:var(--muted);font-size:.82rem;">Repository available upon request</span>`);
    return parts.join('');
  })();

  modalBody.innerHTML = `
    <div class="mb-tag">${p.domain}</div>
    <div class="mb-title">${p.title}</div>
    <div class="mb-type-row">${badgesHTML}</div>
    <p class="mb-desc">${p.description.replace(/\n\n/g, '</p><p class="mb-desc" style="margin-top:.8rem">')}</p>
    <div class="mb-stats">${statsHTML}</div>
    <div class="mb-section-title">Key Highlights</div>
    <ul class="mb-bullets">${bulletsHTML}</ul>
    <div class="mb-section-title">Tech Stack</div>
    <div class="mb-tech">${techHTML}</div>
    ${imagesHTML}
    <div class="mb-links">${linksHTML}</div>
  `;

  // Attach lightbox to gallery images
  modalBody.querySelectorAll('.mb-img-wrap').forEach(wrap => {
    wrap.addEventListener('click', e => {
      e.stopPropagation();
      openLightbox(wrap.dataset.src, wrap.dataset.cap);
    });
  });

  modalBg.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBg.classList.remove('open');
  document.body.style.overflow = '';
}

modalX.addEventListener('click', closeModal);
modalBg.addEventListener('click', e => { if (e.target === modalBg) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeLightbox(); } });

/* ── Lightbox ─────────────────────────────────────────────────────────────── */
const lbBg  = document.getElementById('lb-bg');
const lbImg = document.getElementById('lb-img');
const lbCap = document.getElementById('lb-cap');
const lbX   = document.getElementById('lb-x');

function openLightbox(src, cap) {
  if (!lbBg) return;
  lbImg.src = src;
  lbImg.alt = cap || '';
  lbCap.textContent = cap || '';
  lbBg.classList.add('open');
}

function closeLightbox() {
  if (!lbBg) return;
  lbBg.classList.remove('open');
}

if (lbX) lbX.addEventListener('click', closeLightbox);
if (lbBg) lbBg.addEventListener('click', e => { if (e.target === lbBg || e.target === lbImg) closeLightbox(); });

/* ── Cursor Glow (ambient radial behind cursor) ─────────────────────────── */
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position:fixed; pointer-events:none; z-index:0;
    width:440px; height:440px; border-radius:50%;
    background:radial-gradient(circle, rgba(100,255,218,.045) 0%, transparent 70%);
    transform:translate(-50%,-50%);
    transition:left .12s ease, top .12s ease;
    will-change: left, top;
  `;
  document.body.appendChild(glow);
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  }, { passive: true });
}
