"use client";

import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import React from "react";

type Props = {
  children: React.ReactNode;
  locale: string;
};

export const Providers = ({ children, locale }: Props) => {
  return (
    <NextIntlClientProvider locale={locale}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </NextIntlClientProvider>
  );
};
