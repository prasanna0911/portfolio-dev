import type { NavigationItem } from "@/lib/types";

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const navBrand = {
  name: "Prasanna M",
  role: "Full Stack Developer",
  avatar: "/images/profile.png",
};

export const navSocialLinks = {
  github: "https://github.com/prasanna0911",
  linkedin: "https://www.linkedin.com/in/prasanna0911",
  resume: "/resume.pdf",
};
