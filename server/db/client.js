const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/airline_db');

module.exports = client;
