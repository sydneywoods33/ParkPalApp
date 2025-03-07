// Contains functions to interact with the database and fetch parking data
// Functions defined here are called by parkingController to process API requests

const db = require("../config/db");

async function findParkingByAddress(address, radius) {
  const query = `SELECT id, name, type, price, time_restriction, ST_AsGeoJSON(location) as location
                   FROM parking WHERE ST_Distance_Sphere(location, 
                   (SELECT ST_GeomFromText(CONCAT('POINT(', lon, ' ', lat, ')')) 
                   FROM geocode WHERE address = ?), ?) <= ?`;
  const [results] = await db.execute(query, [address, radius]);
  return results;
}

module.exports = {
  findParkingByAddress,
};
