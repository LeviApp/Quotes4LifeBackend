const dbEngine = process.env.DB_ENVIRONMENT || "development";
import knex from "knex";
import knexConfig from "./knexfile.js"
const db = knex(knexConfig[dbEngine])

export default db;
