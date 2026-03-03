const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const eventRoutes = require("./routes/eventRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

const contactRoutes = require("./routes/contactRoutes");

app.use("/api/contact", contactRoutes);


app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/events", eventRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
