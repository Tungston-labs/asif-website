"use client";

import React, { useState, useEffect } from "react";
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
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  if (!selectedImage) {
    return null;
  }

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

        <ThumbnailRow>
          <ThumbnailTrack $isAll={selectedLocation === "ALL"}>
            {images.map((img, index) => (
              <Thumbnail
                key={`${img}-${index}`}
                type="button"
                onClick={() => setSelectedImage(img)}
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
              <>
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
              </>
            )}
          </SocialWrapper>
        )}
      </InnerWrapper>
    </Container>
  );
};

export default GalleryGrid;
