"use client";
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #000;

  @media (max-width: 64rem) {
    padding: 0 2rem;
  }

  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  width: 52.6875rem;   /* 843px */
  height: 41.625rem;   /* 666px */
  padding: 5rem 5.625rem; /* 80px 90px */
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url("/images/enquiry-left.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 75rem) {
    width: 100%;
    height: auto;
    padding: 4rem 3rem;
  }

  @media (max-width: 48rem) {
    padding: 3rem 2rem;
  }
`;

export const RightContainer = styled.div`
  width: 37.75rem;   /* 604px */
  height: 41.625rem; /* 666px */

  background-image: url("/images/enquiry-right.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 75rem) {
    width: 100%;
    height: 25rem;
  }

  @media (max-width: 48rem) {
    height: 18rem;
  }
`;

export const Title = styled.h2`
  font-family: var(--font-jost), sans-serif;
  font-size: 2.375rem; /* 38px */
  font-weight: 400;
  margin-bottom: 1.25rem; /* 20px */

  @media (max-width: 48rem) {
    font-size: 1.75rem;
  }
`;

export const SubText = styled.p`
  font-family: var(--font-jost), sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 2.5rem; /* 40px */
  color: #ccc;

  @media (max-width: 48rem) {
    font-size: 0.9375rem;
  }
`;


export const Form = styled.form`
  h4 {
    font-family: var(--font-jost), sans-serif;
    font-weight: 400;
    margin: 1.875rem 0 1.25rem; /* 30px 0 20px */
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 1.25rem; /* 20px */
  margin-bottom: 1.25rem;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  background: transparent;
  border: 0.0625rem solid #444; /* 1px */
  padding: 0.875rem 1rem; /* 14px 16px */
  color: #fff;
  font-family: var(--font-jost), sans-serif;
  font-weight: 300;
  outline: none;
  border-radius: 0.3125rem; /* 5px */

  &::placeholder {
    color: #888;
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
`;

export const Button = styled.button`
  margin-top: 1.875rem; /* 30px */
  padding: 1rem 2.5rem; /* 16px 40px */
  background: linear-gradient(90deg, #c8a24c, #d8b36a);
  border: none;
  border-radius: 0.3125rem; /* 5px */
  color: #fff;
  font-family: var(--font-jost), sans-serif;
  font-weight: 500;
  letter-spacing: 0.0625rem; /* 1px */
  cursor: pointer;
  width: fit-content;

  @media (max-width: 48rem) {
    width: 100%;
  }
`;