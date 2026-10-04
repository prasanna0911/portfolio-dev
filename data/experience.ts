import type {
  WorkExperience,
  EducationItem,
  CertificationItem,
  SectionHeadingData,
} from "@/lib/types";

export const experienceHeading: SectionHeadingData = {
  eyebrow: "Career & Experience",
  title: "Work experience & software engineering journey.",
  description:
    "Professional full-stack experience building web applications, crypto trading platforms, prediction markets, order matching engines, and Web3 integrations.",
};

export const workExperience: WorkExperience[] = [
  {
    id: "wealwin-technologies",
    role: "Full Stack Developer",
    company: "Wealwin Technologies Pvt Ltd",
    period: "Nov 2024 – Present",
    location: "Madurai, Tamil Nadu",
    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "Fastify",
      "MongoDB",
      "Redis",
      "Web3.js",
      "Alchemy",
      "Jest",
      "Bybit API",
    ],
    responsibilities: [
      "Worked as a full stack/backend developer across multiple crypto trading and prediction market platforms, using React.js, Next.js, Node.js, Fastify, MongoDB, and Redis.",
      "Diagnosed and resolved bugs across admin panels, user modules, and trading engines to improve platform stability and reliability.",
      "Designed and implemented order matching and trade execution logic, including third-party exchange integration with Bybit.",
      "Built prediction market functionality, including event market architecture, UMA oracle-based resolution systems, and automated crypto and sports market creation.",
      "Implemented blockchain/Web3 features such as custodial wallet integration, deposit/withdrawal processing, and Alchemy webhook-based fund tracking.",
      "Wrote unit tests using Jest to validate core trading and matching engine logic.",
    ],
    current: true,
  },
  {
    id: "jlvm-tech-solutions",
    role: "Full Stack Developer",
    company: "Shiv Technologies",
    period: "Feb 2024 – Oct 2024",
    location: "Madurai, Tamil Nadu",
    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material UI",
      "REST APIs",
    ],
    responsibilities: [
      "Developed a trading analytics and playbook platform using Next.js and Material UI, integrating trading data from multiple platforms including MT4 and MT5.",
      "Implemented private/public profile visibility controls and a responsive dark/light theme system with persistent user settings.",
      "Built a full stack e-commerce platform using React.js, Node.js, Express.js, and MongoDB, covering product listings, shopping cart, checkout, and account management.",
      "Collaborated across frontend and backend development to deliver responsive, production-ready web applications.",
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    id: "sacs-mavmm-engineering",
    degree: "Bachelor of Engineering",
    institution: "SACS MAVMM Engineering College",
    period: "2018 – 2022",
    grade: "CGPA: 7.9",
    highlights: ["Graduated with 7.9 CGPA"],
  },
  {
    id: "pasumalai-hsc",
    degree: "HSC",
    institution: "Pasumalai Higher Secondary School",
    period: "2017 – 2018",
    grade: "77%",
    highlights: ["Higher Secondary Certificate (77%)"],
  },
  {
    id: "pasumalai-sslc",
    degree: "SSLC",
    institution: "Pasumalai Higher Secondary School",
    period: "2015 – 2016",
    grade: "90%",
    highlights: ["Secondary School Leaving Certificate (90%)"],
  },
];

export const certificationsList: CertificationItem[] = [
  {
    id: "ace-academy-fullstack",
    title: "Full Stack Development",
    issuer: "Ace Software Training Academy",
    credentialId: "Certificate Number: ATSM-2343",
  },
];
