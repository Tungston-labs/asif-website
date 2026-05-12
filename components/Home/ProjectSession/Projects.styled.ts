import styled, { keyframes } from "styled-components";

interface TabProps {
  $active?: boolean;
}

const scrollLoop = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
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
  margin: -6rem auto 2rem;

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
  color: #d7ae5b;
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

  background: ${({ $active }) => ($active ? "#D7AE5B" : "#fff")};
  color: ${({ $active }) => ($active ? "#030303" : "#000")};

  border: none;
  outline: none;

  padding: 0.8rem 1.4rem;

  font-size: 0.85rem;
  line-height: 1;

  white-space: nowrap;

  transition: 0.3s ease;

  &:hover {
    background: #d7ae5b;
  }

  @media (max-width: 768px) {
    font-size: 0.78rem;
    padding: 0.75rem 1rem;
  }
`;

export const Grid = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const SliderTrack = styled.div`
  display: flex;
  gap: 14px;
  width: max-content;

  animation: ${scrollLoop} 28s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const Card = styled.div`
  flex: 0 0 520px;
  height: 295px;
  position: relative;
  overflow: hidden;

  border-radius: 0;

  box-shadow: none;

  @media (max-width: 1024px) {
    flex: 0 0 480px;
    height: 280px;
  }

  @media (max-width: 768px) {
    flex: 0 0 88vw;
    height: 240px;
  }

  @media (max-width: 480px) {
    flex: 0 0 92vw;
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: none;
  }
`;