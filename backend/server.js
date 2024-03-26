require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/items", require("./routes/itemRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server started on port ${PORT}`)
);
