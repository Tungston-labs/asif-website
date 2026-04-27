"use client";

import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 6rem 5rem 0 5rem; 
 @media (max-width: 1024px) {
  padding: 6rem 2rem 0 2rem; 
    }
  @media (max-width: 768px) {
  padding: 6rem 2rem 0 3rem;
    }
`;

export const Container = styled.div`
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    width: 90%;
    margin-left: -.5rem;
  }
`;

export const LocationTag = styled.span`
  position: relative;
  display: inline-block;
  font-size: 1rem; 
  letter-spacing: 0.125rem; 
  font-weight: 400;
  color: #111;
  margin-bottom: 1.5rem; 
  padding: 0 1.25rem; 

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.375rem; 
    width: 0.625rem; 
    height: 0.625rem;
    border-left: 0.125rem solid #c8a45a; 
    border-top: 0.125rem solid #c8a45a;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0.375rem; 
    width: 0.625rem;
    height: 0.625rem;
    border-right: 0.125rem solid #c8a45a;
    border-bottom: 0.125rem solid #c8a45a;
  }

  @media (max-width: 48rem) {
    font-size: 0.875rem;
  }
`;

export const Heading = styled.h2`
  font-size: 2.25rem; 
  font-weight: 300;
  line-height: 1.2;
  color: #111;
  margin-bottom: 1.5rem; 
  max-width: 56.25rem; 

  @media (max-width: 64rem) {
    font-size: 2rem;
  }

  @media (max-width: 48rem) {
    font-size: 1.75rem;
  }

  @media (max-width: 30rem) {
    font-size: 1.5rem;
  }
`;

export const Highlight = styled.span`
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 1.125rem; 
  line-height: 1.6; 
  font-weight: 300;
  color: #555;
  max-width: 75.5rem; 

  @media (max-width: 64rem) {
    font-size: 1rem;
  }

  @media (max-width: 48rem) {
    font-size: 0.9375rem;
  }
`;