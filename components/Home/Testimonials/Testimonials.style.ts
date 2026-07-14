// "use client";
// import styled, { keyframes } from "styled-components";

// const floatAnimation = keyframes`
//   0% {
//     transform: translate(-50%, -50%) translate(0px, 0px);
//   }
//   20% {
//     transform: translate(-50%, -50%) translate(250px, -200px);
//   }
//   40% {
//     transform: translate(-50%, -50%) translate(0px, -300px);
//   }
//   60% {
//     transform: translate(-50%, -50%) translate(-250px, -200px);
//   }
//   80% {
//     transform: translate(-50%, -50%) translate(0px, -100px);
//   }
//   100% {
//     transform: translate(-50%, -50%) translate(0px, 0px);
//   }
// `;

// const scrollAnimation = keyframes`
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// `;

// export const Section = styled.section`
//   position: relative;
//   background: #0c0c0c;
//   padding: 6rem 5rem;
//   overflow: hidden;
//   margin-top: 5rem;
//   color: white;
//   font-family: "Jostto ", sans-serif;

//   @media (max-width: 1024px) {
//     padding: 6rem 3rem;
//     margin-top: 2rem;
//   }

//   @media (max-width: 768px) {
//     padding: 5rem 2rem;
//     margin-top: 2rem;
//   }

//   @media (max-width: 480px) {
//     padding: 4rem 2rem;
//     margin-top: 1rem;
//   }
// `;

// export const BackgroundBall = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 31rem;
//   height: 31rem;
//   border-radius: 50%;
//   background: radial-gradient(
//     circle,
//     #ff833b 10%,
//     rgba(255, 140, 0, 0.1) 50%,
//     transparent 70%
//   );
//   filter: blur(7.5rem);
//   animation: ${floatAnimation} 18s ease-in-out infinite;
//   z-index: 0;

//   @media (max-width: 768px) {
//     width: 22rem;
//     height: 22rem;
//   }

//   @media (max-width: 480px) {
//     width: 18rem;
//     height: 18rem;
//   }
// `;

// export const Header = styled.div`
//   position: relative;
//   z-index: 2;
//   margin-bottom: 1.5rem;

//   max-width: 50rem;

//   @media (max-width: 768px) {
//     margin-bottom: 3rem;
//   }
// `;

// export const Title = styled.h2`
//   font-size: 2.25rem;
//   font-weight: 300;
//   margin-top: 0.75rem;

//   span {
//     font-weight: 500;
//   }

//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 2rem;
//   }
// `;

// export const Subtitle = styled.p`
//   color: #ffffff;
//   font-size: 1rem;
//   margin-top: 0.5rem;
//   font-family: Jost;

//   @media (max-width: 480px) {
//     font-size: 1rem;
//   }
// `;

// export const SliderWrapper = styled.div`
//   position: relative;
//   z-index: 2;
//   overflow-x: hidden;
//   width: 100%;
// `;

// export const SliderTrack = styled.div`
//   display: flex;
//   gap: 1.5rem;
//   width: max-content;
//   animation: ${scrollAnimation} 50s linear infinite;

//   &:hover {
//     animation-play-state: paused;
//   }
// `;

// export const Card = styled.div`
//   width: 40rem;
//   min-height: 18rem;
//   padding: 1.5rem;
//   flex-shrink: 0;

//   border: 1px solid rgba(220, 216, 216, 0.2);
//   background: rgba(30, 28, 28, 0.6);

//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   transition: 0.4s ease;

//   &:hover {
//     border-color: #947029;
//   }

//   @media (max-width: 1024px) {
//     width: 32rem;
//     min-height: 20rem;
//   }

//   @media (max-width: 768px) {
//     width: 26rem;
//     min-height: 22rem;
//     padding: 1.5rem;
//   }

//   @media (max-width: 480px) {
//     width: calc(100vw - 4rem);
//     min-height: 24rem;
//     padding: 1.25rem;
//   }
// `;

// export const Quote = styled.div`
//   display: flex;
//   gap: 0.6rem;

