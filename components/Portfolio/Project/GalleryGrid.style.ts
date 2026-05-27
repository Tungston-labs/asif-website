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
  align-items: center;
  justify-content: center;

  overflow: hidden;
  background: #fff;
  border-radius: 12px;

  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block; /* removes extra bottom gap */
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

  margin-top: 16px; /* SAME FIXED GAP */

  overflow-x: auto;
  overflow-y: hidden;

  flex-wrap: nowrap;

  padding-bottom: 10px;

  scrollbar-width: thin;
  scrollbar-color: #c8a24c #f2f2f2;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f2f2f2;
  }

  &::-webkit-scrollbar-thumb {
    background: #c8a24c;
    border-radius: 10px;
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
