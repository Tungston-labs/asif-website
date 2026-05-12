"use client";

import Image from "next/image";
import {
  Section,
  Heading,
  Bold,
  CardWrapper,
  Card,
  IconWrapper,
  CardTitle,
  CardText,
  Label,
  Description,
  CardHeader,
} from "./ContactDetails.style";

const ContactDetails = () => {
  return (
    <Section>
      <Label>
        <span>CONTACT DETAILS</span>
      </Label>

      <Heading>
        <>
          KEEP IN <span> TOUCH </span> WITH US
        </>
      </Heading>
      <Description>
        Have A Project In mind or need expert guidance from house architects or
        a house architect near you? Get in touch to discuss your ideas,
        requirements, and vision. We look forward to creating a space using
        architectural design home plans that truly reflects you.
      </Description>

      <CardWrapper>
        <Card>
          <CardHeader>
            <IconWrapper>
              <Image src="/images/Addres.svg" alt="Our Address" fill />
            </IconWrapper>
            <CardTitle>Our Address</CardTitle>
          </CardHeader>

          <CardText>
            41/353,Basement 1,Oberon mall, NH Bypass, Edappally, Kochi, Kerala
            682024
          </CardText>
        </Card>

        <Card>
          <CardHeader>
            <IconWrapper>
              <Image src="/images/ContactNo.svg" alt="Our Phone Number" fill />
            </IconWrapper>
            <CardTitle>Our Phone Number</CardTitle>
          </CardHeader>

          <CardText>0484 402 4226</CardText>
        </Card>

        <Card>
          <CardHeader>
            <IconWrapper>
              <Image src="/images/MailID.svg" alt="Our Email" fill />
            </IconWrapper>
            <CardTitle>Our Email</CardTitle>
          </CardHeader>

          <CardText>betterspace.asif@gmail.com</CardText>
        </Card>
      </CardWrapper>
    </Section>
  );
};

export default ContactDetails;
