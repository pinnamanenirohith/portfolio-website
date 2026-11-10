/* ──────────────────────────────────────────────────────────────
   rohith.dev — single source of truth for all site content.
   Edit this file to update anything on the site. No metrics or
   achievements here are invented: every figure comes from the
   resume, GitHub profile or certificates.
   ────────────────────────────────────────────────────────────── */

export const site = {
  url: "https://rohith.dev",
  name: "Pinnamaneni Rohith Venkata Sai",
  shortName: "Rohith Pinnamaneni",
  handle: "rohith.dev",
  role: "Full-Stack Engineer",
  roleSecondary: "Cloud-Native Developer",
  location: "Vijayawada, India",
  coords: "16.51°N, 80.65°E",
  timezone: "Asia/Kolkata",
  email: "pinnamanenirohith@gmail.com",
  github: "https://github.com/pinnamanenirohith",
  /* Configurable: LinkedIn URL as listed on the 2026–27 resume and GitHub profile. */
  linkedin: "https://www.linkedin.com/in/rohith-venkata-sai-pinnamaneni",
  positioning:
    "I build scalable web platforms, intelligent applications and cloud-native digital products that solve real-world problems.",
  availability:
    "Available for freelance projects, technical collaborations and professional opportunities.",
  education: {
    degree: "B.Tech, Computer Science & Engineering",
    specialization: "Cloud Native Engineering",
    university: "KL University",
    cgpa: "8.29",
  },
};

