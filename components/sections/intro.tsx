"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import TypewriterText from "@/components/TypewriterText";
import AnimatedBadge from "@/components/AnimatedBadge";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] text-center scroll-mt-[100rem]"
    >
      {/* Profile image with gradient ring */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Gradient ring */}
            <div className="relative p-[3px] rounded-full animate-gradient" style={{ background: "var(--gradient-hero)", backgroundSize: "200% 200%" }}>
              <div className="rounded-full p-1 bg-[var(--color-surface)]">
                <Image
                  src="/alison_pic.png"
                  alt="Alison Tahiri"
                  width="300"
                  height="300"
                  quality="95"
                  priority={true}
                  className="h-32 w-32 rounded-full object-cover"
                />
              </div>
            </div>
            {/* Glow behind image */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30 -z-10 animate-glow-pulse"
              style={{ background: "var(--gradient-primary)" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Badge */}
      <motion.div
        className="mt-5 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <AnimatedBadge text={t.hero.badge} />
      </motion.div>

      {/* Main heading */}
      <motion.h1
        className="mb-6 mt-6 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="block text-3xl sm:text-5xl font-bold mb-3">
          {t.hero.greeting}
        </span>
        <span className="text-[var(--color-text-secondary)] text-xl sm:text-2xl">
          {t.hero.subtitle}{" "}
          <span className="gradient-text font-bold">{t.hero.highlight1}</span>
          {" & "}
          <span className="gradient-text font-bold">{t.hero.highlight2}</span>
        </span>
      </motion.h1>

      {/* Typewriter */}
      <motion.div
        className="mb-10 text-lg sm:text-xl text-[var(--color-text-secondary)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <TypewriterText
          prefix={t.hero.building}
          words={t.hero.typewriter as unknown as string[]}
          className="text-lg sm:text-xl"
        />
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-base font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="#contact"
          className="group px-7 py-3 flex items-center gap-2 rounded-full outline-none text-white transition-all hover:scale-105 active:scale-100 glow"
          style={{ background: "var(--gradient-primary)" }}
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {t.hero.cta}{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1.5 transition" />
        </Link>


        <div className="flex gap-2">
          <a
            className="glass p-4 flex items-center rounded-full hover:scale-110 active:scale-105 transition cursor-pointer text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
            href="https://www.linkedin.com/in/alison-tahiri-0421b2205/"
            target="_blank"
            rel="noopener"
            aria-label="Open Alison Tahiri's LinkedIn profile"
          >
            <BsLinkedin />
          </a>

          <a
            className="glass p-4 flex items-center text-[1.35rem] rounded-full hover:scale-110 active:scale-105 transition cursor-pointer text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            href="https://github.com/AlisonTahiri"
            target="_blank"
            rel="noopener"
            aria-label="Open Alison Tahiri's GitHub profile"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
