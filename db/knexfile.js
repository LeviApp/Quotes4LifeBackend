// Update with your config settings.

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
    connection: process.env.DATABASE_URL,
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
