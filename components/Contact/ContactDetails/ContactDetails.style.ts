"use client";
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 6.25rem 5rem;
  background: #f4f4f4;
  text-align: center;

  @media (max-width: 64rem) {
    padding: 5rem 3rem;
  }

  @media (max-width: 48rem) {
    padding: 4rem 2rem;
    text-align: left; /* ✅ FIX */
  }

  @media (max-width: 30rem) {
    padding: 3rem 1.5rem;
  }
`;

export const Heading = styled.h2`
  font-family: var(--font-jost), sans-serif;
  font-size: 3.0625rem;
  font-weight: 300;
  line-height: 1.3;
  margin-bottom: 0.5rem;
  color: #000;

  @media (max-width: 64rem) {
    font-size: 2.5rem;
  }

  @media (max-width: 48rem) {
    font-size: 2.125rem;
    margin-bottom: 1.5rem;
    text-align: left; /* ✅ FIX */
  }

  @media (max-width: 30rem) {
    font-size: 1.75rem;
  }
`;

export const Description = styled.p`
  font-family: var(--font-jost), sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
  max-width: 62.5rem;
  margin-left: 4rem;
  color: #000000;
  margin-bottom: 2rem;
  text-transform: capitalize;

  @media (max-width: 48rem) {
    margin: 1rem 0 2rem; /* ✅ FIX (remove left shift) */
    font-size: 0.9375rem;
  }
`;

export const Bold = styled.span`
  font-weight: 500;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;

  @media (max-width: 1024px) {
justify-content: center;
  flex-direction: column;
display:flex;
  }

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const Card = styled.div`
  flex: 1;
  border: 0.0625rem solid #000;
  padding: 3.125rem 2.5rem;
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
  gap: 1.25rem;
  margin-bottom: 0.25rem;
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
  margin-left: 4rem;
  line-height: 1.9;
  color: #333;

  @media (max-width: 48rem) {
    margin-left: 10; /* ✅ FIX */
    margin-top: 0.5rem;
  }
`;

export const Label = styled.div`
  font-size: 0.9375rem;
  font-weight: 400;
  letter-spacing: 0.0325rem;
  position: relative;
  display: inline-block;
  text-align: center;

  span {
    position: relative;
    padding: 0 0.75rem;
  }

  span::before,
  span::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0.875rem;
    height: 0.875rem;
  }

  span::before {
    left: -1.5rem;
    border-left: 0.125rem solid #c8a24c;
    border-top: 0.125rem solid #c8a24c;
  }

  span::after {
    right: -1.5rem;
    border-right: 0.125rem solid #c8a24c;
    border-bottom: 0.125rem solid #c8a24c;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;

    span {
      padding: 0 0.5rem;
    }

    span::before {
      left: -1.2rem;
      width: 0.7rem;
      height: 0.7rem;
    }

    span::after {
      right: -1.2rem;
      width: 0.7rem;
      height: 0.7rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;

    span::before {
      left: -0.1rem;
      width: 0.6rem;
      height: 0.6rem;
    }
     span {
      padding: 0 0.7rem;
    }
    span::after {
      right: -0.5rem;
      width: 0.6rem;
      height: 0.6rem;
    }
  }
`;
