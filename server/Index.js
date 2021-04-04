const express = require('express');
const apiRoute = require('./routes/api/index');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', apiRoute);

app.listen(5000, () => {
  console.log('App is listening on port 5000');
})