"use client";

import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background: #ffffff;
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 21.875rem; 
  background-image: url("/images/optimized/about/about-hero.webp"); 

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
`;

export const HeroContent = styled.div`
  position: relative;
  padding-left: 80px;

  @media (max-width: 768px) {
    padding-left: 30px;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 2px;
  margin: 0;

  font-family: var(--font-jost), sans-serif;

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;
