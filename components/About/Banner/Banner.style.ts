"use client";
import styled, { keyframes } from "styled-components";

const moveRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  background-color: #cfa652;
  overflow: hidden;
  white-space: nowrap;
  padding: 0.875rem 0; /* 14px */
`;

export const MovingText = styled.div`
  display: inline-flex;
  animation: ${moveRight} 20s linear infinite;
`;

export const TextItem = styled.span`
  display: flex;
  align-items: center;
  font-family: var(--font-jost), sans-serif;
  font-size: 0.875rem; /* 14px */
  font-weight: 400;
  letter-spacing: 0.1875rem; /* 3px */
  text-transform: uppercase;
  margin-right: 2.5rem; /* 40px */
  color: #000;
`;

export const Separator = styled.span`
  display: flex;
  align-items: center;
  margin-left: 2.5rem; /* 40px */
  font-size: 0.875rem; /* 14px */
`;
