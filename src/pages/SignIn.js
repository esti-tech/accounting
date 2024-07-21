import React, { useState } from 'react';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <div className="page-container">
      <h1>Sign In</h1>
      <img src="https://media.istockphoto.com/id/1413769770/vector/login-page-for-website-linear-icon.jpg?s=612x612&w=is&k=20&c=LDxeALrJRmcSNxpEvfm1gwB0_AACid2hdtaWMhklYS8=" alt="Sign In" className="page-image" />
      <form onSubmit={handleSignIn}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
export default SignIn;