import Image from "next/image";
import styled, { keyframes } from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  overflow: hidden;
  margin-top: 2.5rem;

  @media (max-width: 48rem) {
    margin-top: 1rem;
  }
`;

export const Container = styled.div`
  text-align: center;
  padding: 0; /* 🔥 REMOVE SIDE GAP */
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 20 / 10.7;
  overflow: visible; /* 🔥 FIX (was hidden) */
  background: #fff;
  margin-top: 3rem;

  @media (max-width: 48rem) {
    aspect-ratio: 16 / 11;
    margin-top: 2.5rem;
  }
`;

export const SliderImage = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%; /* 🔥 ADD THIS */

  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transform: ${({ $active }) => ($active ? "scale(1)" : "scale(1.05)")};

  transition:
    opacity 1s ease-in-out,
    transform 5s ease-in-out;

  z-index: ${({ $active }) => ($active ? 2 : 1)};
`;

const floatFadeMove = keyframes`
  0% {
    transform: translateY(10px);
    opacity: 0;
  }

  25% {
    transform: translateY(10px);
    opacity: 0;
  }

  50% {
    transform: translateY(20px);
    opacity: 0.85;
  }

  75% {
    transform: translateY(40px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 0.7;
  }
`;

const floatFadeMoveMobile = keyframes`
  0% {
    transform: translateY(5px);
    opacity: 0;
  }

  25% {
    transform: translateY(5px);
    opacity: 0;
  }

  50% {
    transform: translateY(12px);
    opacity: 0.9;
  }

  75% {
    transform: translateY(20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 0.8;
  }
`;

export const FloatingNote = styled.div`
  position: absolute;
  right: 17.5rem;
  top: -3rem; /* 🔥 slightly above image */

  display: flex;
  align-items: center;
  gap: 1.25rem;

  z-index: 10;
  animation: ${floatFadeMove} 3s ease-in-out infinite 1s;

  @media (max-width: 48rem) {
    left: 50%;
    top: -2.5rem; /* 🔥 visible now */
    transform: translateX(-50%);
    right: auto;

    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.3rem;

    animation: ${floatFadeMoveMobile} 3s ease-in-out infinite 1s;
  }
`;

export const ArrowImage = styled.img`
  width: 7.5rem;

  @media (max-width: 48rem) {
    width: 2.2rem; /* 🔥 slightly refined */
  }
`;

export const FloatingText = styled.p`
  font-family: var(--font-caveat);
  font-size: 1.6rem;
  line-height: 1.2;
  color: #000;

  @media (max-width: 48rem) {
    font-size: 0.85rem;
    line-height: 1.1;
  }
`;

export const DecorImage = styled(Image)`
  margin-left: 7rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem); /* 🔥 responsive scaling */
  font-weight: 300;
  letter-spacing: 0.08rem;
  color: #111;
  line-height: 1.25;

  span {
    font-weight: 700;
  }

  @media (max-width: 48rem) {
    max-width: 95%;
    margin: 1rem auto 0;
    line-height: 1.3;
  }
`;

export const Subtitle = styled.p`
  margin-top: 1rem;
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  color: #666;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 48rem) {
    max-width: 90%;
    line-height: 1.6;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 1.8rem;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  background: #d7ae5b;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1.2rem;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.05rem;
  font-size: 0.8rem;

  &:hover {
    color: #000;
    background-color: white;
    border: 1px solid #d7ae5b;
  }

  @media (max-width: 48rem) {
    display: none;
  }
`;

export const SecondaryButton = styled.button`
  background: #000;
  color: #fff;
  border-radius: 0.3rem;
  border: none;
  padding: 0.8rem 1.2rem;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.05rem;
  font-size: 0.8rem;

  &:hover {
    color: #000;
    background-color: white;
    border: 1px solid #000;
  }
`;
