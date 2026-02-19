import Image from "next/image";
import {
  Tag,
  Name,
  Description,
  TalkButton,
  ContentWrapper,
  DescriptionWrapper,
  SideImage,
  PortfolioText
} from "./AboutArchitect.styled";

const AboutContent = () => {
  return (
    <ContentWrapper>
      <Tag>A FEW WORDS ABOUT ME</Tag>

      <Name>
        AR. <strong>ASIF</strong> AHMED
      </Name>

      <DescriptionWrapper>
        {/* LEFT OVERLAP IMAGE */}
      

        <Description>
 Architecture is the lens through which I understand and shape the world.
        From an early fascination with art, form, and space, I recognized how
        thoughtfully designed architecture house design and architectural home
        plans environments can influence human experience. My journey began with
        a Diploma in Civil Engineering from Noorul Islam College of Engineering
        & Technology, followed by a Bachelor of Architecture (B.Arch) from MES
        College, Kuttippuram. Over the years, I have cultivated a strong
        foundation in house building design plan principles, structural
        knowledge, and spatial intelligence, enabling me to create environments
        that are functional, purposeful, and inspiring. Each project represents
        a commitment to excellence, attention to detail, and a vision for spaces
        that leave a lasting impact.        </Description>
      </DescriptionWrapper>

      <TalkButton>LET'S TALK</TalkButton>

      <PortfolioText>Portfolio</PortfolioText>
    </ContentWrapper>
  );
};

export default AboutContent;
