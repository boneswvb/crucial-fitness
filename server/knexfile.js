require('dotenv').config()

const sharedConfig = {
  client: 'sqlite3',
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      filename: '.cfitness/.db'
    }
  },
  production: {
    ...sharedConfig,
    connection: {
      filename: './cfitness.db'
    },
    pool: { min: 2, max: 10 },
  },
};
