import SectionDivider from "@/components/section-divider";
import About from "@/components/sections/about";
import Intro from "@/components/sections/intro";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
