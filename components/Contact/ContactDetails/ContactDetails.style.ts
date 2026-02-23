"use client";
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 6.25rem 5rem; /* 100px 80px */
  background: #f4f4f4;
  text-align: center;

  @media (max-width: 64rem) { /* 1024px */
    padding: 5rem 3rem;
  }

  @media (max-width: 48rem) { /* 768px */
    padding: 4rem 2rem;
  }

  @media (max-width: 30rem) { /* 480px */
    padding: 3rem 1.5rem;
  }
`;

export const Heading = styled.h2`
  font-family: var(--font-jost), sans-serif;
  font-size: 3.0625rem; /* 49px */
  font-weight: 300;
  line-height: 1.3;
  margin: 0 auto 5rem; /* 80px */
  color: #000;

  @media (max-width: 64rem) {
    font-size: 2.5rem;
  }

  @media (max-width: 48rem) {
    font-size: 2.125rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 30rem) {
    font-size: 1.75rem;
  }
`;

export const Description = styled.p`
  font-family: var(--font-jost), sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 300;
  line-height: 1.5rem; /* 24px */
  max-width: 62.5rem; /* 1000px */
  margin: -2.5rem auto 4.375rem; /* -40px 70px */
  color: #000000;
  text-transform: capitalize;

  @media (max-width: 48rem) {
    margin: 1rem auto 3rem;
    font-size: 0.9375rem;
  }
`;

export const Bold = styled.span`
  font-weight: 500;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem; /* 40px */

  @media (max-width: 64rem) {
    gap: 2rem;
  }

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Card = styled.div`
  flex: 1;
  border: 0.0625rem solid #000; /* 1px */
  padding: 3.125rem 2.5rem; /* 50px 40px */
  text-align: left;

  @media (max-width: 64rem) {
    padding: 2.5rem 2rem;
  }

  @media (max-width: 48rem) {
    padding: 2rem 1.5rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem; /* 20px */
  margin-bottom: 1.25rem;
`;

export const IconWrapper = styled.div`
  width: 2.625rem; /* 42px */
  height: 2.625rem;
  position: relative;
  flex-shrink: 0;
`;

export const CardTitle = styled.h3`
  font-family: var(--font-jost), sans-serif;
  font-size: 1.375rem; /* 22px */
  font-weight: 400;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1.125rem;
  }
`;

export const CardText = styled.p`
  font-family: var(--font-jost), sans-serif;
  font-size: 0.9375rem; /* 15px */
  font-weight: 300;
  line-height: 1.9;
  color: #333;
`;

export const Label = styled.div`
  font-size: 0.9375rem; /* 15px */
  font-weight: 400;
  letter-spacing: 0.0625rem; /* 1px */
  margin-bottom: 1.25rem; /* 20px */
  padding: 0.25rem 1.5625rem; /* 4px 25px */
  position: relative;
  display: inline-block;

  span {
    position: relative;
  }

  span::before {
    content: "";
    position: absolute;
    left: -1.5625rem; /* -25px */
    top: 50%;
    transform: translateY(-50%);
    width: 0.875rem; /* 14px */
    height: 0.875rem;
    border-left: 0.125rem solid #c8a24c; /* 2px */
    border-top: 0.125rem solid #c8a24c;
  }

  span::after {
    content: "";
    position: absolute;
    right: -1.5625rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.875rem;
    height: 0.875rem;
    border-right: 0.125rem solid #c8a24c;
    border-bottom: 0.125rem solid #c8a24c;
  }
`;