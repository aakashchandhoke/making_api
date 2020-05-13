// Set up the express app
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = require('./routes/index.js');

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});