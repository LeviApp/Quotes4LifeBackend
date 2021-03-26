const dbEngine = process.env.DB_ENVIRONMENT || "development";
const knexConfig = require("./knexfile.js")[dbEngine];
module.exports = require("knex")(knexConfig);
