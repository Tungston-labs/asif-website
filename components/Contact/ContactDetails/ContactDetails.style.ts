"use client";
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 100px 80px;
  background: #f4f4f4;
  text-align: center;
`;

export const Heading = styled.h2`
  font-family: var(--font-jost), sans-serif;
  font-size: 49px;
  font-weight: 300;
  line-height: 1.3;
  max-width: none;   /* remove width restriction */
  margin: 0 auto 80px;
  color: #000;
`;

export const Description = styled.p`
  font-family: var(--font-jost), sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  max-width: 1000px;
  margin: -40px auto 70px;
  color: #000000;
  text-transform: capitalize;   /* 👈 add this */
`;


export const Bold = styled.span`
  font-weight: 500;

`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export const Card = styled.div`
  flex: 1;
  border: 1px solid #000;
  padding: 50px 40px;
  text-align: left;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  position: relative;
  flex-shrink: 0;
`;

export const CardTitle = styled.h3`
  font-family: var(--font-jost), sans-serif;
  font-size: 22px;
  font-weight: 400;
  margin: 0;
`;

export const CardText = styled.p`
  font-family: var(--font-jost), sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.9;
  color: #333;
`;

export const Label = styled.div`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 20px;
  padding: 4px 25px;
  position: relative;
  display: inline-block;

  span {
    position: relative;
  }

  /* Top Left Corner */
  span::before {
    content: "";
    position: absolute;
    left: -25px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    border-left: 2px solid #c8a24c;
    border-top: 2px solid #c8a24c;
  }

  /* Bottom Right Corner */
  span::after {
    content: "";
    position: absolute;
    right: -25px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    border-right: 2px solid #c8a24c;
    border-bottom: 2px solid #c8a24c;
  }
`;