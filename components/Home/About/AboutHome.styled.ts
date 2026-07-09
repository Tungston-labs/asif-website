import Image from "next/image";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 6rem 6rem;
  background: #f6f6f6;
  overflow: hidden;

  @media (max-width: 1024px) and (min-width: 758px) {
    padding: 3rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 5rem 2rem;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* ✅ stack */
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const LeftContent = styled.div`
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const Title = styled.h2`
  margin-top: 1rem;
  font-size: 2.25rem;
  line-height: 1.35;
  font-weight: 300;
  color: #000000;

  strong {
    font-weight: 500;
  }

  span {
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.94rem;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const Description = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  color: #000000;
  max-width: 32rem;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
    text-align: left;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    font-size: 1.2rem;
  }
`;

export const StyledLink = styled.a`
  margin-top: 2rem;
  background-color: #9d7422;
  color: #fff;
  border: none;
  padding: 14px 28px;
  font-weight: 500;
  cursor: pointer;
  font-family: var(--font-jost), sans-serif;
  margin-bottom: 8rem;
  letter-spacing: 0.05rem;
  transition: 0.3s ease;
  text-decoration: none;
  display: inline-block;
  font-size: 0.8rem;

  &:hover {
    color: #000;
    background-color: white;
    border: 1px solid #9d7422;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 14px;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }
`;

export const RightImages = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 1024px) {
    order: -1; 
    margin-top: 4rem;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    
    
  }
`;

export const ImageCard = styled.div<{ $offset?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  ${({ $offset }) =>
    $offset &&
    `
      margin-top: -2.5rem;
    `}
    
@media (max-width: 768px) {
    ${({ $offset }) =>
      $offset &&
      `
        margin-left: 2rem;
           
      `}
}
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

@media (max-width: 768px) {
  margin-top: 0;
  align-items: flex-start;
  text-align: flex-start;   // better alignment
  width: 100%;
  max-width: 22rem;
  margin-left: 0.1rem;     // consistent width for both cards
}

@media (max-width: 768px) {
  img {
    width: 100%;
    max-width: 22rem;
    display: block;
  }

}

`;

export const ImageTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  color: #111;
   margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 1rem;
    text-align: left;
  }
`;

export const ImageSubtitle = styled.p`
  font-size: 0.75rem;
  color: #111;
    @media (max-width: 1024px) {
    font-size: 0.85rem;
        margin-bottom:1rem;

  }
  @media (max-width: 768px) {
    font-size: 1rem;
        margin-bottom:1rem;

  }
`;

export const BgBlueprint = styled.div`
  position: absolute;
  bottom: -0.1rem;
  left: 0;
  width: 28rem;
  height: 18rem;
  opacity: 1;
  pointer-events: none;
  z-index: 0;

  img {
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 22rem;
    height: 24rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
