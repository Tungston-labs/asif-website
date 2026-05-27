import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 0;

  overflow: hidden;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: none;
  min-width: 0;
  overflow: hidden;
`;

export const MainImageWrapper = styled.div`
  width: 100%;
  height: 700px;

  display: flex;
  
  justify-content: center;

  overflow: hidden;
  background: #fff;
  border-radius: 12px;

  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* FIX ONLY FOR 1440px LAPTOP */
  @media (min-width: 1400px) and (max-width: 1600px) {
    height: 520px;
  }

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const ThumbnailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-top: 16px;

  overflow-x: auto;
  overflow-y: hidden;

  flex-wrap: nowrap;

  padding-bottom: 10px;

  scrollbar-width: thin;
  scrollbar-color: #c8a24c #f2f2f2;

  /* FIX ONLY FOR 1440px LAPTOP */
  @media (min-width: 1400px) and (max-width: 1600px) {
    margin-top: 10px;
  }
`;

export const Thumbnail = styled.div<{ $active: boolean }>`
  position: relative;
  width: 5rem;
  min-width: 5rem;
  height: 5rem;

  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  border: 2px solid transparent;
  transition: all 0.3s ease;

  flex-shrink: 0;

  ${(props) =>
    props.$active &&
    `
    border: 2px solid #c8a24c;
    transform: scale(1.05);
  `}

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 4rem;
    min-width: 4rem;
    height: 4rem;
  }
`;
