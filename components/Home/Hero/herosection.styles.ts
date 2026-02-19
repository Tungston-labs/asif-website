import styled, { keyframes } from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  justify-content: center;
`;

export const Container = styled.div`
  text-align: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 62.5rem; /* 1000px */
  margin-top: 0.625rem; /* 10px */

  margin-left: calc(50% - 50vw);
  overflow: hidden;
`;

export const SliderImage = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;

  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 1s ease-in-out;

  img {
    object-fit: cover;
  }
`;

const floatFadeMove = keyframes`
  0% {
    transform: translateY(0.625rem); /* 10px */
    opacity: 0;
  }

  25% {
    transform: translateY(0.625rem);
    opacity: 0;
  }

  50% {
    transform: translateY(1.25rem); /* 20px */
    opacity: 0.85;
  }

  75% {
    transform: translateY(3.125rem); /* 50px */
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 0.7;
  }
`;

export const FloatingNote = styled.div`
  position: absolute;
  right: 17.5rem; /* 280px */

  display: flex;
  align-items: center;
  gap: 1.25rem; /* 20px */

  animation: ${floatFadeMove} 3s ease-in-out infinite 1s;

  @media (max-width: 48rem) { /* 768px */
    left: 1.25rem; /* 20px */
    top: -3.75rem; /* -60px */
  }
`;

export const ArrowImage = styled.img`
  width: 7.5rem; /* 120px */
  height: auto;
`;

export const FloatingText = styled.p`
  font-family: var(--font-caveat);
  font-size: 2rem; /* 32px */
  line-height: 1.2;
  color: #000;
`;

export const Title = styled.h1`
  font-size: 4rem; /* 64px */
  font-weight: 300;
  letter-spacing: 0.125rem; /* 2px */
  color: #111;
  line-height: 1.2;

  span {
    font-weight: 700;
  }

  @media (max-width: 48rem) {
    font-size: 2.25rem; /* 36px */
  }
`;

export const Subtitle = styled.p`
  margin-top: 1.25rem; /* 20px */
  font-size: 1rem; /* 16px */
  color: #666;
`;

export const ButtonGroup = styled.div`
  margin-top: 2.5rem; /* 40px */
  display: flex;
  justify-content: center;
  gap: 1rem; /* 16px */
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  background: #D7AE5B;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  padding: 1.125rem 1.75rem; /* 18px 28px */
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.0625rem; /* 1px */
`;

export const SecondaryButton = styled.button`
  background: #000;
  color: #fff;
  border-radius: 0.3rem;
  border: none;
  padding: 1.125rem 1.75rem; /* 18px 28px */
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.0625rem;
`;
