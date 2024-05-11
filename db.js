
const mysql = require('mysql2');
require('dotenv').config();

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


// =====  Sequalize method ======

const Sequalize = require('sequelize');

console.log(process.env.DB);
console.log(process.env.USER_NAME);
console.log(process.env.PASSWORD);
const sequelize = new Sequalize(
  process.env.DB,
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
  console.log('Could not connect database. due to ',error); 
});


module.exports = sequelize;