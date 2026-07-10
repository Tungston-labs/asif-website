"use client";

import { IoArrowRedoSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { CircleButton, CircleInside } from "./AboutArchitect.styled";

const PortfolioCircle = () => {
  const router = useRouter();

  return (
    <CircleButton
      type="button"
      aria-label="View portfolio"
      onClick={() => router.push("/portfolio")}
    >
      <CircleInside>
        <IoArrowRedoSharp size={30} style={{"color":`#fff`}}aria-hidden="true" />
      </CircleInside>
    </CircleButton>
  );
};

export default PortfolioCircle;
