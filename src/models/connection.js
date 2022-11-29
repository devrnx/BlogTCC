const mysql = require('mysql2/promise');
require('dotenv').config({ path: '../../.env' });

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,
} = process.env;

const connection = mysql.createPool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  database: DB_NAME,
});

module.exports = connection;
