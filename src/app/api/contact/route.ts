import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, company, service, message, recipient } = data;

    // Validate required fields
    if (!name || !email || !message || !recipient) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create a nodemailer transporter
    // Note: For production, you should use a proper email service with authentication
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: Boolean(process.env.EMAIL_SECURE) || false,
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your-app-password'
      },
    });

    // Email content
    const emailContent = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
      <h2>Message:</h2>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email
    await transporter.sendMail({
      from: `"KAVARI Kapture Website" <${process.env.EMAIL_USER || 'your-email@gmail.com'}>`,
      to: recipient,
      subject: `New Contact Form Submission from ${name}`,
      html: emailContent,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 