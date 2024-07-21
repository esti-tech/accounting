const Job = require('../models/Job');
exports.createJob = async (req, res) => {
  const { title, description, salary } = req.body;

  try {
    const job = await Job.create({ title, description, salary });
    res.status(201).json({ message: 'Job created successfully', job });
  } catch (error) {
    res.status(500).json({ message: 'Error creating job', error });
  }
};
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.getAll();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs', error });
  }
};