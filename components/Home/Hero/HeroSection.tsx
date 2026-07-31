"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

import {
  HeroSection,
  Container,
  Title,
  Subtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  ImageWrapper,
  SliderImage,
  FloatingNote,
  FloatingText,
  ArrowImage,
} from "./herosection.styles";

const desktopImages = [
  "/images/optimized/home/slider1.webp",
  "/images/optimized/home/slider11.webp",
  "/images/optimized/home/slider3.webp",
  "/images/optimized/home/slider5.webp",
];

const mobileImages = [
  "/images/optimized/home/home1-mobile.webp",
  "/images/optimized/home/home2-mobile.webp",
  "/images/optimized/home/home3-mobile.webp",
  "/images/optimized/home/home4-mobile.webp",
  "/images/optimized/home/home5-mobile.webp",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const desktopIndex = current % desktopImages.length;
  const mobileIndex = current % mobileImages.length;

  const desktopSrc = desktopImages[desktopIndex];
  const mobileSrc = mobileImages[mobileIndex];

  return (
    <>
      <Navbar />

      <HeroSection>
        <Container>
          <Title>
            VISIONARY <span>ARCHITECT</span>
            <br />
            DESIGNED FOR <span>THE WAY</span> YOU LIVE
          </Title>

          <Subtitle>
            We design thoughtful spaces that reflect your lifestyle as a
            professional architecture firm.
          </Subtitle>

          <ButtonGroup>
            <PrimaryButton href="/about">KNOW MORE</PrimaryButton>
            <SecondaryButton href="/portfolio">
              EXPLORE PROJECTS
            </SecondaryButton>
          </ButtonGroup>

          <ImageWrapper>
            {/* Desktop Hero Image Slider */}
            <SliderImage key={`desktop-${desktopSrc}`} $active className="desktop-slider-image">
              <Image
                src={desktopSrc}
                alt="Architectural design showcase desktop"
                fill
                priority={desktopIndex === 0}
                loading={desktopIndex === 0 ? "eager" : "lazy"}
                sizes="100vw"
                fetchPriority={desktopIndex === 0 ? "high" : "auto"}
                style={{
                  objectFit: "cover",
                }}
              />
            </SliderImage>

            {/* Mobile Hero Image Slider */}
            <SliderImage key={`mobile-${mobileSrc}`} $active className="mobile-slider-image">
              <Image
                src={mobileSrc}
                alt="Architectural design showcase mobile"
                fill
                priority={mobileIndex === 0}
                loading={mobileIndex === 0 ? "eager" : "lazy"}
                sizes="100vw"
                fetchPriority={mobileIndex === 0 ? "high" : "auto"}
                style={{
                  objectFit: "cover",
                }}
              />
            </SliderImage>

            <FloatingNote>
              <ArrowImage
                src="/images/home/arrow.svg"
                alt=""
                width={97}
                height={84}
              />
              <FloatingText>
                Let’s Build Something <br />
                Great Together
              </FloatingText>
            </FloatingNote>
          </ImageWrapper>
        </Container>
      </HeroSection>
    </>
  );
};

export default Hero;
