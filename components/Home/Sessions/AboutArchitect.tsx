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
        <SideNav />

        <Container>
          <LeftWrapper>
            <LeftGallery />
          </LeftWrapper>

          <CenterWrapper>
            <SideImage>
              <Image
                src="/images/about/about-me.svg"
                alt="Architect"
                fill
                style={{ objectFit: "cover" }}
              />
            </SideImage>

            <AboutContent />
          </CenterWrapper>

          <SocialLinks />
        </Container>

        <PortfolioCircle />
      </DarkSection>
    </Section>
  );
};

export default AboutArchitect;
