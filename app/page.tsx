import SectionDivider from "@/components/section-divider";
import About from "@/components/sections/about";
import Intro from "@/components/sections/intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
}
