import styled, { keyframes } from "styled-components";

/* ✅ FIX: TYPE ADDED */
interface TabProps {
  $active?: boolean;
}

const zoomAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
`;

export const Section = styled.section`
  padding: 0 4rem;
  
  @media (max-width: 1024px) {
    padding: 0 3rem;
  }

  /* ✅ EQUAL TOP & BOTTOM SPACE */
  @media (max-width: 768px) {
    padding: 3rem 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
  }
`;

export const HeaderWrapper = styled.div`
  text-align: center;
  margin: -3rem auto 3rem;

  @media (max-width: 768px) {
    text-align: left;
    margin: 0 0 2rem;
    padding: 0;
  }
`;

export const GridSection = styled.div`
  position: relative;
  padding: 2rem 0;

  --border-color: rgba(0, 0, 0, 0.3);
  --border-size: 1px;
  --grid-start: 10%;
  --grid-width: 94.1%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: var(--grid-start);
    width: var(--grid-width);
    height: var(--border-size);
    background: var(--border-color);
    pointer-events: none;
  }

  &::before { top: 0; }
  &::after { bottom: 0; }

  .v-line {
    position: absolute;
    width: var(--border-size);
    height: 15rem;
    background: var(--border-color);
  }

  .v-left { left: var(--grid-start); top: 0; }
  .v-right { right: var(--grid-start); top: 0; }
  .v-bottom { bottom: 0; }

  @media (max-width: 768px) {
    --grid-start: 0;
    --grid-width: 100%;
    padding: 2rem 0;
  }
`;

export const HeaderGrid = styled.div`
  max-width: 90%;
  width: 90%;
  margin: 0 2rem 2rem 0;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto 2rem;
  }
`;

export const Tag = styled.span`
  color: #d7ae5b;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
`;

export const Title = styled.h2`
  margin-top: 1rem;
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 1.4;

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
  color: #666;
  max-width: 65rem;
  margin-left: 12%;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
    margin-left: 0;
    max-width: 100%;
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  margin-left: 5%;
  flex-wrap: wrap;
  border: 1px solid #0000001A;
  gap: 0.5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0.5rem 0;
    border: none;
  }
`;

export const Tab = styled.button<TabProps>`
  flex: 0 0 auto;

  background: ${({ $active }) => ($active ? "#D7AE5B" : "#f5f5f5")};
  border: 1px solid #ddd;
  padding: 0.6rem 1.2rem;
  font-size: 0.85rem;
  white-space: nowrap;

  &:hover {
    background: #D7AE5B;
  }
`;

export const Grid = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  padding-left: calc((100% - 90%) / 2);
  padding-right: calc((100% - 80%) / 2);

  &::-webkit-scrollbar {
    display: none;
  }

  /* ✅ PERFECT CENTER FIX */
  @media (max-width: 768px) {
    padding: 0 1.2rem;
    scroll-padding-left: 1.2rem;
    scroll-padding-right: 1.2rem;
  }
`;

export const Card = styled.div`
  flex: 0 0 800px;
  height: 476px;
  position: relative;
  overflow: hidden;

  border-radius: 0.3rem;
  scroll-snap-align: start;

  box-shadow: 10px 4px 10px rgba(0, 0, 0, 0.45);

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 1024px) {
    flex: 0 0 650px;
    height: 420px;
  }

  /* ✅ PERFECT CENTER (NO LEFT GAP) */
  @media (max-width: 768px) {
    flex: 0 0 calc(100% - 2.4rem);
    height: 280px;
  }

  @media (max-width: 480px) {
    flex: 0 0 calc(100% - 2rem);
    height: 250px;
  }
`;

export const LocationTitle = styled.h2`
  font-size: 1.5rem;
  margin-left: 15%;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const LocationDescription = styled.p`
  max-width: 80%;
  margin-left: 15%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
  }
`;

export const PortButton = styled.button`
  display: block;

  /* ✅ EQUAL TOP & BOTTOM SPACE */
  margin: 3rem auto;

  font-size: 1.2rem;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: #d7ae5b;
  }

  @media (max-width: 768px) {
    margin: 2.5rem auto;
  }

  @media (max-width: 480px) {
    margin: 2rem auto;
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
    transition: transform 0.6s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.08);
  }
`;