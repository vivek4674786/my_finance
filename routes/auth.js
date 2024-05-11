/*
Route file for authentication
@uthor : Vivek Kandoliya
*/

// === node modules ===
const express = require('express');
const router = express.Router();
const {validationResult} = require('express-validator');

// === local modules ===
const {registerValidator } = require('../middlewares/validations');
const db = require('../db');


// === Endpoints === 

// endpoint 1 : '/auth/register' (login not required)
router.post('/register',registerValidator, (req, res) => {
  
  console.log(req.body)
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
  }
  
  
})

module.exports = router