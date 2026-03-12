"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  GalleryWrapper,
  ExperienceBox,
  ExperienceText,
  GalleryImage,
} from "./AboutArchitect.styled";

const images = [
  "/images/about/about1.svg",
  "/images/about/about2.svg",
  "/images/about/about3.svg",
  "/images/about/about4.svg",
];

const LeftGallery = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <GalleryWrapper>
      {images.map((src, i) => (
        <GalleryImage key={i} $active={i === index}>
          <Image
            src={src}
            alt={`Gallery ${i}`}
            fill
            style={{ objectFit: "contain" }}
            priority={i === 0}
          />
        </GalleryImage>
      ))}

      <ExperienceBox>
        <span>20 + Years</span>
        <ExperienceText>EXPERIENCE</ExperienceText>
      </ExperienceBox>
    </GalleryWrapper>
  );
};

export default LeftGallery;
