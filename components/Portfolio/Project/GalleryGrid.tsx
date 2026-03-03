"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Grid, ImageWrapper, ButtonWrapper, NavButton } from "./GalleryGrid.style";

type Props = {
  images: string[];
};

const IMAGES_PER_PAGE = 4;

const GalleryGrid = ({ images }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
  }, [images]);

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

  const startIndex = currentPage * IMAGES_PER_PAGE;
  const currentImages = images.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <Grid>
        {currentImages.map((img, index) => (
          <ImageWrapper key={index}>
            <Image
              src={img}
              alt="Project Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </ImageWrapper>
        ))}
      </Grid>

      <ButtonWrapper>
        <NavButton onClick={handlePrevious} disabled={currentPage === 0}>
          ‹ PREVIOUS
        </NavButton>

        <NavButton
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          NEXT ›
        </NavButton>
      </ButtonWrapper>
    </div>
  );
};

export default GalleryGrid;