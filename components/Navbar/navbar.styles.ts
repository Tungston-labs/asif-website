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
  z-index:1000; 
`;

export const CenterMenu = styled.div`
  display: flex;
  justify-content: center;

  flex: 1;
  max-width: 56.25rem; 

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

  @media (max-width: 48rem) { 
    position: absolute;
    top: 4.375rem; 
    left: 0;
    width: 100%;
    flex-direction: column;
    background: #fff;
    padding: 1.25rem 0; 
    border-top: 0.0625rem solid #eee; 

    display: ${({ $open }) => ($open ? "flex" : "none")};
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem; 
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
  gap: 0.5rem; 
  background: #D7AE5B;
  color: #000;
  padding: 0.75rem 1.125rem; 
  border-radius: 0.375rem; 
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    transform: translateY(-0.125rem); 
  }

  @media (max-width: 48rem) {
    margin-top: 0.625rem; 
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
