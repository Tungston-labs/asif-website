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
  CloseButton,
  HamburgerIcon,
  CenterMenu,
  RightSection,
} from "./navbar.styles";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer aria-label="Primary navigation">
      <Logo>
        <Link href="/" aria-label="Asif Ahmed Architects home">
          <Image
            src="/images/logo.svg"
            alt="Asif Ahmed Architects"
            width={140}
            height={40}
            priority
          />
        </Link>
      </Logo>

      <CenterMenu>
        <Menu id="primary-menu" $open={menuOpen}>
          {menuOpen && (
            <div className="mobile-header">
              <Image
                src="/images/logo.svg"
                alt="Asif Ahmed Architects"
                width={120}
                height={40}
              />
              <CloseButton
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes aria-hidden="true" />
              </CloseButton>
            </div>
          )}

          <MenuItem>
            <Link
              className={pathname === "/" ? "active" : ""}
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
            >
              HOME
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              className={pathname === "/about" ? "active" : ""}
              href="/about"
              aria-current={pathname === "/about" ? "page" : undefined}
            >
              ABOUT US
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              className={pathname === "/portfolio" ? "active" : ""}
              href="/portfolio"
              aria-current={pathname === "/portfolio" ? "page" : undefined}
            >
              OUR PORTFOLIO
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              className={pathname === "/contact" ? "active" : ""}
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
            >
              CONTACT US
            </Link>
          </MenuItem>

          <MenuItem className="mobile-call">
            <a href="tel:+919895076226" aria-label="Call Asif Ahmed Architects">
              <LuPhoneCall aria-hidden="true" /> Call : 9895076226
            </a>
          </MenuItem>
        </Menu>
      </CenterMenu>

      <RightSection>
        <Button href="tel:+919895076226" aria-label="Call Asif Ahmed Architects at +91 9895076226">
          <LuPhoneCall aria-hidden="true" />
          Call: +91 9895076226
        </Button>

        <HamburgerIcon
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </HamburgerIcon>
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar;
