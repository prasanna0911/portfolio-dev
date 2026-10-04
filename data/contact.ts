import { Mail, Phone, MapPin, FileDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { ContactContent, ContactLinkItem } from "@/lib/types";

export const contactLinks: ContactLinkItem[] = [
  {
    label: "prasanna09112001@gmail.com",
    href: "mailto:prasanna09112001@gmail.com",
    icon: Mail,
  },
  {
    label: "+91 9750754966",
    href: "tel:+919750754966",
    icon: Phone,
  },
  {
    label: "Madurai, Tamil Nadu",
    href: "https://maps.google.com/?q=Madurai,Tamil+Nadu",
    icon: MapPin,
  },
  {
    label: "linkedin.com/in/prasanna0911",
    href: "https://www.linkedin.com/in/prasanna0911",
    icon: FaLinkedin,
  },
  {
    label: "github.com/prasanna0911",
    href: "https://github.com/prasanna0911",
    icon: FaGithub,
  },
  {
    label: "Download Resume PDF",
    href: "/resume.pdf",
    icon: FileDown,
  },
];

export const contactContent: ContactContent = {
  title: "Let's build something exceptional together.",
  description:
    "Whether you have an upcoming engineering role, a product in need of scalable full-stack architecture, or an idea to discuss, feel free to reach out directly.",
  availabilityBadge: "Currently open to new opportunities",
  links: contactLinks,
};
