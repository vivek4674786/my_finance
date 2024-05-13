/*
this is controller file for new user registration
@uthor : Vivek Kandoliya
*/

// == node modules ===
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const randomString = require('randomstring');

// === local modules ====
const { Users } = require('../../db');
const sequelize = require('../../db');
const { Sequelize } = require('sequelize');


// ==== functions ===

const register = async (req, res) => {

  const { email, first_name, last_name, password } = req.body;

  //checking if error found in server validation.
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {

    // generating salt and creating hash using bcryptjs
    const salt = await bcrypt.genSalt(5);
    const securePWD = await bcrypt.hash(password, salt);

    //creating activation token 
    const activationToken = randomString.generate(10);

    //inserting values into database
    const user = await Users.create({
      email: email,
      first_name: first_name,
      last_name: last_name,
      password: securePWD,
      activation_code: activationToken,
      activation_time: Sequelize.literal('CURRENT_TIMESTAMP')
    })


    console.log(user);
    res.json({ user: user });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({error: 'Some error occured while inserting user'});
  }
}

const activateUser = async (req, res) => {

  const {id, activationCode} = req.body;

  const user = await Users.findByPk(id,{
    attributes: ['activation_code','activation_time'],
    where:{
      is_deleted: false
    }
  },
  );

  const userData = user.dataValues;
  const ac = userData.activation_code;
  const at = userData.activation_time;
  
  const currentTime = new Date();
  const codeCreatedAt = new Date(at);
  const timeDiffrence = codeCreatedAt - currentTime;
  if(ac !== activationCode){
    return res.status(401).json({message: "invalid activation code"})
  }
  if(timeDiffrence > 1000*60){
    return res.status(410).json({message: "activation code expired"});
  }

  


  

  console.log(user.dataValues);

  
}

module.exports = { register, activateUser }



