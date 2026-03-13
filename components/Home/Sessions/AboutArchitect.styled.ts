import styled, { keyframes } from "styled-components";
import Link from "next/link";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: #000;
  color: #fff;
  margin-top: 2rem;
  padding: 4rem 4rem;
  overflow: visible;


  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const DarkSection = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  background: linear-gradient(
    145deg,
    rgb(7, 6, 6) 70%,
    rgba(192, 153, 73, 1) 150%
  );
  margin-top: -2rem;
  min-height: 40rem;
  z-index: 2;
  transform: translateY(-5rem); /* move upward */

  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0;
    transform: none;
    background: linear-gradient(
      145deg,
      rgb(7, 6, 6) 70%,
      rgb(6, 6, 6) 150%
    );
  }

`;
export const GalleryWrapper = styled.div`
  position: relative;
  width: 25%;
  height: 52rem;
  margin-left: 8rem;

  transform: translateY(-2rem); /* move upward */

  @media (max-width: 1024px) {
    width: 16rem;
    height: 42rem;
    transform: translateY(-5rem);
  }


  @media (max-width: 768px) {
    width: 90%;
    height: 28rem;
    margin: 0 auto 2rem auto;
    transform: none;
  }
`;

export const GalleryImage = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  margin-top: -8;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.8s ease;
  animation: ${({ $active }) => ($active ? fadeZoom : "none")} 6s ease-in-out;
`;

export const CenterWrapper = styled.div`
flex: 1;
  max-width: 32rem;
  margin-top: 4rem;
  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
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


export const ExperienceBox = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  color: #fff;

  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    left: auto;
    text-align: center;
    margin-top: 20rem;
  }
`;

export const ExperienceText = styled.h3`
  font-size: 2.4rem;
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
  border-radius: 0.5rem;
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
  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke: 1px rgba(236, 227, 227, 0.27);
  opacity: 0.7;


  @media (max-width: 1024px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
    white-space: normal;
  }
`;

export const SideImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 17rem;
  height: 16rem;

  z-index: 3;
  pointer-events: none;

  img {
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 14rem;
    height: 14rem;
  }

  /* MOBILE FIX */
  @media (max-width: 768px) {
    position: relative;   /* stop absolute positioning */
    margin: 2rem auto 0 auto;
    right: auto;
    bottom: 0;
    transform: none;

    width: 8rem;
    height: 8rem;
    opacity: 0.8;
  }
`;


export const SocialWrapper = styled.div`
  position: absolute;
  right: 3%;              /* stick to right edge of DarkSection */
  top: 50%;              /* middle vertically */
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: center;

  z-index: 5;

  svg {
    font-size: 1.9rem;
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s ease;
  }

  svg:hover {
    color: #d7ae5b;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    position: relative;
    flex-direction: row;
    justify-content: center;
    top: auto;
    right: auto;
    transform: none;
    margin-top: 2rem;
  }
`;

export const CircleButton = styled.div`
  width: 5rem;
  height: 5rem;
  top: 2;
  border-radius: 70%;
  background: #d7ae5b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  @media (max-width: 1024px) {
    right: 4rem;
  }

  @media (max-width: 768px) {
    position: relative;
    right: auto;
    bottom: auto;
  }
`;
export const PortfolioSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const CircleInside = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #070707;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`;