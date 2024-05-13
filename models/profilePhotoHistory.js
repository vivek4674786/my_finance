/*
squalize model for profile_photo_history
@uthor : Vivek Kandoliya
*/

//Importing Node modules
const Sequelize = require('sequelize');

//importing local modules
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

//Model profile_photo_history : creates profile_photo_history table in mysql database.
const ProfilePhotoHistory = sequelize.define('profile_photo_history',{
  id : {
    type : DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model:'users',
      key: 'id'
    } 
  },
  image:{
    type: DataTypes.STRING,
  },
  original_name:{
    type: DataTypes.STRING
  },
  created_at:{
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
  }

},{
  timestamps: false
})

module.exports = ProfilePhotoHistory;