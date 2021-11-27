const express = require("express");

const router = express.Router();
const db = require("../../database");

// get all users
router.get("/", async function (req, res) {
  await db
    .select()
    .from("practisioner_comments")
    .then(function (data) {
      res.send(data);
    })
    .catch((err) =>
      res.status(400).json("unable to get practisioner comments")
    );
});

//Add to database
router.post("/", function (req, res) {
  db.insert(req.body)
    .into("practisioner_comments")
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json("unable to post"));
});

//Delete by id
router.delete("/:pc_id", async (req, res) => {
  await db
    .raw(
      `DELETE FROM practisioner_comments WHERE pc_id = ?`,
      [req.params.pc_id],
      res.status(200).json("deleted")
    )
    .catch((err) => res.status(400).json("unable to delete"));
});

//Get by score description by ID
router.get("/:pc_id", async function (req, res) {
  var params = [req.params.pc_id];
  await db
    .raw("SELECT * FROM practisioner_comments WHERE pc_id = ?", [params])
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
      `UPDATE practisioner_comments SET email = ?, suggestions = ?, date = ? WHERE pc_id = ?`,
      [reqBody.email, reqBody.suggestions, Date(), reqBody.pc_id],
      res.status(200).json("updated")
    )
    .catch((err) => res.status(400).json("unable to change"));
});

module.exports = router;

// .catch(function (err) {
//   console.log('error: ', err);
// });
