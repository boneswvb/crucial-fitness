const express = require('express');

const router = express.Router();
const db = require('../../database');

//Register the user
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
      .then(si_id => {
        return trx('signin')
          .insert({
            si_id: si_id,
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

// get all users
router.get('/', async function (req, res) {
  await db.select().from('secrets')
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json('unable to get all secrets details'))
});

//Delete by id
router.delete("/:se_id", async (req, res) => {
  await db.raw(`DELETE FROM secrets WHERE se_id = ?`,
    [req.params.se_id],
    res.status(200).json("deleted")
  )
    .catch((err) => res.status(400).json('unable to delete'))
});

//Get by user email
router.get('/:email', async function (req, res) {
  var params = [req.params.email]
  await db.raw('SELECT * FROM signin WHERE email = ?', [params])
    .then(function (data) {
      res.send(data);
    })    
    .catch((err) => res.status(400).json('unable to get user'))
});

// Change info by ID 
router.put("/", async (req, res, next) => {
  var reqBody = req.body;
  await db.raw(`UPDATE secrets SET password = ?, email = ?, date = ? WHERE se_id = ?`,
    [reqBody.password, reqBody.email, Date(), reqBody.se_id],
    res.status(200).json("updated")
  )  
    .catch((err) => res.status(400).json('unable to change'))
});

module.exports = router;

// .catch(function (err) {
//   console.log('error: ', err);
// });