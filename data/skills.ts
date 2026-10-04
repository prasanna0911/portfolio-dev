import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiMaterialdesignicons,
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiJest,
  SiGit,
  SiTypescript,
  SiTailwindcss,
  SiPostman,
  SiNginx,

} from "react-icons/si";
import {
  Webhook,
  AppWindow,
  Layers,
  Network,
  Wallet,
  Coins,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import type { Skill, SectionHeadingData } from "@/lib/types";

export const skillsHeading: SectionHeadingData = {
  title: "Technology stack",
  description:
    "The languages, frameworks, and tools I reach for when building an application end to end.",
};

export const skills: Skill[] = [
  // Frontend
  {
    name: "JavaScript",
    category: "frontend",
    description: "ES6+, async/await & core DOM APIs",
    icon: SiJavascript,
  },
  {
    name: "React.js",
    category: "frontend",
    description: "Component-driven interfaces & hooks",
    icon: SiReact,
  },
  {
    name: "Next.js",
    category: "frontend",
    description: "SSR, App Router & scalable web applications",
    icon: SiNextdotjs,
  },
  {
    name: "JavaScript",
    category: "frontend",
    description: "ES6+, async/await & core DOM APIs",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    category: "frontend",
    description: "Strict types & scalable interfaces",
    icon: SiTypescript,
  },
  {
    name: "HTML5",
    category: "frontend",
    description: "Semantic, accessible document structure",
    icon: SiHtml5,
  },
  {
    name: "CSS3",
    category: "frontend",
    description: "Responsive layouts, styling & flex/grid",
    icon: SiCss,
  },
  {
    name: "Bootstrap",
    category: "frontend",
    description: "Responsive grid systems & UI components",
    icon: SiBootstrap,
  },
  {
    name: "Material UI",
    category: "frontend",
    description: "Enterprise component library & theme styling",
    icon: SiMaterialdesignicons,
  },
  {
    name: "Responsive Web Design",
    category: "frontend",
    description: "Fluid cross-device & mobile-first layouts",
    icon: AppWindow,
  },
  {
    name: "Context API",
    category: "frontend",
    description: "Predictable client-side state management",
    icon: Layers,
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    description: "Event-driven asynchronous server runtimes",
    icon: SiNodedotjs,
  },
  {
    name: "Fastify",
    category: "backend",
    description: "High-performance, low-overhead HTTP framework",
    icon: SiFastify,
  },
  {
    name: "Express.js",
    category: "backend",
    description: "Robust HTTP servers, middleware & routing",
    icon: SiExpress,
  },
  {
    name: "REST API Development",
    category: "backend",
    description: "Secure, structured JSON endpoints & error handling",
    icon: Webhook,
  },

  // Database
  {
    name: "MongoDB",
    category: "database",
    description: "Document storage, collections & aggregations",
    icon: SiMongodb,
  },
  {
    name: "Redis",
    category: "database",
    description: "In-memory caching, pub/sub & fast key-value storage",
    icon: SiRedis,
  },
  {
    name: "PostgreSQL",
    category: "database",
    description: "Relational data modeling & schema architecture",
    icon: SiPostgresql,
  },

  // Blockchain / Web3
  {
    name: "Web3.js",
    category: "web3",
    description: "EVM interaction, smart contracts & address generation",
    icon: Network,
  },
  {
    name: "Alchemy",
    category: "web3",
    description: "Node infrastructure & webhook-based fund tracking",
    icon: Cpu,
  },
  {
    name: "Wallet Integration",
    category: "web3",
    description: "Custodial wallets, deposit & withdrawal processing",
    icon: Wallet,
  },
  {
    name: "Crypto Payments (USDT)",
    category: "web3",
    description: "USDT payment rails, settlement & transaction confirmation",
    icon: Coins,
  },

  // Testing & Tools
  {
    name: "Jest",
    category: "tools",
    description: "Test framework for matching engines & trading logic",
    icon: SiJest,
  },
  {
    name: "Unit Testing",
    category: "tools",
    description: "Automated test coverage for core business algorithms",
    icon: CheckCircle2,
  },
  {
    name: "Git",
    category: "tools",
    description: "Version control & collaborative branch workflows",
    icon: SiGit,
  },

  {
    name: "Postman",
    category: "tools",
    description: "API testing, automated suites & collections",
    icon: SiPostman,
  },
  {
    name: "Nginx",
    category: "tools",
    description: "Reverse proxy, static caching & SSL config",
    icon: SiNginx,
  },
  {
    name: "VS Code",
    category: "tools",
    description: "Primary development environment & debugging",
    icon: AppWindow,
  },

];

export const skillCategories: {
  label: string;
  value: Skill["category"] | "all";
}[] = [
    { label: "All", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Databases", value: "database" },
    { label: "Web3 & Blockchain", value: "web3" },
    { label: "Testing & Tools", value: "tools" },
  ];
