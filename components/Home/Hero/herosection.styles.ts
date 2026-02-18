import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  background: #f4f4f4;
  padding: 120px 20px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1100px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 300;
  letter-spacing: 2px;
  color: #111;
  line-height: 1.2;

  span {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #666;
`;

export const ButtonGroup = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  background: #d4a64a;
  color: #fff;
  border: none;
  padding: 14px 28px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 1px;
`;

export const SecondaryButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 14px 28px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 1px;
`;
