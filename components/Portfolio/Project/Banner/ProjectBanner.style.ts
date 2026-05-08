"use client";

import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 6rem 5rem 0;

  @media (max-width: 1024px) {
    padding: 5rem 5rem 0;
  }

  @media (max-width: 768px) {
    padding: 5rem 2rem 0;
  }

  @media (max-width: 600px) {
    padding: 4rem 1.5rem 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto 0 0;

  @media (min-width: 1600px) {
    max-width: 92rem;
  }

  @media (min-width: 2200px) {
    max-width: 96rem;
  }

  @media (min-width: 2800px) {
    max-width: 100rem;
  }
`;

export const LocationTag = styled.span`
  position: relative;
  display: inline-block;
  padding: 0 1.25rem;
  margin-bottom: 1.5rem;
  color: #111;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.125rem;

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

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const Heading = styled.h2`
  max-width: 56.25rem;
  margin-bottom: 1.5rem;
  color: #111;
  font-size: 2.25rem;
  font-weight: 300;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Highlight = styled.span`
  font-weight: 500;
`;

export const Description = styled.p`
  max-width: 75.5rem;
  color: #555;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9375rem;
  }
`;
