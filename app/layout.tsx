import BgDecorator from "@/components/BgDecorator";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/sections/header";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/sections/footer";
import ThemeSwitch from "@/components/theme-switcher";
import Script from "next/script";

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
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html suppressHydrationWarning lang="en" className="!scroll-smooth">
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
