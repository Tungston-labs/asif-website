"use client";

import Navbar from "@/components/Navbar";
import {
  HeroSection,
  Container,
  Title,
  Subtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "./herosection.styles";

const Hero = () => {
  return (
    <>
    <Navbar/>
    <HeroSection>
      <Container>
        <Title>
          VISIONARY <span>ARCHITECT</span>
          <br />
          DESIGNED FOR <span>THE WAY</span> YOU LIVE
        </Title>

        <Subtitle>
          We design thoughtful spaces that reflect your lifestyle as a
          professional architecture firm
        </Subtitle>

        <ButtonGroup>
          <PrimaryButton>KNOW MORE</PrimaryButton>
          <SecondaryButton>EXPLORE PROJECTS</SecondaryButton>
        </ButtonGroup>
      </Container>
    </HeroSection>
    </>
  );
};

export default Hero;
