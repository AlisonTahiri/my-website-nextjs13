import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Remote",
    description:
      "I have been working as a freelancer since 2020 on projects of different sizes, from websites to adding features to web apps.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    location: "Tirana",
    description:
      "I have worked as a frontend developer for Wolf Technologies for almost two years now. ",
    icon: React.createElement(CgWorkAlt),
    date: "January 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SAAS for Bridges and Construction company",
    description:
      "I have worked as a frontend developer on this project for 6 months. ",
    tags: ["React", "MUI 5", "Javascript", "Typescript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Company Website",
    description: "I have created the Wolf Technologies website from scratch",
    tags: ["Next.js", "TypeScript", "Tailwind", "React Hook Form", "Yup"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Internal Company Management System",
    description:
      "I have built from scratch the frontend of our company internal management system.",
    tags: [
      "React",
      "Chakra UI",
      "React Query",
      "Axios",
      "React Hook Form",
      "Yup",
    ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Framer Motion",
] as const;
