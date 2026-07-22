"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "../section-heading";
import { BsLightningCharge, BsCode, BsGlobe, BsBuilding } from "react-icons/bs";

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.5 },
  }),
};

export default function About() {
  const { ref } = useSectionInView("About");
  const { t } = useLanguage();

  const cards = [
    {
      icon: <BsLightningCharge className="text-xl" />,
      title: t.about.card1Title,
      text: t.about.card1Text,
    },
    {
      icon: <BsCode className="text-xl" />,
      title: t.about.card2Title,
      text: t.about.card2Text,
    },
    {
      icon: <BsGlobe className="text-xl" />,
      title: t.about.card3Title,
      text: t.about.card3Text,
    },
    {
      icon: <BsBuilding className="text-xl" />,
      title: t.about.card4Title,
      text: t.about.card4Text,
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="max-w-[52rem] scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t.about.title}</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="glass rounded-2xl p-6 skill-card group"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                style={{ background: "var(--gradient-primary)" }}
              >
                {card.icon}
              </div>
              <h3 className="font-semibold text-lg">{card.title}</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