export const nav = [
  { href: "/projects", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

/* ─── Projects / case studies ─────────────────────────────────── */

export type ArchNode = { label: string; detail: string };
export type ArchLayer = { name: string; nodes: ArchNode[] };

export type Project = {
  slug: string;
  index: string;
  title: string;
  short: string;
  category: string;
  year: string;
  status: string;
  role: string;
  visual: "rbac" | "website" | "safestay" | "chat";
  summary: string;
  stack: string[];
  links: { label: string; href: string }[];
  facts: { value: string; label: string }[];
  problem: string[];
  solution: string[];
  architecture: ArchLayer[];
  contribution: string[];
  outcomes: string[];
};

export const projects: Project[] = [
  {
    slug: "sac-council-platform",
    index: "01",
    title: "SAC Council Management Platform",
    short: "SAC Platform",
    category: "Full-stack web application · RBAC",
    year: "2025 — 2026",
    status: "Approved by SAC Director · Pilot testing",
    role: "Full-stack engineer — designed and built end to end",
    visual: "rbac",
    summary:
      "A role-based management platform for KL University's Student Activity Center — club management, approval workflows, task tracking, internal communication and a multi-level organisational hierarchy in one system.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Nodemailer",
      "Helmet",
      "Joi",
      "GitHub Actions",
      "Nginx",
      "PM2",
      "Linux",
    ],
    links: [],
    facts: [
      { value: "8", label: "Permission tiers" },
      { value: "22", label: "Data models" },
      { value: "20–40", label: "Clubs supported" },
      { value: "Pilot", label: "Director-approved" },
    ],
    problem: [
      "The Student Activity Center coordinates a council and its clubs across several levels of hierarchy — from the Director down to individual club members. Club management, approvals, task tracking and communication all have to happen across those levels.",
      "A system for this has to be strict about who sees and does what: every role needs its own scoped view, and approvals have to move through the right people in the right order.",
    ],
    solution: [
      "A full-stack platform with role-based access control across 8 permission tiers, from Director through Club Member, each with a scoped dashboard.",
      "A structured data layer of 22 MongoDB models covering clubs, approvals workflows, tasks, communication and the organisational hierarchy — designed for 20–40 clubs.",
      "Secure authentication with JWT access/refresh tokens, bcrypt password hashing and email OTP verification, with the API hardened by Helmet, rate limiting and input validation.",
      "Automated delivery through a GitHub Actions CI/CD pipeline to a self-hosted Linux server behind an Nginx reverse proxy, with PM2 process management.",
    ],
    architecture: [
      {
        name: "Client",
        nodes: [
          { label: "Next.js App Router", detail: "TypeScript, role-scoped dashboards" },
          { label: "Auth flows", detail: "Login, OTP verification, token refresh" },
        ],
      },
      {
        name: "API",
        nodes: [
          { label: "Express 5 on Node.js", detail: "RESTful resource design" },
          { label: "Security middleware", detail: "Helmet · rate limiting · Joi / express-validator" },
          { label: "RBAC guard", detail: "8 permission tiers, Director → Club Member" },
        ],
      },
      {
        name: "Data & services",
        nodes: [
          { label: "MongoDB + Mongoose", detail: "22 models" },
          { label: "Nodemailer", detail: "Email OTP verification" },
          { label: "JWT + bcrypt", detail: "Access / refresh tokens, hashed credentials" },
        ],
      },
      {
        name: "Delivery",
        nodes: [
          { label: "GitHub Actions", detail: "CI/CD pipeline" },
          { label: "Self-hosted Linux", detail: "Nginx reverse proxy · PM2" },
        ],
      },
    ],
    contribution: [
      "Designed the system architecture, data model and permission matrix from the ground up.",
      "Built the Next.js / TypeScript front end and the Express 5 REST API.",
      "Implemented authentication, authorisation and API hardening.",
      "Set up the CI/CD pipeline, server, reverse proxy and process management.",
    ],
    outcomes: [
      "Reviewed and approved by the SAC Director.",
      "Currently in pilot testing with multiple users.",
      "Access control spanning 8 permission tiers over 22 data models, designed for 20–40 clubs.",
    ],
  },
  {
    slug: "kl-sac-website",
    index: "02",
    title: "KL University SAC Official Website",
    short: "SAC Website",
    category: "Institutional website · Production",
    year: "2026",
    status: "Live at sac.kluniversity.in",
    role: "Developer — built the official site",
    visual: "website",
    summary:
      "The official website of KL University's Student Activity Center — clubs, domains, achievements, stories and news, live on the university domain.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "AWS S3",
      "PM2",
    ],
    links: [
      { label: "Visit live site", href: "https://sac.kluniversity.in" },
      { label: "Source on GitHub", href: "https://github.com/pinnamanenirohith/KLSAC" },
    ],
    facts: [
      { value: "Live", label: "sac.kluniversity.in" },
      { value: "190", label: "Commits, public repo" },
      { value: "16", label: "Next.js version" },
      { value: "S3", label: "Media storage" },
    ],
    problem: [
      "The Student Activity Center needed an official web presence for its clubs, domains, achievements, stories and news — published on the university's own domain.",
      "Content changes often and is media-heavy, so the site needs a real data layer and dependable storage for images rather than hard-coded pages.",
    ],
    solution: [
      "A Next.js 16 and React 19 application written in TypeScript and styled with Tailwind CSS.",
      "Structured content in MySQL, with media stored on AWS S3.",
      "Served in production under PM2 at sac.kluniversity.in.",
    ],
    architecture: [
      {
        name: "Client",
        nodes: [
          { label: "Next.js 16 · React 19", detail: "TypeScript, Tailwind CSS" },
          { label: "Content sections", detail: "Clubs · domains · achievements · stories · news" },
        ],
      },
      {
        name: "Data",
        nodes: [
          { label: "MySQL", detail: "Structured site content" },
          { label: "AWS S3", detail: "Image and media storage" },
        ],
      },
      {
        name: "Runtime",
        nodes: [{ label: "PM2", detail: "Production process management" }],
      },
    ],
    contribution: [
      "Built the site in a public repository — 190 commits.",
      "Implemented the content model on MySQL and media handling on AWS S3.",
      "Ran the production deployment with PM2.",
    ],
    outcomes: [
      "Live as the official SAC website at sac.kluniversity.in.",
      "Open source: 190 commits in a public GitHub repository.",
    ],
  },
  {
    slug: "safestay-ap",
    index: "03",
    title: "SafeStay AP",
    short: "SafeStay AP",
    category: "Public-safety prototype · Web + mobile",
    year: "2026",
    status: "Prototype demonstrated in Eluru",
    role: "Software Engineer, SafeStay AP Software Development Team",
    visual: "safestay",
    summary:
      "Digital hotel guest registration for Andhra Pradesh Police — replacing manual check-in registers with a structured digital record, through a FastAPI backend, a React admin panel and a Flutter citizen app.",
    stack: ["FastAPI", "Python", "SQLite", "React", "Vite", "Flutter"],
    links: [],
    facts: [
      { value: "3", label: "Apps: API · admin · mobile" },
      { value: "Eluru", label: "Prototype demonstrated" },
      { value: "AP Police", label: "Certificate of Appreciation" },
      { value: "Private", label: "Repository" },
    ],
    problem: [
      "Hotels record guest check-ins in manual registers. Paper records are slow to search and hard for police to review in a structured way.",
    ],
    solution: [
      "A FastAPI backend that turns each check-in into a structured digital record.",
      "A React / Vite admin panel for reviewing records.",
      "A Flutter citizen-facing mobile app for the check-in itself.",
    ],
    architecture: [
      {
        name: "Clients",
        nodes: [
          { label: "Flutter citizen app", detail: "Mobile guest check-in" },
          { label: "React / Vite admin panel", detail: "Record review" },
        ],
      },
      {
        name: "API",
        nodes: [{ label: "FastAPI (Python)", detail: "Serves both clients" }],
      },
      {
        name: "Data",
        nodes: [{ label: "SQLite", detail: "Structured guest records" }],
      },
    ],
    contribution: [
      "Software Engineer on the SafeStay AP Software Development Team.",
      "Designed and developed the mobile application, as recognised by the Superintendent of Police, Guntur District.",
      "Worked across the FastAPI backend and the two client applications.",
    ],
    outcomes: [
      "Working prototype built and demonstrated in Eluru.",
      "Certificate of Appreciation from the Superintendent of Police, Guntur District, presented by the DGP, AP Police — 22 September 2026.",
    ],
  },
  {
    slug: "smart-farming-advisor",
    index: "04",
    title: "Smart Farming Advisor",
    short: "Smart Farming",
    category: "Conversational AI · IBM Cloud",
    year: "2025",
    status: "IBM SkillsBuild internship project",
    role: "AI & Cloud Intern — built the assistant",
    visual: "chat",
    summary:
      "A conversational AI advisor on IBM Watson Assistant that guides farmers through crop and weather questions, built during the IBM SkillsBuild / Edunet Foundation (AICTE) internship.",
    stack: ["IBM Watson Assistant", "IBM Cloud", "NLP"],
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/pinnamanenirohith/Smart-Farming-Advisor",
      },
    ],
    facts: [
      { value: "Watson", label: "IBM Watson Assistant" },
      { value: "NLP", label: "Intents · entities" },
      { value: "4 wk", label: "AICTE internship" },
      { value: "IBM", label: "Cloud deployment" },
    ],
    problem: [
      "Farmers need quick, plain-language guidance on crops and weather — answers to questions asked the way people actually ask them.",
    ],
    solution: [
      "A conversational assistant on IBM Watson Assistant that maps farmer questions to intents and entities.",
      "Guided dialog flows that walk users through crop and weather advice.",
      "Built and run on IBM Cloud.",
    ],
    architecture: [
      {
        name: "Conversation",
        nodes: [
          { label: "Intents", detail: "What the farmer is asking" },
          { label: "Entities", detail: "Crops, weather conditions" },
        ],
      },
      {
        name: "Dialog",
        nodes: [{ label: "Dialog nodes", detail: "Guided crop and weather flows" }],
      },
      {
        name: "Platform",
        nodes: [{ label: "IBM Watson Assistant", detail: "Hosted on IBM Cloud" }],
      },
    ],
    contribution: [
      "Designed the intent, entity and dialog-node structure.",
      "Built the assistant on IBM Watson Assistant with NLP-based query handling.",
    ],
    outcomes: [
      "Delivered as the internship project for IBM SkillsBuild / Edunet Foundation (AICTE), Jul – Aug 2025.",
      "Source published on GitHub.",
    ],
  },
];

