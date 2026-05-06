"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Container,
  InnerWrapper,
  MainImageWrapper,
  ThumbnailRow,
  Thumbnail,
} from "./GalleryGrid.style";

const GalleryGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <Container>
      <InnerWrapper>
        <MainImageWrapper>
          <Image
            src={selectedImage}
            alt="Main Project Image"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </MainImageWrapper>

        <ThumbnailRow>
          {images.map((img, index) => (
            <Thumbnail
              key={index}
              onClick={() => setSelectedImage(img)}
              $active={selectedImage === img}
            >
              <Image
                src={img}
                alt="Thumbnail"
                fill
                style={{ objectFit: "cover" }}
              />
            </Thumbnail>
          ))}
        </ThumbnailRow>
      </InnerWrapper>
    </Container>
  );
};

export default GalleryGrid;