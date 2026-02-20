"use client";

import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background-color: #f2f2f2;
  padding: 50px 0;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const LocationTag = styled.span`
  position: relative;
  display: inline-block;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 400;
  color: #111;
  margin-bottom: 30px;
  padding: 0 20px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    width: 10px;
    height: 10px;
    border-left: 2px solid #c8a45a;
    border-top: 2px solid #c8a45a;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 6px;
    width: 10px;
    height: 10px;
    border-right: 2px solid #c8a45a;
    border-bottom: 2px solid #c8a45a;
  }
`;

export const Heading = styled.h2`
  font-size: 36px;
  font-weight: 300;
  line-height: 1.3;
  color: #111;
  margin-bottom: 30px;
  max-width: 900px;
`;

export const Highlight = styled.span`
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
  color: #555;
  max-width: 1400px;
`;
