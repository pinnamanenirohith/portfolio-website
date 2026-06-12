export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
  featured: boolean;
  status: "live" | "building" | "complete";
  highlights?: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  level?: "proficient" | "familiar" | "learning";
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface LeadershipRole {
  id: string;
  title: string;
  org: string;
  period: string;
  description: string;
  highlights: string[];
  impact?: string;
  type: "president" | "lead" | "organizer" | "member";
}

export interface CurrentlyBuilding {
  title: string;
  description: string;
  status: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}
