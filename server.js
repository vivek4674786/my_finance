/*
my_finance node app
@uthor : Vivek Kandoliya
*/

// node modules
require('dotenv').config()
const express = require('express');
const app = express();

//local modules
require('./db');
const auth = require('./routes/auth');

// ==== configs  =====
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;
app.listen(port, () => {
  console.log('app is listening on port' + port);
})


// === route distribution ===
app.use('/auth', auth);