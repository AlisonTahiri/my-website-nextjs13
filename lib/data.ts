import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaCalculator } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import corpcommentImg from "@/public/corpcomment.png";
import wolftechWebsite from "@/public/wolf-app.png";
import wolfApp from "@/public/wolf-website.png";

// ===== Navigation =====
export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

// ===== Experience (chronological, newest first) =====
export const experiencesData = [
  {
    title: "Senior Accountant",
    company: "Touch Support",
    location: "Remote",
    description:
      "Promoted from Junior to Senior Accountant within 1.5 years. Maintaining a dual-focus workflow, combining technical development in the JavaScript ecosystem alongside financial responsibilities.",
    icon: React.createElement(FaCalculator),
    date: "Nov 2023 — Present",
  },
  {
    title: "Front-End Developer",
    company: "Wolf Technologies",
    location: "Tirana, Albania",
    description:
      "Built frontend applications from scratch for internal management systems. Mentored junior developers, consulted on architectural decisions, and delivered scalable React-based applications.",
    icon: React.createElement(FaReact),
    date: "Jan 2023 — Jun 2024",
  },
  {
    title: "Software Project Lead & Full-Stack Developer",
    company: "Self-employed / Freelance",
    location: "Remote",
    description:
      "Architected mobile-first platforms, engineered PWAs with offline-first capabilities, and optimized legacy web applications achieving Lighthouse scores above 90.",
    icon: React.createElement(HiCode),
    date: "Mar 2020 — Present",
  },
] as const;

// ===== Projects =====
export const projectsData = [
  {
    title: "Deutschy — German Learning Platform",
    description:
      "A mobile-first German language learning platform built with modern React and optimized for UI/UX performance.",
    tags: ["React", "TypeScript", "Tailwind", "Mobile-First"],
    imageUrl: corpcommentImg,
    liveUrl: "https://perkthyesi.vercel.app/",
  },
  {
    title: "Internal Management System",
    description:
      "Enterprise-grade frontend for a company internal management system, built from scratch with complex data flows.",
    tags: ["React", "Chakra UI", "React Query", "Axios", "React Hook Form"],
    imageUrl: wolftechWebsite,
    liveUrl: null,
  },
  {
    title: "Wolf Technologies Website",
    description:
      "Corporate website with form validations, meeting scheduling via Calendly, and optimized performance.",
    tags: ["Next.js", "TypeScript", "Tailwind", "React Hook Form"],
    imageUrl: wolfApp,
    liveUrl: null,
  },
] as const;

// ===== Skills (grouped by category) =====
export const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Styling",
    skills: ["Tailwind CSS", "shadcn/ui", "Material UI", "Chakra UI"],
  },
  {
    name: "State & Data",
    skills: ["Zustand", "React Query", "React Hook Form", "Axios"],
  },
  {
    name: "Tooling",
    skills: ["Git", "Vite", "Astro.js", "Framer Motion"],
  },
  {
    name: "Backend & DB",
    skills: ["Node.js", "Supabase", "PowerSync", "SQLite", "Prisma"],
  },
] as const;

// Flat list for backward compat
export const skillsData = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Git", "Tailwind CSS", "shadcn/ui", "Chakra UI",
  "Material UI", "Zustand", "React Query", "Vite", "Astro.js",
  "Framer Motion", "Supabase", "PowerSync", "SQLite", "Prisma",
] as const;

// ===== Languages =====
export const languagesData = [
  { name: "Albanian", level: 10, flagImage: "/flags/albanian-flag.png" },
  { name: "English", level: 9, flagImage: "/flags/us-flag.png" },
  { name: "Italian", level: 8, flagImage: "/flags/italian-flag.png" },
  { name: "German", level: 7, flagImage: "/flags/german-flag.png" },
  { name: "Turkish", level: 5, flagImage: "/flags/turkish-flag.png" },
] as const;

// ===== AI Chatbot responses =====
export const chatbotResponses: Record<string, string> = {
  greeting:
    "Hey there! 👋 I'm Alison's AI assistant. Ask me about his skills, experience, or availability!",
  skills:
    "Alison specializes in the React ecosystem — React, Next.js, TypeScript — with deep experience in Tailwind, Zustand, React Query, and offline-first architectures using PowerSync & SQLite.",
  experience:
    "Alison has worked as a Front-End Developer at Wolf Technologies, currently serves as Senior Accountant at Touch Support (while continuing development), and has been freelancing since 2020.",
  availability:
    "Alison is currently available for projects! He's particularly interested in React/Next.js roles and opportunities in Germany.",
  education:
    "Alison holds a Bachelor's in Management from SUNY and completed the Web Development Path at Codecademy. He's a certified B2 German speaker.",
  languages:
    "Alison speaks 5 languages: Albanian (native), English (C2), Italian (C1), Turkish (B1), and German (A2-B1, actively learning).",
  tools:
    "Alison actively uses AI-powered development tools including Antigravity IDE, Claude, and Google Stitch for design workflows. He stays current with the latest AI-assisted development trends.",
  contact:
    "You can reach Alison through the contact form on this page, or connect on LinkedIn. He typically responds within 24 hours.",
  default:
    "I'm not sure about that! Try asking about Alison's skills, experience, availability, languages, or tools he uses.",
};

// Keywords to match user questions to responses
export const chatbotKeywords: Record<string, string[]> = {
  skills: ["skill", "tech", "stack", "react", "next", "typescript", "framework", "what do", "technologies", "können", "fähigkeiten"],
  experience: ["experience", "work", "job", "career", "wolf", "touch", "erfahrung", "arbeit"],
  availability: ["available", "hire", "freelance", "project", "work with", "verfügbar", "projekt"],
  education: ["education", "degree", "study", "university", "school", "ausbildung", "studium"],
  languages: ["language", "speak", "sprache", "sprechen", "albanian", "german", "italian"],
  tools: ["tool", "ai", "antigravity", "claude", "stitch", "ide", "werkzeug"],
  contact: ["contact", "reach", "email", "message", "kontakt"],
};
