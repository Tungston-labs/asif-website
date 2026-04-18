import styled from "styled-components";

/* ✅ FIX: ADD THIS */
interface MenuProps {
  $open?: boolean;
}

export const NavbarContainer = styled.nav`
  width: 100%;
  padding: 0.8rem 5rem;
  background: #fff;
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  position: relative;
  z-index: 1000;
`;

export const CenterMenu = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  max-width: 40.25rem;
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

/* ✅ FIXED HERE */
export const Menu = styled.ul<MenuProps>`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 0;
  padding: 0;

  @media (max-width: 48rem) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    background: #d7ae5b;
    padding: 6rem 2rem 2rem;

    /* ✅ THIS NOW WORKS */
    display: ${({ $open }) => ($open ? "flex" : "none")};

    z-index: 999;
  }

  .mobile-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #f2f2f2;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 1.5rem;

    svg {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0 2rem;
`;

export const MenuItem = styled.li`
  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.dark};
    transition: color 0.3s ease;
  }

  a:hover {
    color: #d7ae5b;
  }

  @media (min-width: 769px) {
    a.active {
      color: #d7ae5b;
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
    text-align: left;
    padding: 1.2rem 0;

    a {
      font-size: 1.1rem;
    }

    &.mobile-call {
      display: block;

      a {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: #d7ae5b;
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
  background: #d7ae5b;
  color: #fff;
  padding: 0.55rem 0.8rem;
  border-radius: 0.375rem;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    transform: translateY(-0.125rem);
    border: 1px solid #d7ae5b;
    background: #fff;
    color: #000;
  }

  @media (max-width: 48rem) {
    display: none;
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