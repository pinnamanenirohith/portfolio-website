import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "student-council-erp",
    title: "Student Council ERP",
    tagline: "University management platform built for campus governance at scale.",
    description:
      "Architected and deployed a role-based university ERP system supporting 20–40 clubs with modules for approvals, tasks, events, communication, hierarchy, and project tracking. Built with a production-grade stack including CI/CD, containerised deployment, and reverse proxy configuration.",
    tags: ["Next.js", "TypeScript", "React", "Node.js", "Express", "MongoDB", "JWT", "Docker", "GitHub Actions", "Nginx", "PM2"],
    links: {},
    featured: true,
    status: "building",
    highlights: [
      "Role-based access control across students, club leads, and administrators",
      "22 MongoDB models powering the full governance data layer",
      "JWT authentication with refresh token rotation",
      "Dockerised deployment with Nginx reverse proxy on Linux",
      "CI/CD pipeline via GitHub Actions for automated builds",
      "PM2 process management for production reliability",
      "Supports 20–40 active clubs with independent approval workflows",
    ],
  },
  {
    id: "smart-farming-advisor",
    title: "Smart Farming Advisor",
    tagline: "AI-powered crop recommendation and precision agriculture platform.",
    description:
      "ML-driven web application that analyses soil data, weather patterns, and crop history to deliver personalised farming recommendations.",
    tags: ["Python", "React", "FastAPI", "Machine Learning", "TensorFlow"],
    links: {
      github: "https://github.com/pinnamanenirohith/Smart-Farming-Advisor",
    },
    featured: false,
    status: "complete",
    highlights: [
      "Soil NPK analysis with ML-based crop suitability scoring",
      "Weather API integration for seasonal planning",
      "Mobile-responsive dashboard for field use",
    ],
  },
  {
    id: "java-fundamentals",
    title: "Java Fundamentals Repository",
    tagline: "Structured, production-quality Java learning resource.",
    description:
      "A systematically organised open-source repository covering core Java concepts — OOP, data structures, algorithms, and design patterns.",
    tags: ["Java", "OOP", "Data Structures", "Algorithms", "Design Patterns"],
    links: {
      github: "https://github.com/pinnamanenirohith/java-fundamentals",
    },
    featured: false,
    status: "building",
    highlights: [
      "100+ examples across 12 concept modules",
      "Covers SOLID principles and Gang of Four patterns",
    ],
  },
  {
    id: "cicd-practice",
    title: "CI/CD Practice Pipeline",
    tagline: "End-to-end DevOps pipeline with containerised deployments.",
    description:
      "Hands-on implementation of a full CI/CD pipeline using GitHub Actions, Docker, and cloud deployment targets.",
    tags: ["GitHub Actions", "Docker", "DevOps", "YAML"],
    links: {
      github: "https://github.com/pinnamanenirohith/github-actions-cicd-practice",
    },
    featured: false,
    status: "complete",
    highlights: [
      "Multi-stage Docker builds with layer caching",
      "Automated test and lint gates before merge",
    ],
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const secondaryProjects = projects.filter((p) => !p.featured);
