const express = require('express');

const router = express.Router();
const db = require('../../database');

//get all
router.get('/', function (req, res) {
  db.select().from('general_health_assessment_form').orderBy('haf_id')
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      console.log('error: ', err);
    });
});

//Send to DB
router.post('/', function (req, res) {
  db.insert(req.body).into('general_health_assessment_form')
    .then(function (data) {
    res.send(data)
  })
    .catch(err => res.status(400).json('unable to post'))
});

// Get one
router.get('/:email', function (req, res) {
  db('general_health_assessment_form').where({ email: req.params.email }).select()
    .then(function (data) {
      res.send(data);
    })
    .catch(err => res.status(400).json('unable to post'))
});

//Delete by id
router.delete("/:haf_id", async (req, res) => {
  await db.raw(`DELETE FROM general_health_assessment_form WHERE haf_id = ?`,
    [req.params.haf_id],
    res.status(200).json("deleted")
  )
    .catch((err) => res.status(400).json('unable to delete'))
});

// Change info by ID
router.put("/", async (req, res) => {
  var reqBody = req.body;
  await db.raw(`UPDATE general_health_assessment_form SET email = ?, ihavesomeonetotalkto = ?, giveandreceiveaffection = ?, iAmphysicallyactive = ?, iexercise = ?, useseatbelts = ?, isleepwell = ?, ofteneatexcess = ?, overweight = ?, underweight = ?, myidealweight = ?, smokedtabacco = ?, cigarettesperday = ?, illegaldrugs = ?, overusemedication = ?, caffeinecontainingdrinks = ?, averagealcoholintake = ?, morethanfourdrinks = ?, driveafterdrinking = ?, copewithstress = ?, leisuretime = ?, inahurry = ?, angryhostile = ?, positiveoptimistic = ?, tenseuptight = ?, saddepressed = ?, satisfiedjobrole = ?, score = ?, date = ? WHERE haf_id = ?`,
    [reqBody.email, reqBody.ihavesomeonetotalkto, reqBody.giveandreceiveaffection, reqBody.iAmphysicallyactive, reqBody.iexercise, reqBody.useseatbelts, reqBody.isleepwell, reqBody.ofteneatexcess, reqBody.overweight, reqBody.underweight, reqBody.myidealweight, reqBody.smokedtabacco, reqBody.cigarettesperday, reqBody.illegaldrugs, reqBody.overusemedication, reqBody.caffeinecontainingdrinks, reqBody.averagealcoholintake, reqBody.morethanfourdrinks, reqBody.driveafterdrinking, reqBody.copewithstress, reqBody.leisuretime, reqBody.inahurry, reqBody.angryhostile, reqBody.positiveoptimistic, reqBody.tenseuptight, reqBody.saddepressed, reqBody.satisfiedjobrole, reqBody.score, Date(), reqBody.haf_id],
    res.status(200).json("updated")
  )
    .catch((err) => res.status(400).json('unable to get change'))
});

module.exports = router;
