'use client'

import { useState } from "react";
import {
  Section,
  BackgroundBall,
  Header,
  Tag,
  Title,
  Subtitle,
  SliderWrapper,
  Slider,
  Card,
  Quote,
  Content,
  AuthorWrapper,
  Avatar,
  AuthorInfo
} from "./Testimonials.style";

const testimonialsData = [
  {
    id: 1,
    content:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry...",
    name: "John Doe",
    place: "New York",
    image: "/avatar1.jpg"
  },
  {
    id: 2,
    content:
      "Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s...",
    name: "David Smith",
    place: "London",
    image: "/avatar2.jpg"
  },
  {
    id: 3,
    content:
      "When An Unknown Printer Took A Galley Of Type And Scrambled It...",
    name: "Michael Lee",
    place: "Singapore",
    image: "/avatar3.jpg"
  },
  {
    id: 4,
    content:
      "A Blend Of Contemporary Elegance And Comfort Reflecting The Quality...",
    name: "Emma Watson",
    place: "Paris",
    image: "/avatar4.jpg"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < testimonialsData.length - 2) {
      setIndex(index + 2);
    } else {
      setIndex(0);
    }
  };

  return (
    <Section>
      <BackgroundBall />

      <Header>
        <Tag>TESTIMONIALS</Tag>
        <Title>
          OUR <span>CLIENTS</span> SAYS!
        </Title>
        <Subtitle>
          A blend of contemporary elegance and comfort, reflecting the quality expected from trusted architects.
        </Subtitle>
      </Header>

      <SliderWrapper onClick={handleNext}>
        <Slider
          animate={{ x: `-${index * 50}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {testimonialsData.map((item) => (
            <Card key={item.id}>
              <Quote>“</Quote>

              <Content>{item.content}</Content>

              <AuthorWrapper>
                <Avatar src={item.image} alt={item.name} />
                <AuthorInfo>
                  <h4>{item.name}</h4>
                  <p>{item.place}</p>
                </AuthorInfo>
              </AuthorWrapper>
            </Card>
          ))}
        </Slider>
      </SliderWrapper>
    </Section>
  );
}