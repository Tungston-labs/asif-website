import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 2rem 4rem;
  background: #f6f6f6;
  overflow: hidden;
`;

export const Container = styled.div`
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 62rem) {
    grid-template-columns: 1fr;
  }
`;

export const LeftContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const Tag = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.15rem;
  color: #c09949;
  font-weight: 500;
`;

export const Title = styled.h2`
  margin-top: 1rem;
  font-size: 2.5rem;
  line-height: 1.35;
  font-weight: 300;
  color: #111;

  strong {
    font-weight: 700;
  }

  span {
    font-weight: 700;
  }
`;

export const Description = styled.p`
  margin-top: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #666;
  max-width: 32rem;
`;

export const ReadMoreButton = styled.button`
  margin-top: 2rem;
  background: #d7ae5b;
  color: #fff;
  border: none;
  padding: 0.9rem 1.8rem;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.05rem;

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-0.2rem);
  }
`;

export const RightImages = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
`;

export const ImageCard = styled.div<{ $offset?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  ${({ $offset }) =>
    $offset &&
    `
      margin-top: -3rem;
    `}

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ImageTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  color: #111;
`;

export const ImageSubtitle = styled.p`
  font-size: 0.8rem;
  color: #777;
`;

export const BgBlueprint = styled.div`
  position: relative;

  width: 28rem;
  height: 18rem;


  opacity: 0.7;
  pointer-events: none;

  img {
    object-fit: contain;
  }
`;

