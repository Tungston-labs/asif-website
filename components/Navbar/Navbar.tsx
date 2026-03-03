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
            <Link href="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about">About Our Company</Link>
          </MenuItem>

          <MenuItem>
            <Link href="/portfolio">Our Portfolio</Link>
          </MenuItem>

          <MenuItem>
            <Link href="/contact">Contact Us</Link>
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
