// Defines request handlers for parking-related API endpoints
// Receives incoming API requests, calls the appropriate service function, and sends a response

const parkingService = require("../services/parkingService");

exports.getParkingByAddress = async (req, res) => {
  const { address, radius } = req.query;

  if (!address || !radius) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  try {
    const parkingSpots = await parkingService.findParkingByAddress(address, radius);
    res.json(parkingSpots);
  } catch (error) {
    console.error("Error fetching parking data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
