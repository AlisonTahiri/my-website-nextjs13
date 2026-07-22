"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { languagesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Languages() {
  const { ref } = useSectionInView("Skills");
  const { t } = useLanguage();

  return (
    <section
      id="languages"
      ref={ref}
      className="max-w-[53rem] scroll-mt-28 text-center mb-10"
    >
      <SectionHeading>{t.languages.title}</SectionHeading>

      <div className="flex flex-wrap justify-center gap-4">
        {languagesData.map((lang, index) => (
          <motion.div
            key={lang.name}
            className="glass rounded-2xl px-5 py-4 flex flex-col items-center gap-3 min-w-[120px] skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Image
              src={lang.flagImage}
              alt={lang.name}
              width={36}
              height={36}
              className="rounded-full object-cover w-9 h-9"
            />
            <span className="font-medium text-sm">{lang.name}</span>

            {/* Circular progress indicator */}
            <div className="relative w-12 h-12">
              <svg className="w-12 h-12 -rotate-90" viewBox="0 0 44 44">
                {/* Background circle */}
                <circle
                  cx="22"
                  cy="22"
                  r="18"
                  fill="none"
                  stroke="var(--color-border)"
                  strokeWidth="3"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="22"
                  cy="22"
                  r="18"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${(lang.level / 10) * 113.1} 113.1`}
                  initial={{ strokeDashoffset: 113.1 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-[var(--color-text-secondary)]">
                {lang.level}/10
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
