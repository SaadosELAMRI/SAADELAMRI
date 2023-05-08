import { transporter, mailOptions } from "../../config/nodemailer";

export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;

  try {
    // Send email using nodemailer
    await transporter.sendMail({
      ...mailOptions,
      subject: `New message from ${name}: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send message" });
  }
}
