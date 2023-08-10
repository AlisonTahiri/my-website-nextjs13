"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { languagesData, skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import LanguageLevel from "../language-level";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 / (index + 1),
    },
  }),
};

export default function Languages() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="languages"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Languages I know</SectionHeading>
      <motion.ul
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="flex flex-wrap justify-center gap-2 text-gray-800"
      >
        {languagesData.map((lang, index) => (
          <li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
          >
            <div className="flex gap-1 items-center mb-1">
              <Image
                src={lang.flagImage}
                alt={lang.name}
                width={25}
                height={25}
              ></Image>
              <div className="text-lg">{lang.name}</div>
            </div>
            <LanguageLevel levelOverTen={lang.level} />
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
