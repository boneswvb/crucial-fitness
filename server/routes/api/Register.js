const express = require('express');

const router = express.Router();
const db = require('../../database');

router.get('/', function (req, res) {
  res.json("register")
});

router.post('/', function (req, res) {
  const { email, password, lastname, } = req.body;

  if (!email || !password || !lastname) {
    return res.status(400).json('incorrect form submission');
  }
  db.transaction(trx => {
    trx.insert({
      password: password,
      email: email,
      date: Date()
    })
      .into('secrets')
      // .returning('email') - last_insert_rowid
      .then(id => {
        return trx('signin')
          .insert({
            si_id: signin.id,
            lastname: lastname,
            email: email,
            date: Date()
          })
          // .returning('*')
          .then(user => {
            res.json(user[0]);
          })
        })
        .then(trx.commit)
        .catch(trx.rollback)
      })
      .catch(function (err) {
        console.log('error: ', err);
      })
    .catch(err => res.status(400).json('unable to register'))
});

module.exports = router;

// {
//   "password": "password",
//   "email": "email",
//   "lastname": "lastname"
// }