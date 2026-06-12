import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "GitHub Actions" },
      { name: "CI/CD" },
      { name: "Linux" },
      { name: "Vercel" },
    ],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "HTML/CSS" },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js" },
      { name: "Java" },
      { name: "Python" },
      { name: "FastAPI" },
      { name: "REST APIs" },
      { name: "PostgreSQL" },
    ],
  },
  {
    category: "Tools & Practices",
    icon: "Wrench",
    skills: [
      { name: "Git" },
      { name: "Prisma" },
      { name: "VS Code" },
      { name: "Figma" },
      { name: "Agile" },
      { name: "Notion" },
    ],
  },
];
