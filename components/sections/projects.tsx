"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { links, projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { Locale } from "next-intl";

type Props = {
  locale: Locale;
};

export default function Projects({ locale }: Props) {
  const sectionName =
    links.find((link) => link.hash === "#projects")?.name[locale] || "Projects";

  const { ref } = useSectionInView(sectionName, 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 ">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
