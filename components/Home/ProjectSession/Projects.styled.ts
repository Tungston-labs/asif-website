import styled, { keyframes } from "styled-components";

interface TabProps {
  $active?: boolean;
}

const scrollLoop = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
`;

export const Section = styled.section`
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1rem 3rem;
  }
`;

export const HeaderWrapper = styled.div`
  text-align: center;
  margin: 2rem auto ;

  @media (max-width: 1024px) {
    margin: -2rem auto 2rem;
  }

  @media (max-width: 768px) {
    margin: 0 auto 2rem;
  }
`;

export const GridSection = styled.div`
  position: relative;
  padding-top: 1rem;
`;

export const HeaderGrid = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const Tag = styled.span`
  color: #947029;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
`;

export const Title = styled.h2`
  margin-top: 1rem;
  font-size: 2.25rem;
  font-weight: 300;
  line-height: 1.4;
  color: #000000;

  strong {
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.35rem;
  }
`;

export const Description = styled.p`
  margin-top: 1rem;
  color: #000000;
  max-width: 65rem;
  margin-left: 12%;
  text-align: center;
  font-size: 1rem;
  font-weight: 300;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    max-width: 100%;
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  margin-left: 15%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: fit-content;
  overflow-x: auto;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const Tab = styled.button<TabProps>`
  flex: 0 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ $active }) => ($active ? "#947029" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};

  border: none;
  outline: none;

  padding: 0.8rem 1.4rem;

  font-size: 0.85rem;
  line-height: 1;

  white-space: nowrap;

  transition: 0.3s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: #947029;
      color:#fff;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.78rem;
    padding: 0.75rem 1rem;
  }
`;

export const Grid = styled.div`
  width: 100%;
  overflow: visible;
  position: relative;
  padding: 30px 0;
`;

export const SliderTrack = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: nowrap;
  width: fit-content;

  padding: 20px 0;

  transform: translate3d(0, 0, 0);
  will-change: transform;

  animation: ${scrollLoop} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const Card = styled.div`
  flex: 0 0 auto;

  width: 520px;
  height: 295px;

  position: relative;

  border-radius: 22px;

  overflow: visible;

  background: transparent;

  cursor: pointer;

  transition:
    transform 0.5s ease,
    box-shadow 0.5s ease;

  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.12),
    0 20px 45px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-18px) scale(1.03);
    z-index: 50;

    box-shadow:
      0 25px 50px rgba(0, 0, 0, 0.18),
      0 40px 80px rgba(0, 0, 0, 0.22),
      0 0 25px rgba(215, 174, 91, 0.25);
  }

  @media (max-width: 1024px) {
    width: 480px;
    height: 280px;
  }

  @media (max-width: 768px) {
    width: 88vw;
    height: 240px;

    &:hover {
      transform: translateY(-10px) scale(1.02);
    }
  }

  @media (max-width: 480px) {
    width: 92vw;
    height: 220px;
  }
`;

export const LocationTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  margin-left: 15%;
  margin-bottom: 0.6rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const LocationDescription = styled.p`
  max-width: 80%;
  margin-left: 15%;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
  }
`;

export const PortButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2.5rem auto 0;

  width: 182px;
  height: 44px;

  background: transparent;
  border: 1px solid #6f6f6f;

  color: #111;
  font-size: 0.82rem;
  font-weight: 400;
  letter-spacing: 0.03rem;

  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    background: #111;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 170px;
    height: 42px;
    font-size: 0.78rem;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;

  border-radius: 20px;

  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;

    transition:
      transform 0.7s ease,
      filter 0.7s ease;

    transform: scale(1);
    filter: brightness(0.97);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.18),
      rgba(0, 0, 0, 0.04) 45%,
      transparent
    );

    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  ${Card}:hover & img {
    transform: scale(1.08);
    filter: brightness(1.05);
  }

  ${Card}:hover &::after {
    opacity: 0.4;
  }
`;
