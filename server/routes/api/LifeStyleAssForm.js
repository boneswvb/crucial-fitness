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
  db.insert(req.body).into('lifestyle_ass_form').then(function (data) {
    res.send(data)
  })
    .catch(err => res.status(400).json('unable to post'))
});


// Get one
router.get('/:email', function (req, res) {
  db('lifestyle_ass_form').where({ email: req.params.email }).select()
    .then(function (data) {
      res.send(data);
    })
    .catch(err => res.status(400).json('unable to post'))
});

//Delete by id
router.delete("/:laf_id", async (req, res) => {
  await db.raw(`DELETE FROM lifestyle_ass_form WHERE laf_id = ?`,
    [req.params.laf_id],
    res.status(200).json("deleted")
  )  
  .catch((err) => res.status(400).json('unable to delete'))
});

// Change info by ID
router.put("/", async (req, res) => {
  var reqBody = req.body;
  await db.raw(`UPDATE lifestyle_ass_form SET email = ?, curhealtproblems = ?, medicalhistory = ?, medsandsuppliments = ?, heartdiseaserelation = ?, diabetestype1relation = ?, diabetestype2relation = ?, highbloodpressurerelation = ?, highcholesterolrelation = ?, thyroiddiseaserelation = ?, metabolicsyndromerelation = ?, renaldiseaserelation = ?, liverdiseaserelation = ?, cancerinrelation = ?, typeofcancerrelation = ?, pastinjuriesall = ?, lifetressors = ?, copewithstress = ?, managingcurrentstress = ?, relaxorunwind = ?, sleeppernight = ?, date = ? WHERE laf_id = ?`,
    [reqBody.email, reqBody.curhealtproblems, reqBody.medicalhistory, reqBody.medsandsuppliments, reqBody.heartdiseaserelation, reqBody.diabetestype1relation, reqBody.diabetestype2relation, reqBody.highbloodpressurerelation, reqBody.highcholesterolrelation, reqBody.thyroiddiseaserelation, reqBody.metabolicsyndromerelation, reqBody.renaldiseaserelation, reqBody.liverdiseaserelation, reqBody.cancerinrelation, reqBody.typeofcancerrelation, reqBody.pastinjuriesall, reqBody.lifetressors, reqBody.copewithstress, reqBody.managingcurrentstress, reqBody.relaxorunwind, reqBody.sleeppernight, Date(), reqBody.laf_id],
    res.status(200).json("updated")
  )
  .catch(function (err) {
    console.log('error: ', err);
  });
  // .catch((err) => res.status(400).json('unable to change'))
});  

module.exports = router;

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