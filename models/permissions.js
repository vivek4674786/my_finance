/*
squalize model for permissions
@uthor : Vivek Kandoliya
*/

//Importing Node modules
const Sequelize = require('sequelize');

//importing local modules
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

//Model permissions : creates permissions table in mysql database.
const Permissions = sequelize.define('permissions',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  permission: DataTypes.STRING(15)
},{
  timestamps: false
})

module.exports = Permissions;