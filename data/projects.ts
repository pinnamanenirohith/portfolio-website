import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "student-council-erp",
    title: "Student Council ERP",
    tagline: "Full-stack ERP system powering campus governance at scale.",
    description:
      "A comprehensive enterprise resource planning system built for the Student Activity Centre. Centralizes student governance workflows, event management, budget tracking, member records, and communication across all student bodies on campus.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Node.js"],
    links: {
      github: "https://github.com/rohithpinnamaneni/student-council-erp",
    },
    featured: true,
    status: "building",
    highlights: [
      "Multi-role access control for council members, advisors, and admins",
      "Event lifecycle management from proposal to post-event reporting",
      "Real-time budget tracking and financial dashboards",
      "Automated communication and notification pipelines",
    ],
  },
  {
    id: "smart-farming-advisor",
    title: "Smart Farming Advisor",
    tagline: "AI-powered crop recommendation and precision agriculture platform.",
    description:
      "ML-driven web application that analyzes soil data, weather patterns, and crop history to deliver personalized farming recommendations. Helps farmers make data-informed decisions to maximize yield and reduce waste.",
    tags: ["Python", "React", "FastAPI", "Machine Learning", "TensorFlow"],
    links: {
      github: "https://github.com/rohithpinnamaneni/smart-farming-advisor",
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
      "A systematically organized open-source repository covering core Java concepts — from OOP principles to data structures, algorithms, design patterns, and concurrency. Built to be a canonical reference for learners.",
    tags: ["Java", "OOP", "Data Structures", "Algorithms", "Design Patterns"],
    links: {
      github: "https://github.com/rohithpinnamaneni/java-fundamentals",
    },
    featured: false,
    status: "building",
    highlights: [
      "100+ examples across 12 concept modules",
      "Clean, well-commented production-style code",
      "Covers SOLID principles and Gang of Four patterns",
    ],
  },
  {
    id: "cicd-practice",
    title: "CI/CD Practice Pipeline",
    tagline: "End-to-end DevOps pipeline with containerized deployments.",
    description:
      "Hands-on implementation of a full CI/CD pipeline using GitHub Actions, Docker, and cloud deployment targets. Includes multi-stage builds, automated testing gates, and environment-specific deployment strategies.",
    tags: ["GitHub Actions", "Docker", "DevOps", "YAML", "Cloud"],
    links: {
      github: "https://github.com/rohithpinnamaneni/cicd-practice",
    },
    featured: false,
    status: "complete",
    highlights: [
      "Multi-stage Docker builds with layer caching",
      "Automated test + lint gates before merge",
      "Environment-specific deployment configs",
    ],
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const secondaryProjects = projects.filter((p) => !p.featured);
