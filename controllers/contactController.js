const sendMail = require("../utils/sendMail");

exports.submitContact = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      location,
      eventName,
      labours,
      date,
      message,
    } = req.body;

    if (!name || !email || !phone || !location || !eventName || !labours || !date || !message) {
      return res.status(400).json({ message: "All fields required" });
    }

    // 📩 Send email to ADMIN (You)
    await sendMail(
      process.env.ZOHO_EMAIL,
      "New Event Staffing Request",
      `
        <h2>New Event Request Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Name:</strong> ${eventName}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Required Labours:</strong> ${labours}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    );

    // 📩 Confirmation email to USER
    await sendMail(
      email,
      "We Received Your Event Request",
      `
        <h2>Hello ${name},</h2>
        <p>Thank you for contacting Biswa Enterprises.</p>
        <p>We received your request for <strong>${eventName}</strong>.</p>
        <p>Our team will contact you shortly.</p>
        <br/>
        <p>Regards,<br/>Biswa Enterprises</p>
      `
    );

    res.json({ message: "Request submitted successfully" });

  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({ message: "Email sending failed" });
  }
};
