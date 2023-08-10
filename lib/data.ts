import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import wolftechWebsite from "@/public/wolf-app.png";
import wolfApp from "@/public/wolf-website.png";

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
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    location: "Tirana",
    description:
      "I have worked as a frontend developer for Wolf Technologies for almost two years now. ",
    icon: React.createElement(FaReact),
    date: "January 2022 - present",
  },
] as const;

export const projectsData = [
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
    imageUrl: wolftechWebsite,
  },

  {
    title: "Company Website",
    description:
      "I have created the Wolf Technologies website from scratch, including forms and validations and also scheduling meetings with Calendly.",
    tags: ["Next.js", "TypeScript", "Tailwind", "React Hook Form", "Yup"],
    imageUrl: wolfApp,
  },

  {
    title: "SAAS for Bridges and Construction company",
    description:
      "I have worked as a frontend developer on this project for 6 months. ",
    tags: ["React", "MUI 5", "Javascript", "Typescript"],
    imageUrl: corpcommentImg,
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

export const languagesData = [
  {
    name: "Albanian",
    level: 10,
    flagImage: "/flags/albanian-flag.png",
  },

  {
    name: "English",
    level: 9,
    flagImage: "/flags/us-flag.png",
  },

  {
    name: "Italian",
    level: 7,
    flagImage: "/flags/italian-flag.png",
  },

  {
    name: "Turkish",
    level: 5,
    flagImage: "/flags/turkish-flag.png",
  },

  {
    name: "German",
    level: 3,
    flagImage: "/flags/german-flag.png",
  },
] as const;