//   margin-bottom: 2rem;
// `;

// export const QuoteShape = styled.div`
//   width: 1.5rem;
//   height: 2.9rem;
//   background: #947029;
//   clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);

//   @media (max-width: 480px) {
//     width: 1rem;
//     height: 2rem;
//   }
// `;

// export const Content = styled.p`
//   font-size: 1rem;
//   font-weight: 300;
//   font-family: Jost;
//   line-height: 1.7;
//   font-family: var(--font-jost), sans-serif;
//   color: #d4d4d4;
//   margin: 0.5rem 0 1.5rem;

//   overflow-wrap: break-word;
//   word-break: break-word;

//   @media (max-width: 768px) {
//     font-size: 0.95rem;
//     line-height: 1.6;
//   }

//   @media (max-width: 480px) {
//     font-size: 0.9rem;
//     line-height: 1.6;
//   }
// `;

// export const AuthorWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   margin-top: auto;
// `;

// export const Avatar = styled.div`
//   position: relative;
//   width: 3.5rem;
//   height: 3.5rem;
//   border-radius: 50%;
//   flex: 0 0 3.5rem;
//   overflow: hidden;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// export const AuthorInfo = styled.div`
//   h4 {
//     font-weight: 600;
//     font-size: 1rem;
//     font-family: Jost;
//   }

//   p {
//     font-size: 0.9rem;
//     color: #aaa;
//     font-family: Jost;
//   }
// `;

// export const Label = styled.div`
//   font-size: 0.9rem;
//   letter-spacing: 0.15rem;
//   font-family: var(--font-jost), sans-serif;
//   margin-bottom: 0.5rem;
//   padding: 0.3rem 1.5rem;
//   position: relative;
//   display: inline-block;

//   span::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     top: 50%;
//     transform: translateY(-50%);
//     width: 0.9rem;
//     height: 0.9rem;
//     border-left: 2px solid #947029;
//     border-top: 2px solid #947029;
//   }

//   span::after {
//     content: "";
//     position: absolute;
//     right: 0;
//     top: 50%;
//     transform: translateY(-50%);
//     width: 0.9rem;
//     height: 0.9rem;
//     border-right: 2px solid #947029;
//     border-bottom: 2px solid #947029;
//   }
// `;

"use client";
import styled, { keyframes } from "styled-components";

const floatAnimation = keyframes`
  0% { transform: translate(-50%, -50%) translate(0px, 0px); }
  20% { transform: translate(-50%, -50%) translate(250px, -200px); }
  40% { transform: translate(-50%, -50%) translate(0px, -300px); }
  60% { transform: translate(-50%, -50%) translate(-250px, -200px); }
  80% { transform: translate(-50%, -50%) translate(0px, -100px); }
  100% { transform: translate(-50%, -50%) translate(0px, 0px); }
`;

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const Section = styled.section`
  position: relative;
  background: #0c0c0c;
  padding: 6rem 5rem;
  overflow: hidden;
  margin-top: 5rem;
  color: white;
  font-family: "Jost", sans-serif;

  @media (max-width: 1024px) { padding: 6rem 3rem; margin-top: 2rem; }
  @media (max-width: 768px) { padding: 5rem 2rem; margin-top: 2rem; }
  @media (max-width: 480px) { padding: 4rem 2rem; margin-top: 1rem; }
`;

