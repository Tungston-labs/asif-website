import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  padding: 0.8rem 2rem;
  background: #fff;
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  z-index:1000; /* 1000px */
`;

export const CenterMenu = styled.div`
  display: flex;
  justify-content: center;

  flex: 1;
  max-width: 56.25rem; /* 900px */

  margin: 0 auto;
`;

export const NavContent = styled.div`
  display: flex;
  gap: 5rem;
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

  @media (max-width: 48rem) { /* 768px */
    position: absolute;
    top: 4.375rem; /* 70px */
    left: 0;
    width: 100%;
    flex-direction: column;
    background: #fff;
    padding: 1.25rem 0; /* 20px */
    border-top: 0.0625rem solid #eee; /* 1px */

    display: ${({ $open }) => ($open ? "flex" : "none")};
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem; /* 20px */
`;

export const MenuItem = styled.li`
  a,
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.dark};
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 8px */
  background: #D7AE5B;
  color: #000;
  padding: 0.75rem 1.125rem; /* 12px 18px */
  border-radius: 0.375rem; /* 6px */
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    transform: translateY(-0.125rem); /* -2px */
  }

  @media (max-width: 48rem) {
    margin-top: 0.625rem; /* 10px */
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: 1.5rem; /* 24px */
  cursor: pointer;

  @media (max-width: 48rem) {
    display: block;
  }
`;
