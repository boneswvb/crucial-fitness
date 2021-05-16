const express = require('express');

const router = express.Router();
const db = require('../../database');

router.post('/', function (req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json('incorrect form submission');
  }
  db.select('email', 'password').from('secrets')
    .where('email', '=', email)
    .then(data => {
      if (data[0].password === password) {
        return db.select('*').from('signin')
          .where('email', '=', email)
          .then(user => {
            res.json(user[0])
          })
          .catch(err => res.status(400).json('unable to get user'))
      } else {
        res.status(400).json('wrong credentials1')
      }
    })
    .catch(err => res.status(400).json('wrong credentials2'))
});

module.exports = router;