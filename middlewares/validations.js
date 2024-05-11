/*
this file contains validation objects for express validators
@uthor : Vivek Kandoliya
*/

const { body } = require('express-validator');
const db = require('../db');

const registerValidator = [
  body('email','email is invalid').trim().isEmail(),
  body('email').custom(async value => {

    const [counts] = await db.query('select count(*) as count from users where email = ?',[value]);
    console.log(counts[0].count)
    if(counts[0].count != 0)
      throw new Error('user with this email already exist')

  }),
  body('first_name','first name can nit be empty').trim().not().isEmpty(),
  body('last_name','last_name can not be empty').trim().not().isEmpty(),
  body('password').custom(async value => {
    
    let regExp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    console.log(regExp.test(value))
    if(value.length <= 6)
      throw new Error('password length can not be less than 8');
    else if(!regExp.test(value)){
      throw new Error('password format requirement not matched');
    }
    
  })
]

module.exports = {registerValidator}

