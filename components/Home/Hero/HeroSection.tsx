"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

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
  "/images/home/slider2.svg",
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
    setCurrent(0);
  }, [isMobile]);
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
  const imageSrc = activeImages[current];

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
            <Link href="/about">
              <PrimaryButton>KNOW MORE</PrimaryButton>
            </Link>

            <Link href="/portfolio">
              <SecondaryButton>EXPLORE PROJECTS</SecondaryButton>
            </Link>
          </ButtonGroup>

          <ImageWrapper>
           {activeImages.map((img, index) => (
  <SliderImage
    key={index}
    $active={index === current}
  >
    <Image
      src={img}
      alt="Slider"
      fill
      priority
      style={{ objectFit: "cover" }}
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