import styled, { keyframes } from "styled-components";
const zoomAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
`;

export const Section = styled.section`
  padding: 6rem 4rem;
  background: #f7f7f7;
`;

export const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto 3rem;
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

  strong {
    font-weight: 700;
  }
`;

export const Description = styled.p`
  margin-top: 1rem;
  color: #666;
`;

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;

`;

export const Tab = styled.button<{ $active?: boolean }>`
  background: ${({ $active }) =>
    $active ? "rgba(215, 174, 91, 1)" : "transparent"};

  color: ${({ $active }) => ($active ? "#fff" : "#333")};

  border: 1px solid #ddd;
  padding: 0.6rem 1.2rem;
  border-radius: 0.2rem;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: rgba(215, 174, 91, 0.3);
  }
`;

export const Grid = styled.div`
  display: flex;
  gap: 2rem;

  overflow-x: auto;
  overflow-y: hidden;

  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  padding-left: calc((100%- 80%) / 2);
  padding-right: calc((100% - 80%) / 2);

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  flex: 0 0 800px;
  height: 476px;
  
  position: relative;
  overflow: hidden;

  border-radius: 0.3rem;
  scroll-snap-align: center;

  box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.45);

  cursor: pointer;

  transition: transform 0.35s ease;

  &:hover {
    transform: scale(1.03);
  }
`;


export const LocationTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 12px;
`;

export const LocationDescription = styled.p`
  max-width: 720px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.8;
`;
export const PortButton = styled.button`
  display: block;
  margin: 2rem auto 0;

  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;

  padding: 12px 28px;
  cursor: pointer;
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




