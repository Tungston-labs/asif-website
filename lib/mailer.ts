import nodemailer from "nodemailer";

export const sendEnquiryMail = async (data: any) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
    to: "betterspace.asif@gmail.com",
    subject: "New Enquiry From Website",
    html: `
      <h2>New Enquiry Received</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Address:</strong> ${data.address}</p>
      <p><strong>Enquiry Type:</strong> ${data.enquiryType}</p>
      <p><strong>Project Type:</strong> ${data.projectType}</p>
    `,
  });
};