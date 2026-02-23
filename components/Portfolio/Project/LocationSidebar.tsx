import React from "react";
import { Sidebar, Title, LocationItem } from "./LocationSidebar.style";

type Props = {
  locations: string[];
  selected: string;
  onSelect: (location: string) => void;
};

const LocationSidebar = ({ locations, selected, onSelect }: Props) => {
  return (
    <Sidebar>
      <Title>LOCATIONS</Title>
      {locations.map((location) => (
        <LocationItem
          key={location}
           $active={selected === location}
          onClick={() => onSelect(location)}
        >
          {location}
        </LocationItem>
      ))}
    </Sidebar>
  );
};

export default LocationSidebar;