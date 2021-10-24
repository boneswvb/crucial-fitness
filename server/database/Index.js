require('dotenv').config();

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './cfitness.db'
  }
});

module.exports = knex;