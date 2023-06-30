import React, { useState } from 'react';
import './login.css';
import logingf from './logingf.gif';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check the provided credentials
    if (username === 'Mickey Arthur' && password === 'weatherapp@123') {
      console.log('Login successful');
      onLogin(); // Update the login status in the parent component
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      
   
    <div className="login-container">
    <div class="gif-container">
          <img src={logingf} alt="My GIF" class="circular-gif"/>
      
      </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>

    </>
  );
};

export default Login;
