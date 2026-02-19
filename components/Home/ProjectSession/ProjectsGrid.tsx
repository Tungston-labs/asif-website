"use client";

import { useRef, useState } from "react";
import { projects } from "./Projects.data";
import ProjectCard from "./ProjectsCard";
import { Grid } from "./Projects.styled";

interface Props {
  location: string;
}

const ProjectsGrid = ({ location }: Props) => {
  const filteredProjects = projects.filter(
    (p) => p.location === location
  );

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
    const walk = (x - startX) * 1.5; // drag speed
    gridRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Grid
      ref={gridRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </Grid>
  );
};

export default ProjectsGrid;
