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
  "/images/optimized/about/about1.webp",
  "/images/optimized/about/about2.webp",
  "/images/optimized/about/about3.webp",
  "/images/optimized/about/about4.webp",
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
            alt={`Architectural showcase gallery ${i + 1}`}
            fill
            priority={i === 0}
            sizes="(max-width: 768px) 100vw, 30vw"
            style={{ objectFit: "cover" }}
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
