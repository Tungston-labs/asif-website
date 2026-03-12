import styled ,{keyframes}from "styled-components";

export const SideNavWrapper = styled.div`
  position: absolute;
  left: 2rem;
  top: 8rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const NavItem = styled.div`
  font-family: "Jost", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;

  color: rgba(253, 253, 253, 1);
  cursor: pointer;

  writing-mode: vertical-rl;
  transform: rotate(180deg);

  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(215, 174, 91, 1);
  }
`;
export const Divider = styled.div`
  position: absolute;
  width: 2px;
  bottom: 0;
  height: 4rem;
  background: rgba(215, 174, 91, 1);
`;
