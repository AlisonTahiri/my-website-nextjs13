"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navKeys = [
  "home",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
] as const;

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleLinkClick = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    closeMobile();
  };

  return (
    <header className="z-[999] relative">
      {/* ===== DESKTOP NAV ===== */}
      <motion.nav
        className="hidden sm:flex fixed top-6 left-1/2 h-[3.25rem] rounded-full border border-[var(--color-border)] glass-strong shadow-lg shadow-black/[0.03] items-center px-6 z-[999]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <ul className="flex items-center gap-1 text-[0.82rem] font-medium h-full">
          {/* Logo */}
          <li className="flex items-center mr-2">
            <Link
              href="#home"
              className="font-bold text-lg gradient-text px-2"
              onClick={() => handleLinkClick("Home")}
            >
              AT
            </Link>
          </li>

          {/* Nav links */}
          {links.map((link, i) => {
            const isActive = activeSection === link.name;
            return (
              <li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
              >
                <Link
                  className={clsx(
                    "flex items-center justify-center px-3.5 py-1.5 rounded-full transition text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] relative z-10",
                    {
                      "text-[var(--color-text-primary)]!": isActive,
                    }
                  )}
                  href={link.hash}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {t.nav[navKeys[i]]}

                  {isActive && (
                    <motion.span
                      className="rounded-full absolute inset-0 -z-10"
                      style={{ background: "var(--color-glow)" }}
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}

          {/* Language Switcher */}
          <li className="flex items-center ml-1">
            <LanguageSwitcher />
          </li>
        </ul>
      </motion.nav>

      {/* ===== MOBILE NAV ===== */}

      {/* Mobile top bar */}
      <motion.div
        className="sm:hidden fixed top-0 left-0 right-0 h-16 glass-strong border-b border-[var(--color-border)] shadow-lg shadow-black/[0.03] flex items-center justify-between px-5 z-[1000]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Logo */}
        <Link
          href="#home"
          className="font-bold text-xl gradient-text"
          onClick={() => handleLinkClick("Home")}
        >
          AT
        </Link>

        {/* Hamburger / X button */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] cursor-pointer z-[1001]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            className="block w-5 h-[2px] rounded-full bg-[var(--color-text-primary)]"
            animate={
              mobileOpen
                ? { rotate: 45, y: 3.5 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block w-5 h-[2px] rounded-full bg-[var(--color-text-primary)]"
            animate={
              mobileOpen
                ? { rotate: -45, y: -3.5 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.25 }}
          />
        </button>
      </motion.div>

      {/* Mobile overlay + menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="sm:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
            />

            {/* Slide-down menu */}
            <motion.nav
              className="sm:hidden fixed top-16 left-0 right-0 z-[999] glass-strong border-b border-[var(--color-border)] shadow-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ul className="flex flex-col py-4 px-6 gap-1">
                {links.map((link, i) => (
                  <li key={link.hash}>
                    <Link
                      className={clsx(
                        "flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all",
                        activeSection === link.name
                          ? "text-[var(--color-primary)] bg-[var(--color-glow)]"
                          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-glow)]"
                      )}
                      href={link.hash}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {t.nav[navKeys[i]]}
                    </Link>
                  </li>
                ))}

                {/* Language switcher in mobile menu */}
                <li className="pt-3 mt-2 border-t border-[var(--color-border)]">
                  <div className="px-4 flex items-center justify-between">
                    <span className="text-sm text-[var(--color-text-muted)]">
                      Language
                    </span>
                    <div onClick={closeMobile}>
                      <LanguageSwitcher />
                    </div>
                  </div>
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
