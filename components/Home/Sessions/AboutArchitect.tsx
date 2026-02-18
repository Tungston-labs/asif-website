"use client";

import {
  Section,
  Container,
  LeftWrapper,
  CenterWrapper,
  RightWrapper,
  DarkSection,
} from "./AboutArchitect.styled";

import LeftGallery from "./LeftGallery";
import AboutContent from "./AboutContent";
import SocialLinks from "./SocialLinks";
import PortfolioCircle from "./PortfolioCircle";

const AboutArchitect = () => {
  return (
    <Section>
        <DarkSection>
      <Container>
        <LeftWrapper>
          <LeftGallery />
        </LeftWrapper>

        <CenterWrapper>
          <AboutContent />
        </CenterWrapper>

        <RightWrapper>
          <SocialLinks />
        </RightWrapper>
      </Container>

      <PortfolioCircle />
      </DarkSection>
    </Section>
  );
};

export default AboutArchitect;
