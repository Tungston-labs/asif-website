"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

import {
  NavbarContainer,
  Logo,
  Menu,
  MenuItem,
  Button,
  HamburgerIcon,
  CenterMenu,
  RightSection,
} from "./navbar.styles";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer>

      <Logo>
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Company Logo"
            width={140}
            height={40}
            priority
          />
        </Link>
      </Logo>

      <CenterMenu>
        <Menu $open={menuOpen}>
             <MenuItem>
            <Link href="/">HOME</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about">ABOUT OUR COMPANY</Link>
          </MenuItem>

          <MenuItem>
            <Link href="/portfolio">OUR PORTFOLIO</Link>
          </MenuItem>

          <MenuItem>
            <Link href="/contact">CONTACT US</Link>
          </MenuItem>
        </Menu>
      </CenterMenu>

      <RightSection>
        <Button href="tel:+919876543210">
          <FaPhoneAlt />
          +91 98765 43210
        </Button>

        <HamburgerIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </HamburgerIcon>
      </RightSection>

    </NavbarContainer>
  );
};

export default Navbar;
