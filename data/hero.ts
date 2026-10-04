import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFastify,
  SiExpress,
  SiMongodb,
  SiRedis,
} from "react-icons/si";
import type {
  HeroData,
  HeroPipelineStep,
  HeroTechBadge,
  HeroTerminalLine,
} from "@/lib/types";

export const techBadges: HeroTechBadge[] = [
  { label: "React.js", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "JavaScript", icon: SiJavascript },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Fastify", icon: SiFastify },
  { label: "Express.js", icon: SiExpress },
  { label: "MongoDB", icon: SiMongodb },
  { label: "Redis", icon: SiRedis },
];

export const heroPipeline: HeroPipelineStep[] = [
  {
    step: "01",
    label: "Trading & Matching Engines",
    detail: "Spot trading engines & Bybit integration",
    state: "done",
  },
  {
    step: "02",
    label: "Prediction Markets & Web3",
    detail: "Event market architecture & UMA Oracle",
    state: "done",
  },
  {
    step: "03",
    label: "Crypto Staking & Wallets",
    detail: "USDT custodial flows & Alchemy webhooks",
    state: "active",
  },
];

export const heroTerminalLines: HeroTerminalLine[] = [
  { text: "PASS test/trading/matching-engine.test.js", accent: "muted" },
  {
    text: "✓ order matching engine & UMA oracle resolution verified",
    accent: "muted",
  },
  {
    text: "✓ all tests passed · Web3 & Alchemy webhooks active",
    accent: "sky",
  },
];

export const heroData: HeroData = {
  avatar: "/images/profile.png",
  badge: "Full Stack Developer · Madurai",
  heading: {
    line1: "Building digital systems",
    highlight: "scale reliably.",
  },
  description:
    "Full Stack Developer with professional experience building web applications using React.js, Next.js, Node.js, Fastify, and Express.js — specializing in trading platforms, order matching engines, Web3/wallet integrations, and full-stack development.",
  cta: {
    primary: { label: "View My Work", href: "#projects" },
    secondary: { label: "Let's Connect", href: "#contact" },
  },
  techBadges,
  pipeline: heroPipeline,
  terminal: {
    title: "system.pipeline",
    command: "$ npm test -- --coverage",
    lines: heroTerminalLines,
  },
  deployment: {
    title: "Deployment status",
    subtitle: "production · main · live",
    status: "active",
  },
};
