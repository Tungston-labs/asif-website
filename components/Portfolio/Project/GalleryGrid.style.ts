import styled from "styled-components";

/* ✅ RIGHT SECTION */
export const Container = styled.div`
  width: 100%;
`;

/* ✅ FLEXIBLE WIDTH CONTROL */
export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1200px; /* base */

  /* 🔥 responsive scaling */
  @media (min-width: 1400px) {
    max-width: 1300px;
  }

  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`;

/* ✅ MAIN IMAGE (RESPONSIVE SIZE INSTEAD OF 125%) */
export const MainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 700px; /* base height */
  overflow: hidden;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);

  /* 🔥 large screens (your current 125% feel) */
  @media (min-width: 1400px) {
    height: 850px;
  }

  @media (min-width: 1600px) {
    height: 950px;
  }

  /* tablet */
  @media (max-width: 1024px) {
    height: 500px;
  }

  /* mobile */
  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

/* ✅ THUMBNAILS */
export const ThumbnailRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1.5rem;
  margin-top: 2rem;

  overflow-x: auto;
  flex-wrap: nowrap;

  scroll-behavior: smooth;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

/* ✅ THUMBNAIL */
export const Thumbnail = styled.div`
  position: relative;
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
    min-width: 65px;
    height: 65px;
  }
`;