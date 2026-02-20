"use client";

import Image from "next/image";
import {
  Section,
  Container,
  Left,
  ImageWrapper,
  Right,
  Label,
  Title,
  Bold,
  Paragraph,
} from "./Profile.style";

const Profile = () => {
  return (
    <Section>
      <Container>
        <Left>
          <ImageWrapper>
            <Image
              src="/images/Asif2.svg"
              alt="Profile"
              fill
              className="profile-image"
            />
          </ImageWrapper>
        </Left>

        <Right>
          <Label>
            <span>ABOUT US</span>
          </Label>

          <Title>
            Crafting Spaces That <Bold>Reflect Passion</Bold>,
            <br />
            Precision, and <Bold>Timeless Design</Bold>
          </Title>

          <Paragraph>
            Architecture is more than walls and structures, it is the art of shaping spaces
            that inspire life. Asif Ahmed is a visionary house architect whose work
            reflects simplicity, strength, and timeless elegance. At our firm,
            architecture is not just about constructing buildings, it’s about
            creating spaces that elevate lifestyles, inspire communities,
            and stand the test of time. We deliver thoughtfully designed
            architecture house design and architectural home plans that
            transform every project into a purposeful and functional space.
          </Paragraph>

          <Paragraph>
            Founded in 2005 in Cochin, the practice was established by Asif Ahmed,
            a Civil Engineering professional with a Diploma from Noorul Islam
            College of Engineering & Technology, followed by a Bachelor of
            Architecture (B.Arch) from MES College, Kuttippuram. With a
            strong technical foundation and a passion for refined house
            building design plan, he built the firm on principles of
            structural integrity, minimalism, and purposeful architecture.
            From the beginning, our vision has been clear: to deliver
            thoughtfully designed residential and commercial projects
            that balance aesthetics, functionality, and long-term value.
            Over the years, we have successfully completed projects across
            Ernakulam, Wayanad, Thrissur, Kottayam, Kozhikode, Coorg, Bengaluru,
            Karnataka, Tamil Nadu, and beyond, each reflecting our commitment
            to architectural design home plans and innovation.
          </Paragraph>

          <Paragraph>
            One of our landmark developments, Excel Heights in Ernakulam,
            stands as a refined expression of our minimalistic design philosophy,
            clean lines, intelligent planning, and attention to every
            structural detail. This project showcases our expertise in
            modern architecture house plans and architectural floor
            plan drawings, combining aesthetic appeal with functional
            living. As our portfolio expanded, so did our footprint.
            The establishment of our Dubai office marked a significant
            milestone, strengthening our presence in the UAE and allowing
            us to serve clients internationally with the same dedication and design
            excellence. We continue to offer modern architectural home designs and best house
            architects services globally.
          </Paragraph>

          <Paragraph>
            Every project we undertake is driven by collaboration, creativity,
            and a deep understanding of our clients’ vision, utilizing architect
            plans for house and house building design plan expertise.
          </Paragraph>
        </Right>
      </Container>
    </Section>
  );
};

export default Profile