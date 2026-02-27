"use client";

import { IoArrowRedoSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { CircleButton, CircleInside } from "./AboutArchitect.styled";

const PortfolioCircle = () => {
  const router = useRouter();

  return (
    <CircleButton onClick={() => router.push("/portfolio")}>
      <CircleInside>
        <IoArrowRedoSharp size={20} />
      </CircleInside>
    </CircleButton>
  );
};

export default PortfolioCircle;