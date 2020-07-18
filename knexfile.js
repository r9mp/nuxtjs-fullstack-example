// Update with your config settings.

const connection = {
  database: process.env.DB_NAME || 'llama',
  user: process.env.DB_USER || 'llama',
  password: process.env.DB_PASSWORD || 'llama'
}

const client = process.env.DB_CLIENT || 'postgres'

const migrations = {
  directory: './api/db/migrations',
  tableName: 'knex_migrations'
}
const seeds = {
  directory: './api/db/seeds'
}

module.exports = {
  development: {
    client,
    connection,
    migrations,
    seeds
  },
  staging: {
    client,
    connection,
    migrations,
    seeds,
    pool: {
      min: 1,
      max: 2
    }
  },
  iso: {
    client,
    connection,
    migrations,
    seeds,
    pool: {
      min: 2,
      max: 10
    }
  },
  production: {
    client,
    connection,
    migrations,
    seeds,
    pool: {
      min: 2,
      max: 10
    }
  }
}
