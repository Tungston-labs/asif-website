'use client'
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

/* ============================= */
/* Background Ball Animation     */
/* ============================= */

const floatAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) translate(0px, 0px);
  }
  25% {
    transform: translate(-50%, -50%) translate(250px, -150px);
  }
  50% {
    transform: translate(-50%, -50%) translate(-250px, -150px);
  }
  75% {
    transform: translate(-50%, -50%) translate(0px, 0px);
  }
  100% {
    transform: translate(-50%, -50%) translate(250px, -150px);
  }
`;

export const Section = styled.section`
  position: relative;
  background: #0c0c0c;
  padding: 120px 80px;
  overflow: hidden;
  color: white;
`;

/* ============================= */
/* Moving Gradient Ball          */
/* ============================= */

export const BackgroundBall = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,140,0,0.5) 0%, rgba(255,140,0,0.1) 40%, transparent 70%);
  filter: blur(120px);
  animation: ${floatAnimation} 18s ease-in-out infinite;
  z-index: 0;
`;

/* ============================= */
/* Heading Area                  */
/* ============================= */

export const Header = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 70px;
`;

export const Tag = styled.p`
  color: #caa24d;
  letter-spacing: 3px;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 600;

  span {
    font-weight: 800;
  }
`;

export const Subtitle = styled.p`
  margin-top: 15px;
  color: #bfbfbf;
  font-size: 18px;
`;

/* ============================= */
/* Slider Wrapper                */
/* ============================= */

export const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 2;
`;

export const Slider = styled(motion.div)`
  display: flex;
  gap: 40px;
`;

export const Card = styled.div`
  min-width: calc(50% - 20px);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 50px;
  background: rgba(0,0,0,0.6);
  position: relative;
  transition: 0.4s ease;

  &:hover {
    border-color: #caa24d;
  }
`;

export const Quote = styled.div`
  font-size: 60px;
  color: #caa24d;
  margin-bottom: 30px;
`;

export const Content = styled.p`
  color: #d4d4d4;
  line-height: 1.7;
  margin-bottom: 40px;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AuthorInfo = styled.div`
  h4 {
    font-weight: 700;
  }

  p {
    font-size: 14px;
    color: #aaa;
  }
`;