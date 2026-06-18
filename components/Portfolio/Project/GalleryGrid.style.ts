import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
`;

// export const InnerWrapper = styled.div`
//   width: 100%;
//   max-width: none;
//   min-width: 0;
//   margin-left: 2rem;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   gap: var(--gallery-gap);
//   @media (max-width: 1023px) {
//     margin-left: 0;
//   }
// `;

export const InnerWrapper = styled.div`
  width: 100%;
  min-width: 0;
  margin-left: 2rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  height: 100%;

  gap: var(--gallery-gap);

  @media (max-width: 1023px) {
    margin-left: 0;
  }
`;

// export const MainImageWrapper = styled.div`
//   width: 94%;
//   min-width: 0;
//   height: var(--main-image-height);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
//   background: #fff;
//   border-radius: 12px;
//   position: relative;

//   @media (min-width: 1024px) {
//     box-shadow: inset 0 0 0 1px #ececec;
//   }
// `;

export const MainImageWrapper = styled.div`
  flex: 1;
  width: 94%;
  min-width: 0;
  overflow: hidden;
  position: relative;

  height: var(--main-image-height);
  min-height: 300px;

  @media (max-width: 1023px) {
    width: 100%;
    min-height: 250px;
  }

  @media (max-width: 768px) {
    min-height: 220px;
  }

  @media (min-width: 1024px) {
    box-shadow: inset 0 0 0 1px #ececec;
  }
`;

export const ThumbnailRow = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  min-height: var(--thumbnail-row-height);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 16px;

  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
  padding-bottom: var(--thumbnail-row-padding-bottom);

  scrollbar-width: thin;
  scrollbar-color: #c8a24c #f2f2f2;
`;

export const ThumbnailTrack = styled.div<{
  $isAll: boolean;
}>`
  display: flex;
  width: max-content;
  min-width: 100%;
  justify-content: ${({ $isAll }) => ($isAll ? "flex-start" : "center")};
  gap: 16px;
  @media (max-width: 1200px) {
    gap: 12px;
  }
`;

export const Thumbnail = styled.button<{ $active: boolean }>`
  position: relative;
  width: var(--thumbnail-size);
  min-width: var(--thumbnail-size);
  height: var(--thumbnail-size);
  padding: 0;

  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  appearance: none;
  background: #fff;
  border: 2px solid transparent;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
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

  &:focus-visible {
    outline: 2px solid #c8a24c;
    outline-offset: 2px;
  }
`;

export const MainImage = styled(Image)`
  object-fit: contain;
  object-position: center;
`;

export const ThumbnailImage = styled(Image)`
  object-fit: cover;
`;

// export const SocialWrapper = styled.div`
//   width: 94%;
//   margin-top: 0.5rem;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

export const SocialWrapper = styled.div`
  width: 94%;
  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* Fixed height prevents layout jumping */
  min-height: 100px;
`;

export const SocialTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;

  color: #222;
`;

export const SocialButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SocialButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 10px 18px;

  border-radius: 10px;

  background: white;
  color: #222;

  border: 1px solid #ddd;

  text-decoration: none;
  font-size: 14px;
  font-weight: 500;

  transition: all 0.3s ease;

  svg {
    font-size: 18px;
  }

  &:hover {
    background: #c8a24c;
    color: white;
    border-color: #c8a24c;
    transform: translateY(-2px);
  }
`;
