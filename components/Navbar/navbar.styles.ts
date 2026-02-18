import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  padding: 18px 40px;
  background: #fff;
  border-bottom: 1px solid #eee;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    width: auto;
    cursor: pointer;
  }
`;

export const Menu = styled.ul<{ $open: boolean }>`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: #fff;
    padding: 20px 0;
    border-top: 1px solid #eee;

    display: ${({ $open }) => ($open ? "flex" : "none")};
  }
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
  gap: 8px;
  background: #ffd400;
  color: #000;
  padding: 12px 18px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
