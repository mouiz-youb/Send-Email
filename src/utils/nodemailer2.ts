import nodemailer from 'nodemailer';

// Debug: Check if env vars are loaded
console.log('Email Config:', {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASSWORD ? '***' : 'MISSING' 
});

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_PORT === '465', // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: { rejectUnauthorized: false } // Temporary for debugging
});

export const sendEmail = async (subject: string, html: string) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER, // Send to yourself
      subject,
      html
    });
    console.log('Email sent:', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('Nodemailer error:', error); // Detailed error logging
    return { 
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};