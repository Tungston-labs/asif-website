"use client";

import React from "react";
import Navbar from "@/components/Navbar"; 
import {
  PageWrapper,
  HeroSection,
  HeroOverlay,
  HeroContent,
  Title,
} from "./Contact.style";

const Contact: React.FC = () => {
  return (
    <PageWrapper>
      
      <Navbar />

      <HeroSection>
        <HeroOverlay />

        <HeroContent>
          <Title>CONTACT US</Title>
        </HeroContent>
      </HeroSection>
    </PageWrapper>
  );
};

export default Contact;
