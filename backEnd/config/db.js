//Establishes and manages the connection to the MariaDB database
//Exports a database connection object that can be used in services to execute queries.
const mysql = require("mysql2/promise");
const env = require("./env");

// Create a database connection pool
const pool = mysql.createPool({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test the database connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to MariaDB!");
    connection.release();
  } catch (err) {
    console.error("Database connection error:", err.message);
  }
}

testConnection();

module.exports = pool;
