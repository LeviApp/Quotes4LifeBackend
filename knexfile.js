// Update with your config settings.
require("dotenv").config();
const pg = require("pg");

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'journal',
      user:     'leviapp',
      password: '8Catapult!9Tree!'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        required: true,
        rejectUnauthorized: false
      }      
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    }
  }
};
