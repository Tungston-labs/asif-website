import styled ,{keyframes}from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: rgba(0, 0, 0, 1);
  color: #fff;
  padding: 2rem 4rem;
  overflow: visible;

`;
export const DarkSection = styled.section`
  position: relative;
  width: 100%;
background: #000000;
background: linear-gradient(145deg,rgba(0, 0, 0, 1) 70%, rgba(192, 153, 73, 1)150%);  color: #fff;

  margin-top: -4rem;
  padding: 6rem 0;       
  min-height: 48rem;      

  z-index: 2;
  
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.9fr 1.2fr;
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
  height: 52rem;
  margin-top: -8rem;
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
export const Tag = styled.span<{ $color?: string }>`
  position: relative;
  display: inline-block;

  /* ONLY text color changes */
  color: ${({ $color }) => $color || "#fff"};

  font-size: 0.75rem;
  letter-spacing: 0.15rem;
  padding: 0 1.8rem;

  /* LEFT TOP L */
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

  /* RIGHT BOTTOM L */
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
export const TalkButton = styled.button`
  margin-top: 2rem;
  background: #d7ae5b;
  border: none;
  padding: 0.9rem 2rem;
  color: #fff;
  cursor: pointer;
`;
export const PortfolioText = styled.h1`
  font-family: "Manrope" ;
  font-weight: 900;
  font-size: 8.33rem;
  line-height: 1;
  letter-spacing: 0.5rem;
  margin-top: 2.5rem;

  white-space: nowrap;
  user-select: none;
  pointer-events: none;

  color: transparent;
  -webkit-text-stroke: 1px rgba(236, 232, 232, 0.15);

  opacity: 0.7;
`;
export const DescriptionWrapper = styled.div`
  position: relative;
  margin-top: 1.5rem;
`;
export const SideImage = styled.div`
  position: absolute;

  /* attach to viewport edge */
  right: calc(50% - 50%);

  top:17.80%;                 /* lower than center */
  transform: translateY(-50%);

  width: 20rem;
  height: 20rem;

  overflow: hidden;
  z-index: 3;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 62rem) {
    width: 15rem;
    height: 22rem;
  }

  @media (max-width: 48rem) {
    display: none;
  }
`;
export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  align-items: center;
  justify-content: center;

  height: 100%;
  font-size: 1.1rem;

  justify-self: end;
  transform: translateX(6.5rem); /* move right */
`;


export const CircleButton = styled.div`
  position: absolute;
  right: 20rem;
  bottom: 7.5rem;

  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: #d7ae5b;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  cursor: pointer;
`;
export const CircleInside = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #000000;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  cursor: pointer;
`;

