import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 5rem 3.75rem; /* 80px 60px */
  position: relative;
  overflow: hidden;

  background: #000;

  /* GOLD GRADIENT EFFECT */
  &::before {
    content: "";
    position: absolute;
    top: -12.5rem;     /* -200px */
    right: -6.25rem;   /* -100px */
    width: 37.5rem;    /* 600px */
    height: 37.5rem;

    background: radial-gradient(
      rgba(192, 153, 73, 0.35) 0%,
      rgba(192, 153, 73, 0.15) 30%,
      rgba(0, 0, 0, 0) 70%
    );

    pointer-events: none;
    z-index: 0;
  }
`;

export const Container = styled.div`
  max-width: 87.5rem; /* 1400px */
  margin: 0 auto;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.875rem; /* 30px */

  @media (max-width: 64rem) { /* 1024px */
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 48rem) { /* 768px */
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  border: 0.0625rem solid rgba(255, 255, 255, 0.15); /* 1px */
  padding: 2.5rem 2.1875rem; /* 40px 35px */
  color: #fff;
  background: transparent;
  transition: 0.35s ease;

  display: flex;
  flex-direction: column;
  gap: 1.25rem; /* 20px */

  &:hover {
    border-color: #D7AE5B;
    transform: translateY(-0.375rem); /* -6px */
  }
`;

export const IconWrapper = styled.div`
  width: 6.25rem;  /* 100px */
  height: 6.25rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Title = styled.h3`
  font-size: 1.375rem; /* 22px */
  font-weight: 500;
  letter-spacing: 0.025rem; /* 0.4px */
`;

export const Description = styled.p`
  font-size: 0.9375rem; /* 15px */
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
`;

export const Divider = styled.div`
  width: 3.125rem; /* 50px */
  height: 0.125rem; /* 2px */
  background: rgba(255, 255, 255, 0.5);
  margin-top: auto;
`;
