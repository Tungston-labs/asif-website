import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 2rem 0 6.25rem; 
  background: #ffffff;
  @media(max-width:1024px){

  padding: 0.625rem 0; 
  }
`;

export const Wrapper = styled.div`
  width: 100%; 
  margin: 0 5rem;
  display: flex;
  gap: 3.75rem; 

  @media (max-width: 90rem) {
    width: 90%;
  }

  @media (max-width: 64rem) {
    gap: 2rem;
    
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 22rem;
    gap: 2.5rem;
  }
`;