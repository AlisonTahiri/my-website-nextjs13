"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { t } = useLanguage();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 max-w-[42rem]">
      <SectionHeading>{t.experience.title}</SectionHeading>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-transparent" />

        <div className="flex flex-col gap-8">
          {experiencesData.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-14"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[12px] top-6 w-[18px] h-[18px] rounded-full border-[3px] border-[var(--color-primary)] bg-[var(--color-surface)]">
                <div className="absolute inset-0 rounded-full animate-badge-pulse" />
              </div>

              {/* Card */}
              <div className="glass rounded-2xl p-6 skill-card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]">
                    {item.date}
                  </span>
                </div>
                <p className="text-sm font-medium text-[var(--color-primary)] mb-2">
                  {item.company} · {item.location}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
