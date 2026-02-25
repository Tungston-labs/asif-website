 import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 23.6875rem 32.3125rem; /* 379px 517px */
  gap: 2.5rem; /* 40px */

  @media (max-width: 75rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30.1875rem; /* 483px */
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
  margin-top: 3.75rem; /* 60px */
  width: 100%;

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const NavButton = styled.button`
  background: #c8a24c;
  color: #ffffff;
  padding: 1.125rem 2.5rem; /* 18px 40px */
  border: none;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.0625rem; /* 1px */
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