"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ProjectTabs from "./ProjectsTab";
import ProjectsGrid from "./ProjectsGrid";
import { Section } from "./Projects.styled";

const ProjectsSection = () => {
  const [activeLocation, setActiveLocation] =
    useState("PAYYANUR");

  return (
    <Section>
      <SectionHeader />

      <ProjectTabs
        active={activeLocation}
        onChange={setActiveLocation}
      />

      <ProjectsGrid location={activeLocation} />
    </Section>
  );
};

export default ProjectsSection;
