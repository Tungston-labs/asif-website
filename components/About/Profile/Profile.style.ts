"use client";

import styled from "styled-components";

export const Section = styled.section`
  padding: 6.25rem 0; /* 100px */
  background: #ffffff;
`;

export const Container = styled.div`
  max-width: 81.25rem; /* 1300px */
  width: 90%;
  margin: 0 auto;
  display: flex;
  gap: 3.75rem; /* 60px */

  @media (max-width: 1024px) {
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Left = styled.div`
  flex: 0 0 26.25rem; /* 420px */

  @media (max-width: 1024px) {
    flex: 0 0 22rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 37.5rem; /* 600px */
  border-radius: 1.25rem;
  overflow: hidden;
  margin-left: 0.5rem;

  .profile-image {
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    height: 30rem;
  }

  @media (max-width: 768px) {
    width: 286px;       /* ✅ exact width */
    height: 461px;      /* ✅ exact height */
    margin-left: 0;

    .profile-image {
      object-fit: contain;   /* ✅ prevent cropping */
    }
  }

  @media (max-width: 480px) {
    width: 286px;
    height: 461px;

    .profile-image {
      object-fit: contain;
    }
  }
`;

export const Right = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Label = styled.div`
  font-size: 0.875rem; /* 14px */
  letter-spacing: 0.125rem; /* 2px */
  margin-bottom: 1.25rem; /* 20px */
  padding: 0.25rem 1.5625rem; /* 4px 25px */
  position: relative;
  display: inline-block;

  span {
    position: relative;
  }

  span::before {
    content: "";
    position: absolute;
    left: -1.5625rem; /* 25px */
    top: 50%;
    transform: translateY(-50%);
    width: 0.875rem; /* 14px */
    height: 0.875rem;
    border-left: 0.125rem solid #c8a24c; /* 2px */
    border-top: 0.125rem solid #c8a24c;
  }

  span::after {
    content: "";
    position: absolute;
    right: -1.5625rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.875rem;
    height: 0.875rem;
    border-right: 0.125rem solid #c8a24c;
    border-bottom: 0.125rem solid #c8a24c;
  }
`;

export const Title = styled.h1`
  font-size: 3rem; /* 48px */
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 1.875rem; /* 30px */
  color: #111;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const Paragraph = styled.p`
  font-family: var(--font-jost), sans-serif;
  font-size: 0.9375rem; /* 15px */
  font-weight: 300;
  line-height: 1.9;
  color: #000000;
  margin-bottom: 1.25rem; /* 20px */
  text-align: justify;

  @media (max-width: 768px) {
    text-align: justify;
  }
`;