/* ─── Services ────────────────────────────────────────────────── */

export const services = [
  {
    id: "business-websites",
    index: "01",
    title: "Business websites",
    lede: "A fast, credible home for your business — designed to turn visitors into enquiries.",
    includes: [
      "Custom design, not a template",
      "Responsive on every screen",
      "SEO foundations & performance",
      "Content you can update",
      "Domain, hosting & launch",
    ],
    stack: "Next.js · Tailwind CSS · Vercel / AWS",
  },
  {
    id: "landing-pages",
    index: "02",
    title: "Landing pages",
    lede: "One focused page for a launch, campaign or product — built to convert.",
    includes: [
      "Conversion-first layout & copy structure",
      "Lead capture & contact flows",
      "Motion and micro-interactions",
      "Analytics-ready",
      "Fast turnaround",
    ],
    stack: "Next.js · Framer Motion · Tailwind CSS",
  },
  {
    id: "web-applications",
    index: "03",
    title: "Full-stack web applications",
    lede: "Dashboards, portals and internal tools with real auth, roles and data.",
    includes: [
      "Role-based access control",
      "Secure authentication (JWT, OTP)",
      "REST APIs & database design",
      "Admin panels & workflows",
      "CI/CD and production deployment",
    ],
    stack: "Next.js · Node.js / Express · MongoDB / MySQL",
  },
];

