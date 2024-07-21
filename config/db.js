const mysql = require('mysql2');
const util = require('util');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'peep'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

db.query = util.promisify(db.query);
module.exports = db;