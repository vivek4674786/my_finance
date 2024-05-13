/*
squalize model for user_permissions
@uthor : Vivek Kandoliya
*/

//Importing Node modules
const Sequelize = require('sequelize');

//importing local modules
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

//Model user_permissions : creates user_permissions table in mysql database.
const UserPermissions = sequelize.define('user_permissions',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  authoriser_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  permission_id: {
    type: DataTypes.INTEGER,
    references:{
      model: 'permissions',
      key: 'id'
    }
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    default: false
  },
  created_at: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  deleted_at: 'TIMESTAMP'

},
{
  timestamps: false
})