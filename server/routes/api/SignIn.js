const express = require('express');

const router = express.Router();
const db = require('../../database');

//check SigIn details
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

// get all users
router.get('/', async function (req, res) {
  await db.select().from('signin')
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json('unable to get all signIn details'))
});

//Delete by id
router.delete("/:si_id", async (req, res) => {
  await db.raw(`DELETE FROM signin WHERE si_id = ?`,
    [req.params.si_id],
    res.status(200).json("deleted")
  )
    .catch((err) => res.status(400).json('unable to delete'))
});

//Get by user email - Customer search for camp prices 
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
  await db.raw(`UPDATE signin SET lastname = ?, email = ?, date = ? WHERE si_id = ?`,
    [reqBody.lastname, reqBody.email, Date(), reqBody.si_id],
    res.status(200).json("updated")
  )
  .catch(function (err) {
    console.log('error: ', err);
  });
    // .catch((err) => res.status(400).json('unable to change'))
});

module.exports = router;