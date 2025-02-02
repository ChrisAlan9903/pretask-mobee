const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

// Define Routes
const carRoute = require("./routes/cars.route");

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
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
