require('dotenv').config();

const knex = require('knex');
const knexfile = require('./knexfile')

const db = process.env.DB_ENVIRONMENT || knex(knexfile.development);

module.exports = db;