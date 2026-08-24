// app/api/send-mail/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, location, timing, email, phone, message } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 3) {
      return NextResponse.json(
        { message: 'Validation failed: Full name must be at least 3 characters long.' },
        { status: 400 }
      );
    }

    const phoneDigits = phone ? String(phone).replace(/\D/g, '') : '';
    if (!phoneDigits || phoneDigits.length < 10) {
      return NextResponse.json(
        { message: 'Validation failed: A valid 10-digit phone number is required.' },
        { status: 400 }
      );
    }

    if (email && email !== 'Not provided') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return NextResponse.json(
          { message: 'Validation failed: Invalid email address format.' },
          { status: 400 }
        );
      }
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS // app-specific password
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER, // where you want to receive booking requests
      subject: `New Inquiry / Appointment Request - ${name}`,
      text: `Name: ${name}\nLocation: ${location}\nTiming: ${timing || 'Not specified'}\nEmail: ${email}\nPhone: ${phone}${message ? `\nMessage: ${message}` : ''}`
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ message: 'Email failed to send' }, { status: 500 });
  }
}