export const supportingServices = [
  {
    title: "Cloud deployment & DevOps",
    body: "Linux servers, Nginx, PM2, GitHub Actions pipelines and AWS S3 — get your app into production properly.",
  },
  {
    title: "Conversational AI",
    body: "Assistants built on intents, entities and guided dialog flows, as in the Smart Farming Advisor.",
  },
  {
    title: "Redesigns & rebuilds",
    body: "Move an outdated site to a modern, fast stack without losing what already works.",
  },
];

export const process = [
  { step: "01", title: "Discover", body: "A call to understand your goals, users and constraints. You get a clear scope and plan." },
  { step: "02", title: "Design", body: "Structure, layout and visual direction — reviewed with you before any build starts." },
  { step: "03", title: "Build", body: "Development in short iterations with a live preview link you can check at any time." },
  { step: "04", title: "Launch", body: "Deployment, domain, performance and SEO checks — then handover." },
  { step: "05", title: "Support", body: "Fixes, updates and new features after launch when you need them." },
];

/* ─── Experience ──────────────────────────────────────────────── */

export const leadership = [
  {
    role: "President",
    org: "Student Activity Center (SAC), KL University",
    period: "Jun 2026 — Present",
    current: true,
    points: [
      "Lead internal governance and student engagement operations across the campus student body.",
      "Direct the SAC leadership ecosystem of club leads, council representatives, secretaries, joint secretaries and coordinators.",
      "Serve as the primary liaison between student representatives and institutional administration, coordinating large-scale university initiatives across multiple sub-councils.",
    ],
  },
  {
    role: "Vice President",
    org: "Student Activity Center (SAC), KL University",
    period: "Sep 2025 — Jun 2026",
    current: false,
    points: [
      "Provided council-wide leadership for the SAC Student Council 2025–26 term, driving cross-functional coordination and execution of student-facing programs.",
    ],
  },
  {
    role: "Administrative Lead",
    org: "Student Activity Center (SAC), KL University",
    period: "Jul 2025 — Sep 2025",
    current: false,
    points: [
      "Managed SAC internal operations and administrative coordination.",
      "Supported operational execution and event coordination for Surabhi 2026, a university event with 5,000+ attendees.",
    ],
  },
  {
    role: "Club Lead",
    org: "SafeLife Club, KL University",
    period: "Jun 2024 — Jul 2025",
    current: false,
    points: [
      "Led healthcare awareness, wellness initiatives and student outreach programs across campus.",
      "Organised and led a CPR training session for approximately 1,500 students in partnership with AIIMS Mangalagiri.",
      "Coordinated a single-day health survey across 5 villages with Aster Ramesh Hospital, then organised a 2-day community health camp in those villages as a follow-up.",
    ],
  },
];

