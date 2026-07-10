"use client";

import { useState } from "react";
import {
  Section,
  LeftContainer,
  RightContainer,
  Title,
  SubText,
  Form,
  Field,
  Label,
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
          <h3>Personal Information</h3>

          <Row>
            <Field>
              <Label htmlFor="enquiry-name">Full Name</Label>
              <Input
                id="enquiry-name"
                name="name"
                placeholder="Full Name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Field>
            <Field>
              <Label htmlFor="enquiry-email">Email Address</Label>
              <Input
                id="enquiry-email"
                name="email"
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Field>
          </Row>

          <Row>
            <Field>
              <Label htmlFor="enquiry-phone">Phone Number</Label>
              <Input
                id="enquiry-phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                autoComplete="tel"
                inputMode="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Field>
            <Field>
              <Label htmlFor="enquiry-address">Address/Area</Label>
              <Input
                id="enquiry-address"
                name="address"
                placeholder="Address/Area"
                autoComplete="street-address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Field>
          </Row>

          <h3>Enquiry Details</h3>

          <Row>
            <Field>
              <Label htmlFor="enquiry-type">Enquiry Type</Label>
              <Input
                id="enquiry-type"
                name="enquiryType"
                placeholder="Enquiry Type"
                value={formData.enquiryType}
                onChange={handleChange}
                required
              />
            </Field>
            <Field>
              <Label htmlFor="project-type">Type Of Project</Label>
              <Input
                id="project-type"
                name="projectType"
                placeholder="Type Of Project"
                value={formData.projectType}
                onChange={handleChange}
                required
              />
            </Field>
          </Row>

          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "SUBMIT ENQUIRY"}
          </Button>

          {message && (
            <p
              role={success ? "status" : "alert"}
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
