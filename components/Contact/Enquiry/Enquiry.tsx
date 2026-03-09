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

  const validateForm = () => {
    // Full Name
    if (!formData.name.trim()) {
      alert("Full Name is required.");
      return false;
    }
    if (formData.name.trim().length < 3) {
      alert("Full Name must be at least 3 characters.");
      return false;
    }
    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      alert("Full Name can contain only letters and spaces.");
      return false;
    }

    // Email
    if (!formData.email.trim()) {
      alert("Email is required.");
      return false;
    }
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Phone
    if (!formData.phone.trim()) {
      alert("Phone Number is required.");
      return false;
    }
    if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      alert("Phone Number must be 10 to 15 digits.");
      return false;
    }

    // Address
    if (!formData.address.trim()) {
      alert("Address is required.");
      return false;
    }
    if (formData.address.trim().length < 5) {
      alert("Address must be at least 5 characters.");
      return false;
    }

    // Enquiry Type
    if (!formData.enquiryType.trim()) {
      alert("Enquiry Type is required.");
      return false;
    }

    // Project Type
    if (!formData.projectType.trim()) {
      alert("Project Type is required.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

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
              required
            />
          </Row>

          <h4>Enquiry Details</h4>

          <Row>
            <Input
              name="enquiryType"
              placeholder="Enquiry Type"
              value={formData.enquiryType}
              onChange={handleChange}
              required
            />
            <Input
              name="projectType"
              placeholder="Type Of Project"
              value={formData.projectType}
              onChange={handleChange}
              required
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