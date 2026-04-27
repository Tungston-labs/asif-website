import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 23.6875rem 32.3125rem;
  gap: 2.5rem;

  /* ✅ Tablet */
  @media (max-width: 75rem) {
    grid-template-columns: 1fr 1fr;
  }

  /* ✅ Mobile */
  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30.1875rem;
  overflow: hidden;

  @media (max-width: 64rem) {
    height: 26rem;
  }

  @media (max-width: 48rem) {
    height: 22rem;
  }

  @media (max-width: 30rem) {
    height: 18rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.75rem;

  
  margin-bottom: 3.75rem;

  width: 100%;

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 1.5rem;

    margin-top: 2.5rem;
    margin-bottom: 3rem; 
  }
`;

export const NavButton = styled.button`
  background: #c8a24c;
  color: #ffffff;
  padding: 1.125rem 2.5rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.0625rem;
  transition: 0.3s;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  @media (max-width: 48rem) {
    width: 100%;
  }
`;