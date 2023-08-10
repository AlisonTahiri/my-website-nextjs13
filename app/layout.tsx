import BgDecorator from "@/components/BgDecorator";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/sections/header";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/sections/footer";
import ThemeSwitch from "@/components/theme-switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alison Tahiri | Personal Portfolio",
  description:
    "Alison Tahiri is a web developer with more than 3 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <Providers>
          <Header />
          <BgDecorator />
          {children}
          <Footer />
          <ThemeSwitch />
        </Providers>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
