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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const activeImages = isMobile ? mobileImages : desktopImages;
      setCurrent((prev) => (prev + 1) % activeImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const activeImages = isMobile ? mobileImages : desktopImages;
  const currentIndex = current % activeImages.length;
  const imageSrc = activeImages[currentIndex];

  if (!imageSrc) return null;
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
            <SliderImage key={imageSrc} $active>
              <Image
                src={imageSrc}
                alt=""
                fill
                priority={currentIndex === 0}
                loading={currentIndex === 0 ? "eager" : "lazy"}
                sizes="100vw"
                fetchPriority={currentIndex === 0 ? "high" : "auto"}
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
