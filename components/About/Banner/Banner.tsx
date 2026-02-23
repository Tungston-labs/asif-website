"use client";

import { BannerWrapper, MovingText } from "./Banner.style";
import Line from "./Line";

const Banner = () => {
  return (
    <BannerWrapper>
      <MovingText>
        <Line />
        <Line /> {/* duplicate for seamless looping */}
      </MovingText>
    </BannerWrapper>
  );
};

export default Banner;
