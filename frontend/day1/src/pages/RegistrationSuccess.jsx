// RegistrationSuccess.jsx
import React from 'react';

const RegistrationSuccess = ({ onLogin }) => {
  return (
    <div>
      <h2>Registration Successful!</h2>
      <p>Your account has been successfully registered.</p>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default RegistrationSuccess;
