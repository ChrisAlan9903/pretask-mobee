const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

const caCertPath = path.resolve(__dirname, "../ca.pem");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync(caCertPath).toString(),
  },
});

module.exports = pool;
