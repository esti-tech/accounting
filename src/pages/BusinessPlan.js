import React from 'react';
const BusinessPlan = () => {
  return (
    <div className="page-container">
      <h1>Peep Business Plan</h1>
      <img src="https://media.istockphoto.com/id/1389080824/photo/asian-woman-video-conference-business-meeting-with-colleague-online-with-laptop-at-home.jpg?s=612x612&w=0&k=20&c=VIvmvnLRPJVJ92Q6jzKsTI2WiWBATPOoiGk5mYVZjoY=" alt="Business Plan" className="page-image" />
      <div className="plans">
        <div className="plan">
          <h2>Basic Plan</h2>
          <p>$10/month</p>
          <p>Includes basic accounting features and email support</p>
        </div>
        <div className="plan">
          <h2>Standard Plan</h2>
          <p>$20/month</p>
          <p>Includes all features in Basic, plus inventory management and priority support</p>
        </div>
        <div className="plan">
          <h2>Premium Plan</h2>
          <p>$30/month</p>
          <p>Includes all features in Standard, plus payroll and advanced reporting</p>
        </div>
      </div>
    </div>
  );
};
export default BusinessPlan;