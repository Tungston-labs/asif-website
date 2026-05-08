"use client";

import React from "react";
import {
  Sidebar,
  Title,
  LocationItem,
  ScrollWrapper,
} from "./LocationSidebar.style";

type Props = {
  locations: string[];
  selected: string;
  onSelect: (location: string) => void;
};

const LocationSidebar = ({ locations, selected, onSelect }: Props) => {
  return (
    <Sidebar>
      <Title>LOCATIONS</Title>

      <ScrollWrapper>
        {locations.map((location) => (
          <LocationItem
            key={location}
            type="button"
            $active={selected === location}
            aria-current={selected === location ? "true" : undefined}
            onClick={() => onSelect(location)}
          >
            {location}
          </LocationItem>
        ))}
      </ScrollWrapper>
    </Sidebar>
  );
};

export default LocationSidebar;
