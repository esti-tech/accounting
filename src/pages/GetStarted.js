import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className="page-container">
      <h1>Get Started with Peep Digital Accounting</h1>
      <img src="https://media.istockphoto.com/id/665037818/photo/start-line-on-the-highway.jpg?s=612x612&w=is&k=20&c=mwRs2hPQcRwGmm-cbqchQLcwSit_qnup1_st8rsh2js=" alt="Get Started" className="page-image" />
      <p>Follow these steps to get started:</p>
      <ol>
        <li>Create your Peep account</li>
        <li>Choose a business plan that fits your needs</li>
        <li>Set up your accounting preferences</li>
        <li>Import or enter your initial data</li>
        <li>Start managing your finances efficiently</li>
      </ol>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default GetStarted;