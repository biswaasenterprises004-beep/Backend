const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  contact: String,
  address: String,
  skill: String,

specialization: {
  type: String,
  default: "",
},


photo: {
  type: String,
  default: "/default-avatar.png"
},


  status: {
    type: String,
    enum: ["Active", "Busy"],
    default: "Active"
  },

  type: String,
  salary: Number,
  hours: Number,
  pendingSalary: Number,
  liability: Number,
  remaining: Number
});

module.exports = mongoose.model("Employee", employeeSchema);
