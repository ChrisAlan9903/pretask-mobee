const express = require("express");
const cors = require("cors");
const app = express();

// Load environment variables. See .env file for available variables.
// This should be done before loading variables from process.env
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const port = process.env.PORT;

// Define Routes
const carRoute = require("./routes/cars.route");

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4200"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

app.use("/cars", carRoute);

app.get("/", (req, res) => {
  res.status(200).send("Health OK");
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port} 🚀`);
});
