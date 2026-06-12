import type { LeadershipRole, CurrentlyBuilding } from "@/types";

export const leadershipRoles: LeadershipRole[] = [
  {
    id: "president-internal-affairs",
    title: "President — Internal Affairs & Student Engagements",
    org: "Student Activity Centre",
    period: "Jun 2026 – Present",
    description:
      "Elected to lead internal governance and student engagement operations across the campus student body. Serve as the primary liaison between student representatives and institutional administration.",
    highlights: [
      "Overseeing governance and operations for 2,000+ students",
      "Leading cross-functional teams across student clubs and committees",
      "Coordinated Surabhi 2026 — a flagship cultural event with 5,000+ attendees",
      "Driving policy reforms for club registration, event approvals, and student welfare",
    ],
    impact: "2,000+ students",
    type: "president",
  },
  {
    id: "vice-president-sac",
    title: "Vice President — Student Activity Centre",
    org: "Student Activity Centre",
    period: "Sep 2025 – Jun 2026",
    description:
      "Served as Vice President of the SAC, supporting the President in governance, managing inter-club relations, and overseeing student engagement initiatives across campus.",
    highlights: [
      "Coordinated activities across all registered student clubs",
      "Managed event approval pipelines and resource allocation",
      "Bridged communication between club leads and SAC leadership",
    ],
    impact: "All campus clubs",
    type: "president",
  },
  {
    id: "kl-yuva-tourism-lead",
    title: "Lead — KL Yuva Tourism Club",
    org: "KL University",
    period: "Sep 2025 – Dec 2025",
    description:
      "Led the KL Yuva Tourism Club, organising cultural trips, outreach events, and student engagement activities that promoted travel awareness and experiential learning.",
    highlights: [
      "Planned and executed student travel and cultural exposure events",
      "Managed club logistics, member coordination, and scheduling",
    ],
    impact: "Club leadership",
    type: "lead",
  },
  {
    id: "sac-admin-lead",
    title: "SAC Administrative Lead",
    org: "Student Activity Centre",
    period: "Jul 2025 – Sep 2025",
    description:
      "Managed day-to-day administrative operations of the Student Activity Centre, streamlining workflows and student request handling during a high-activity transition period.",
    highlights: [
      "Streamlined event approval and resource allocation workflows",
      "Piloted digital-first approach to SAC record management",
    ],
    impact: "30+ events",
    type: "lead",
  },
  {
    id: "safelife-lead",
    title: "Lead — SafeLife Initiative",
    org: "Campus Social Impact Programme",
    period: "Jun 2024 – Dec 2025",
    description:
      "Promoted to Lead after co-leading, taking full ownership of the SafeLife campus safety and health awareness initiative. Scaled outreach programs and built partnerships with faculty and external organisations.",
    highlights: [
      "Designed peer-to-peer safety awareness workshops",
      "Scaled program reach across three academic departments",
      "Built resource distribution networks for student health outreach",
    ],
    impact: "500+ students",
    type: "lead",
  },
  {
    id: "vyuha-health-outreach",
    title: "Health & Outreach Manager — VYUHA",
    org: "VYUHA Student Organisation",
    period: "Aug 2023 – Mar 2025",
    description:
      "Managed health and outreach programmes for VYUHA, organising health camps, awareness drives, and events focused on holistic student development.",
    highlights: [
      "Organised health camps, awareness drives, and outreach events",
      "Managed volunteer teams and event logistics",
    ],
    impact: "Community outreach",
    type: "organizer",
  },
  {
    id: "safelife-colead",
    title: "Co Lead — SafeLife Initiative",
    org: "Campus Social Impact Programme",
    period: "Oct 2023 – Jan 2025",
    description:
      "Co-led the SafeLife campus health and safety awareness programme, building the team and establishing the operational framework that later scaled under full leadership.",
    highlights: [
      "Built the initial SafeLife team and operational structure",
      "Ran the first peer safety education workshops",
    ],
    impact: "Foundation built",
    type: "lead",
  },
  {
    id: "sac-member",
    title: "Member — Student Activity Centre",
    org: "Student Activity Centre",
    period: "Sep 2023 – Jun 2024",
    description:
      "Joined the SAC as a general member, contributing to event execution, student coordination, and day-to-day operations — the starting point of a leadership progression.",
    highlights: [
      "Supported event planning and on-ground execution",
      "Built foundational understanding of SAC governance structures",
    ],
    type: "member",
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
  { value: 5000, suffix: "+", label: "Event Attendees" },
  { value: 30,   suffix: "+", label: "Events Executed" },
  { value: 8,    suffix: "",  label: "Leadership Roles" },
  { value: 2000, suffix: "+", label: "Students Impacted" },
];
