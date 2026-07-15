// "use client";

// import Image from "next/image";
// import {
//   Section,
//   BackgroundBall,
//   Header,
//   Label,
//   Title,
//   Subtitle,
//   SliderWrapper,
//   SliderTrack,
//   Card,
//   Quote,
//   Content,
//   AuthorWrapper,
//   Avatar,
//   AuthorInfo,
//   QuoteShape,
// } from "./Testimonials.style";

// import { testimonialsData } from "./testimonialsData";

// export default function Testimonials() {
//   return (
//     <Section>
//       <BackgroundBall />

//       <Header>
//         <Label>
//           <span>TESTIMONIALS</span>
//         </Label>

//         <Title>
//           OUR <span>CLIENTS</span> SAYS!
//         </Title>

//         <Subtitle>
//           A blend of contemporary elegance and comfort, reflecting the quality
//           expected from trusted architects.
//         </Subtitle>
//       </Header>

//       <SliderWrapper>
//         <SliderTrack>
//           {[...testimonialsData, ...testimonialsData].map((item, index) => (
//             <Card key={`${item.id}-${index}`}>
//               <Quote>
//                 <QuoteShape />
//                 <QuoteShape />
//               </Quote>

//               <Content>{item.content}</Content>

//               <AuthorWrapper>
//                 <Avatar>
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={56}
//                     height={56}
//                     sizes="56px"
//                     loading="lazy"
//                   />
//                 </Avatar>

//                 <AuthorInfo>
//                   <h4>{item.name}</h4>
//                   <p>{item.place}</p>
//                 </AuthorInfo>
//               </AuthorWrapper>
//             </Card>
//           ))}
//         </SliderTrack>
//       </SliderWrapper>
//     </Section>
//   );
// }

"use client";

import { useState } from "react";
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
  StarsContainer,
  AuthorWrapper,
  Avatar,
  AuthorInfo,
  QuoteShape,
  ReadMoreButton,
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ModalScrollArea,
} from "./Testimonials.style";

import { testimonialsData, Testimonial } from "./testimonialsData";

// Reusable SVG Star Component for seamless UI rendering
const StarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="#947029"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
  </svg>
);

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  const MAX_CHARACTER_LIMIT = 220;

  const handleOpenModal = (item: Testimonial) => {
    setSelectedTestimonial(item);
  };

  const handleCloseModal = () => {
    setSelectedTestimonial(null);
  };

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
          of architecture.
        </Subtitle>
      </Header>

      <SliderWrapper>
        <SliderTrack>
          {[...testimonialsData, ...testimonialsData].map((item, index) => {
            const isLongText = item.content.length > MAX_CHARACTER_LIMIT;
            const displayedText = isLongText
              ? `${item.content.substring(0, MAX_CHARACTER_LIMIT)}...`
              : item.content;

            return (
              <Card key={`${item.id}-${index}`}>
                <div>
                  <Quote>
                    <QuoteShape />
                    <QuoteShape />
                  </Quote>

                  <Content>
                    {displayedText}
                    {isLongText && (
                      <ReadMoreButton onClick={() => handleOpenModal(item)}>
                        Read more
                      </ReadMoreButton>
                    )}
                  </Content>
                </div>

                <div>
                  {/* Rating Stars placed exactly between Content and Author details */}
                  <StarsContainer>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </StarsContainer>

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
                      <h4>{item.name}</h4>
                      <p>{item.place}</p>
                    </AuthorInfo>
                  </AuthorWrapper>
                </div>
              </Card>
            );
          })}
        </SliderTrack>
      </SliderWrapper>

      {/* --- MODAL POPUP --- */}
      {selectedTestimonial && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>

            <Quote>
              <QuoteShape />
              <QuoteShape />
            </Quote>

            <ModalScrollArea>
              <Content style={{ color: "#ffffff", margin: "1rem 0 1.5rem" }}>
                {selectedTestimonial.content}
              </Content>
            </ModalScrollArea>

            <div>
              {/* Rating Stars reflected uniformly in the modal layout view */}
              <StarsContainer>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </StarsContainer>

              <AuthorWrapper>
                <Avatar>
                  <Image
                    src={selectedTestimonial.image}
                    alt={selectedTestimonial.name}
                    width={56}
                    height={56}
                    sizes="56px"
                  />
                </Avatar>
                <AuthorInfo>
                  <h4>{selectedTestimonial.name}</h4>
                  <p>{selectedTestimonial.place}</p>
                </AuthorInfo>
              </AuthorWrapper>
            </div>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Section>
  );
}
