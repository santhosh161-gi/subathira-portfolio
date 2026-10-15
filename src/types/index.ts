export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
}

export interface Profile {
  name: string;
  firstName: string;
  initials: string;
  role: string;
  headline: string;
  objective: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  socials: SocialLink[];
  focusAreas: { title: string; description: string }[];
  strengths: string[];
  stats: Stat[];
  hobbies: string[];
}

export type ExperienceCategory = "Research" | "Teaching";

export interface Experience {
  id: string;
  role: string;
  organization: string;
  department?: string;
  location: string;
  start: string;
  end: string;
  category: ExperienceCategory;
  summary: string;
  highlights: string[];
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  outcomes: string[];
  featured?: boolean;
}

export type PublicationStatus = "Published" | "Submitted" | "In preparation";

export interface Publication {
  id: string;
  title: string;
  authors?: string;
  venue: string;
  date?: string;
  status: PublicationStatus;
  note?: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  score: string;
  distinction?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export type TrainingKind = "Internship" | "Clinical" | "Training";

export interface Training {
  id: string;
  title: string;
  organization: string;
  date: string;
  kind: TrainingKind;
  points: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  score?: string;
}

export interface IndustrialVisit {
  organization: string;
  location: string;
  year: string;
  focus: string;
}
