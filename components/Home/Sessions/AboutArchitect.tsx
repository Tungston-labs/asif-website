"use client";

import {
  Section,
  CenterWrapper,
  DarkSection,
  SideImage,
} from "./AboutArchitect.styled";

import LeftGallery from "./LeftGallery";
import AboutContent from "./AboutContent";
import SocialLinks from "./SocialLinks";
import SideNav from "./SideSession";
import Image from "next/image";

const AboutArchitect = () => {
  return (
    <>
      <Section>

        <DarkSection>
                  <SideNav/>

           <SideImage>
    <Image
      src="/images/optimized/about/about-me.webp"
      alt="decor"
      fill
      sizes="(max-width: 768px) 20rem, (max-width: 1024px) 14rem, 17rem"
    />
  </SideImage>
          <LeftGallery />
          <CenterWrapper>
            <AboutContent />
          </CenterWrapper>
                <SocialLinks/>

        </DarkSection>

      </Section>
    </>
  );
};

export default AboutArchitect;
