import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { FooterData } from "@/lib/types";

export const footerData: FooterData = {
  initials: "PM",
  name: "Prasanna M",
  tagline:
    "Full Stack Developer · Building reliable trading platforms and scalable digital systems.",
  copyrightSuffix: "Prasanna M. All rights reserved.",
  socials: [
    {
      label: "GitHub profile",
      href: "https://github.com/prasanna0911",
      icon: FaGithub,
    },
    {
      label: "LinkedIn profile",
      href: "https://www.linkedin.com/in/prasanna0911",
      icon: FaLinkedin,
    },
    {
      label: "Send an email",
      href: "mailto:prasanna09112001@gmail.com",
      icon: Mail,
    },
  ],
};
