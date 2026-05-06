"use client";

import Image from "next/image";
import {
  Section,
  Container,
  CardsWrapper,
  Card,
  IconWrapper,
  Title,
  Description,
  Divider,
} from "./Mission.styles";
import { BackgroundBall } from "../Testimonials/Testimonials.style";

const missionData = [
  {
    icon: "/images/home/mission1.svg",
    title: "200+ Successful Projects",
    description:
      "Delivering diverse residential and commercial architecture house design and architectural home plans solutions that reflect our creativity, precision, and commitment as a trusted best house architects studio.",
  },
  {
    icon: "/images/home/mission2.svg",
    title: "100% Happy Customers",
    description:
      "Client satisfaction is our top priority. Our commitment to excellence is reflected in consistent house building design plan results, lasting relationships, and strong, trusted partnerships with best house architects.",
  },
  {
    icon: "/images/home/mission3.svg",
    title: "On-Time Project Delivery",
    description:
      "We value your time and investment, ensuring every house building design plan and architect plans for house project is executed with precision, clear timelines, and reliable completion.",
  },
];

const Mission = () => {
  return (
    <Section>
      <Container>
        <BackgroundBall />
        <CardsWrapper>
          {missionData.map((item, index) => (
            <Card key={index}>
              <IconWrapper>
                <Image style={{ display: "block", width: "3.25rem", height: "3.25rem" }}
 
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              </IconWrapper>

              <Title>{item.title}</Title>
              <Description>{item.description}</Description>

              <Divider />
            </Card>
          ))}
        </CardsWrapper>
      </Container>
    </Section>
  );
};

export default Mission;
