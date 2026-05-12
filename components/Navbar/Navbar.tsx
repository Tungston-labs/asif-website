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
          {menuOpen && (
            <div className="mobile-header">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={120}
                height={40}
              />
              <FaTimes onClick={() => setMenuOpen(false)} />
            </div>
          )}

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

          <MenuItem>
            <Link
              className={pathname === "/contact" ? "active" : ""}
              href="/contact"
            >
              CONTACT US
            </Link>
          </MenuItem>

          <MenuItem className="mobile-call">
            <a href="tel:+91 9895076226">
              <LuPhoneCall /> Call : 9895076226
            </a>
          </MenuItem>
        </Menu>
      </CenterMenu>

      <RightSection>
        <Button href="tel:+91 9895076226">
          <LuPhoneCall />
          Call: +91 9895076226
        </Button>

        <HamburgerIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </HamburgerIcon>
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar;
