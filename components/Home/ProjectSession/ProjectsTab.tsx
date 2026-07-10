"use client";

import { TabsWrapper, Tab } from "./Projects.styled";
import { useState } from "react";

const locations = [
  "KOTTAYAM",
  "ALUVA",
  "KANNUR - 1",
  "MANNARKAD",
  "IRITTY",
  "VARAPPUZHA",
  "BANGLORE",
  "KANNUR",
  "KOOTHATTUKULAM",
  
];
interface Props {
  active: string;
  onChange: (location: string) => void;
}

const ProjectTabs = ({ active, onChange }: Props) => {
  return (
    <TabsWrapper>
      {locations.map((loc) => (
        <Tab
          key={loc}
          type="button"
          $active={active === loc}
          aria-pressed={active === loc}
          onClick={() => onChange(loc)}
        >
          {loc}
        </Tab>
      ))}
    </TabsWrapper>
  );
};

export default ProjectTabs;
