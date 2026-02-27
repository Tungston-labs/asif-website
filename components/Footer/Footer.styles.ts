import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 4.375rem 5rem 2.5rem 5rem;
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
    align-items: flex-start;   
    gap: 2.5rem;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;   
  gap: 1.5rem;

  @media (min-width: 993px) {
    align-items: center;
    text-align: center;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: flex-start;  
    text-align: left;
  }
`;

export const Label = styled.p`
  font-size: 0.8125rem;
  letter-spacing: 0.0625rem;
  opacity: 0.7;
`;

export const Value = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  margin-top: 0.25rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  @media (min-width: 993px) {
    justify-content: center;
  }

  @media (max-width: 992px) {
    justify-content: flex-start;  
  }
`;

export const IconBox = styled.div`
  width: 2.8125rem;
  height: 2.8125rem;
  border: 0.0625rem solid #ffffff;
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
  margin: 3rem 0 2rem 0;
  border-top: 0.0625rem dashed rgba(255, 255, 255, 0.3);
`;

export const BottomNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.75rem;

  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 0.875rem;
    transition: 0.3s;
    white-space: nowrap;
  }

  a:hover {
    opacity: 0.7;
  }


  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-wrap: nowrap;        
    gap: 1rem;                
    overflow-x: auto;         
    
    a {
      font-size: 0.75rem;     
    }
  }
`;