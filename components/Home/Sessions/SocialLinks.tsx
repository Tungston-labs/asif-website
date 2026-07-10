import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { SocialWrapper } from "./AboutArchitect.styled";

const SocialLinks = () => {
  return (
    <SocialWrapper>
      
      <a
        href="https://www.facebook.com/share/1JsGiUxt3S/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our Facebook page"
      >
        <FaFacebookF aria-hidden="true"/>
      </a>

      <a
        href="https://www.instagram.com/architect_asif_ahmed?igsh=NzhtaWlkczQ2anNs"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our instagram page"
      >
        <FaInstagram aria-hidden="true"/>
      </a>

      {/* If you have Twitter link, replace below */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our twitter page"
      >
        <FaTwitter aria-hidden="true" />
      </a>

    </SocialWrapper>
  );
};

export default SocialLinks;