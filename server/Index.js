require('dotenv').config();

const express = require('express');
const apiRoute = require('./routes/api/index');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 8000

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors())

app.use('/api', apiRoute);

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
})


