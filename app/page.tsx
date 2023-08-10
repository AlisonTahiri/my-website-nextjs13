import SectionDivider from "@/components/section-divider";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Intro from "@/components/sections/intro";
import Languages from "@/components/sections/languages";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <Languages />
      <SectionDivider hideDivider />
      <Experience />
      <SectionDivider hideDivider />
      <Contact />
    </main>
  );
}
