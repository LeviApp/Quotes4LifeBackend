// Update with your config settings.
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import pg from "pg";

const knexConfig = {

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

export default knexConfig;