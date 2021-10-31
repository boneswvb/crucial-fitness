const express = require('express');

const router = express.Router();
const db = require('../../database');

// get all users
router.get('/', async function (req, res) {
  await db.select().from('score')
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json('unable to get all score'))
});

//Add to database
router.post('/', function (req, res) {
  db.insert(req.body).into('score').then(function (data) {
    res.send(data)
  })
    .catch(err => res.status(400).json('unable to post'))
});

//Delete by id
router.delete("/:score_id", async (req, res) => {
  await db.raw(`DELETE FROM score WHERE score_id = ?`,
    [req.params.score_id],
    res.status(200).json("deleted")
  )
    .catch((err) => res.status(400).json('unable to delete'))
});

//Get by score description by ID
router.get('/:score_id', async function (req, res) {
  var params = [req.params.score_id]
  await db.raw('SELECT * FROM score WHERE score_id = ?', [params])
    .then(function (data) {
      res.send(data);
    })  
    .catch((err) => res.status(400).json('unable to get user'))
});

// Change info by ID 
router.put("/", async (req, res, next) => {
  var reqBody = req.body;
  await db.raw(`UPDATE score SET score_description = ?, date = ? WHERE score_id = ?`,
    [reqBody.score_description, Date(), reqBody.score_id],
    res.status(200).json("updated")
  ) 
    .catch((err) => res.status(400).json('unable to change'))
});

module.exports = router;

// .catch(function (err) {
//   console.log('error: ', err);
// });

// 85 – 100     Good Self-management
// 70 – 84       Good Self-management but attention needed in some areas
// 60 – 69       Fair Self-management but attention needed in several areas
// 40 – 59       Unsatisfactory Self-management more control needed
// 0 – 39       Poor Self-management – Danger Zone
