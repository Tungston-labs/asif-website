"use client";

import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 0;
  background: #ffffff;
`;

export const Container = styled.div`
  max-width: 81.25rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  gap: 3.75rem;

  @media (max-width: 1024px) {
    display: block;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Left = styled.div`
  flex: 0 0 26.25rem;

  @media (max-width: 1024px) {
    float: left;
    width: 22rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
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
  height: 37.5rem;
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
    width: 286px;
    height: 461px;
    margin-left: 0;

    .profile-image {
      object-fit: contain;
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

  @media (max-width: 1024px) {
    display: block;
  }
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const Label = styled.div`
  font-size: 0.875rem;
  letter-spacing: 0.125rem;
  margin-bottom: 1.25rem;
  padding: 0.25rem 1.5625rem;
  position: relative;
  display: inline-block;

  span {
    position: relative;
  }

  span::before {
    content: "";
    position: absolute;
    left: -1.5625rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.875rem;
    height: 0.875rem;
    border-left: 0.125rem solid #9d7422;
    border-top: 0.125rem solid #9d7422;
  }

  span::after {
    content: "";
    position: absolute;
    right: -1.5625rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.875rem;
    height: 0.875rem;
    border-right: 0.125rem solid #9d7422;
    border-bottom: 0.125rem solid #9d7422;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.3;
  margin-bottom: 1.25rem;
  color: #111;

  span {
    font-weight: 500;
  }

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
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.9;
  color: #000000;
  margin-bottom: 1.25rem;
  text-align: justify;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    text-align: justify;
  }
`;
