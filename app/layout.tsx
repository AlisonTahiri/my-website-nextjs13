import BgDecorator from "@/components/BgDecorator";
import GridPattern from "@/components/GridPattern";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/sections/header";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/sections/footer";
import ThemeSwitch from "@/components/theme-switcher";
import AIChatWidget from "@/components/AIChatWidget";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alisontahiri.al"),
  title: "Alison Tahiri — Front-End Developer & Software Engineer",
  description:
    "Front-End Developer specializing in React, Next.js, and TypeScript. Building scalable, performant web applications with modern tools and AI-powered workflows.",
  keywords: [
    "Alison Tahiri",
    "portfolio",
    "front-end developer",
    "React",
    "Next.js",
    "TypeScript",
    "web developer",
    "software engineer",
  ],
  openGraph: {
    title: "Alison Tahiri — Front-End Developer & Software Engineer",
    description:
      "Front-End Developer specializing in React, Next.js, and TypeScript. Building scalable, performant web applications.",
    url: "https://alisontahiri.al",
    siteName: "Alison Tahiri",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`scroll-smooth! ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="canonical" href="https://alisontahiri.al/" />
      </head>
      {/* Google Tag Manager Snippet */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      <body
        className={`${inter.className} relative pt-28 sm:pt-36`}
        style={{
          background: "var(--color-surface)",
          color: "var(--color-text-primary)",
        }}
      >
        <Providers>
          <GridPattern />
          <BgDecorator />
          <Header />
          {children}
          <Footer />
          <ThemeSwitch />
          <AIChatWidget />
        </Providers>
        <Toaster position="top-right" />

        {/* Google Tag Manager No JS case */}
        {GTM_ID && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
            }}
          />
        )}
      </body>
    </html>
  );
}
