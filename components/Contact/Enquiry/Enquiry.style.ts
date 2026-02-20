"use client";
import styled from "styled-components";

/* ===== MAIN SECTION ===== */

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;   /* center whole layout */
  background: #000;          /* optional if needed */
`;

export const LeftContainer = styled.div`
  width: 843px;   /* exact image width */
  height: 666px;   /* exact image height */
  padding: 80px 90px;
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url("/images/enquiry-left.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const RightContainer = styled.div`
  width: 604px;   /* exact image width */
  height: 666px;  /* exact image height */

  background-image: url("/images/enquiry-right.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

/* ===== TEXT ===== */

export const Title = styled.h2`
  font-family: var(--font-jost), sans-serif;
  font-size: 38px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const SubText = styled.p`
  font-family: var(--font-jost), sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 40px;
  color: #ccc;
`;

/* ===== FORM ===== */

export const Form = styled.form`
  h4 {
    font-family: var(--font-jost), sans-serif;
    font-weight: 400;
    margin: 30px 0 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  background: transparent;
  border: 1px solid #444;
  padding: 14px 16px;
  color: #fff;
  font-family: var(--font-jost), sans-serif;
  font-weight: 300;
  outline: none;
  border-radius: 5px;

  &::placeholder {
    color: #888;
  }
`;

export const Select = styled.select`
  flex: 1;
  background: transparent;
  border: 1px solid #444;
  padding: 14px 16px;
  color: #888;
  font-family: var(--font-jost), sans-serif;
  font-weight: 300;
  outline: none;
`;

/* ===== BUTTON ===== */

export const Button = styled.button`
  margin-top: 30px;
  padding: 16px 40px;
  background: linear-gradient(90deg, #c8a24c, #d8b36a);
  border: none;
  border-radius: 5px;
  color: #fff;
  font-family: var(--font-jost), sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  width: fit-content;
`;
