import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    try {
      // Simulate user registration by storing data in localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const isExistingUser = existingUsers.some((user) => user.email === email);

      if (isExistingUser) {
        setError('User already exists. Please log in.');
      } else {
        const newUser = { email, password };
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        setError('');
        onRegister(newUser);
      }
    } catch (error) {
      setError('Error registering user.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
