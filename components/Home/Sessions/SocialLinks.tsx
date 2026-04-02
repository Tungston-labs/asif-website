import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { SocialWrapper } from "./AboutArchitect.styled";

const SocialLinks = () => {
  return (
    <SocialWrapper>
      
      <a
        href="https://www.facebook.com/share/1JsGiUxt3S/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.instagram.com/architect_asif_ahmed?igsh=NzhtaWlkczQ2anNs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>

      {/* If you have Twitter link, replace below */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>

    </SocialWrapper>
  );
};

export default SocialLinks;