import type { ComponentType } from "react";

export type IconComponent = ComponentType<{
  className?: string;
  size?: number | string;
}>;

export interface NavigationItem {
  label: string;
  href: string;
  id: string;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "web3"
  | "tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  description: string;
  icon: IconComponent;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  techStack?: string[];
  responsibilities: string[];
  current?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  credentialId?: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  status: "done" | "active" | "upcoming";
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface SectionHeadingData {
  eyebrow?: string;
  title: string;
  description?: string;
}

export interface AboutStat {
  label: string;
  value: string;
}

export interface AboutFocusPoint {
  icon: IconComponent;
  title: string;
  description: string;
}

export interface AboutProfileAttribute {
  key: string;
  value: string;
}

export interface AboutProfile {
  fileName: string;
  tabNumber: string;
  image: string;
  availability: string;
  name: string;
  title: string;
  attributes: AboutProfileAttribute[];
}

export interface AboutData {
  heading: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  paragraphs: string[];
  focusPoints: AboutFocusPoint[];
  profile: AboutProfile;
  stats: AboutStat[];
}

export interface HeroTechBadge {
  label: string;
  icon: IconComponent;
}

export interface HeroPipelineStep {
  step: string;
  label: string;
  detail: string;
  state: "done" | "active" | "pending";
}

export interface HeroTerminalLine {
  text: string;
  accent?: "muted" | "sky" | "cyan";
}

export interface HeroData {
  avatar: string;
  badge: string;
  heading: {
    line1: string;
    highlight: string;
  };
  description: string;
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  techBadges: HeroTechBadge[];
  pipeline: HeroPipelineStep[];
  terminal: {
    title: string;
    command: string;
    lines: HeroTerminalLine[];
  };
  deployment: {
    title: string;
    subtitle: string;
    status: string;
  };
}

export interface ContactLinkItem {
  label: string;
  href: string;
  icon: IconComponent;
}

export interface ContactContent {
  title: string;
  description: string;
  availabilityBadge: string;
  links: ContactLinkItem[];
}

export interface FooterSocialItem {
  label: string;
  href: string;
  icon: IconComponent;
}

export interface FooterData {
  initials: string;
  name: string;
  tagline: string;
  copyrightSuffix: string;
  socials: FooterSocialItem[];
}

export interface SiteConfig {
  name: string;
  initials: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
  socialLinks: {
    github: string;
    linkedin: string;
    resume: string;
  };
  meta: {
    url: string;
    title: string;
    description: string;
    keywords: string[];
  };
}
