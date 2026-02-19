"use client";

import { TextItem, Separator } from "./Banner.style";

const words = [
  "Timeless Design",
  "Trusted Execution",
  "Bespoke Solutions",
  "Sustainable Vision",
  "Proven Experience",
];

const Line = () => {
  return (
    <>
      {words.map((word, index) => (
        <TextItem key={index}>
          {word}
          <Separator>✦</Separator>
        </TextItem>
      ))}
    </>
  );
};

export default Line;
