/*
squalize model for users
@uthor : Vivek Kandoliya
*/

//importing local modules
const sequelize = require('../db');

const Users = sequelize.define("users",{
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false
  },
  first_name:{
    type: DataTypes.STRING
  },
  last_name:{
    type: DataTypes.STRING
  },
  profile_photo: {
    type: DataTypes.STRING
  },
})

