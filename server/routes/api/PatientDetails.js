const express = require('express');

const router = express.Router();
const db = require('../../database');

//Get All
router.get('/', function (req, res) {
  db.select().from('patient_details').orderBy('p_id')
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      console.log('error: ', err);
    });
});

//Send to DB
router.post('/', function (req, res) {
  db.insert(req.body).into('patient_details')
    .then(function (data) {
    res.send(data)
  })
    .catch(err => res.status(400).json('unable to post'))
});

// Get one
router.get('/:email', function (req, res) {
  db('patient_details').where({ email: req.params.email }).select()
    .then(function (data) {
      res.send(data);
    })
    .catch(err => res.status(400).json('unable to post'))
});

//Delete by id
router.delete("/:p_id", async (req, res) => {
  await db.raw(`DELETE FROM patient_details WHERE p_id = ?`,
    [req.params.p_id],
    res.status(200).json("deleted")
  )
    .catch((err) => res.status(400).json('unable to delete'))
});

// Change info by ID
router.put("/", async (req, res) => {
  var reqBody = req.body;
  await db.raw(`UPDATE patient_details SET email = ?, fullname = ?, lastname = ?, dateofbirth = ?, adress = ?, cellno = ?, econtact = ?, ecellno = ?, relationship = ?, date = ? WHERE p_id = ?`,
    [reqBody.email, reqBody.fullname, reqBody.lastname, reqBody.dateofbirth, reqBody.adress, reqBody.cellno, reqBody.econtact, reqBody.ecellno, reqBody.relationship, Date(),  reqBody.p_id], 
    res.status(200).json("updated")
  )  
  .catch((err) => res.status(400).json('unable to change'))
});

module.exports = router;
