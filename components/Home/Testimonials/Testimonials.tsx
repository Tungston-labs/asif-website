"use client";

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

const testimonialsData = [
  {
    id: 1,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "John Doe",
    place: "New York",
    image: "/images/avatar1.svg",
  },
  {
    id: 2,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "David Smith",
    place: "London",
    image: "/images/avatar1.svg",
  },
  {
    id: 3,
    content:
      "When an unknown printer took a galley of type and scrambled it...",
    name: "Michael Lee",
    place: "Singapore",
    image: "/images/avatar1.svg",
  },
  {
    id: 4,
    content:
      "A blend of contemporary elegance and comfort reflecting the quality...",
    name: "Emma Watson",
    place: "Paris",
    image: "/images/avatar1.svg",
  },
];

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
            <Card key={index}>
              <Quote>
                <QuoteShape />
                <QuoteShape />
              </Quote>
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
        </SliderTrack>
      </SliderWrapper>
    </Section>
  );
}
