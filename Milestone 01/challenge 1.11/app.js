require("dotenv").config();
const express = require("express");
const confessionRoutes = require("./routes/confessionRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware - Parse incoming JSON requests
app.use(express.json());

// Routes - All confession-related endpoints
app.use("/api/v1/confessions", confessionRoutes);

// Start the server
app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
