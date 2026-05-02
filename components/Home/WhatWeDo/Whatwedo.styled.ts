import styled from "styled-components";
import Link from "next/link";

export const Section = styled.section`
  width: 100%;
  background: #f6f6f6;
`;

export const ContentWrapper = styled.div`
  display: grid;

  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftContent = styled.div`
  max-width: 83%;
  padding: 6rem 5rem;
  z-index: 2;
  @media (max-width: 992px) {
    max-width: 100%;
    padding: 4rem 2rem;
  }
`;

export const Title = styled.h2`
  font-family: Jost;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 400;
  line-height: 1.25;
  color: #111;
  margin-top: 1.6rem;

  span {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;   /* reduced size */
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;   /* smaller phones */
    line-height: 1.3;
  }
`;

export const Description = styled.p`
  font-family: Jost;
  font-size: 16px;
  line-height: 1.4;
  color: #666;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FeatureItem = styled.div``;

export const FeatureTitle = styled.h4`
  font-family: Jost;
  font-size: 16px;
  font-weight: 500;
  color: #111;
  margin-bottom: 0.4rem;
`;

export const FeatureText = styled.p`
  font-family: Jost;
  font-size: 15px;
  color: #666;
  line-height: 1.7;
`;

export const QuoteButton = styled(Link)`
  margin-top: 2rem;
  padding: 14px 28px;
  background: #c9a45c;
  color: white;
  font-weight: 500;
  font-family: var(--font-jost), sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
  cursor: pointer;
  border: none;
  transition: 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    border: 1px solid #c9a45c;
    background: #fff;
    color: #000;
  }
  @media (max-width: 768px) {
   font-size: 1rem;
    padding: 10px 14px;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
`;

export const RightImage = styled.div`
  width: 100%;
  margin-top: -20rem;
  img {
    width: 100%;
    object-fit: cover;
    display: block;
  }
  @media (max-width: 992px) {
    margin-top: -5rem;
  }
`;
