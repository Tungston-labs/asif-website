import styled from "styled-components";

export const Sidebar = styled.div`
  width: 17.5rem;
  background: #ffffff;
  border: 0.0625rem solid #1b1b1b33;
  height: fit-content;
  margin-left: -0.8rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
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

export const ScrollWrapper = styled.div<{ $showMore: boolean }>`
  max-height: ${({ $showMore }) =>
    $showMore ? "28rem" : "auto"};

  overflow-y: ${({ $showMore }) =>
    $showMore ? "auto" : "hidden"};

  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c8a24c;
    border-radius: 10px;
  }

  /* ✅ TABLET + MOBILE RESPONSIVE */
  @media (max-width: 1024px) {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: none;
    width: 100%;
    

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const LocationItem = styled.div<{ $active: boolean }>`
  padding: 1.125rem 1.25rem;
  border-bottom: 0.0625rem solid #eee;
  cursor: pointer;
  transition: 0.3s;

  background: ${({ $active }) =>
    ($active ? "#c8a24c" : "#fff")};

  color: ${({ $active }) =>
    ($active ? "#fff" : "#000")};

  &:hover {
    background: #c8a24c;
    color: #fff;
  }

  /* ✅ TABLET + MOBILE */
  @media (max-width: 1024px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    border-bottom: none;
    border-right: 0.0625rem solid #eee;

    min-width: 9rem;
    height: 3.5rem;

    text-align: center;
    flex-shrink: 0;

    font-size: 0.95rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    min-width: 8rem;
    height: 3.2rem;
    font-size: 0.85rem;
  }
`;

export const ViewMoreButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  background: #f8f8f8;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background: #c8a24c;
    color: #fff;
  }

  /* ✅ HIDE ONLY ON MOBILE */
  @media (max-width: 768px) {
    display: none;
  }
`;