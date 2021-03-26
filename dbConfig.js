require('dotenv/config')

module.exports = {
    development:{ 
        databases: {
            journal: {
                database: process.env.DB_NAME,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                dialect: "postgres"
            }
        }
    }
}

const pool = new Pool({
    "user": "leviapp",
    "password": "8Catapult!9Tree!",
    "database": "journal",
    "host": "localhost",
    "port": 5432
}
)

module.exports = pool;