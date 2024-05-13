/*
squalize model for users
@uthor : Vivek Kandoliya
*/

//Importing Node modules
const Sequelize = require('sequelize');

//importing local modules
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

//Model users : creates users table in mysql database
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
  password :{
    type: DataTypes.STRING
  },
  activation_code : {
    type: DataTypes.STRING
  },
  account_status : {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  activation_time: {
    type: 'TIMESTAMP'
  },
  is_deleted : {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  created_at : {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updated_at : {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  deleted_at : {
    type: 'TIMESTAMP'
  }

},
{
timestamps: false
})

module.exports = Users;


