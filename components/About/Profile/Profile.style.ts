"use client";

import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 0;
  background: #fbfbfb;
`;

export const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
  display: flex;
  gap: 60px;
`;

export const Left = styled.div`
  flex: 0 0 420px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
  margin-left: 8px;

  .profile-image {
    object-fit: cover;
  }
`;

export const Right = styled.div`
  flex: 1;
`;

export const Label = styled.div`
  font-size: 14px;
  letter-spacing: 2px;
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


export const Title = styled.h1`
  font-size: 48px;
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 30px;
  color: #111;
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const Paragraph = styled.p`
  font-family: var(--font-jost), sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.9;
  color: #000000;
  margin-bottom: 20px;
  text-align: justify;
`;
