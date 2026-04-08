import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 4rem 3.75rem;
  position: relative;
  overflow: hidden;
  background: #000;

  /* &::before {
    content: "";
    position: absolute;
    top: -12.5rem;
    right: -6.25rem;
    width: 37.5rem;
    height: 37.5rem;
    background: radial-gradient(
      rgba(192, 153, 73, 0.35) 0%,
      rgba(192, 153, 73, 0.15) 30%,
      rgba(0, 0, 0, 0) 70%
    );
    pointer-events: none;
    z-index: 0;
  } */

  @media (max-width: 1024px) {
    padding: 4rem 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const Container = styled.div`
  max-width: 87.5rem;
  position: relative;
  z-index: 1;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.875rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const Card = styled.div`
  border: 0.0625rem solid rgba(255, 255, 255, 0.15);
  padding: 1rem 2.1875rem;
  color: #fff;
  background: transparent;
  transition: 0.35s ease;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &:hover {
    border-color: #d7ae5b;
    transform: translateY(-0.375rem);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const IconWrapper = styled.div`
  width: 6.25rem;
  height: 6.25rem;

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.025rem;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

export const Description = styled.p`
  font-size: 0.75rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.75);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Divider = styled.div`
  width: 3.125rem;
  height: 0.125rem;
  margin-bottom: 1.2rem;
  background: rgba(255, 255, 255, 0.5);
`;