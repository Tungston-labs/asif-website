"use client";

import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  background: #ffffff;
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 21.875rem; 
  background-image: url("/images/portfolio-bg.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;

  @media (max-width: 64rem) { 
    height: 26rem;
  }

  @media (max-width: 48rem) { 
    height: 22rem;
  }

  @media (max-width: 30rem) { 
    height: 18rem;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
`;

export const HeroContent = styled.div`
  position: relative;
  padding-left: 5rem; 

  @media (max-width: 64rem) {
    padding-left: 5rem;
  }

  @media (max-width: 48rem) {
    padding-left: 2rem;
  }

  @media (max-width: 30rem) {
    padding-left: 1.5rem;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 3rem; 
  font-weight: 500;
  letter-spacing: 0.125rem; 
  margin: 0;
  font-family: var(--font-jost), sans-serif;

  @media (max-width: 64rem) {
    font-size: 3rem; 
  }

  @media (max-width: 48rem) {
    font-size: 2.25rem; 
  }

  @media (max-width: 30rem) {
    font-size: 1.75rem;
  }
`;