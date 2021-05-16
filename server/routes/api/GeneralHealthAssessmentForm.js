const express = require('express');

const router = express.Router();
const db = require('../../database');

router.get('/', function (req, res) {
  db.select().from('general_health_assessment_form').orderBy('haf_id')
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      console.log('error: ', err);
    });
});

router.post('/', function (req, res) {
  db.insert(req.body).returning('*').into('general_health_assessment_form').then(function (data) {
    res.send(data)
  })
    .catch(err => res.status(400).json('unable to post'))
});

// {
//   "email": "bones125@bones.com",
//   "ihavesomeonetotalkto": 4,
//   "giveandreceiveaffection": 4,
//   "iamphysicallyactive": 4,
//   "iexercise": 2,
//   "useseatbelts": 2,
//   "isleepwell": 2,
//   "ofteneatexcess": 0,
//   "overweight": 0,
//   "underweight": 0,
//   "myidealweight": 4,
//   "smokedtabacco": 4,
//   "cigarettesperday": 4,
//   "illegaldrugs": 2,
//   "overusemedication": 2,
//   "caffeinecontainingdrinks": 2,
//   "averagealcoholintake": 0,
//   "morethanfourdrinks": 0,
//   "driveafterdrinking": 0,
//   "copewithstress": 4,
//   "leisuretime": 4,
//   "inahurry": 4,
//   "angryhostile": 2,
//   "positiveoptimistic": 2,
//   "tenseuptight": 2,
//   "saddepressed": 0,
//   "satisfiedjobrole": 0,
//   "score": 20,
//   "date": "2022-01-09"
// }

// Get one
router.get('/:email', function (req, res) {
  db('general_health_assessment_form').where({ email: req.params.email }).select()
    .then(function (data) {
      res.send(data);
    })
    .catch(err => res.status(400).json('unable to post'))
});
module.exports = router;
