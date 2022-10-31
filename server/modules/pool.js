const pg = require('pg');

let pool = new pg.Pool({
  database: "cloud-to-do"
});

module.exports = pool;