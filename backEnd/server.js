// Main entry point for backend server
// Initializes Express, loads routes, and starts server

const express = require("express");
const app = express();
const parkingRoutes = require("./routes/parkingRoutes");

// Middleware to parse JSON requests
app.use(express.json());

// Load parking routes
app.use("/api/parking", parkingRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
