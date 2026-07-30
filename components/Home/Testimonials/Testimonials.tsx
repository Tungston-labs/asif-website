"use client";

import Image from "next/image";
import {
  Section,
  BackgroundBall,
  Header,
  Label,
  Title,
  Subtitle,
  SliderWrapper,
  SliderTrack,
  Card,
  Quote,
  Content,
  AuthorWrapper,
  Avatar,
  AuthorInfo,
  QuoteShape,
} from "./Testimonials.style";

import { testimonialsData } from "./testimonialsData";

export default function Testimonials() {
  return (
    <Section>
      <BackgroundBall />

      <Header>
        <Label>
          <span>TESTIMONIALS</span>
        </Label>

        <Title>
          OUR <span>CLIENTS</span> SAYS!
        </Title>

        <Subtitle>
          A blend of contemporary elegance and comfort, reflecting the quality
          expected from trusted architects.
        </Subtitle>
      </Header>

      <SliderWrapper>
        <SliderTrack>
          {[...testimonialsData, ...testimonialsData].map((item, index) => (
            <Card key={`${item.id}-${index}`}>
              <Quote>
                <QuoteShape />
                <QuoteShape />
              </Quote>

              <Content>{item.content}</Content>

              <AuthorWrapper>
                <Avatar>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={56}
                    height={56}
                    sizes="56px"
                    loading="lazy"
                  />
                </Avatar>

                <AuthorInfo>
                  <h3>{item.name}</h3>
                  <p>{item.place}</p>
                </AuthorInfo>
              </AuthorWrapper>
            </Card>
          ))}
        </SliderTrack>
      </SliderWrapper>
    </Section>
  );
}
