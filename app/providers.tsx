"use client";

import ActiveSectionContextProvider from "@/context/active-section-context";
import { Locale, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import React from "react";

type Props = {
  children: React.ReactNode;
  locale: Locale;
};

export const Providers = ({ children, locale }: Props) => {
  return (
    <NextIntlClientProvider locale={locale}>
      <ActiveSectionContextProvider locale={locale}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </ActiveSectionContextProvider>
    </NextIntlClientProvider>
  );
};
