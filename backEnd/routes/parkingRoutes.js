// Defines API routes related to parking operations
// Each route calls a corresponding function in the parkingController file

const express = require("express");
const router = express.Router();
const parkingController = require("../controllers/parkingController");

// Route: Find parking by address
router.get("/search", parkingController.getParkingByAddress);

module.exports = router;
