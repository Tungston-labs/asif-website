"use client";

import { TabsWrapper, Tab } from "./Projects.styled";
import { useState } from "react";

const locations = [
  "PAYYANUR",
  "KOTTAYAM",
  "VENNALA",
  "MANNARKAD",
  "KANNUR",
  "TIRUR",
  "ALAPPUZHA",
  'MALAPPURAM',
  "PALAKKAD",
  
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
          $active={active === loc}
          onClick={() => onChange(loc)}
        >
          {loc}
        </Tab>
      ))}
    </TabsWrapper>
  );
};

export default ProjectTabs;
