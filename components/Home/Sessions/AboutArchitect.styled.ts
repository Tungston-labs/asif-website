import styled, { keyframes } from "styled-components";
import Link from "next/link";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: #000;
  color: #fff;
  padding: 2rem 4rem;
  overflow: visible;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const DarkSection = styled.section`
  position: relative;
  width: 99%;
  background: linear-gradient(
    145deg,
    rgb(7, 6, 6) 70%,
    rgba(192, 153, 73, 1) 150%
  );
  margin-top: -4rem;
  padding: 6rem 0;
  min-height: 48rem;
  z-index: 2;
  
  @media (max-width: 768px) {
    background: linear-gradient(
    145deg,
    rgb(7, 6, 6) 70%,
    rgb(6, 6, 6) 150%
  );
  }

`;


export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.9fr 1.2fr;
  gap: 3rem;
  align-items: center;

  max-width: 1400px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

export const LeftWrapper = styled.div`
  position: relative;

  @media (max-width: 768px) {
    order: 3;
  }
`;

export const CenterWrapper = styled.div`
  max-width: 38rem;

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    order: 2;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
`;

const fadeZoom = keyframes`
  0% { opacity: 0; transform: scale(1.08); }
  15% { opacity: 1; transform: scale(1); }
  85% { opacity: 1; transform: scale(1.02); }
  100% { opacity: 0; transform: scale(1.06); }
`;

export const GalleryWrapper = styled.div`
  position: relative;
  width: 18rem;
  height: 52rem;
  margin-top: -8rem;

  @media (max-width: 1024px) {
    width: 16rem;
    height: 42rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 32rem;
    margin-top: 0;
  }
`;

export const GalleryImage = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.8s ease;
  animation: ${({ $active }) => ($active ? fadeZoom : "none")} 6s ease-in-out;
`;

export const ExperienceBox = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  color: #fff;

  @media (max-width: 768px) {
    bottom: 2rem;
    left: 2rem;
  }
`;

export const ExperienceText = styled.h3`
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
`;

export const ContentWrapper = styled.div`
  margin-top: 0.5rem;
`;

export const Tag = styled.span<{ $color?: string }>`
  position: relative;
  display: inline-block;
  color: ${({ $color }) => $color || "#fff"};
  font-size: 0.75rem;
  letter-spacing: 0.15rem;
  padding: 0 1.8rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: -0.3rem;
    width: 0.9rem;
    height: 0.9rem;
    border-left: 2px solid #d7ae5b;
    border-top: 2px solid #d7ae5b;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -0.3rem;
    width: 0.9rem;
    height: 0.9rem;
    border-right: 2px solid #d7ae5b;
    border-bottom: 2px solid #d7ae5b;
  }
`;

export const Name = styled.h2`
  margin-top: 1rem;
  font-size: 2.5rem;
  font-weight: 300;

  strong {
    font-weight: 700;
  }
`;

export const Description = styled.p`
  margin-top: 1.5rem;
  line-height: 1.8;
  color: #bbb;
`;

export const TalkButton = styled(Link)`
  margin-top: 2rem;
  background: #d7ae5b;
  border: none;
  padding: 0.9rem 2rem;
  color: #fff;
  cursor: pointer;
  text-decoration: none;   
  display: inline-block;

  &:visited {
    color: #fff;          
  }
`;


export const PortfolioText = styled.h1`
  font-family: "Manrope";
  font-weight: 900;
  font-size: 8.33rem;
  letter-spacing: 0.5rem;
  margin-top: 2.5rem;
  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke: 1px rgba(236, 227, 227, 0.27);
  opacity: 0.7;

  @media (max-width: 768px) {
    font-size: 4rem;
    text-align: center;
  }
`;


export const SideImage = styled.div`
  position: absolute;
  right: calc(50% - 50%);
  top: 17.8%;
  transform: translateY(-50%);
  width: 20rem;
  height: 20rem;
  overflow: hidden;
  z-index: 3;
  pointer-events: none;

  img {
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    position: relative;
    transform: none;
    right: auto;
    top: auto;
    margin: 0 auto 3rem auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 22rem;
    height: 22rem;
    order: 1;
  }
`;


export const SocialWrapper = styled.div`
  position: absolute;
  right: -3.5rem;   
  top: 50%;
  transform: translateY(-50%);
  
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: center;
  z-index: 5;

  svg {
    font-size: 0.9rem;
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s ease;
  }

  svg:hover {
    color: #d7ae5b;
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    right: -2.5rem;
  }

  @media (max-width: 768px) {
    right: -1rem;
    top: 1.5rem;
    transform: none;
  }
`;

export const CircleButton = styled.div`
  position: absolute;
  right: 13rem;
  bottom: 7.5rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: #d7ae5b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 1024px) {
    right: 4rem;
  }

  @media (max-width: 768px) {
    position: relative;
    margin: 3rem auto 0 auto;
    right: auto;
    bottom: auto;
  }
`;

export const CircleInside = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #070707;
  display: flex;
  align-items: center;
  justify-content: center;
`;