export const leadershipStats = [
  { value: "80+", label: "Council members led" },
  { value: "7,000+", label: "Registered students served" },
  { value: "30+", label: "Clubs" },
  { value: "60+", label: "Activities every month" },
];

export const internships = [
  {
    role: "AI & Cloud Intern",
    org: "IBM SkillsBuild / Edunet Foundation (AICTE)",
    period: "Jul 2025 — Aug 2025",
    points: [
      "4-week AICTE internship in Emerging Technologies (AI & Cloud) on IBM Cloud.",
      "Built the Smart Farming Advisor chatbot on IBM Watson Assistant with NLP-based query handling.",
    ],
    tags: ["IBM Cloud", "Watson Assistant", "NLP"],
  },
  {
    role: "Java Full Stack Intern",
    org: "BrainOVision Solutions India Pvt. Ltd. (AICTE)",
    period: "May 2025 — Jun 2025",
    points: [
      "One-month AICTE-recognised Java Full Stack internship, building front-end and back-end components across the development lifecycle.",
    ],
    tags: ["Java", "Full Stack"],
  },
];

/* ─── Awards ──────────────────────────────────────────────────── */

export const awards = [
  {
    title: "Certificate of Appreciation",
    org: "Superintendent of Police, Guntur District — AP Police",
    detail: "For designing and developing the SafeStay AP mobile application. Presented by the DGP, AP Police.",
    year: "2026",
    highlight: true,
  },
  {
    title: "Certificate of Recognition",
    org: "Femflare'26, KL University",
    detail: "Outstanding contribution to the Women Development Cell, academic year 2025–26.",
    year: "2026",
    highlight: false,
  },
  {
    title: "Vice President Recognition Award",
    org: "Women Development Cell, KL University",
    detail: "For service as Vice President of the SAC Student Council.",
    year: "2025–26",
    highlight: false,
  },
  {
    title: "SAC Administrative Lead Recognition Award",
    org: "Student Activity Center, KL University",
    detail: "For service as Administrative Lead of SAC.",
    year: "2024–25",
    highlight: false,
  },
  {
    title: "SafeLife Club Lead Recognition Award",
    org: "SafeLife Club, KL University",
    detail: "For leading the SafeLife Club.",
    year: "2024–25",
    highlight: false,
  },
  {
    title: "Idea Submission & Participation",
    org: "Bharatiya Antariksh Hackathon 2026 — ISRO, powered by Hack2Skill",
    detail: "Successful idea submission in the national space-innovation hackathon.",
    year: "2026",
    highlight: false,
  },
];

/* ─── Certifications ──────────────────────────────────────────── */

export type Cert = { name: string; issuer: string; group: string; date?: string };

export const certifications: Cert[] = [
  { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", group: "Cloud" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", group: "Cloud" },
  {
    name: "Certified Advanced Automation Professional (Automation 360)",
    issuer: "Automation Anywhere",
    group: "Automation",
    date: "Jun 2026",
  },
  { name: "Salesforce Certified AI Associate", issuer: "Salesforce", group: "AI", date: "Oct 2024" },
  { name: "Python Essentials 1", issuer: "Cisco Networking Academy", group: "Programming" },
  { name: "Python Essentials 2", issuer: "Cisco Networking Academy", group: "Programming" },
  { name: "Introduction to Data Science", issuer: "Cisco Networking Academy", group: "AI" },
  { name: "Introduction to Modern AI", issuer: "Cisco Networking Academy", group: "AI" },
  { name: "Apply AI: Analyze Customer Reviews", issuer: "Cisco Networking Academy", group: "AI" },
  { name: "Networking Essentials", issuer: "Cisco Networking Academy", group: "Cloud" },
  { name: "Getting Started with Artificial Intelligence", issuer: "IBM SkillsBuild", group: "AI" },
  { name: "Journey to Cloud: Envisioning Your Solution", issuer: "IBM SkillsBuild", group: "Cloud" },
  {
    name: "Java Full Stack Internship — Completion",
    issuer: "BrainOVision Solutions (AICTE)",
    group: "Programming",
    date: "Jun 2025",
  },
  {
    name: "Linguaskill General — English B2 (avg 167, C1 in Reading)",
    issuer: "Cambridge English",
    group: "Language",
  },
];

