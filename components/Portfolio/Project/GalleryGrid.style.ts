import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 0;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: none;
  min-width: 0;
`;

export const MainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: clamp(22.5rem, 42vw, 42.5rem);
  min-height: 22.5rem;
  overflow: hidden;

  box-shadow:
    0 0 25px rgba(0, 0, 0, 0.12),
    0 15px 40px rgba(0, 0, 0, 0.18),
    0 -10px 30px rgba(0, 0, 0, 0.08);

  img {
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: 1600px) {
    height: clamp(32.5rem, 31vw, 45rem);
  }

  @media (min-width: 2200px) {
    height: clamp(34rem, 28vw, 48rem);
  }

  @media (min-width: 2800px) {
    height: clamp(35rem, 25vw, 50rem);
  }

  @media (max-width: 1024px) {
    height: clamp(22.5rem, 58vw, 38.75rem);
  }

  @media (max-width: 768px) {
    height: clamp(18.75rem, 64vw, 30rem);
    min-height: 18.75rem;
  }

  @media (max-width: 480px) {
    height: clamp(15rem, 70vw, 21.25rem);
    min-height: 15rem;
  }
`;

export const ThumbnailRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  margin-top: 1rem;
  overflow-x: auto;
  overflow-y: hidden;

  flex-wrap: nowrap;
  scroll-behavior: smooth;

  padding: 0 0.125rem 0.625rem;

  width: 100%;
  min-width: 0;

  scrollbar-width: thin;
  scrollbar-color: #c8a24c #f2f2f2;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 0.375rem;
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
