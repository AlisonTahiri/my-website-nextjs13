"use client";

import { useLanguage } from "@/context/language-context";
import type { Locale } from "@/lib/translations";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const toggle = () => {
    setLocale(locale === "en" ? "de" : "en");
  };

  return (
    <motion.button
      onClick={toggle}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all glass hover:scale-105"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${locale === "en" ? "German" : "English"}`}
    >
      <span className={locale === "en" ? "opacity-100" : "opacity-50"}>EN</span>
      <span className="text-[var(--color-text-muted)]">/</span>
      <span className={locale === "de" ? "opacity-100" : "opacity-50"}>DE</span>
    </motion.button>
  );
}
