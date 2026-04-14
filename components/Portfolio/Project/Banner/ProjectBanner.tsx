"use client";

import React from "react";
import {
  Section,
  Container,
  LocationTag,
  Heading,
  Highlight,
  Description,
} from "./ProjectBanner.style";

const Banner = () => {
  return (
    <Section>
      <Container>
        <LocationTag>OUR PORTFOLIO</LocationTag>

        <Heading>
          Explore Our <Highlight>Latest Projects</Highlight>, <br />
          Where <Highlight>Innovation</Highlight> Meets Luxury
        </Heading>

        <Description>
          In Bangalore’s fast-growing metropolitan environment, we provide
          innovative solutions through our professional architecture company.
          Our modern residential architects and architectural design firm focus
          on sustainability, spatial efficiency, and contemporary living.
        </Description>
      </Container>
    </Section>
  );
};

export default Banner;
