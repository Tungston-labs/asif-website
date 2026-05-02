'use client'
import styled, { keyframes } from "styled-components";

/* ================= FLOAT BALL ================= */

const floatAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) translate(0px, 0px);
  }
  20% {
    transform: translate(-50%, -50%) translate(250px, -200px);
  }
  40% {
    transform: translate(-50%, -50%) translate(0px, -300px);
  }
  60% {
    transform: translate(-50%, -50%) translate(-250px, -200px);
  }
  80% {
    transform: translate(-50%, -50%) translate(0px, -100px);
  }
  100% {
    transform: translate(-50%, -50%) translate(0px, 0px);
  }
`;

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

/* ================= SECTION ================= */

export const Section = styled.section`
  position: relative;
  background: #0c0c0c;
  padding: 6rem 5rem;
  overflow: hidden;
  margin-top: 5rem;
  color: white;
  font-family: 'Jostto ', sans-serif;

  @media (max-width: 1024px) {
    padding: 6rem 3rem;
      margin-top: 2rem;

  }

  @media (max-width: 768px) {
    padding: 5rem 2rem;
      margin-top: 2rem;

  }

  @media (max-width: 480px) {
    padding: 4rem 2rem;
      margin-top: 1rem;

  }
`

/* ================= BACKGROUND BALL ================= */

export const BackgroundBall = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 31rem;
  height: 31rem;
  border-radius: 50%;
  background: radial-gradient(circle, #FF833B 10%, rgba(255,140,0,0.1) 50%, transparent 70%);
  filter: blur(7.5rem);
  animation: ${floatAnimation} 18s ease-in-out infinite;
  z-index: 0;

  @media (max-width: 768px) {
    width: 22rem;
    height: 22rem;
  }

  @media (max-width: 480px) {
    width: 18rem;
    height: 18rem;
  }
`;

/* ================= HEADER ================= */

export const Header = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 1.5rem;
  max-width: 50rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 200;

  span {
    font-weight: 400;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  color: #bfbfbf;
  font-size: 1.1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  z-index: 2;
  overflow: hidden;
`;

export const SliderTrack = styled.div`
  display: flex;
  gap: 1.5rem;
  width: max-content;
  animation: ${scrollAnimation} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const Card = styled.div`
  width: 40rem;
  height: 18rem;
  padding: 1rem;
  flex-shrink: 0;

  border: 1px solid rgba(220, 216, 216, 0.2);
  background: rgba(30, 28, 28, 0.6);

  display: flex;
  flex-direction: column;
  transition: 0.4s ease;

  &:hover {
    border-color: #caa24d;
  }

  @media (max-width: 1024px) {
    width: 32rem;
  }

  @media (max-width: 768px) {
    width: 26rem;
    padding: 2rem;
      height: 24rem;
  }

  @media (max-width: 480px) {
    width: 85vw;
    min-height: auto;
    padding: 1.5rem;
  }
`;

export const Quote = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 2rem;
`;

export const QuoteShape = styled.div`
  width: 1.5rem;
  height: 2.9rem;
  background: #caa24d;

  clip-path: polygon(
    0 0,
    100% 0,
    100% 50%,
    0 100%
  );
`;

export const Content = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.3rem;
  color: #d4d4d4;
  margin: 0.2rem 0;

  @media (max-width: 480px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
`;

export const Avatar = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const AuthorInfo = styled.div`
  h4 {
    font-weight: 600;
    font-size: 1rem;
  }

  p {
    font-size: 0.9rem;
    color: #aaa;
  }
`;

export const Label = styled.div`
  font-size: 0.9rem;
  letter-spacing: 0.15rem;
  margin-bottom: 0.5rem;
  padding: 0.3rem 1.5rem;
  position: relative;
  display: inline-block;

  span::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.9rem;
    height: 0.9rem;
    border-left: 2px solid #c8a24c;
    border-top: 2px solid #c8a24c;
  }

  span::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.9rem;
    height: 0.9rem;
    border-right: 2px solid #c8a24c;
    border-bottom: 2px solid #c8a24c;
  }
`;