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

const images = [
  "/images/home/home1.svg",
  "/images/home/home2.svg",
  "/images/home/home3.svg",
  "/images/home/home4.svg",
  "/images/home/home5.svg",

];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
            professional architecture firm
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
            {images.map((img, index) => (
              <SliderImage key={index} $active={index === current}>
                <Image
                  src={img}
                  alt="Hero"
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
