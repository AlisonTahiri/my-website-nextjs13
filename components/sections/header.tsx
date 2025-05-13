"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import ThemeSwitch from "@/components/theme-switcher";
import LanguagePicker from "../language-picker";
import NavLink from "../navigation-link";
import { Locale } from "next-intl";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header({ locale }: { locale: Locale }) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-3">
          {links.map((link) => {
            // console.log({ activeSection, linkName: link.name[locale] });
            return (
              <NavLink
                key={link.hash}
                hash={link.hash}
                isActive={activeSection === link.name[locale]}
                onClick={() => {
                  setActiveSection(link.name[locale]);
                  setTimeOfLastClick(Date.now());
                }}
                name={link.name[locale]}
              />
            );
          })}

          <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <ThemeSwitch />
          </motion.li>

          <LanguagePicker />
        </ul>
        <div className="absolute -right-22 top-3"></div>
      </nav>
    </header>
  );
}
