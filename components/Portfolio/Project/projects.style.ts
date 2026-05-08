import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 2rem 5rem 6.25rem;
  background: #ffffff;

  @media (max-width: 1024px) {
    padding: 2rem 5rem 5.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem 5.5rem;
  }

  @media (max-width: 600px) {
    padding: 1.75rem 1.5rem 4.5rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto 0 0;
  display: grid;
  grid-template-columns: 17.5rem minmax(0, 1fr);
  align-items: stretch;
  gap: 3rem;

  @media (min-width: 1600px) {
    max-width: 92rem;
  }

  @media (min-width: 2200px) {
    max-width: 96rem;
  }

  @media (min-width: 2800px) {
    max-width: 100rem;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 15.625rem minmax(0, 1fr);
    gap: 2rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
    gap: 1.75rem;
  }

  @media (max-width: 600px) {
    gap: 1.375rem;
  }
`;
