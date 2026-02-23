import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 379px 517px;
  gap: 40px;
  justify-content: start;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 483px;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  width: 100%;
`;

export const NavButton = styled.button`
  background: #c8a24c;
  color: #fff;
  padding: 18px 40px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.3s;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.9;
  }
`;