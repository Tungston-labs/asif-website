import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 4.375rem 5rem 2.5rem 5rem; /* 70px 80px 40px 80px */
  color: #ffffff;

  background-image: url("/images/footer-bg.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    padding: 4rem 3rem 2.5rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3.125rem; /* 50px */
    text-align: center;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem; /* 30px */
`;

export const Center = styled.div`
  text-align: center;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem; /* 30px */
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.9375rem; /* 15px */

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Label = styled.p`
  font-size: 0.8125rem; /* 13px */
  letter-spacing: 0.0625rem; /* 1px */
  opacity: 0.7;
`;

export const Value = styled.p`
  font-size: 1.125rem; /* 18px */
  font-weight: 500;
  margin-top: 0.25rem; /* 4px */
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.9375rem; /* 15px */
  margin-top: 1.25rem; /* 20px */
`;

export const IconBox = styled.div`
  width: 2.8125rem; /* 45px */
  height: 2.8125rem;
  border: 0.0625rem solid #ffffff; /* 1px */
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
  margin: 3.125rem 0 1.875rem 0; /* 50px 0 30px 0 */
  border-top: 0.0625rem dashed rgba(255, 255, 255, 0.3);
`;

export const BottomNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.75rem; /* 60px */

  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 0.875rem; /* 14px */
    transition: 0.3s;
  }

  a:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.25rem; /* 20px */
  }
`;