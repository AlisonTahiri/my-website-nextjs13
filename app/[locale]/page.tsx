import SectionDivider from "@/components/section-divider";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Intro from "@/components/sections/intro";
import Languages from "@/components/sections/languages";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import { Locale } from "next-intl";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <main className="flex flex-col items-center px-4">
      <Intro locale={locale} />
      <SectionDivider />
      <About locale={locale} />
      <SectionDivider />
      <Projects locale={locale} />
      <SectionDivider />
      <Skills locale={locale} />
      <Languages />
      <SectionDivider hideDivider />
      <Experience locale={locale} />
      <SectionDivider hideDivider />
      <Contact locale={locale} />
    </main>
  );
}
