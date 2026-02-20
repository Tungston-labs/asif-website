"use client";

import React from "react";
import Navbar from "@/components/Navbar"; // keep your existing path
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
      {/* Existing Navbar */}
      <Navbar />

      {/* Hero Section */}
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
