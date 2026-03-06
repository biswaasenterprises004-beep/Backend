const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASS,
  },
});

const sendMail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Biswas Enterprises" <${process.env.ZOHO_EMAIL}>`,
      to,
      subject,
      html,
    });

    console.log("Email sent:", info.messageId);
    return info;

  } catch (error) {
    console.error("❌ Email error:", error);
    throw error;
  }
};

module.exports = sendMail;