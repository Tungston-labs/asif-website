"use client";

import {
  Section,
  LeftContainer,
  RightContainer,
  Title,
  SubText,
  Form,
  Row,
  Input,
  Select,
  Button,
} from "./Enquiry.style";

const Enquiry = () => {
  return (
    <Section id="enquiry">
      <LeftContainer>

        <Title>Have A Project In Mind?</Title>

        <SubText>
          Fill Out The Form Below To Connect With Our Architectural Team.
          We’ll Get Back To You Shortly To Discuss Your Project Requirements.
        </SubText>

        <Form>
          <h4>Personal Information</h4>

          <Row>
            <Input placeholder="Full Name" />
            <Input placeholder="Email Address" />
          </Row>

          <Row>
            <Input placeholder="Phone Number" />
            <Input placeholder="Address/Area" />
          </Row>

          <h4>Enquiry Details</h4>

          <Row>
            <Input placeholder="Enquiry Type" />

            <Input placeholder="Type Of Project" />
          </Row>

          <Button>SUBMIT ENQUIRY</Button>
        </Form>
      </LeftContainer>

      <RightContainer />
    </Section>
  );
};

export default Enquiry;
