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
          A blend of contemporary elegance and comfort, this living room design
          showcases the expertise of experienced residential architects,
          combining sleek furniture with thoughtful spatial planning by
          professional architecture firms.
        </Description>
      </Container>
    </Section>
  );
};

export default Banner;
