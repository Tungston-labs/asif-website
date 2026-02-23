"use client";

import React, { useState } from "react";
import { Container, Wrapper } from "./projects.style";
import { projectsData } from "./projects.data";
import LocationSidebar from "./LocationSidebar";
import GalleryGrid from "./GalleryGrid";

const ProjectsPage = () => {
    const [selectedLocation, setSelectedLocation] = useState("ALL");

    const locations = ["ALL", ...projectsData.map((item) => item.location)];

    const filteredImages =
        selectedLocation === "ALL"
            ? projectsData.flatMap((item) => item.images)
            : projectsData.find((item) => item.location === selectedLocation)
                ?.images || [];

    return (
        <Container>
            <Wrapper>
                <LocationSidebar
                    locations={locations}
                    selected={selectedLocation}
                    onSelect={setSelectedLocation}
                />
                <GalleryGrid images={filteredImages} />
            </Wrapper>
        </Container>
    );
};

export default ProjectsPage;