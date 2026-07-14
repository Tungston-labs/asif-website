import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
const kenBurns = keyframes`
0%{
transform:scale(1) translateX(0);
}

100%{
transform:scale(1.12) translateX(-2%);
}
`;
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

export const SliderImage = styled.div<{ $active:boolean }>`

position:absolute;
inset:0;

opacity:${({$active})=>$active?1:0};

animation:${({$active})=>$active&&kenBurns}
8s ease forwards;

transition:opacity 1.2s ease;

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
  @media (max-width: 1024px) {
    margin-left: 3rem;
    width: 4rem;
    height: auto;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 300;
  letter-spacing: 0.08rem;
  color: #000000;
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
  color: #000000;
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

export const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #947029;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1.2rem;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.05rem;
  font-size: 0.8rem;
  text-decoration: none;

  &:hover {
    color: #000000;
    background-color: white;
    border: 1px solid #947029;
  }

  @media (max-width: 48rem) {
    display: none;
  }
`;

export const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  color: #fff;
  border-radius: 0.3rem;
  border: none;
  padding: 0.8rem 1.2rem;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.05rem;
  font-size: 0.8rem;
  text-decoration: none;

  &:hover {
    color: #000000;
    background-color: white;
    border: 1px solid #000000;
  }
`;
