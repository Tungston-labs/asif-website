import styled from "styled-components";

export const Container = styled.section`
   width: 100%;
  padding: 2rem 2rem 6.25rem;
  background: #ffffff;
    @media (max-width: 768px) {
  margin-left:-3.3rem;

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
    max-width:26rem
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;