"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { t } = useLanguage();

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 max-w-[56rem]">
      <SectionHeading>{t.projects.title}</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
