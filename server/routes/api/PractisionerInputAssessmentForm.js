const express = require("express");

const router = express.Router();
const db = require("../../database");

// get all users
router.get("/", async function (req, res) {
  await db
    .select()
    .from("practisioner_input_assessment")
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json("unable to get all score"));
});

//Add to database
router.post("/", function (req, res) {
  db.insert(req.body)
    .into("practisioner_input_assessment")
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json("unable to post"));
});

//Delete by id
router.delete("/:pa_id", async (req, res) => {
  await db
    .raw(
      `DELETE FROM practisioner_input_assessment WHERE pa_id = ?`,
      [req.params.pa_id],
      res.status(200).json("deleted")
    )
    .catch((err) => res.status(400).json("unable to delete"));
});

//Get by score description by ID
router.get("/:pa_id", async function (req, res) {
  var params = [req.params.pa_id];
  await db
    .raw("SELECT * FROM practisioner_input_assessment WHERE pa_id = ?", [
      params,
    ])
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json("unable to get user"));
});

// Change info by ID
router.put("/", async (req, res, next) => {
  var reqBody = req.body;
  await db
    .raw(
      `UPDATE practisioner_input_assessment SET 
      email = ?, age = ?, malefemale = ?, height = ?, weight = ?, waist = ?, hip = ?, thighleft = ?, thighright = ?, calfleft = ?, calfright = ?, bicepleft = ?, bicepright = ?, date = ? WHERE pa_id = ?`,
      [
        reqBody.email,
        reqBody.age,
        reqBody.malefemale,
        reqBody.height,
        reqBody.weight,
        reqBody.waist,
        reqBody.hip,
        reqBody.thighleft,
        reqBody.thighright,
        reqBody.calfleft,
        reqBody.calfright,
        reqBody.bicepleft,
        reqBody.bicepright,
        Date(),
        reqBody.pa_id,
      ],
      res.status(200).json("updated")
    )
    .catch(function (err) {
      console.log("error: ", err);
    });
  // .catch((err) => res.status(400).json("unable to change"));
});

module.exports = router;

// .catch(function (err) {
//   console.log('error: ', err);
// });
