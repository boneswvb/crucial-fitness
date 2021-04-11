const express = require('express');

const router = express.Router();
const db = require('../../database');

router.get('/', function (req, res) {
  db.select().from('generalhealthassessmentform').orderBy('haf_id')
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      console.log('error: ', err);
    });
});

module.exports = router;