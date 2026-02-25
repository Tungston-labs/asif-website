import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 0.625rem 0 6.25rem; /* 10px 0 100px */
  background: #ffffff;
`;

export const Wrapper = styled.div`
  width: 81.25rem; /* 1300px */
  margin: 0 auto;
  display: flex;
  gap: 3.75rem; /* 60px */

  @media (max-width: 90rem) {
    width: 90%;
  }

  @media (max-width: 64rem) {
    gap: 2rem;
  }

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;