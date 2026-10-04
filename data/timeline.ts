import type { TimelineItem } from "@/lib/types";

export const timeline: TimelineItem[] = [
  {
    id: "foundations",
    title: "Full-Stack Foundations",
    description:
      "Mastered core JavaScript, React.js, Node.js, and Express.js, engineering responsive interfaces and RESTful APIs.",
    status: "done",
  },
  {
    id: "trading-systems",
    title: "Trading Systems & Analytics",
    description:
      "Integrated MT4/MT5 trading data, built custom playbooks, user-to-user spot order matching, and Bybit API trade execution.",
    status: "done",
  },
  {
    id: "prediction-markets",
    title: "Prediction Markets Architecture",
    description:
      "Designed event market infrastructure modeled after Polymarket with UMA Optimistic Oracle automated resolution.",
    status: "done",
  },
  {
    id: "web3-staking",
    title: "Web3 & Crypto Staking",
    description:
      "Implemented custodial USDT wallets, automated deposit/withdrawal processing via Alchemy webhooks, and ROI calculations.",
    status: "active",
  },
  {
    id: "engine-optimization",
    title: "High-Throughput Order Matching",
    description:
      "Deepening performance optimizations for order matching engines with Fastify, Redis caching, and rigorous Jest test suites.",
    status: "active",
  },
  {
    id: "decentralized-protocols",
    title: "Decentralized Protocols",
    description:
      "Expanding on-chain protocol architectures and decentralized financial primitives for production scale.",
    status: "upcoming",
  },
];
