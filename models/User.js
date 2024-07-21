const db = require('../config/db');
const User = {};
User.create = async (user) => {
  const sql = 'INSERT INTO users (name, sex, phone, email, password) VALUES (?, ?, ?, ?, ?)';
  const values = [user.name, user.sex, user.phone, user.email, user.password];
  const result = await db.query(sql, values);
  return result;
};
User.findByEmail = async (email) => {
  const sql = 'SELECT * FROM users WHERE email = ?';
  const result = await db.query(sql, [email]);
  return result[0];
};
module.exports = User;