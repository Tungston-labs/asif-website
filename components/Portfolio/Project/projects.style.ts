import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 2rem 0 6.25rem; 
  background: #ffffff;
  margin-left: 2rem;
    @media (max-width: 600px) {
  margin-left:-1.5rem;

  }
`;

export const Wrapper = styled.div`
  width: 100%; 
  margin: 0 4rem;
  display: flex;
  gap: 3.75rem; 

  @media (max-width: 90rem) {
    width: 90%;
  }

  @media (max-width: 64rem) {
    gap: 2rem;
    
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2.5rem;
    max-width:22rem
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;