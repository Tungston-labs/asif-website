import styled, { keyframes } from "styled-components";

const zoomAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
`;

export const Section = styled.section`
  padding: 6rem 4rem;
  background: #f7f7f7;

  @media (max-width: 1024px) {
    padding: 5rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

export const HeaderWrapper = styled.div`
  text-align: center;
  margin: 0 auto 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
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
    pointer-events: none;
  }

  .v-left {
    left: var(--grid-start);
    top: 0;
  }

  .v-right {
    right: var(--grid-start);
    top: 0;
  }

  .v-bottom {
    top: auto;
    bottom: 0;
  }

  @media (max-width: 768px) {
    --grid-start: 5%;
    --grid-width: 90%;
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

  strong { font-weight: 500; }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  margin-top: 1rem;
  color: #666;
  max-width: 65rem;
    margin-left: 8%;

  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
  margin-left: 5%;
  flex-wrap: wrap;
  border: 1px solid #0000001A;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
export const Tab = styled.button<{ $active?: boolean }>`
  flex: 1 1 auto;   /* allows responsive wrapping */

  background: ${({ $active }) =>
    $active ? "rgba(215, 174, 91, 1)" : "transparent"};

  color: ${({ $active }) => ($active ? "#fff" : "#333")};

  border: 0;
  padding: 1rem 1.5rem;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(215, 174, 91, 1);
  }

  @media (max-width: 768px) {
    flex: 1 1 45%;   /* 2 tabs per row */
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;  /* 1 tab per row */
  }
`;

export const Grid = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  overflow-y: hidden;

  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  padding-left: calc((100% - 90%) / 2);
  padding-right: calc((100% - 80%) / 2);

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Card = styled.div`
  flex: 0 0 800px;
  height: 476px;
  position: relative;
  overflow: hidden;

  border-radius: 0.3rem;
  scroll-snap-align: center;

  box-shadow: 10px 4px 10px 10px rgba(0, 0, 0, 0.45);
  cursor: pointer;
  transition: transform 0.35s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 1024px) {
    flex: 0 0 650px;
    height: 420px;
  }

  @media (max-width: 768px) {
    flex: 0 0 500px;
    height: 350px;
  }

  @media (max-width: 480px) {
    flex: 0 0 90%;
    height: 300px;
  }
`;

export const LocationTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 12px;
  margin-left: 15%;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const LocationDescription = styled.p`
  max-width: 80%;
  margin-left: 15%;
  font-size: 1rem;

  line-height: 1.6;
  opacity: 0.8;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
  }
`;

export const PortButton = styled.button`
  display: block;
  margin: 2rem auto 0 ;

  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-transform: uppercase;

  background: none;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;

  color: #000;
  position: relative;

  /* Yellow underline */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: rgba(215, 174, 91, 1);
  }

  &:hover {
    color: rgba(215, 174, 91, 1);
  }

  @media (max-width: 480px) {
    width: auto;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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