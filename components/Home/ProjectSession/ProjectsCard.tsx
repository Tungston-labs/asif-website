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
        <Image src={image} alt={title} fill />
      </CardImage>
    </Card>
  );
};

export default ProjectCard;
