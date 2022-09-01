const dbEngine = process.env.DB_ENVIRONMENT || "development";
import knex from "knex";
import knexConfig from "./knexfile.js";
knexConfig[dbEngine]
const db = knex(knexConfig);

export default db;
