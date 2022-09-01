const dbEngine = process.env.DB_ENVIRONMENT || "development";
const knexConfig = require("./knexfile.js")[dbEngine];
const db = require("knex")(knexConfig);

export default db;
