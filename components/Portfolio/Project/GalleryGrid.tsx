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
          <Image
            src={selectedImage}
            alt="Main Project Image"
            width={1200}
            height={1200}
            priority
            draggable={false}
            sizes="100vw"
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
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
                sizes="80px"
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
