import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  @media (min-width: 1400px) {
    max-width: 1300px;
  }

  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`;

export const MainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 65vh; /* ✅ FIT SCREEN HEIGHT */
  overflow: hidden;

  box-shadow:
    0 0 25px rgba(0, 0, 0, 0.12),
    0 15px 40px rgba(0, 0, 0, 0.18),
    0 -10px 30px rgba(0, 0, 0, 0.08);

  @media (min-width: 1400px) {
    height: 70vh;
  }

  @media (min-width: 1600px) {
    height: 75vh;
  }

  @media (max-width: 1024px) {
    height: 55vh;
  }

  @media (max-width: 768px) {
    height: 45vh;
  }

  @media (max-width: 480px) {
    height: 32vh;
  }
`;

export const ThumbnailRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  /* ✅ MOVE GALLERY UP */
  margin-top: 1rem;

  overflow-x: auto;
  overflow-y: hidden;

  flex-wrap: nowrap;
  scroll-behavior: smooth;

  padding: 0 10px 10px 10px;

  width: 100%;
  min-width: 0;

  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Thumbnail = styled.div`
  position: relative;
  width: 80px;
  min-width: 80px;
  height: 80px;

  border-radius: 12px;
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
    width: 65px;
    min-width: 65px;
    height: 65px;
  }
`;
