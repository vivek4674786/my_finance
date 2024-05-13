
const mysql = require('mysql2');
require('dotenv').config();


//importing local modules


// ===== Convetional Method ======

// const pool = mysql.createPool({
//   host: "localhost",
//   user: process.env.USER_NAME,
//   password: 'Un0h001m!',
//   database: process.env.DB
// })

// const db = pool.promise();

// pool.getConnection((err, connection) => {
//   if (err) {
//     console.log("Error getting connection: ", err);
//     return;
//   }

//   console.log("Connection acquired");
//   connection.release();
// });


// =====  Sequelize method ======

const Sequelize = require('sequelize');

console.log(process.env.DATABASE);
console.log(process.env.USER_NAME);
console.log(process.env.PASSWORD);
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER_NAME,
  process.env.PASSWORD,
  // 'my_finance2',
  // 'root',
  // 'Un0h001m!',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
  console.log('connection has been established successfully');
}).catch((error) => {
  console.log('Could not connect database. due to ', error);
});

module.exports = sequelize;

const Users = require('./models/users');
const ProfilePhotoHistory = require('./models/profilePhotoHistory');
const Timeline = require('./models/timeline');
const Permissions = require('./models/permissions');
const UserPermissions = require('./models/userPermissions');

sequelize.sync().then(() => {
  console.log('models synced successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

module.exports = { Users, ProfilePhotoHistory, Timeline, Permissions, UserPermissions}
// require('./models/users')