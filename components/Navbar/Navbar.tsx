"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";

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
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
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
            <Link className={pathname === "/" ? "active" : ""} href="/">
              HOME
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className={pathname === "/about" ? "active" : ""}
              href="/about"
            >
              ABOUT OUR COMPANY
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              className={pathname === "/portfolio" ? "active" : ""}
              href="/portfolio"
            >
              OUR PORTFOLIO
            </Link>
          </MenuItem>

          <MenuItem className={pathname === "/contact" ? "active" : ""}>
            <Link
              className={pathname === "/contact" ? "active" : ""}
              href="/contact"
            >
              CONTACT US
            </Link>
          </MenuItem>
          <MenuItem className="mobile-call">
            <a href="tel:+919876543210">
              <LuPhoneCall /> Call +91 98765 43210
            </a>
          </MenuItem>
        </Menu>
      </CenterMenu>

      <RightSection>
        <Button href="tel:+919876543210">
          <LuPhoneCall />
          Call: +91 98765 43210
        </Button>

        <HamburgerIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </HamburgerIcon>
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar;



















