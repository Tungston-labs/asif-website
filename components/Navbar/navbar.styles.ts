import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  padding: 0.8rem 5rem;
  background: #fff;
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  position: relative;
  z-index:1000; 
`;

export const CenterMenu = styled.div`
  display: flex;
  justify-content: center;

  flex: 1;
  max-width: 40.25rem; 

  
`;

export const NavContent = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 4rem;
    width: auto;
    cursor: pointer;
  }
`;

export const Menu = styled.ul<{ $open: boolean }>`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin: 0;
  padding: 0;

  @media (max-width: 48rem) { 
    position: absolute;
    top: 4.375rem; 
    left: 0;
    width: 100%;
    flex-direction: column;
    background: #fff;
    padding: 1.25rem 0; 
    background: ${({ $open }) => ($open ? "#D7AE5B" : "#fff")};
    border-top: 0.0625rem solid #eee; 

    display: ${({ $open }) => ($open ? "flex" : "none")};
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: .25rem;
  margin:0 2rem 0 2rem;
`;

export const MenuItem = styled.li`
  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.dark};
    transition: color 0.3s ease;
  }

  /* hover */
  a:hover {
    color: #D7AE5B;
  }

  /* ✅ Active only for desktop */
  @media (min-width: 769px) {
    a.active {
      color: #D7AE5B;
    }
  }

  @media (max-width: 768px) {
    a.active {
      color: ${({ theme }) => theme.colors.dark};
    }
  }

  &.mobile-call {
    display: none;
  }

  @media (max-width: 48rem) {
    width: 100%;
    text-align: center;
    padding: 0.75rem 0;

    &.mobile-call {
      display: block;

      a {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: #D7AE5B;
        padding: 0.6rem 1rem;
        border-radius: 0.375rem;
        color: #000;
        font-weight: 600;
      }
    }
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem; 
  background: #D7AE5B;
  color: #fff;
  padding: 0.55rem 0.8rem; 
  border-radius: 0.375rem; 
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    transform: translateY(-0.125rem);
    border: 1px solid #D7AE5B;
    background: #fff;
    color: #000;
  }

   @media (max-width: 48rem) {
    display: none;   /* 🔥 hide from top */
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: 1.5rem; 
  cursor: pointer;

  @media (max-width: 48rem) {
    display: block;
  }
`;
