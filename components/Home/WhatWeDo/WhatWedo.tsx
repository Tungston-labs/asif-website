"use client";

import { Tag } from "../Sessions/AboutArchitect.styled";
import {
  Section,
  ContentWrapper,
  LeftContent,
  Title,
  Description,
  FeatureList,
  FeatureItem,
  FeatureTitle,
  FeatureText,
  QuoteButton,
  RightImage,
} from "./Whatwedo.styled";

export default function WhatWeDo() {
  return (
    <Section>
      <ContentWrapper>
        {/* LEFT CONTENT */}
        <LeftContent>
          <Tag $color="#000">WHAT WE DO</Tag>

          <Title>
            TRANSFORM <span>YOUR SPACE INNOVATIVE</span>
            <br />
            INTERIOR DESIGN FOR A <span>MODERN,</span>
            <br />
            <span>LUXURIOUS</span> LIFESTYLE
          </Title>

          <Description>
            We bring creativity and precision together to craft interiors that
            blend style, comfort, and functionality seamlessly. Every space is
            thoughtfully designed with architecture house design and
            architectural home plans to reflect your lifestyle while ensuring
            efficiency, elegance, and timeless appeal.
          </Description>

          <FeatureList>
            <FeatureItem>
              <FeatureTitle>✔ MATERIAL & FINISH SELECTION</FeatureTitle>
              <FeatureText>
                Carefully curated materials, textures, and color palettes,
                selected to match your vision.
              </FeatureText>
            </FeatureItem>

            <FeatureItem>
              <FeatureTitle>✔ CUSTOM FURNITURE & DETAILING</FeatureTitle>
              <FeatureText>
                Bespoke furniture and refined detailing crafted to fit your
                space perfectly.
              </FeatureText>
            </FeatureItem>
          </FeatureList>

          <QuoteButton>GET A QUOTE</QuoteButton>
        </LeftContent>

        {/* RIGHT IMAGE */}
        <RightImage>
          <img src="/images/home/whatwedo.svg" alt="Modern House" />
        </RightImage>
      </ContentWrapper>
    </Section>
  );
}