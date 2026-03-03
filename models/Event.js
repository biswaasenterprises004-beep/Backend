const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: String,
  status: { type: String, default: "Upcoming" },
  location: String,
  phone: String,
  employees: { type: Number, default: 0 },
  askedPayment: { type: Number, default: 0 },
  paidAmount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Event", eventSchema);
