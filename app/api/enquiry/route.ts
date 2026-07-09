import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
      to: "betterspace.asif@gmail.com",
      subject: "New Enquiry From Website",
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Address:</strong> ${body.address}</p>
        <p><strong>Enquiry Type:</strong> ${body.enquiryType}</p>
        <p><strong>Project Type:</strong> ${body.projectType}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry sent successfully!",
    });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 },
    );
  }
}
