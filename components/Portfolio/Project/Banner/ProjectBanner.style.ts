"use client";

import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 3.125rem 0; /* 50px */

  @media (max-width: 48rem) {
    padding: 2rem 0;
  }
`;

export const Container = styled.div`
  width: 75rem; /* 1200px */
  margin: 0 auto;

  @media (max-width: 75rem) {
    width: 90%;
  }
`;

export const LocationTag = styled.span`
  position: relative;
  display: inline-block;
  font-size: 1rem; /* 16px */
  letter-spacing: 0.125rem; /* 2px */
  font-weight: 400;
  color: #111;
  margin-bottom: 1.875rem; /* 30px */
  padding: 0 1.25rem; /* 20px */

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.375rem; /* 6px */
    width: 0.625rem; /* 10px */
    height: 0.625rem;
    border-left: 0.125rem solid #c8a45a; /* 2px */
    border-top: 0.125rem solid #c8a45a;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0.375rem; /* 6px */
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
  font-size: 2.25rem; /* 36px */
  font-weight: 300;
  line-height: 1.3;
  color: #111;
  margin-bottom: 1.875rem; /* 30px */
  max-width: 56.25rem; /* 900px */

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
  font-size: 1.125rem; /* 18px */
  line-height: 1.5; /* 24px approx */
  font-weight: 300;
  color: #555;
  max-width: 87.5rem; /* 1400px */

  @media (max-width: 64rem) {
    font-size: 1rem;
  }

  @media (max-width: 48rem) {
    font-size: 0.9375rem;
  }
`;