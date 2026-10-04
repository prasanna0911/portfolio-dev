import type { Project, SectionHeadingData } from "@/lib/types";

export const projectsHeading: SectionHeadingData = {
  title: "Selected projects",
  description:
    "A mix of full-stack applications and focused tools — each built end to end, from data model to interface.",
};

export const projects: Project[] = [
  {
    id: "sonotrade-prediction-market",
    title: "Sonotrade — Prediction Market Platform",
    category: "Prediction Market & Web3",
    description:
      "Analyzed Polymarket's architecture to inform the design of the platform's order matching system. Designed and implemented the event market architecture. Developed the order matching engine and wrote unit tests using Jest to ensure system reliability.",
    image: "/images/project-placeholder-1.svg",
    technologies: [
      "Next.js",
      "Node.js",
      "Fastify",
      "MongoDB",
      "Redis",
      "Jest",
    ],
    featured: true,
  },
  {
    id: "finowiz-copy-trading",
    title: "Finowiz — Copy Trading & PAMM Strategy Platform (MT5)",
    category: "Copy Trading & PAMM Platform",
    description:
      "Resolved bugs across the admin panel and user modules to improve platform stability and reliability. Diagnosed and fixed critical issues within the copy trading engine, ensuring accurate trade replication across accounts. Supported ongoing maintenance of MT5-based copy trading and PAMM strategy functionality.",
    image: "/images/project-placeholder-2.svg",
    technologies: [
      "React.js",
      "Node.js",
      "MT5 Integration",
      "REST APIs",
      "Express.js",
      "MongoDB"
    ],
  },
  {
    id: "bixverse-spot-trading",
    title: "Bixverse — Spot Trading Application",
    category: "Spot Trading & Exchange",
    description:
      "Worked as backend developer across the spot trading module, covering user-to-user trading and Bybit integration. Built and optimized the order matching and order placement engine for user-to-user spot trades. Integrated Bybit APIs for trade execution and account synchronization, and resolved bugs to improve trading reliability.",
    image: "/images/project-placeholder-3.svg",
    technologies: [
      "Node.js",
      "MongoDB",
      "Redis",
      "Bybit API",
    ],
  },
  {
    id: "pagar-crypto-staking",
    title: "Pagar — Crypto Staking Platform",
    category: "Crypto Staking & DeFi",
    description:
      "Implemented staking plans, purchase flows, and ROI return calculations. Built a multi-level referral system to support user acquisition and rewards. Integrated a custodial USDT wallet, including deposit and withdrawal functionality via Alchemy webhooks, and implemented Web3 wallet address generation and fund management.",
    image: "/images/project-placeholder-4.svg",
    technologies: [
      "Node.js",
      "Web3.js",
      "Alchemy",
      "USDT Payments",
    ],
  },
  {
    id: "predictx-prediction-market",
    title: "Predictx — Prediction Market Platform",
    category: "Prediction Market & Web3",
    description:
      "Built a prediction market platform using an event market architecture and trading system similar to Polymarket. Integrated the UMA Optimistic Oracle for market initialization and event resolution. Developed automated crypto and sports event workflows, and built a Polymarket event mirror module syncing live events in real time.",
    image: "/images/project-placeholder-1.svg",
    technologies: [
      "Next.js",
      "Node.js",
      "Fastify",
      "MongoDB",
      "Redis",
      "UMA Oracle",
    ],
  },
  {
    id: "incuflex-incubator-saas",
    title: "Incuflex — Incubator & Startup Program Management Platform",
    category: "B2B SaaS Platform",
    description:
      "Built a B2B SaaS platform enabling incubators to manage startup programs, bringing founders, mentors, judges, and investors into one shared workspace. Implemented multi-tenant architecture with separate subdomains per incubator. Led end-to-end development of Competition and Idea Bank flows, and contributed to Incubation workflows.",
    image: "/images/project-placeholder-2.svg",
    technologies: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Multi-Tenant",
    ],
    liveUrl: "https://dreamswed.com",

  },
  {
    id: "tradedge-trading-platform",
    title: "Tradedge — Trading Analytics & Playbook Platform",
    category: "Trading Analytics & Fintech",
    description:
      "Developed a trading application aggregating trading data from multiple platforms, including MT4 and MT5. Implemented a Playbook section containing trading strategies and risk management techniques. Added private/public profile visibility controls and a responsive dark/light theme system with persistent user settings.",
    image: "/images/tradedge.png",
    technologies: [
      "Next.js",
      "Material UI",
      "MT4/MT5 Data",
      "State Management",
    ],
  },
  {
    id: "fullstack-ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Full Stack E-Commerce",
    description:
      "Built a full stack e-commerce platform using React.js, Node.js, Express.js, and MongoDB, covering product listings, shopping cart, checkout, and account management. Developed detailed product listing pages with descriptions, images, pricing, and user account management with order tracking.",
    image: "/images/project-placeholder-3.svg",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Netlify",
    ],
    liveUrl: "https://shopsy-ecomfront.netlify.app",

  },
];

export const featuredProject = projects.find((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);
