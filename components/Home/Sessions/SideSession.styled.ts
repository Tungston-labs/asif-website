import styled ,{keyframes}from "styled-components";

export const SideNavWrapper = styled.div`
  position: absolute;
  left: -3rem;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  gap: 4rem;

  z-index: 5;
`;

export const NavItem = styled.div`
  font-family: "Jost", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;

  color: rgba(253, 253, 253, 1);
  cursor: pointer;

  writing-mode: vertical-rl;
  transform: rotate(180deg);

  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(215, 174, 91, 1);
  }
`;
export const Divider = styled.div`
  position: absolute;
  width: 2px;
  bottom: 0;
  height: 4rem;
  background: rgba(215, 174, 91, 1);
`;

// import styled from "styled-components";

// /* ================= WRAPPER ================= */

// export const SideNavWrapper = styled.div`
//   position: absolute;
//   left: 4rem;
//   top: 50%;
//   transform: translateY(-50%);

//   display: flex;
//   flex-direction: column;
//   gap: 4rem;

//   z-index: 5;

//   /* Laptop */
//   @media (max-width: 1024px) {
//     left: 2rem;
//     gap: 3rem;
//   }

//   /* Tablet */
//   @media (max-width: 768px) {
//     position: fixed;
//     top: auto;
//     bottom: 2rem;
//     left: 50%;
//     transform: translateX(-50%);
//     flex-direction: row;
//     gap: 2rem;
//     background: rgba(0, 0, 0, 0.85);
//     padding: 0.8rem 1.5rem;
//     border-radius: 2rem;
//   }

//   /* Small Mobile */
//   @media (max-width: 480px) {
//     gap: 1.5rem;
//     padding: 0.6rem 1rem;
//   }
// `;

// /* ================= NAV ITEM ================= */

// export const NavItem = styled.div`
//   font-family: "Jost", sans-serif;
//   font-weight: 500;
//   font-size: 1rem;
//   color: rgba(253, 253, 253, 1);
//   cursor: pointer;

//   writing-mode: vertical-rl;
//   transform: rotate(180deg);

//   position: relative;
//   transition: all 0.3s ease;

//   &:hover {
//     color: rgba(215, 174, 91, 1);
//   }

//   /* Laptop */
//   @media (max-width: 1024px) {
//     font-size: 0.9rem;
//   }

//   /* Tablet & Mobile → Horizontal */
//   @media (max-width: 768px) {
//     writing-mode: horizontal-tb;
//     transform: none;
//     font-size: 0.9rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 0.8rem;
//   }
// `;

// /* ================= DIVIDER ================= */

// export const Divider = styled.div`
//   position: absolute;
//   width: 0.125rem;
//   bottom: 0;
//   height: 4rem;
//   background: rgba(215, 174, 91, 1);

//   /* Tablet & Mobile → horizontal underline */
//   @media (max-width: 768px) {
//     width: 100%;
//     height: 0.125rem;
//     bottom: -0.4rem;
//   }
// `;