/* ─── Skills ──────────────────────────────────────────────────── */

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "C"] },
  {
    group: "Frontend",
    items: ["React", "Next.js (App Router)", "Tailwind CSS", "Framer Motion", "TanStack Query", "Recharts", "Vite", "Flutter"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "FastAPI", "REST API design", "JWT auth", "bcrypt", "Nodemailer (OTP)", "Helmet", "Rate limiting", "Joi / express-validator"],
  },
  { group: "Data", items: ["MongoDB (Mongoose)", "MySQL", "PostgreSQL", "SQLite"] },
  {
    group: "Cloud & DevOps",
    items: ["AWS (S3)", "GitHub Actions CI/CD", "Linux", "Nginx", "PM2", "Docker", "Vercel", "IBM Cloud"],
  },
  {
    group: "AI & Automation",
    items: ["IBM Watson Assistant", "NLP", "Generative AI", "RPA — Automation 360"],
  },
  {
    group: "Foundations",
    items: ["System design", "Data structures & algorithms", "DBMS", "OOP", "Operating systems", "SDLC"],
  },
];

export const marquee = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "FastAPI",
  "MongoDB",
  "MySQL",
  "AWS",
  "GitHub Actions",
  "Nginx",
  "Docker",
  "Flutter",
  "Tailwind CSS",
  "IBM Watson",
];

/* ─── One-page resume ─────────────────────────────────────────────
   Condensed copy used by /resume and the downloadable PDF.
   Keep it short: the whole resume must fit on one A4 page.
   After editing, run `npm run resume:pdf` to regenerate the PDF.
   ──────────────────────────────────────────────────────────────── */

export const resumePdf = "/Rohith_Pinnamaneni_Resume.pdf";

