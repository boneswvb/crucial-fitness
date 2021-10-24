const express = require('express');

const router = express.Router();
const db = require('../../database');

// get all
router.get('/', function (req, res) {
  db.select().from('goal_setting_form').orderBy('gsf_id')
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      console.log('error: ', err);
    });
});

//Add to database
router.post('/', function (req, res) {
  db.insert(req.body).into('goal_setting_form').then(function (data) {
    res.send(data)
  })
    .catch(err => res.status(400).json('unable to post'))
});

// Get one
router.get('/:email', function (req, res) {
  db('goal_setting_form').where({ email: req.params.email }).select()
    .then(function (data) {
      res.send(data);
    })
    .catch(err => res.status(400).json('unable to post'))
});

//Delete by id
router.delete("/:gsf_id", async (req, res) => {
  await db.raw(`DELETE FROM goal_setting_form WHERE gsf_id = ?`,
    [req.params.gsf_id],
    res.status(200).json("deleted")
  )
    .catch((err) => res.status(400).json('unable to delete'))
});

// Change info by ID
router.put("/", async (req, res) => {
  var reqBody = req.body;
  await db.raw(`UPDATE goal_setting_form SET email = ?, lifstylechanges = ?, easiesttochange = ?, hardesttochange = ?, date = ?  WHERE gsf_id = ?`,
    [reqBody.email, reqBody.lifstylechanges, reqBody.easiesttochange, reqBody.hardesttochange, Date(),  reqBody.gsf_id],
    res.status(200).json("updated")
  )
  .catch((err) => res.status(400).json('unable to change'))
});

module.exports = router;

// {
//   "email": "bone12s@bones.com", 
//   "lifstylechanges": "Some long story 111", 
//   "easiesttochange": "Some long story 222", 
//   "hardesttochange": "Some long story 333", 
//   "date": "2021-01-10"
// }