export const personal = {
  name: "Pinnamaneni Rohith Venkata Sai",
  shortName: "Rohith Pinnamaneni",
  role: "Full-Stack Developer & Cloud Native Engineering Student",
  tagline:
    "I build scalable, production-grade web apps across the MERN stack — from role-based ERPs to automated CI/CD on self-hosted infrastructure.",
  email: "pinnamanenirohith@gmail.com",
  phone: "+91 82229 33323",
  linkedin: "linkedin.com/in/rohith-venkata-sai-pinnamaneni-38807a2b2",
  github: "github.com/pinnamanenirohith",
  bio: "Full-stack developer and Cloud Native Engineering student focused on scalable, production-grade web applications and clean architecture.",
  education: {
    degree: "B.Tech Computer Science & Engineering (Cloud Native Engineering)",
    university: "KL University",
    cgpa: "8.29",
  },
  leadership: "President of the Student Council of KL University (under SAC — Student Activity Center)",
};

export const projects = [
  {
    id: "erp",
    title: "Student Council ERP",
    subtitle: "University Management Platform",
    badge: "Active Pilot",
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
    ],
    description:
      "Full-stack role-based ERP for a university student council. 8 permission tiers from Director to Club Member, each with scoped dashboards. Covers 8 feature areas — tasks, projects, events, approvals, academics, club management, hierarchy, and communication — designed to support 20–40 clubs.",
    highlights: [
      "8 permission tiers with scoped dashboards",
      "22 MongoDB models across 8 feature areas",
      "JWT access/refresh + bcrypt + OTP email verification",
      "API hardened: Helmet, rate limiting, Joi + express-validator",
      "Self-hosted Linux + Nginx reverse proxy + PM2",
      "Zero-touch GitHub Actions CI/CD pipeline",
      "In active pilot with 6-member core team",
    ],
    color: "#2563eb",
    accentColor: "#dbeafe",
  },
  {
    id: "farming",
    title: "Smart Farming Advisor",
    subtitle: "AI Chatbot",
    badge: "IBM SkillsBuild",
    stack: ["IBM Watson Assistant", "IBM Cloud", "NLP"],
    description:
      "Conversational AI advisor built during an IBM SkillsBuild internship. Guides farmers through crop selection, weather considerations, and farming practices via intents, entities, and dialog nodes with NLP query handling.",
    highlights: [
      "Built on IBM Watson Assistant",
      "Intent, entity & dialog node architecture",
      "NLP-powered query understanding",
      "Deployed on IBM Cloud",
      "AICTE-recognized internship project",
    ],
    color: "#059669",
    accentColor: "#d1fae5",
  },
];

export const experience = [
  {
    role: "President",
    org: "Student Council of KL University (under SAC — Student Activity Center)",
    period: "2026 – Present",
    description:
      "Leads a 25+ member council across Drafting, Hostel Events, PR & Media, and Finance sub-councils. Oversees Internal Affairs and Student Engagement.",
  },
  {
    role: "Administrative Lead / SafeLife Club Lead / City Campaign Lead",
    org: "Surabhi 2026",
    period: "2026",
    description:
      "Ran institutional operations, outreach, and city-wide campaigns for a fest with 5,000+ footfall.",
  },
  {
    role: "Java Full Stack Intern",
    org: "BrainOVision Solutions India Pvt. Ltd.",
    period: "May – Jun 2025",
    description:
      "One-month AICTE-recognized internship across front-end and back-end Java full-stack development.",
  },
  {
    role: "AI & Cloud Intern",
    org: "IBM SkillsBuild / Edunet Foundation (AICTE)",
    period: "Jul – Aug 2025",
    description:
      "4-week Emerging Technologies internship on IBM Cloud. Built the Smart Farming Advisor chatbot using IBM Watson Assistant.",
  },
];

export const certifications = [
  { name: "Salesforce Certified AI Associate", issuer: "Salesforce" },
  { name: "Python Essentials 1 & 2", issuer: "Cisco" },
  { name: "Introduction to Data Science", issuer: "Cisco" },
  { name: "Introduction to Modern AI", issuer: "Cisco" },
  { name: "Apply AI: Analyze Customer Reviews", issuer: "Cisco" },
  { name: "Networking Essentials", issuer: "Cisco" },
  {
    name: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
  },
  {
    name: "Journey to Cloud: Envisioning Your Solution",
    issuer: "IBM SkillsBuild",
  },
  {
    name: "Cambridge Linguaskill General — English B2 (avg 167, C1 in Reading)",
    issuer: "Cambridge",
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Docker",
  "Linux",
  "Nginx",
  "CI/CD (GitHub Actions)",
  "JWT / Auth",
  "REST API Design",
  "System Design",
];
