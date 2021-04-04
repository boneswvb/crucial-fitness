const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'Wwim1234',
    port: 5432,
    database: 'crucialfitness'
  }
});

module.exports = knex;