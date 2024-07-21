const db = require('../config/db');
const Job = {};
Job.create = async (job) => {
  const sql = 'INSERT INTO jobs (title, description, salary) VALUES (?, ?, ?)';
  const values = [job.title, job.description, job.salary];
  const result = await db.query(sql, values);
  return result;
};
Job.getAll = async () => {
  const sql = 'SELECT * FROM jobs';
  const result = await db.query(sql);
  return result;
};
module.exports = Job;