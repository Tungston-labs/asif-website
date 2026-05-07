"use client";
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #000;
  
  @media (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  width: 62.6875rem;   
  height: 41.625rem;   
  padding: 5rem 5.625rem; 
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url("/images/enquiry-left.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
@media (max-width: 2624px) and (min-width: 1900px) {
  width: 58.6875rem;   
  height: 41.625rem;
  padding: 4rem 3rem;
}

  @media (max-width: 1024px) {
    width: 100%;
    padding: 4rem 1rem;
      max-width: 36.6875rem;   
  height: 41.625rem; 
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;
     height: 61.625rem;

  }
`;

export const RightContainer = styled.div`
  width: 37.75rem;   
  height: 41.625rem; 

  background-image: url("/images/enquiry-right.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

@media (max-width: 2624px) and (min-width: 1900px) {
  width: 55.6875rem;   
  height: 41.625rem;
  padding: 4rem 3rem;
}

  @media (max-width: 1024px) {
    width: 100%;
    padding: 4rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

export const Title = styled.h2`
  font-family: var(--font-jost), sans-serif;
  font-size: 2.375rem; 
  font-weight: 400;
  margin-bottom: 1.25rem; 

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const SubText = styled.p`
  font-family: var(--font-jost), sans-serif;
  font-size: 1rem; 
  font-weight: 300;
  line-height: 1.8;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Form = styled.form`
  h4 {
    font-family: var(--font-jost), sans-serif;
    font-weight: 400;
    margin: 1.875rem 0 1.25rem; 
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 1.25rem; 
  margin-bottom: 1.25rem;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  background: transparent;
  border: 0.0625rem solid #444; 
  padding: 0.875rem 1rem; 
  color: #fff;
  font-family: var(--font-jost), sans-serif;
  font-weight: 300;
  outline: none;
  border-radius: 0.3125rem; 

  font-size: 16px; 

  &::placeholder {
    color: #888;
  }

  -webkit-appearance: none;
  appearance: none;
   @media (max-width: 1024px) {
    width: 100%;
      font-size: 14px; 

  }
`;

export const Select = styled.select`
  flex: 1;
  background: transparent;
  border: 0.0625rem solid #444;
  padding: 0.875rem 1rem;
  color: #888;
  font-family: var(--font-jost), sans-serif;
  font-weight: 300;
  outline: none;
  border-radius: 0.3125rem;

  font-size: 16px; 

  -webkit-appearance: none;
  appearance: none;
`;

export const Button = styled.button`
  margin-top: 1.875rem; 
  padding: 1rem 2.5rem; 
  background: linear-gradient(90deg, #c8a24c, #d8b36a);
  border: none;
  border-radius: 0.3125rem; 
  color: #fff;
  font-family: var(--font-jost), sans-serif;
  font-weight: 500;
  letter-spacing: 0.0625rem; 
  cursor: pointer;
  width: fit-content;

  @media (max-width: 1024px) {
    width: 100%;
  }
  
`;