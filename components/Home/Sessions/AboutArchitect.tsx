"use client";

import {
  Section,
  Container,
  LeftWrapper,
  CenterWrapper,
  RightWrapper,
  DarkSection,
  SideImage,
} from "./AboutArchitect.styled";

import LeftGallery from "./LeftGallery";
import AboutContent from "./AboutContent";
import SocialLinks from "./SocialLinks";
import PortfolioCircle from "./PortfolioCircle";
import SideNav from "./SideSession";
import Image from "next/image";

const AboutArchitect = () => {
  return (
    <Section>
        <DarkSection>
          <SideNav/>
      <Container>
        <LeftWrapper>
          <LeftGallery />
        </LeftWrapper>

        <CenterWrapper>
          <AboutContent />
        </CenterWrapper>

          <SocialLinks />
      </Container>
  <SideImage>
          <Image
            src="/images/about/about-me.svg"
            alt="Architect"
            fill
            style={{ objectFit: "cover" }}
          />
        </SideImage>
      <PortfolioCircle />
      </DarkSection>
    </Section>
  );
};

export default AboutArchitect;
