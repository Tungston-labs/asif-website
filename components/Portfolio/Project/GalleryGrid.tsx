"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  InnerWrapper,
  MainImage,
  MainImageWrapper,
  Thumbnail,
  ThumbnailImage,
  ThumbnailRow,
  ThumbnailTrack,
} from "./GalleryGrid.style";

type Props = {
  images: string[];
};

const GalleryGrid = ({ images }: Props) => {
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
          <ThumbnailTrack>
            {images.map((img, index) => (
              <Thumbnail
                key={index}
                type="button"
                onClick={() => setSelectedImage(img)}
                $active={selectedImage === img}
                aria-label={`Show project image ${index + 1}`}
                aria-pressed={selectedImage === img}
              >
                <ThumbnailImage
                  src={img}
                  alt="Thumbnail"
                  fill
                  sizes="80px"
                />
              </Thumbnail>
            ))}
          </ThumbnailTrack>
        </ThumbnailRow>
      </InnerWrapper>
    </Container>
  );
};

export default GalleryGrid;
