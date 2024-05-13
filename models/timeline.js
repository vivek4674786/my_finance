/*
squalize model for timeline
@uthor : Vivek Kandoliya
*/

//Importing Node modules
const Sequelize = require('sequelize');

//importing local modules
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

//Model timeline : creates timeline table in mysql database.
const Timeline = sequelize.define('timelines',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id:{
    type: DataTypes.INTEGER,
    references:{
      model: 'users',
      key: 'id'
    }
  },
  modified_by:{
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  date:{
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  purpose:{
    type: DataTypes.STRING
  },
  amount: {
    type: DataTypes.INTEGER
  },
  take_from:{
    type: DataTypes.STRING(90)
  },
  give_to: {
    type: DataTypes.STRING(90)
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  created_at: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  modified_at: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  deleted_at: {
    type: 'TIMESTAMP'
  }

},{
  timestamps: false
})

module.exports = Timeline;