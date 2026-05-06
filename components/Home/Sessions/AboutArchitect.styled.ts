import styled, { keyframes } from "styled-components";
import Link from "next/link";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: #000;
  color: #fff;
  margin-top: 2rem;
  padding: 0 4rem;
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
    -240deg,
    #171717 65%,
    rgba(196, 144, 42, 0.25) 100%
  );
  margin-top: -4rem;
  min-height: 10rem;
  padding: 0 4rem;
  z-index: 2;
  transform: translateY(-2rem);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0;
    transform: none;
    background-color: #000;
  }
`;
export const GalleryWrapper = styled.div`
  position: relative;
  width: 20%;
  max-height: 54rem;
  margin-left: 2rem;
  margin-top: 10rem;

  transform: translateY(-14rem); /* move upward */

  @media (max-width: 1024px) {
    width: 40%;
    max-height: 48rem;
    margin-top: 8rem;
    transform: translateY(-12rem);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const GalleryImage = styled.div<{ $active: boolean }>`
  position: absolute;
  height: 50rem;
  inset: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.8s ease;
  animation: ${({ $active }) => ($active ? fadeZoom : "none")} 6s ease-in-out;
  @media (max-width: 2624px) and (min-width: 2325px) {
    height: 46rem;
  }
  @media (max-width: 2324px) and (min-width: 2025px) {
    height: 46rem;
  }
  @media (max-width: 2024px) and (min-width: 1825px) {
    height: 48rem;
  }

  @media (max-width: 1824px) and (min-width: 1525px) {
    height: 50rem;
  }
  @media (max-width: 1524px) and (min-width: 1025px) {
    height: 49rem;
  }
  @media (max-width: 1024px) and (min-width: 768px) {
    height: 46rem;
  }
  @media (max-width: 768px) {
    height: 22rem;
  }
`;

export const CenterWrapper = styled.div`
  flex: 1;
  max-width: 46rem;
  margin-top: 6rem;
  margin-left: 2rem;
  @media (max-width: 2624px) and (min-width: 2325px) {
    max-width: 45rem;
  }
  @media (max-width: 2324px) and (min-width: 2025px) {
    max-width: 43rem;
  }
  @media (max-width: 2024px) and (min-width: 1825px) {
    max-width: 42rem;
  }

  @media (max-width: 1824px) and (min-width: 1525px) {
    max-width: 36rem;
  }

  @media (max-width: 1524px) {
    max-width: 36rem;
  }

  @media (max-width: 1024px) {
    max-width: 38rem;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 0 auto;
    order: 2;

    text-align: left;
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
  position: relative;
  bottom: -42rem;
  left: 2rem;
  color: #fff;
  @media (max-width: 1024px) {
    bottom: -40rem;
    left: 8rem;
  }
  @media (max-width: 768px) {
    position: absolute;
    bottom: 0rem;
    left: 9.5rem;
    text-align: center;
    margin-top: 6rem;
  }
`;

export const ExperienceText = styled.h3`
  font-size: 2rem;
  width: 70%;
  letter-spacing: 0.1rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 0.5rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
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

  @media (max-width: 1024px) {
    text-align: left;
  }

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const TalkButton = styled(Link)`
  margin-top: 1rem;
  background-color: #d7ae5b;
  color: #fff;
  border: none;
  padding: 14px 28px;
  font-weight: 500;
  font-family: var(--font-jost), sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    color: #000;
    background-color: white;
    border: 1px solid #d7ae5b;
  }
  @media (max-width: 1024px) {
    padding: 0.6rem 1.5rem;
  }

  @media (max-width: 768px) {
     font-size: 1rem;
    padding: 10px 14px;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
`;

export const PortfolioText = styled.h1`
  font-family: "Manrope";
  font-weight: 900;
  font-size: 8.33rem;
  letter-spacing: 0.5rem;
  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke: 1px rgba(227, 236, 229, 0.86);
  opacity: 0.7;

  @media (max-width: 1024px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    display: none;
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
    width: 13.9rem;
    height: 12.9rem;
  }

  @media (max-width: 768px) {
    position: relative;
    order: 4;

    margin: 3rem auto 0 auto;
    width: 20rem;
    height: 20rem;

    right: auto;
    top: auto;
    transform: none;
  }
`;

export const SocialWrapper = styled.div`
  position: absolute;
  right: 3%; /* stick to right edge of DarkSection */
  top: 50%; /* middle vertically */
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
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 2rem;
    margin-left: 3.3rem;
    right: auto;
    order: 1;
    transform: none;
  }
`;

export const CircleButton = styled.div`
  width: 6rem;
  height: 6rem;
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
    width: 4rem;
    height: 4rem;
  }

  @media (max-width: 768px) {
    display: none;
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
