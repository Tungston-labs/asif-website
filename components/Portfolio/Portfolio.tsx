"use client";

import React from "react";
import Navbar from "@/components/Navbar"; 
import {
  PageWrapper,
  HeroSection,
  HeroOverlay,
  HeroContent,
  Title,
} from "./Portfolio.style";

const Portfolio: React.FC = () => {
  return (
    <PageWrapper>
      <Navbar />
      <HeroSection>
        <HeroOverlay />

        <HeroContent>
          <Title>Portfolio</Title>
        </HeroContent>
      </HeroSection>
    </PageWrapper>
  );
};

export default Portfolio;
