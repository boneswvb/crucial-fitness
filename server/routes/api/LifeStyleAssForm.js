const express = require('express');

const router = express.Router();
const db = require('../../database');

router.get('/', function (req, res) {
  db.select().from('lifestyle_ass_form').orderBy('laf_id')
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      console.log('error: ', err);
    });
});

router.post('/', function (req, res) {
  db.insert(req.body).returning('*').into('lifestyle_ass_form').then(function (data) {
    res.send(data)
  })
    .catch(err => res.status(400).json('unable to post'))
});

// {
//   "email": "email@email.co.za",
//   "curhealtproblems": "curhealtproblems",
//   "medicalhistory": "medicalhistory",
//   "medsandsuppliments": "medsandsuppliments",
//   "heartdiseaserelation": "heartdiseaserelation",
//   "diabetestype1relation": "diabetestype1relation",
//   "diabetestype2relation": "diabetestype2relation",
//   "highbloodpressurerelation": "highbloodpressurerelation",
//   "highcholesterolrelation": "highcholesterolrelation",
//   "thyroiddiseaserelation": "thyroiddiseaserelation",
//   "metabolicsyndromerelation": "metabolicsyndromerelation",
//   "renaldiseaserelation": "renaldiseaserelation",
//   "liverdiseaserelation": "liverdiseaserelation",
//   "cancerinrelation": "cancerinrelation",
//   "typeofcancerrelation": "typeofcancerrelation",
//   "pastinjuriesall": "pastinjuriesall",
//   "lifetressors": "lifetressors",
//   "copewithstress": "copewithstress",
//   "managingcurrentstress": "managingcurrentstress",
//   "relaxorunwind": "relaxorunwind",
//   "sleeppernight": "sleeppernight",
//   "date": "2021-01-19"
// }

// Get one
router.get('/:email', function (req, res) {
  db('lifestyle_ass_form').where({ email: req.params.email }).select()
    .then(function (data) {
      res.send(data);
    })
    .catch(err => res.status(400).json('unable to post'))
});

module.exports = router;
