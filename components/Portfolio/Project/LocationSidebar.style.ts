import styled from "styled-components";

export const Sidebar = styled.div`
  width: 280px;
  background: #fffbfb;
  border: #1b1b1b33;
`;

export const Title = styled.div`
  padding: 20px;
  font-weight: 600;
  border-bottom: 1px solid #ddd;
`;

export const LocationItem = styled.div<{ $active: boolean }>`
  padding: 18px 20px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: 0.3s;

  background: ${({ $active }) => ($active ? "#c8a24c" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};

  &:hover {
    background: #c8a24c;
    color: #fff;
  }
`;