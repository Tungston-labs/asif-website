import styled from "styled-components";

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
  max-width: 80%;
    padding: 2rem 5%;

`;

export const Title = styled.h2`
  font-family: Jost;
  font-size: 42px;
  font-weight: 400;
  line-height: 1.3;
  color: #111;
  margin-bottom: 1.5rem;

  span {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-family: Jost;
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 2rem;
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

export const QuoteButton = styled.button`
  margin-top: 2rem;
  padding: 14px 28px;
  background: #c9a45c;
  border: none;
  color: white;
  font-family: Jost;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #b8934e;
  }
`;

export const RightImage = styled.div`
  width: 100%;
margin-top: -10rem;
  img {
    width: 100%;
    object-fit: cover;
    display: block;
  }
`;