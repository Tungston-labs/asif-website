import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 2rem clamp(1.5rem, 3.5vw, 5rem) 6.25rem;
  background: #ffffff;

  @media (max-width: 1023px) {
    padding: 2rem clamp(1.5rem, 3.25vw, 3rem) 5.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem 5.5rem;
  }

  @media (max-width: 600px) {
    padding: 1.75rem 1.5rem 4.5rem;
  }
`;

export const Wrapper = styled.div`
  --sidebar-width: 14.5rem;
  --portfolio-column-gap: 1.5rem;
  --gallery-gap: 1rem;
  --thumbnail-size: 4.25rem;
  --thumbnail-row-padding-bottom: 0.625rem;
  --thumbnail-row-height: calc(
    var(--thumbnail-size) + var(--thumbnail-row-padding-bottom)
  );
  --main-image-height: 24rem;
  --portfolio-panel-height: calc(
    var(--main-image-height) + var(--gallery-gap) + var(--thumbnail-row-height)
  );
  width: 100%;
  max-width: none;
  margin: 0;
  display: grid;
  grid-template-columns: var(--sidebar-width) minmax(0, 1fr);
  align-items: stretch;
  gap: var(--portfolio-column-gap);

  @media (min-width: 1200px) {
    --sidebar-width: 15.5rem;
    --portfolio-column-gap: 1.75rem;
    --main-image-height: 28rem;
    --thumbnail-size: 4.5rem;
  }

  @media (min-width: 1440px) {
    --sidebar-width: 17rem;
    --portfolio-column-gap: 2rem;
    --main-image-height: 31rem;
    --thumbnail-size: 5rem;
  }

  @media (min-width: 1700px) {
    --sidebar-width: 17.5rem;
    --portfolio-column-gap: 2.25rem;
    --main-image-height: 33rem;
    --thumbnail-size: 5.25rem;
  }

  @media (min-width: 2200px) {
    --main-image-height: 36rem;
    --thumbnail-size: 5.5rem;
  }

  @media (min-width: 2800px) {
    --main-image-height: 40rem;
  }

  @media (max-width: 1023px) {
    --gallery-gap: 0.875rem;
    --thumbnail-size: 4.75rem;
    --thumbnail-row-padding-bottom: 0.5rem;
    --main-image-height: clamp(18rem, 58vw, 30rem);
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
    gap: 1.75rem;
  }

  @media (max-width: 768px) {
    --thumbnail-size: 4.5rem;
    --main-image-height: clamp(16rem, 62vw, 25rem);
  }

  @media (max-width: 600px) {
    --gallery-gap: 0.75rem;
    gap: 1.375rem;
  }

  @media (max-width: 480px) {
    --thumbnail-size: 4rem;
    --main-image-height: clamp(13.5rem, 64vw, 18rem);
  }
`;
