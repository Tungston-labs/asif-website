"use client";

import React, { useState } from "react";
import { Container, Wrapper } from "./projects.style";
import { projectsData } from "./projects.data";
import LocationSidebar from "./LocationSidebar";
import GalleryGrid from "./GalleryGrid";

const ProjectsPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("ALL");

  const locations = ["ALL", ...projectsData.map((item) => item.location)];

  const selectedProject =
    selectedLocation === "ALL"
      ? null
      : projectsData.find((item) => item.location === selectedLocation);

  const filteredImages =
    selectedLocation === "ALL"
      ? projectsData.flatMap((item) => item.images)
      : selectedProject?.images || [];

  return (
    <Container>
      <Wrapper>
        <LocationSidebar
          locations={locations}
          selected={selectedLocation}
          onSelect={setSelectedLocation}
        />
        <GalleryGrid
          images={filteredImages}
          selectedLocation={selectedLocation}
          socialLinks={selectedProject?.socialLinks}
        />
      </Wrapper>
    </Container>
  );
};

export default ProjectsPage;
