"use client";

import { useState } from "react";
import {
  Section,
  LeftContainer,
  RightContainer,
  Title,
  SubText,
  Form,
  Row,
  Input,
  Button,
} from "./Enquiry.style";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    enquiryType: "",
    projectType: "",
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setMessage("Enquiry sent successfully!");
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          enquiryType: "",
          projectType: "",
        });
      } else {
        setSuccess(false);
        setMessage(data.message || "Something went wrong!");
      }
    } catch (error) {
      setSuccess(false);
      setMessage("Server error! Please try again.");
    } finally {
      setLoading(false);

      setTimeout(() => {
        setMessage("");
      }, 4000);
    }
  };

  return (
    <Section id="enquiry">
      <LeftContainer>
        <Title>Have A Project In Mind?</Title>

        <SubText>
          Fill Out The Form Below To Connect With Our Architectural Team.
          We’ll Get Back To You Shortly To Discuss Your Project Requirements.
        </SubText>

        <Form onSubmit={handleSubmit}>
          <h4>Personal Information</h4>

          <Row>
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Row>

          <Row>
            <Input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Input
              name="address"
              placeholder="Address/Area"
              value={formData.address}
              onChange={handleChange}
            />
          </Row>

          <h4>Enquiry Details</h4>

          <Row>
            <Input
              name="enquiryType"
              placeholder="Enquiry Type"
              value={formData.enquiryType}
              onChange={handleChange}
            />
            <Input
              name="projectType"
              placeholder="Type Of Project"
              value={formData.projectType}
              onChange={handleChange}
            />
          </Row>

          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "SUBMIT ENQUIRY"}
          </Button>

          {message && (
            <p
              style={{
                marginTop: "20px",
                padding: "10px",
                borderRadius: "6px",
                textAlign: "center",
                fontWeight: "600",
                backgroundColor: success ? "#e6f9ed" : "#ffe6e6",
                color: success ? "#1a7f37" : "#d32f2f",
              }}
            >
              {message}
            </p>
          )}
        </Form>
      </LeftContainer>

      <RightContainer />
    </Section>
  );
};

export default Enquiry;