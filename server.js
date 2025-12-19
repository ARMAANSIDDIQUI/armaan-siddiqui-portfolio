const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Email Route
app.post('/api/contact', async (req, res) => {
  const { name, contact, subject, message } = req.body;

  if (!name || !contact || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, 
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`, // Sender address (must be authenticated user)
      to: 'armaansiddiqui.pms@gmail.com', // My email to receive the message
      replyTo: contact, // User's email/contact for reply
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Contact: ${contact}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