export const BackgroundBall = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 31rem;
  height: 31rem;
  border-radius: 50%;
  background: radial-gradient(circle, #ff833b 10%, rgba(255, 140, 0, 0.1) 50%, transparent 70%);
  filter: blur(7.5rem);
  animation: ${floatAnimation} 18s ease-in-out infinite;
  z-index: 0;

  @media (max-width: 768px) { width: 22rem; height: 22rem; }
  @media (max-width: 480px) { width: 18rem; height: 18rem; }
`;

export const Header = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 1.5rem;
  max-width: 50rem;
  @media (max-width: 768px) { margin-bottom: 3rem; }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 300;
  margin-top: 0.75rem;
  span { font-weight: 500; }
  @media (max-width: 768px) { font-size: 1.5rem; }
  @media (max-width: 480px) { font-size: 2rem; }
`;

export const Subtitle = styled.p`
  color: #ffffff;
  font-size: 1rem;
  margin-top: 0.5rem;
  font-family: Jost, sans-serif;
`;

export const SliderWrapper = styled.div`
  position: relative;
  z-index: 2;
  overflow-x: hidden;
  width: 100%;
`;

export const SliderTrack = styled.div`
  display: flex;
  gap: 1.5rem;
  width: max-content;
  animation: ${scrollAnimation} 50s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const Card = styled.div`
  width: 30rem;
  height: 24rem; /* Keeps all cards at a strict, beautiful uniform size */
  padding: 2rem 1.5rem 1.5rem;
  flex-shrink: 0;
  border: 1px solid rgba(220, 216, 216, 0.2);
  background: rgba(30, 28, 28, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.4s ease;

  &:hover {
    border-color: #947029;
  }

  @media (max-width: 768px) { width: 26rem; height: 26rem; }
  @media (max-width: 480px) { width: calc(100vw - 4rem); height: 28rem; }
`;

export const Quote = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 1rem;
`;

export const QuoteShape = styled.div`
  width: 1.2rem;
  height: 2.2rem;
  background: #947029;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
`;

export const Content = styled.p`
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: var(--font-jost), sans-serif;
  color: #ffffff;
  margin: 0;
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #947029;
  font-weight: 500;
  cursor: pointer;
  padding-left: 0.5rem;
  font-family: inherit;
  font-size: 0.95rem;
  display: inline-block;
  text-decoration: underline;

  &:hover {
    color: #ff833b;
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-top: 0.6rem; /* Keeps stars closely attached underneath content text */
  margin-bottom: 0.5rem;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid rgba(220, 216, 216, 0.1);
  padding-top: 1rem;
`;

export const Avatar = styled.div`
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  flex: 0 0 3.5rem;
  overflow: hidden;
  background-color: #1a1a1a;
  
  img { 
    width: 100%; 
    height: 100%; 
    object-fit: cover;
    object-position: center;
  }
`;

export const AuthorInfo = styled.div`
  h4 { font-weight: 600; font-size: 1rem; font-family: Jost, sans-serif; margin: 0; }
  p { font-size: 0.85rem; color: #ffffff; font-family: Jost, sans-serif; margin: 0.2rem 0 0; }
`;

export const Label = styled.div`
  font-size: 0.9rem;
  letter-spacing: 0.15rem;
  font-family: var(--font-jost), sans-serif;
  margin-bottom: 0.5rem;
  padding: 0.3rem 1.5rem;
  position: relative;
  display: inline-block;

  span::before {
    content: ""; position: absolute; left: 0; top: 50%; transform: translateY(-50%);
    width: 0.9rem; height: 0.9rem; border-left: 2px solid #947029; border-top: 2px solid #947029;
  }
  span::after {
    content: ""; position: absolute; right: 0; top: 50%; transform: translateY(-50%);
    width: 0.9rem; height: 0.9rem; border-right: 2px solid #947029; border-bottom: 2px solid #947029;
  }
`;

/* --- MODAL STYLES --- */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  display: flex; justify-content: center; align-items: center;
  z-index: 999;
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  background: #161515;
  border: 1px solid #947029;
  width: 100%;
  max-width: 38rem;
  border-radius: 4px;
  padding: 2.5rem 2rem 2rem;
  position: relative;
  box-shadow: 0px 10px 30px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  max-height: 85vh;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem; right: 1.5rem;
  background: none; border: none;
  color: #ffffff; font-size: 2rem;
  cursor: pointer;
  line-height: 1;
  transition: color 0.2s;

  &:hover { color: #fff; }
`;

export const ModalScrollArea = styled.div`
  overflow-y: auto;
  max-height: 50vh;
  margin-bottom: 1rem;
  padding-right: 0.5rem;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
  &::-webkit-scrollbar-thumb { background: #947029; border-radius: 2px; }
`;