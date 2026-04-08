import styled from "styled-components";

export const Sidebar = styled.div`
  width: 17.5rem;  
  background: #ffffff;
  border: 0.0625rem solid #1b1b1b33;
  
  @media (max-width: 48rem) {
    width: 100%;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;  
  }

  @media (max-width: 48rem)::-webkit-scrollbar {
    display: none;  
  }
`;

export const Title = styled.div`
  padding: 1.25rem;  
  font-weight: 600;
  border-bottom: 0.0625rem solid #ddd;

  @media (max-width: 48rem) {
    display: none;  
  }
`;

export const LocationItem = styled.div<{ $active: boolean }>`
  padding: 1.125rem 1.25rem;  
  border-bottom: 0.0625rem solid #eee;
  cursor: pointer;
  transition: 0.3s;

  background: ${({ $active }) => ($active ? "#c8a24c" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};

  &:hover {
    background: #c8a24c;
    color: #fff;
  }

  @media (max-width: 48rem) {
    display: inline-block;
    border-bottom: none;
    border-right: 0.0625rem solid #eee;
    min-width: 8rem;
    text-align: center;
    flex-shrink: 0;
  }
`;