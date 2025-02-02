const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mobee_cars", // Change this to your own database
  password: "root", // Change this to your password
  port: 5432,
});

module.exports = pool;
