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
  padding: 14px 0;
`;

export const MovingText = styled.div`
  display: inline-flex;
  animation: ${moveRight} 20s linear infinite;
`;

export const TextItem = styled.span`
  display: flex;
  align-items: center;
  font-family: var(--font-jost), sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-right: 40px;
  color: #000;
`;

export const Separator = styled.span`
  display: flex;
  align-items: center;
  margin-left: 40px;
  font-size: 14px;
`;
