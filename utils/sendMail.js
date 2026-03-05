const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com", // change to .com if needed
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASS,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.error("❌ SMTP connection failed:", error);
  } else {
    console.log("✅ SMTP server is ready to send emails");
  }
});

const sendMail = async (to, subject, html) => {
  return transporter.sendMail({
    from: `"Biswa Enterprises" <${process.env.ZOHO_EMAIL}>`,
    to,
    subject,
    html,
  });
};

module.exports = sendMail;
