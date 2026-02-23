"use client";

import React from "react";
import Navbar from "@/components/Navbar"; 
import {
  PageWrapper,
  HeroSection,
  HeroOverlay,
  HeroContent,
  Title,
} from "./About.style";

const AboutPage: React.FC = () => {
  return (
    <PageWrapper>
      <Navbar />
      <HeroSection>
        <HeroOverlay />

        <HeroContent>
          <Title>ABOUT US</Title>
        </HeroContent>
      </HeroSection>
    </PageWrapper>
  );
};

export default AboutPage;