export const resume = {
  summary:
    "Full-stack engineer building scalable web platforms, intelligent applications and cloud-native products. Builds end to end across Next.js, React, Node.js/Express, FastAPI, MongoDB and MySQL, with GitHub Actions CI/CD, Nginx and Linux deployment. President of KL University's Student Activity Center.",
  projects: [
    {
      title: "SAC Council Management Platform",
      meta: "2025 – 2026",
      stack: "Next.js · TypeScript · Node.js · Express 5 · MongoDB · JWT · GitHub Actions · Nginx · PM2",
      points: [
        "Role-based platform for club management, approvals, task tracking and communication — 8 permission tiers and 22 data models, designed for 20–40 clubs.",
        "JWT access/refresh, bcrypt and email OTP; API hardened with Helmet, rate limiting and Joi validation; CI/CD to self-hosted Linux.",
        "Approved by the SAC Director; currently in pilot testing.",
      ],
    },
    {
      title: "KL University SAC Official Website",
      meta: "sac.kluniversity.in",
      stack: "Next.js 16 · React 19 · TypeScript · Tailwind CSS · MySQL · AWS S3 · PM2",
      points: [
        "Official SAC website for clubs, domains, achievements, stories and news — MySQL content, S3 media, PM2 in production. Public repo, 190 commits.",
      ],
    },
    {
      title: "SafeStay AP",
      meta: "2026",
      stack: "FastAPI · Python · SQLite · React / Vite · Flutter",
      points: [
        "Digital hotel guest registration for AP Police: FastAPI backend serving a React admin panel and a Flutter citizen app. Prototype demonstrated in Eluru.",
        "Certificate of Appreciation from the SP, Guntur District, presented by the DGP, AP Police (Sep 2026).",
      ],
    },
    {
      title: "Smart Farming Advisor",
      meta: "2025",
      stack: "IBM Watson Assistant · IBM Cloud · NLP",
      points: [
        "Conversational AI for crop and weather guidance using intents, entities and dialog nodes, built during the IBM SkillsBuild internship.",
      ],
    },
  ],
  experience: [
    {
      role: "President",
      org: "Student Activity Center, KL University",
      period: "Jun 2026 – Present",
      points: [
        "Lead an 80+ member council serving 7,000+ registered students across 30+ clubs and 60+ activities a month; primary liaison with university administration.",
      ],
    },
    {
      role: "Vice President",
      org: "Student Activity Center, KL University",
      period: "Sep 2025 – Jun 2026",
      points: ["Council-wide leadership for the 2025–26 term, coordinating student-facing programs."],
    },
    {
      role: "Administrative Lead",
      org: "Student Activity Center, KL University",
      period: "Jul 2025 – Sep 2025",
      points: ["Ran internal operations; supported event coordination for Surabhi 2026 (5,000+ attendees)."],
    },
    {
      role: "Club Lead",
      org: "SafeLife Club, KL University",
      period: "Jun 2024 – Jul 2025",
      points: [
        "Led CPR training for ~1,500 students with AIIMS Mangalagiri; 5-village health survey and 2-day health camp with Aster Ramesh Hospital.",
      ],
    },
  ],
  internships: [
    {
      role: "AI & Cloud Intern",
      org: "IBM SkillsBuild / Edunet Foundation (AICTE)",
      period: "Jul 2025 – Aug 2025",
      point: "Built the Smart Farming Advisor chatbot on IBM Cloud with Watson Assistant.",
    },
    {
      role: "Java Full Stack Intern",
      org: "BrainOVision Solutions India (AICTE)",
      period: "May 2025 – Jun 2025",
      point: "Built front-end and back-end components across the development lifecycle.",
    },
  ],
  skills: [
    { group: "Languages", items: "TypeScript, JavaScript, Python, Java, C" },
    { group: "Frontend", items: "React, Next.js, Tailwind CSS, TanStack Query, Vite, Flutter" },
    { group: "Backend", items: "Node.js, Express, FastAPI, REST APIs, JWT, OTP auth" },
    { group: "Data", items: "MongoDB, MySQL, PostgreSQL, SQLite" },
    { group: "Cloud & DevOps", items: "AWS (S3), GitHub Actions, Docker, Linux, Nginx, PM2, Vercel" },
    { group: "AI & RPA", items: "IBM Watson, NLP, Generative AI, Automation 360" },
  ],
  certifications: [
    "AWS Certified Developer – Associate",
    "AWS Certified Cloud Practitioner",
    "Automation Anywhere Advanced Automation Professional",
    "Salesforce Certified AI Associate",
    "Cisco: Python Essentials 1 & 2, Intro to Data Science, Intro to Modern AI, Apply AI, Networking Essentials",
    "IBM SkillsBuild: Getting Started with AI; Journey to Cloud",
    "Java Full Stack Internship — BrainOVision (AICTE)",
    "Cambridge Linguaskill — English B2 (C1 in Reading)",
  ],
  awards: [
    "Certificate of Appreciation — SP Guntur District, AP Police (2026)",
    "Certificate of Recognition — Femflare'26, WDC, KLU (2026)",
    "Vice President Recognition Award — WDC, KLU (2025–26)",
    "SAC Administrative Lead Recognition Award (2024–25)",
    "SafeLife Club Lead Recognition Award (2024–25)",
    "Bharatiya Antariksh Hackathon 2026 (ISRO) — idea submission",
  ],
};
