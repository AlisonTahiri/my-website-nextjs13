"use client";

import ActiveSectionContextProvider from "@/context/active-section-context";
import LanguageProvider from "@/context/language-context";
import { ThemeProvider } from "next-themes";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <LanguageProvider>
      <ActiveSectionContextProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </ActiveSectionContextProvider>
    </LanguageProvider>
  );
};
