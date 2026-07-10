"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  InnerWrapper,
  MainImage,
  MainImageWrapper,
  SocialButton,
  SocialButtons,
  SocialWrapper,
  Thumbnail,
  ThumbnailImage,
  ThumbnailRow,
  ThumbnailTrack,
} from "./GalleryGrid.style";

import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

type Props = {
  images: string[];
  selectedLocation: string;

  socialLinks?: {
    youtube?: string;
    instagram?: string;
    facebook?: string;
  };
};

const GalleryGrid = ({ images, selectedLocation, socialLinks }: Props) => {
  const [selectedImageState, setSelectedImageState] = useState(images[0] || "");
  const selectedImage = images.includes(selectedImageState)
    ? selectedImageState
    : images[0] || "";

  const trackRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Reset the main image whenever the location/images change
  useEffect(() => {
    trackRef.current?.scrollTo({
      left: 0,
      behavior: "auto",
    });
  }, [selectedLocation]);

  // Keep selected thumbnail visible
  useEffect(() => {
    if (!selectedImage) return;

    const index = images.findIndex((img) => img === selectedImage);

    if (index === -1) return;

    const container = trackRef.current;
    const thumb = thumbnailRefs.current[index];

    if (!container || !thumb) return;

    const left =
      thumb.offsetLeft - container.clientWidth / 2 + thumb.clientWidth / 2;

    container.scrollTo({
      left,
      behavior: "smooth",
    });
  }, [selectedImage, images]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = images.findIndex((img) => img === selectedImage);

    if (currentIndex === -1) return;

    if (e.key === "ArrowRight") {
      e.preventDefault();

      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImageState(images[nextIndex]);
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();

      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImageState(images[prevIndex]);
    }
  };

  if (!selectedImage) return null;

  return (
    <Container>
      <InnerWrapper>
        <MainImageWrapper>
          <MainImage
            src={selectedImage}
            alt="Main Project Image"
            fill
            priority
            draggable={false}
            sizes="100vw"
          />
        </MainImageWrapper>

        <ThumbnailRow ref={trackRef} tabIndex={0} onKeyDown={handleKeyDown}>
          <ThumbnailTrack $isAll={selectedLocation === "ALL"}>
            {images.map((img, index) => (
              <Thumbnail
                ref={(el) => {
                  thumbnailRefs.current[index] = el;
                }}
                key={`${img}-${index}`}
                type="button"
                onClick={() => setSelectedImageState(img)}
                $active={selectedImage === img}
                aria-label={`Show project image ${index + 1}`}
              >
                <ThumbnailImage
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  sizes="80px"
                />
              </Thumbnail>
            ))}
          </ThumbnailTrack>
        </ThumbnailRow>

        {selectedLocation !== "ALL" && (
          <SocialWrapper>
            {socialLinks && (
              <SocialButtons>
                {socialLinks.youtube && (
                  <SocialButton
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube color="#FF0000" />
                    YouTube
                  </SocialButton>
                )}

                {socialLinks.instagram && (
                  <SocialButton
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram color="#E4405F" />
                    Instagram
                  </SocialButton>
                )}

                {socialLinks.facebook && (
                  <SocialButton
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF color="#1877F2" />
                    Facebook
                  </SocialButton>
                )}
              </SocialButtons>
            )}
          </SocialWrapper>
        )}
      </InnerWrapper>
    </Container>
  );
};

export default GalleryGrid;
