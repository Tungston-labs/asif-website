"use client";

import { SideNavWrapper, NavItem, Divider } from "./SideSession.styled";

const sections = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Our Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Get Free Consultant" },
];

const SideNav = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SideNavWrapper>
      {sections.map((item, index) => (
        <NavItem key={item.id} onClick={() => scrollTo(item.id)}>
          {item.label}
          {index === 0 && <Divider />} 
        </NavItem>
      ))}
    </SideNavWrapper>
  );
};

export default SideNav;
