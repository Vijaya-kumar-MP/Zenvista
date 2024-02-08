// Signup.jsx
import React, { useState } from 'react';

const Signup = () => {
  const [signupData, setSignupData] = useState({
    newUsername: '',
    newPassword: '',
  });

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    console.log('Signing up with:', signupData);
    // Reset the form after signup attempt
    setSignupData({ newUsername: '', newPassword: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <label htmlFor="newUsername">Username:</label>
        <input
          type="text"
          id="newUsername"
          name="newUsername"
          value={signupData.newUsername}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="newPassword">Password:</label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={signupData.newPassword}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;
