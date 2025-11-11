const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

// Example route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// ...existing routes and middleware...

module.exports = app; // 👈 Required for Vercel
