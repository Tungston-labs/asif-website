import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 70px 80px 40px 80px;
  color: #ffffff;

  background-image: url("/images/footer-bg.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 50px;
    text-align: center;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Center = styled.div`
  text-align: center;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

export const Label = styled.p`
  font-size: 13px;
  letter-spacing: 1px;
  opacity: 0.7;
`;

export const Value = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 4px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

export const IconBox = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
  }

  &:hover img {
    filter: invert(1);
  }
`;

export const Divider = styled.div`
  margin: 50px 0 30px 0;
  border-top: 1px dashed rgba(255, 255, 255, 0.3);
`;

export const BottomNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;

  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 14px;
    transition: 0.3s;
  }

  a:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
