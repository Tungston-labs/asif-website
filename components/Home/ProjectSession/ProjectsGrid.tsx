"use client";

import { useRef, useState } from "react";
import { projects } from "./Projects.data";
import ProjectCard from "./ProjectsCard";
import {
  Grid,
  LocationTitle,
  LocationDescription,
  PortButton,
  HeaderGrid,
  GridSection,
} from "./Projects.styled";
import { useRouter } from "next/navigation";

interface Props {
  location: string;
}

const ProjectsGrid = ({ location }: Props) => {
  const filteredProjects = projects.filter((p) => p.location === location);
  const router = useRouter();
  const description = filteredProjects[0]?.description;

  const gridRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!gridRef.current) return;

    isDragging.current = true;

    gridRef.current.classList.add("dragging");

    startX.current = e.clientX;
    startScrollLeft.current = gridRef.current.scrollLeft;

    velocity.current = 0;

    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !gridRef.current) return;

    e.preventDefault();

    const dx = e.clientX - startX.current;

    velocity.current = dx;

    gridRef.current.scrollLeft = startScrollLeft.current - dx;
  };

  const momentumScroll = () => {
    if (!gridRef.current) return;

    velocity.current *= 0.92;

    gridRef.current.scrollLeft -= velocity.current;

    if (Math.abs(velocity.current) > 0.5) {
      animationFrame.current = requestAnimationFrame(momentumScroll);
    }
  };

  const stopDragging = () => {
    if (!gridRef.current) return;

    isDragging.current = false;

    gridRef.current.classList.remove("dragging");

    animationFrame.current = requestAnimationFrame(momentumScroll);
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
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
        >
          {project.images.map((image, index) => (
            <ProjectCard
              key={index}
              image={image || ""}
              title={project.title}
            />
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
