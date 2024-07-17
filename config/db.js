const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ndj'
});

db.getConnection()
.then((connection) => {
  console.log('Database connected successfully!');
  connection.release()
})
.catch((err)=>{
  console.log('Connected to database failed', err);
})
// console.log("db check", db)

module.exports = db