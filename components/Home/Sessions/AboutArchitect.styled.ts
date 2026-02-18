import styled ,{keyframes}from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: #000000;
  color: #fff;
  padding: 2rem 4rem;
  overflow: visible;

`;
export const DarkSection = styled.section`
  position: relative;
  width: 100%;
  background: #000000;
  color: #fff;
  margin-top: -4rem;   
  z-index: 2;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.2fr 0.3fr;
  gap: 3rem;
  align-items: center;

  max-width: 1400px;
  margin: 0 auto;
`;

export const LeftWrapper = styled.div`
  position: relative;
`;

export const CenterWrapper = styled.div`
  max-width: 38rem;
  
`;

export const RightWrapper = styled.div`
  display: flex;
  
`;
const fadeZoom = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.08);
  }
  15% {
    opacity: 1;
    transform: scale(1);
  }
  85% {
    opacity: 1;
    transform: scale(1.02);
  }
  100% {
    opacity: 0;
    transform: scale(1.06);
  }
`;
export const ContentWrapper=styled.div`
margin-top: 0.5rem;

`
export const GalleryImage = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;

  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.8s ease;

  animation: ${({ $active }) => ($active ? fadeZoom : "none")} 6s ease-in-out;
`;
export const GalleryWrapper = styled.div`
  position: relative;
  width: 18rem;
  height: 48rem;
  margin-top: -4rem;
`;

export const ExperienceBox = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  color: #fff;
`;

export const ExperienceText = styled.h3`
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
`;
export const Tag = styled.span`
  color: #fff;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.15rem;
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

export const TalkButton = styled.button`
  margin-top: 2rem;
  background: #d7ae5b;
  border: none;
  padding: 0.9rem 2rem;
  color: #fff;
  cursor: pointer;
`;
export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.1rem;
`;
export const CircleButton = styled.div`
  position: absolute;
  right: 4rem;
  bottom: 3rem;

  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #d7ae5b;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  cursor: pointer;
`;

