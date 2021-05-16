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
  db.insert(req.body).returning('*').into('goal_setting_form').then(function (data) {
    res.send(data)
  })
    .catch(err => res.status(400).json('unable to post'))
});

// {
//   "email": "bone12s@bones.com", 
//   "lifstylechanges": "Some long story 111", 
//   "easiesttochange": "Some long story 222", 
//   "hardesttochange": "Some long story 333", 
//   "date": "2021-01-10"
// }


// Get one
router.get('/:email', function (req, res) {
  db('goal_setting_form').where({ email: req.params.email }).select()
    .then(function (data) {
      res.send(data);
    })
    .catch(err => res.status(400).json('unable to post'))
});

module.exports = router;
