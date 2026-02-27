"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FooterContainer,
  TopSection,
  Left,
  Center,
  Right,
  InfoItem,
  Label,
  Value,
  SocialIcons,
  IconBox,
  Divider,
  BottomNav,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <TopSection>
        
        <Left>
          <InfoItem>
            <Image src="/images/phone.svg" alt="phone" width={22} height={22} />
            <div>
              <Label>CALL US</Label>
              <Value>0484 402 4226</Value>
            </div>
          </InfoItem>

          <InfoItem>
            <Image src="/images/mail.svg" alt="mail" width={22} height={22} />
            <div>
              <Label>EMAIL US</Label>
              <Value>betterspace.asif@gmail.com</Value>
            </div>
          </InfoItem>
        </Left>

        
        <Center>
          <Image
            src="/images/logo2.svg"
            alt="Logo"
            width={120}
            height={80}
          />

          <SocialIcons>
             
            <IconBox

            >
              <Image src="/images/facebook.svg" alt="facebook" width={18} height={18} />
            </IconBox>

            
            <IconBox>
              <Image src="/images/linkedin.svg" alt="linkedin" width={18} height={18} />
            </IconBox>

             
            <IconBox
              as="a"
              href="https://www.facebook.com/share/1JsGiUxt3S/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/images/twitter.svg" alt="twitter" width={18} height={18} />
            </IconBox>

             
            <IconBox
              as="a"
              href="https://www.instagram.com/architect_asif_ahmed?igsh=NzhtaWlkczQ2anNs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/images/instagram.svg" alt="instagram" width={18} height={18} />
            </IconBox>
          </SocialIcons>
        </Center>

         
        <Right>
          <InfoItem>
            <Image src="/images/location.svg" alt="location" width={22} height={22} />
            <div>
              <Label>OUR LOCATIONS</Label>
              <Value>Oberon mall, NH Bypass, Kochi</Value>
            </div>
          </InfoItem>

          <InfoItem>
            <Image src="/images/clock.svg" alt="clock" width={22} height={22} />
            <div>
              <Label>WORKING HOURS</Label>
              <Value>09:00 AM - 07:00 PM</Value>
            </div>
          </InfoItem>
        </Right>
      </TopSection>

      <Divider />

      <BottomNav>
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT OUR COMPANY</Link>
        <Link href="/portfolio">OUR PORTFOLIO</Link>
        <Link href="/contact">CONTACT US</Link>
      </BottomNav>
    </FooterContainer>
  );
};

export default Footer;
