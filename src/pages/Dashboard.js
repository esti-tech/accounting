import React, { useEffect, useState } from 'react';import axios from 'axios';
const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="page-container">
      <h1>Dashboard</h1>
      <img src="https://media.istockphoto.com/id/1362181407/photo/team-work-and-human-resource-management-concept.jpg?s=612x612&w=is&k=20&c=CXvvdLYEF8ArjCcodsgVVBQwoAlnD9OPD6NTTVXdKr0=" alt="Dashboard" className="page-image" />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.description}</td>
              <td>{job.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Dashboard;