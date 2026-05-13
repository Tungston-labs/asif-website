"use client";

import { useEffect, useState } from "react";
import { projects } from "./Projects.data";
import ProjectCard from "./ProjectsCard";
import {
  Grid,
  LocationTitle,
  LocationDescription,
  PortButton,
  HeaderGrid,
  GridSection,
  SliderTrack,
} from "./Projects.styled";
import { useRouter } from "next/navigation";

interface Props {
  location: string;
}

const ProjectsGrid = ({ location }: Props) => {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const project = projects.find((p) => p.location === location);

  if (!project || !mounted) return null;

  const loopImages = [...project.images, ...project.images];

  return (
    <>
      <GridSection>
        <Grid>
          <SliderTrack>
            {loopImages.map((image, index) => (
              <ProjectCard
                key={index}
                image={image || ""}
                title={project.title || ""}
              />
            ))}
          </SliderTrack>
        </Grid>

        <PortButton onClick={() => router.push("/portfolio")}>
          SEE PORTFOLIO
        </PortButton>
      </GridSection>
    </>
  );
};

export default ProjectsGrid;
