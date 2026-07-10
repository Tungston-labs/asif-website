"use client";

import { useRouter, usePathname } from "next/navigation";
import { SideNavWrapper, NavItem, Divider } from "./SideSession.styled";

const sections = [
  { type: "page", path: "/about", label: "About Me" },
  { type: "portfolio-section", id: "projects", label: "Our Projects" },
  { type: "home-section", id: "testimonials", label: "Testimonials" },
  { type: "page", path: "/contact", label: "Get Free Consultant" },
] as const;

type SectionItem = (typeof sections)[number];

const SideNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (item: SectionItem) => {
    if (item.type === "page") {
      router.push(item.path);
      return;
    }
    if (item.type === "portfolio-section") {
      if (pathname === "/portfolio") {
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/portfolio#${item.id}`);
      }
      return;
    }

    // Testimonials inside Home page
    if (item.type === "home-section") {
      if (pathname === "/") {
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/#${item.id}`);
      }
    }
  };

  return (
    <SideNavWrapper>
      {sections.map((item, index) => (
        <NavItem key={item.label} type="button" onClick={() => handleClick(item)}>
          {item.label}
          {index === 0 && <Divider />}
        </NavItem>
      ))}
    </SideNavWrapper>
  );
};

export default SideNav;
