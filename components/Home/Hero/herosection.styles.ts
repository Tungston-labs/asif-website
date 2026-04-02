import styled, { keyframes } from "styled-components";

export const HeroSection = styled.section`
 width: 100%;
  justify-content: center;
  overflow: hidden;
`;

export const Container = styled.div`
  text-align: center;

`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 20 / 10.7;
  overflow: hidden;
  background: #fff;

  @media (max-width: 48rem) {
    aspect-ratio: 16 / 10;
    margin-left: 0;
  }
`;

export const SliderImage = styled.div<{ $active: boolean; $index: number; $current: number }>`
  position: absolute;
  inset: 0;

  transform: ${({ $index, $current }) =>
    `translateX(${($index - $current) * 100}%)`};

  transition: transform 0.8s ease-in-out;
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

  display: flex;
  align-items: center;
  gap: 1.25rem;

  animation: ${floatFadeMove} 3s ease-in-out infinite 1s;

  @media (max-width: 48rem) {
    left: 1rem;
    right: auto;
    top: 1rem;
    gap: 0.5rem;

    animation: ${floatFadeMoveMobile} 3s ease-in-out infinite 1s;
  }
`;

export const ArrowImage = styled.img`
  width: 7.5rem;
  height: auto;

  @media (max-width: 48rem) {
    width: 3.5rem; 
  }
`;

export const FloatingText = styled.p`
  font-family: var(--font-caveat);
  font-size: 2rem; 
  line-height: 1.2;
  color: #000;

  @media (max-width: 48rem) {
    font-size: 1rem;   
    line-height: 1.1;
  }
`;
export const Title = styled.h1`
  font-size: 4rem; 
  font-weight: 300;
  letter-spacing: 0.125rem; 
  color: #111;
  line-height: 1.2;

  span {
    font-weight: 700;
  }

  @media (max-width: 48rem) {
    font-size: 2.25rem; 
  }
`;

export const Subtitle = styled.p`
  margin-top: 1.25rem; 
  font-size: 1rem; 
  color: #666;
`;

export const ButtonGroup = styled.div`
  margin-top: 2.5rem; 
  display: flex;
  justify-content: center;
  gap: 1rem; 
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  background: #D7AE5B;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  padding: 1.125rem 1.75rem;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.0625rem;

  text-decoration: none;   
  display: inline-block;   

  &:hover,
  &:focus,
  &:active,
  &:visited {
    text-decoration: none;
    color: #fff;
  }
`;

export const SecondaryButton = styled.button`
  background: #000;
  color: #fff;
  border-radius: 0.3rem;
  border: none;
  padding: 1.125rem 1.75rem;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.0625rem;

  text-decoration: none;   
  display: inline-block;  

  &:hover,
  &:focus,
  &:active,
  &:visited {
    text-decoration: none;
    color: #fff;           
  }
`;
