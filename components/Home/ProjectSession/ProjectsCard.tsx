import Image from "next/image";
import { Card, CardImage } from "./Projects.styled";

interface Props {
  image: string;
  title: string;
}

const ProjectCard = ({ image, title }: Props) => {
  return (
    <Card>
      <CardImage>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 480px) 92vw, (max-width: 768px) 88vw, (max-width: 1024px) 480px, 520px"
        />
      </CardImage>
    </Card>
  );
};

export default ProjectCard;
