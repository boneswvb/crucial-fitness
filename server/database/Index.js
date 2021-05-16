const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'Wwim1234',
    port: 5432,
    database: 'c_fitness'
  }
});

module.exports = knex;