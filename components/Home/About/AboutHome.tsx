"use client";

import Image from "next/image";
import {
  Section,
  Container,
  LeftContent,
  Title,
  Description,
  RightImages,
  ImageCard,
  ImageTitle,
  ImageSubtitle,
  BgBlueprint,
  StyledLink,
} from "./AboutHome.styled";
import { Tag } from "../Sessions/AboutArchitect.styled";

const AboutHome = () => {
  return (
    <Section>
      <Container>
        <LeftContent>
          <Tag $color="#000000">ABOUT US</Tag>

          <Title>
            <strong>ARCHITECTURE</strong> IS NOT JUST ABOUT SHELTER. IT IS ABOUT
            CREATING A STAGE
            <span> FOR YOUR LEGACY.</span>
          </Title>

          <Description>
            Led by Asif Ahmed, our firm delivers thoughtfully designed
            residential and commercial architecture house design and
            architectural home plans projects that combine technical precision
            with contemporary aesthetics. From concept development to final
            execution, every house building design plan is handled with detailed
            planning, structural expertise, and a strong commitment to quality
            and excellence.
          </Description>

          <StyledLink href="/about">READ MORE</StyledLink>
          <BgBlueprint>
            <Image src="/images/about/about-back.svg" alt="Blueprint" fill />
          </BgBlueprint>
        </LeftContent>
        <RightImages>
          <ImageCard>
            <Image
              src="/images/about/Rectangle1.svg"
              alt="Construction"
              width={500}
              height={600}
            />
            <ImageTitle>INNOVATIVE CONSTRUCTION</ImageTitle>
            <ImageSubtitle>
              Building smarter with modern technology
            </ImageSubtitle>
          </ImageCard>

          <ImageCard $offset>
            <Image
              src="/images/about/Rectangle2.svg"
              alt="Client"
              width={500}
              height={800}
              style={{ marginTop: "-1.3rem" }}
            />
            <ImageTitle>CLIENT-CENTRIC APPROACH</ImageTitle>
            <ImageSubtitle>Your vision guides our process.</ImageSubtitle>
          </ImageCard>
        </RightImages>
      </Container>
    </Section>
  );
};

export default AboutHome;
