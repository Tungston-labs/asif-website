import React, { useState, useEffect } from "react";
import {
  Sidebar,
  Title,
  LocationItem,
  ScrollWrapper,
  ViewMoreButton,
} from "./LocationSidebar.style";

type Props = {
  locations: string[];
  selected: string;
  onSelect: (location: string) => void;
};

const LocationSidebar = ({
  locations,
  selected,
  onSelect,
}: Props) => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  /* ✅ MOBILE/TABLET = SHOW ALL */
  const visibleLocations = isMobile
    ? locations
    : showMore
    ? locations
    : locations.slice(0, 8);

  return (
    <Sidebar>
      <Title>LOCATIONS</Title>

      <ScrollWrapper $showMore={showMore}>
        {visibleLocations.map((location) => (
          <LocationItem
            key={location}
            $active={selected === location}
            onClick={() => onSelect(location)}
          >
            {location}
          </LocationItem>
        ))}
      </ScrollWrapper>

      {!isMobile && locations.length > 8 && (
        <ViewMoreButton
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "View Less" : "View More"}
        </ViewMoreButton>
      )}
    </Sidebar>
  );
};

export default LocationSidebar;