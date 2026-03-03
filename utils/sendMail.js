const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in", // change to .com if needed
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASS,
  },
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
