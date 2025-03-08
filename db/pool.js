const {Pool} = require("pg");
require('dotenv').config() //important for env variables


var connectionString = process.env.DB_URL;
// Create a connection pool
const pool = new Pool({
    connectionString,
  });
  

  //test connection
(async () => {
    try {
      const client = await pool.connect();
      console.log('Connected to the database!');
      client.release(); // Release the client back to the pool
    } catch (err) {
      console.error('Failed to connect to the database:', err);
    }
  })();
  
  module.exports = pool;