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
  "/images/home/slider1.svg",
  "/images/home/slider11.png",
  "/images/home/slider3.svg",
  "/images/home/slider5.svg",
];

const mobileImages = [
  "/images/home/home1-mobile.svg",
  "/images/home/home2-mobile.svg",
  "/images/home/home3-mobile.svg",
  "/images/home/home4-mobile.svg",
  "/images/home/home5-mobile.svg",
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
            <SecondaryButton href="/portfolio">EXPLORE PROJECTS</SecondaryButton>
          </ButtonGroup>

          <ImageWrapper>
            {activeImages.map((img, index) => (
              <SliderImage key={index} $active={index === currentIndex}>
                <Image
                  src={img}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </SliderImage>
            ))}

            <FloatingNote>
              <ArrowImage src="/images/home/arrow.svg" alt="arrow" />
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
