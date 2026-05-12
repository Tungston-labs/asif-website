import styled, { keyframes } from "styled-components";

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

  @media (max-width: 768px) {
    padding: 3rem 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
  }
`;

export const HeaderWrapper = styled.div`
  text-align: center;
  margin: -6rem auto 2rem;
  @media (max-width: 1024px) {
    margin: -2rem auto 2rem;
  }
  @media (max-width: 768px) {
    text-align: center;
    margin: 0 0 2rem;
    padding: 0;
  }
`;

export const GridSection = styled.div`
  position: relative;
  isolation: isolate;
  padding: 2rem 0 10px;

  --border-color: rgba(0, 0, 0, 0.3);
  --border-size: 1px;
  --grid-start: 6rem;
  --grid-right-extension: 4rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: var(--grid-start);
    right: calc(var(--grid-right-extension) * -1);
    height: var(--border-size);
    background: var(--border-color);
    pointer-events: none;
    z-index: 0;
  }

  .v-line {
    position: absolute;
    width: var(--border-size);
    top: 0;
    bottom: 4.5px;
    background: var(--border-color);
    pointer-events: none;
    z-index: 0;
  }

  .v-left {
    left: var(--grid-start);
  }
  .v-right {
    right: calc(var(--grid-right-extension) * -1);
  }

  .bottom-line {
    position: absolute;
    left: var(--grid-start);
    right: calc(var(--grid-right-extension) * -1);
    bottom: 4.5px;
    height: var(--border-size);
    background: var(--border-color);
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.2rem 10px;

    &::before {
      left: 0;
      right: 0;
      display: block;
    }

    .bottom-line {
      left: 0;
      right: 0;
      display: block;
    }

    .v-line {
      display: block;
      top: 0;
      bottom: 4.5px;
    }

    .v-left {
      left: 0;
    }

    .v-right {
      display: none;
    }
  }
`;

export const HeaderGrid = styled.div`
  position: relative;
  z-index: 1;
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
    text-align: center;
    margin-left: 20;
    margin-right: 2rem;

    max-width: 100%;
  }
`;

export const TabsWrapper = styled.div`
  display: flex;

  margin-bottom: 2rem;
  margin-left: 15%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0rem;
  max-width: fit-content;

  /* Tablet */
  @media (max-width: 1024px) {
    max-width: 50rem;
    overflow-x: auto;
    margin-left: 20%;
  }

  /* Mobile */
  @media (max-width: 768px) {
    width: 100%;
    max-width: 39rem;
    padding: 0.5rem 1rem;
    overflow-x: auto;
    margin-left: 15%;
  }

  /* Small mobile */
  @media (max-width: 480px) {
    padding: 0.5rem;
    margin-left: 2%;
  }
`;

export const Tab = styled.button<TabProps>`
  flex: 0 0 auto;

  background: ${({ $active }) => ($active ? "#D7AE5B" : "#fff")};
  color: ${({ $active }) => ($active ? "#030303" : "#000")};

  border: none; /* ✅ Removed separate box border */
  padding: 0.6rem 1.2rem;
  font-size: 0.85rem;
  white-space: nowrap;

  transition: all 0.2s ease;

  &:hover {
    background: #d7ae5b;
  }
`;
export const Grid = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  gap: 1rem;

  overflow-x: auto;
  overflow-y: hidden;

  padding-right: calc((100% - 50%) / 2);

  cursor: grab;

  user-select: none;

  scrollbar-width: none;

  -webkit-overflow-scrolling: touch;

  scroll-behavior: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  &.dragging {
    cursor: grabbing;
  }

  img {
    pointer-events: none;
    user-drag: none;
    -webkit-user-drag: none;
  }

  @media (max-width: 768px) {
    padding: 0 1.2rem;
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
  font-weight: 400;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const LocationDescription = styled.p`
  max-width: 80%;
  margin-left: 15%;
  font-size: 1rem;
  font-weight: 300;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
  }
`;

export const PortButton = styled.button`
  display: block;
  position: relative;
  z-index: 3;
  margin: 3rem auto 0;
  font-size: 1.2rem;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;

  width: fit-content; /* shrink to text width */
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%; /* now matches text width perfectly */
    height: 2px;
    background: #d7ae5b;
    z-index: 1;
  }

  @media (max-width: 768px) {
    margin: 2.5rem auto 0;
  }

  @media (max-width: 480px) {
    margin: 2rem auto 0;
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
