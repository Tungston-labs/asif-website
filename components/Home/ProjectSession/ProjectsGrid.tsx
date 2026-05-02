"use client";

import { useRef, useState } from "react";
import { projects } from "./Projects.data";
import ProjectCard from "./ProjectsCard";
import {
  Grid,
  HeaderWrapper,
  LocationTitle,
  LocationDescription,
  PortButton,
  HeaderGrid,
  GridSection,
} from "./Projects.styled";
import { Button } from "@/components/Navbar/navbar.styles";
import { useRouter } from "next/navigation";

interface Props {
  location: string;
}

const ProjectsGrid = ({ location }: Props) => {
  const filteredProjects = projects.filter((p) => p.location === location);
  const router = useRouter();
  const description = filteredProjects[0]?.description;

  const gridRef = useRef<HTMLDivElement>(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!gridRef.current) return;

    setIsDown(true);
    setStartX(e.pageX - gridRef.current.offsetLeft);
    setScrollLeft(gridRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !gridRef.current) return;

    e.preventDefault();

    const x = e.pageX - gridRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    gridRef.current.scrollLeft = scrollLeft - walk;
  };
  const project = projects.find((p) => p.location === location);

  if (!project) return null;
  return (
    <>
      <GridSection>
        <div className="v-line v-left" />
        <div className="v-line v-right" />
        <HeaderGrid>
          <LocationTitle>{project.location}</LocationTitle>
          <LocationDescription>{project.description}</LocationDescription>
        </HeaderGrid>
        <Grid
          ref={gridRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {project.images.map((image, index) => (
            <ProjectCard key={index} image={image} title={project.title} />
          ))}
        </Grid>

        <PortButton onClick={() => router.push("/portfolio")}>
          See full portfolio
        </PortButton>
        <div className="bottom-line" />
      </GridSection>
    </>
  );
};

export default ProjectsGrid;
