import styled from "styled-components";
import Link from "next/link";


export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 6rem 6rem ;
  background: #f6f6f6;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 5rem 3rem;
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
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const LeftContent = styled.div`
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled.h2`
  margin-top: 1rem;
  font-size: 2rem;
  line-height: 1.35;
  font-weight: 300;
  color: #111;

  strong {
    font-weight: 700;
  }

  span {
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.9rem;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Description = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.8;
  color: #666;
  max-width: 32rem;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.95rem;
  }
`;

export const ReadMoreButton = styled(Link)`
  margin-top: 2rem;
  background: #d7ae5b;
  color: #fff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 8rem;
  letter-spacing: 0.05rem;
  transition: 0.3s ease;
  text-decoration: none;   
  display: inline-block;

  &:hover {
    transform: translateY(-0.2rem);
  }

  &:visited {
    color: #fff;           
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 16rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;

export const RightImages = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const ImageCard = styled.div<{ $offset?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  ${({ $offset }) =>
    $offset &&
    `
      margin-top: -3rem;
    `}

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 22rem;    
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
      height: 25rem;    
      object-fit: cover;
    }
  }
`;

export const ImageTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  color: #111;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ImageSubtitle = styled.p`
  font-size: 0.75rem;
  color: #777;
`;

export const BgBlueprint = styled.div`
  position: absolute;
  bottom: -0.10rem;
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