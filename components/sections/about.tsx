"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating in 2011 in{" "}
        <span className="font-medium">Management</span>, I have been involved
        with different local businesses in Albania. During the pandemic, I had a
        chance to pursue my passion for programming. I completed a self-learning
        course from CodeCademy for{" "}
        <span className="font-medium">Web Development</span>. Since then I have
        contributed to many projects, including websites and applications of
        different stacks and libraries. I am specialized in creating frontend
        applications in <span className="font-semibold">React/Typescript</span>{" "}
        and I am always curious about new frontend solutions.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        sightseeing, watching movies, excercising or playing football. I also
        enjoy{" "}
        <span className="font-medium">
          listening to music and playing some guitar.
        </span>
        .
      </p>
    </motion.section>
  );
}
