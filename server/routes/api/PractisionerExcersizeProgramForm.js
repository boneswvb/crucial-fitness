const express = require("express");

const router = express.Router();
const db = require("../../database");

// get all users
router.get("/", async function (req, res) {
  await db
    .select()
    .from("practisioner_excersize_program")
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json("unable to get all score"));
});

//Add to database
router.post("/", function (req, res) {
  db.insert(req.body)
    .into("practisioner_excersize_program")
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json("unable to post"));
});

//Delete by id
router.delete("/:pe_id", async (req, res) => {
  await db
    .raw(
      `DELETE FROM practisioner_excersize_program WHERE pe_id = ?`,
      [req.params.pe_id],
      res.status(200).json("deleted")
    )
    .catch((err) => res.status(400).json("unable to delete"));
});

//Get by score description by ID
router.get("/:pe_id", async function (req, res) {
  var params = [req.params.pe_id];
  await db
    .raw("SELECT * FROM practisioner_excersize_program WHERE pe_id = ?", [
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
      `UPDATE practisioner_excersize_program SET email=?, warm_up_exercises = ?, warm_up_reps = ?, warm_up_wts = ?, warm_up_weeks = ?, warm_up_frequency = ?, warm_up_start = ?, strength_exercises = ?, strength_reps = ?, strength_wts = ?, strength_weeks = ?, strength_frequency = ?, strength_start = ?, cardio_exercises = ?, cardio_reps = ?, cardio_wts = ?, cardio_weeks = ?, cardio_frequency = ?, cardio_start = ?, date = ? WHERE pe_id = ?`,
      [
        reqBody.email,
        reqBody.warm_up_exercises,
        reqBody.warm_up_reps,
        reqBody.warm_up_wts,
        reqBody.warm_up_weeks,
        reqBody.warm_up_frequency,
        reqBody.warm_up_start,
        reqBody.strength_exercises,
        reqBody.strength_reps,
        reqBody.strength_wts,
        reqBody.strength_weeks,
        reqBody.strength_frequency,
        reqBody.strength_start,
        reqBody.cardio_exercises,
        reqBody.cardio_reps,
        reqBody.cardio_wts,
        reqBody.cardio_weeks,
        reqBody.cardio_frequency,
        reqBody.cardio_start,
        Date(),
        reqBody.pe_id,
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
