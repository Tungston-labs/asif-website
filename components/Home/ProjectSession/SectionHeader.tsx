import { Tag } from "../Sessions/AboutArchitect.styled";
import { HeaderWrapper, Title, Description } from "./Projects.styled";

const SectionHeader = () => {
  return (
    <HeaderWrapper>
      <Tag $color="#000">OUR PROJECTS</Tag>

      <Title>
        EXPLORE OUR <strong>LATEST PROJECTS</strong>, <br />
        WHERE <strong>INNOVATION</strong> MEETS LUXURY
      </Title>

      <Description>
        Blending contemporary elegance with practical comfort, our residential
        and commercial architecture house design and modern architectural home
        designs projects reflect the expertise and refined vision of experienced
        best house architects.
      </Description>
    </HeaderWrapper>
  );
};

export default SectionHeader;
