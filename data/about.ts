import { Layers, Sparkles, CreditCard, ShieldCheck } from "lucide-react";
import type { AboutData, AboutFocusPoint, AboutProfile, AboutStat } from "@/lib/types";

export const aboutStats: AboutStat[] = [
  { label: "Experience", value: "2+ Years" },
  { label: "Projects Shipped", value: "8 Systems" },
  { label: "Core Stack", value: "React · Node · Web3" },
  { label: "Status", value: "Available" },
];

export const focusPoints: AboutFocusPoint[] = [
  {
    icon: Layers,
    title: "Trading & Matching Engines",
    description:
      "Designing order matching engines, Bybit exchange integrations, MT4/MT5 trade analytics, and user-to-user spot trade execution.",
  },
  {
    icon: Sparkles,
    title: "Prediction Markets & Architecture",
    description:
      "Architecting event markets, UMA Optimistic Oracle resolution, and automated market creation workflows modeled on Polymarket.",
  },
  {
    icon: CreditCard,
    title: "Web3, Wallets & Crypto Staking",
    description:
      "Integrating custodial USDT wallets, Alchemy webhooks for fund tracking, Web3 address generation, and staking ROI calculations.",
  },
  {
    icon: ShieldCheck,
    title: "Full Stack Web & UI Engineering",
    description:
      "Building responsive, high-performance web applications using React.js, Next.js, Material UI, Fastify, and Express with MongoDB and Redis.",
  },
];

export const aboutProfile: AboutProfile = {
  fileName: "profile.json",
  tabNumber: "01",
  image: "/images/profile.png",
  availability: "Open to opportunities",
  name: "Prasanna M",
  title: "Full Stack Developer · Madurai, TN",
  attributes: [
    { key: "role", value: "Full Stack Developer" },
    { key: "experience", value: "Commercial Experience" },
    { key: "focus", value: "React.js · Next.js · Node.js · Fastify" },
    { key: "databases", value: "MongoDB · Redis · PostgreSQL" },
    { key: "location", value: "Madurai, Tamil Nadu" },
  ],
};

export const aboutBio = {
  heading: {
    prefix: "A developer who cares about the ",
    highlight: "whole system",
    suffix: ", not just the interface.",
  },
  paragraphs: [
    "I'm a Full Stack Developer with professional experience building web applications using React.js, Next.js, Node.js, Fastify, and Express.js. Skilled in JavaScript, MongoDB, Redis, REST APIs, and Web3/blockchain integrations.",
    "My work spans developing trading platforms (copy trading, PAMM, spot trading, prediction markets), crypto staking systems, and e-commerce applications, with strong exposure to order matching engines, wallet integrations, and full-stack bug resolution.",
  ],
};

export const aboutData: AboutData = {
  heading: aboutBio.heading,
  paragraphs: aboutBio.paragraphs,
  focusPoints,
  profile: aboutProfile,
  stats: aboutStats,
};
