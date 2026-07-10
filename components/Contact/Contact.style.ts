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
  background-image: url("/images/Contact-bg.svg");
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
  padding-left: 5rem; 

  @media (max-width: 48rem) {
    padding-left: 1.875rem; 
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
`;


export const Section = styled.section`
  width: 100%;
  padding: 6rem 5rem;
  background: #f4f4f4;
  text-align: center;
`;

export const Heading = styled.h2`
  font-family: var(--font-jost), sans-serif;
  font-size: 3.0625rem;
  font-weight: 300;
  line-height: 1.3;
  max-width: none;
  color: #000;
`;

export const Description = styled.p`
  font-family: var(--font-jost), sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
  max-width: 62.5rem;
  margin-top: 2rem;
      color: #000000;
  text-transform: capitalize;
`;

export const Bold = styled.span`
  font-weight: 500;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
`;

export const Card = styled.div`
  flex: 1;
  border: 0.0625rem solid #000;
  padding: 3.125rem 2.5rem;
  text-align: left;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const IconWrapper = styled.div`
  width: 2.625rem;
  height: 2.625rem;
  position: relative;
  flex-shrink: 0;
`;

export const CardTitle = styled.h3`
  font-family: var(--font-jost), sans-serif;
  font-size: 1.375rem;
  font-weight: 400;
  margin: 0;
  @media (max-width: 1024px) {
      font-size: 1rem;

  }      
`;

export const CardText = styled.p`
  font-family: var(--font-jost), sans-serif;
  font-size: 0.9375rem;
  font-weight: 300;
  line-height: 1.9;
  color: #333;
`;

export const Label = styled.div`
  font-size: 0.9375rem;
  font-weight: 400;
  letter-spacing: 0.0625rem;
  margin-bottom: 1.25rem;
  padding: 0.25rem 1.5625rem;
  position: relative;
  display: inline-block;

  span {
    position: relative;
  }

  span::before {
    content: "";
    position: absolute;
    left: -1.5625rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.875rem;
    height: 0.875rem;
    border-left: 0.125rem solid #947029;
    border-top: 0.125rem solid #947029;
  }

  span::after {
    content: "";
    position: absolute;
    right: -1.5625rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.875rem;
    height: 0.875rem;
    border-right: 0.125rem solid #947029;
    border-bottom: 0.125rem solid #947029;
  }
`;