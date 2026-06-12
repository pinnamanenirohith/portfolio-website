import type { LeadershipRole, CurrentlyBuilding } from "@/types";

export const leadershipRoles: LeadershipRole[] = [
  {
    id: "president-internal-affairs",
    title: "President of Internal Affairs & Student Engagements",
    org: "Student Activity Centre",
    period: "2024 – Present",
    description:
      "Elected to lead internal governance and student engagement operations across the campus student body. Serve as the primary liaison between student representatives and institutional administration.",
    highlights: [
      "Overseeing internal operations, policy implementation, and governance workflows for 2,000+ students",
      "Leading cross-functional teams across multiple student clubs and committees",
      "Establishing structured communication channels between students and administration",
      "Driving policy reforms for club registration, event approvals, and student welfare",
    ],
    impact: "2,000+ students impacted",
    type: "president",
  },
  {
    id: "surabhi-2026",
    title: "Core Organizer — Surabhi 2026",
    org: "Annual Cultural Fest",
    period: "2025 – 2026",
    description:
      "Key organizer for the college's flagship annual cultural festival. Responsible for operational coordination, vendor management, volunteer logistics, and cross-team execution across a multi-day event.",
    highlights: [
      "Coordinating 50+ volunteers across event verticals",
      "Managing logistics, schedules, and inter-department coordination",
      "Driving sponsor outreach and budget planning pipelines",
      "Ensuring seamless execution across cultural, technical, and social event tracks",
    ],
    impact: "3,000+ attendees",
    type: "organizer",
  },
  {
    id: "safelife",
    title: "Leadership — SafeLife Initiative",
    org: "Campus Social Impact Programme",
    period: "2024 – Present",
    description:
      "Student leader for a campus safety and health awareness initiative focused on peer education, crisis support frameworks, and community well-being programs.",
    highlights: [
      "Designed and ran peer-to-peer safety awareness workshops",
      "Built resource distribution networks for student health outreach",
      "Coordinated with faculty advisors and external NGO partners",
      "Scaled program reach across three academic departments",
    ],
    impact: "500+ students reached",
    type: "lead",
  },
  {
    id: "sac-operations",
    title: "Operational Lead — Student Activity Centre",
    org: "Student Activity Centre",
    period: "2023 – Present",
    description:
      "Hands-on operational role managing day-to-day SAC activities, event workflows, and student request pipelines. Focused on process efficiency and reducing friction in student-administration interactions.",
    highlights: [
      "Streamlined event approval and resource allocation workflows",
      "Maintained activity logs, meeting minutes, and governance documentation",
      "Mentored junior council members on operations and communication",
      "Piloted digital-first approach to SAC record management",
    ],
    impact: "30+ events executed",
    type: "lead",
  },
];

export const currentlyBuilding: CurrentlyBuilding[] = [
  {
    title: "Student Council ERP",
    description: "Full-stack governance platform for the Student Activity Centre",
    status: "In development",
    icon: "Building2",
  },
  {
    title: "Java Fundamentals Repo",
    description: "Open-source structured Java learning resource",
    status: "Active",
    icon: "Code2",
  },
  {
    title: "Cloud & DevOps Skills",
    description: "AWS, Docker, CI/CD pipelines and cloud-native patterns",
    status: "Ongoing learning",
    icon: "Cloud",
  },
  {
    title: "AI-driven Student Systems",
    description: "Exploring AI tooling for campus management automation",
    status: "Researching",
    icon: "Sparkles",
  },
];

export const impactStats = [
  { value: 2000, suffix: "+", label: "Students Impacted" },
  { value: 30, suffix: "+", label: "Events Executed" },
  { value: 3, suffix: "", label: "Leadership Roles" },
  { value: 500, suffix: "+", label: "Outreach Reach" },
];
