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
        <SideNav/>

        <DarkSection>
           <SideImage>
    <Image
      src="/images/about/about-me.svg"
      alt="decor"
      fill
      priority
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
