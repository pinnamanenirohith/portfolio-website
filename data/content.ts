export const personal = {
  name: "Pinnamaneni Rohith Venkata Sai",
  shortName: "Rohith Pinnamaneni",
  role: "Computer Science (Cloud Native Engineering) Student",
  tagline:
    "Full Stack Developer · Aspiring Software Engineer",
  email: "pinnamanenirohith@gmail.com",
  phone: "+91 82229 33323",
  linkedin: "linkedin.com/in/rohith-pinnamaneni",
  github: "github.com/pinnamanenirohith",
  bio: "Computer Science (Cloud Native Engineering) student and full-stack developer building web applications across the MERN stack. Strong in RESTful API design, role-based access control, and JWT authentication, with hands-on CI/CD, Nginx, and self-hosted Linux deployment.",
  education: {
    degree: "B.Tech, Computer Science & Engineering (Cloud Native Engineering)",
    university: "KL University",
    cgpa: "8.29",
  },
};

export const projects = [
  {
    id: "sac-platform",
    title: "SAC Council Management Platform",
    subtitle: "Role-Based Web Application",
    badge: "In Development",
    badgeDetail: "Director review completed · Multi-user testing",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Nginx",
      "GitHub Actions",
      "Linux",
      "PM2",
    ],
    description:
      "Designing and building a full-stack role-based platform for the Student Activity Center, covering club management, approvals workflows, task tracking, internal communication, and multi-level organizational hierarchy. Director review completed and currently in multi-user testing.",
    highlights: [
      "8 permission tiers (Director through Club Member) with scoped dashboards",
      "22 MongoDB models across 8 feature areas",
      "JWT access/refresh + bcrypt + OTP email verification (Nodemailer)",
      "API hardened: Helmet, rate limiting, Joi + express-validator",
      "GitHub Actions CI/CD pipeline on self-hosted Linux, Nginx reverse proxy, PM2",
    ],
    features: [
      "Club Management",
      "Approvals Workflows",
      "Task Tracking",
      "Internal Communication",
      "Multi-level Hierarchy",
      "Event Coordination",
      "Role-scoped Dashboards",
      "OTP Authentication",
    ],
    color: "#2563eb",
    accentColor: "#dbeafe",
  },
  {
    id: "smart-farming",
    title: "Smart Farming Advisor",
    subtitle: "AI Chatbot",
    badge: "IBM SkillsBuild",
    badgeDetail: "AICTE-recognized internship",
    stack: ["IBM Watson Assistant", "IBM Cloud", "NLP"],
    description:
      "Conversational AI advisor built during an IBM SkillsBuild / Edunet Foundation AICTE internship. Guides farmers through crop selection, weather considerations, and farming practices via intents, entities, and dialog nodes with NLP-based query handling.",
    highlights: [
      "Built on IBM Watson Assistant with NLP-based query handling",
      "Intent, entity & dialog node architecture",
      "Delivered crop and weather guidance",
      "Deployed on IBM Cloud",
      "AICTE-recognized internship project",
    ],
    features: [
      "Crop Guidance",
      "Weather Advice",
      "NLP Query Handling",
      "IBM Watson",
      "IBM Cloud",
    ],
    color: "#059669",
    accentColor: "#d1fae5",
  },
];

export const leadership = [
  {
    role: "President",
    org: "Student Activity Center (SAC), KL University",
    period: "Jun 2026 – Present",
    description:
      "Lead internal governance and student engagement operations across the campus student body, directing the SAC leadership ecosystem of club leads, council representatives, secretaries, joint secretaries, and coordinators. Serve as the primary liaison between student representatives and institutional administration, coordinating large-scale university initiatives across multiple sub-councils.",
  },
  {
    role: "Vice President",
    org: "Student Activity Center (SAC), KL University",
    period: "Sep 2025 – Jun 2026",
    description:
      "Provided council-wide leadership for the SAC Student Council 2025–26 term, driving cross-functional coordination and execution of student-facing programs.",
  },
  {
    role: "Administrative Lead",
    org: "Student Activity Center (SAC), KL University",
    period: "Jul 2025 – Sep 2025",
    description:
      "Managed SAC internal operations and administrative coordination; supported operational execution and event coordination for Surabhi 2026, a university event with 5,000+ attendees.",
  },
  {
    role: "Lead",
    org: "SafeLife Club, KL University",
    period: "Jun 2024 – Jul 2025",
    description:
      "Led the SafeLife Club, driving healthcare awareness, wellness initiatives, and student outreach programs across campus — the entry point through which I joined and grew within SAC.",
  },
];

export const internships = [
  {
    role: "Java Full Stack Intern",
    org: "BrainOVision Solutions India Pvt. Ltd.",
    period: "May 2025 – Jun 2025",
    description:
      "Completed a one-month AICTE-recognized Java Full Stack internship, building front-end and back-end components across the development lifecycle.",
  },
  {
    role: "AI & Cloud Intern",
    org: "IBM SkillsBuild / Edunet Foundation (AICTE)",
    period: "Jul 2025 – Aug 2025",
    description:
      "Completed a 4-week AICTE internship in Emerging Technologies (AI & Cloud) on IBM Cloud, building a Smart Farming Advisor chatbot delivering crop and weather guidance via IBM Watson Assistant with NLP-based query handling.",
  },
];

export const certifications = [
  { name: "Salesforce Certified AI Associate", issuer: "Salesforce" },
  { name: "Python Essentials 1", issuer: "Cisco" },
  { name: "Python Essentials 2", issuer: "Cisco" },
  { name: "Introduction to Data Science", issuer: "Cisco" },
  { name: "Introduction to Modern AI", issuer: "Cisco" },
  { name: "Apply AI: Analyze Customer Reviews", issuer: "Cisco" },
  { name: "Networking Essentials", issuer: "Cisco" },
  { name: "Getting Started with Artificial Intelligence", issuer: "IBM SkillsBuild" },
  { name: "Journey to Cloud: Envisioning Your Solution", issuer: "IBM SkillsBuild" },
  {
    name: "Cambridge Linguaskill General — English B2 (avg 167, C1 in Reading)",
    issuer: "Cambridge",
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "Java", "C"],
  Frontend: ["React.js", "Next.js (App Router)", "Tailwind CSS", "TanStack React Query", "Recharts"],
  Backend: ["Node.js", "Express.js", "REST API Design", "JWT Auth", "bcrypt", "Nodemailer", "Helmet", "Rate Limiting", "Joi", "express-validator"],
  "Software Engineering": ["System Design", "API Development", "Git & GitHub", "SDLC", "Debugging", "Scalable Architecture"],
  "DevOps & Infra": ["GitHub Actions (CI/CD)", "Linux", "Nginx (Reverse Proxy)", "PM2"],
  Databases: ["MongoDB (Mongoose)", "MySQL"],
  "Core Concepts": ["DSA", "DBMS", "OOP", "Operating Systems", "REST APIs", "AI / Generative AI", "NLP"],
};
