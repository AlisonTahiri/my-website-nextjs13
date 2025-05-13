"use client";

import { links } from "@/lib/data";
import { SectionName } from "@/lib/types";
import { Locale } from "next-intl";
import React, { createContext, useContext, useState } from "react";

type ActiveSectionContextType = {
  activeSection: SectionName[Locale];
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName[Locale]>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

type Props = {
  children: React.ReactNode;
  locale: Locale;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
  locale,
}: Props) {
  const homeLink = links.find((link) => link.hash === "#home");

  const [activeSection, setActiveSection] = useState<SectionName[Locale]>(
    homeLink ? homeLink.name[locale] : "Home"
  );

  console.log({ activeSection });

  // track this to temporarily disable react-intersection-observer
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
