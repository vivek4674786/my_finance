/*
Route file for authentication
@uthor : Vivek Kandoliya
*/

// === node modules ===
const express = require('express');
const router = express.Router();


// === local modules ===
const {registerValidator } = require('../middlewares/validations');
const {register, activateUser} = require('../controllers/auth/registration');
const db = require('../db');


// === Endpoints === 

// endpoint 1 : '[POST]/auth/register' (login not required)
router.post('/register',registerValidator, register)

// endpoint 2 : [POST]/auth/activate (login not required)
router.post('/activate', activateUser);

module.exports = router