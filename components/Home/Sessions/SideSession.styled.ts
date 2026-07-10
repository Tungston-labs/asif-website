import styled, { keyframes } from "styled-components";

export const SideNavWrapper = styled.div`
  position: absolute;
  left: 2rem;
  top: 8rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 1304px) {
    left: 2rem;
    top: 4rem;
  }
  @media (max-width: 1024px) {
    left: 2rem;
    top: 5rem;
  }
  @media (max-width: 768px) {
    top: 5rem;
    display: none;
  }
`;

export const NavItem = styled.button`
  font-family: "Jost", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  padding: 0;
  background: transparent;
  border: 0;

  color: rgba(253, 253, 253, 1);
  cursor: pointer;

  writing-mode: vertical-rl;
  transform: rotate(180deg);

  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(215, 174, 91, 1);
  }
  @media (max-width: 1324px) {
    font-size: 14px;
  }
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;
export const Divider = styled.div`
  position: absolute;
  width: 2px;
  bottom: 0;
  height: 4rem;
  background: rgba(215, 174, 91, 1);
`;
