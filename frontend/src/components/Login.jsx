import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '' // You mentioned email but aren't using it, keep it in case needed later.
  });
  const navigate = useNavigate();

  // Update user input state
  let updateUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle login logic
  let sendData = async () => {
    const auth = {
      username: user.username,
      password: user.password
    };
  
    try {
      // Log the auth object being sent
      console.log("Sending data:", auth);
  
      const response = await axios.post('http://localhost:3000/auth/login', auth);
      console.log("Response:", response.data); // Log the response from backend
  
      // Handle successful login
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);  // Store token in localStorage
        localStorage.setItem('Username', user.username);     // Optionally store username
        navigate('/');  // Redirect to the home page
      } else {
        alert('Login failed: ' + response.data.msg);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert('Error during login. Please check the console for details.');
    }
  };
  
  return (
    <>
      <div style={{ padding: '300px' }}>
        <h2>LOGIN</h2> <br />
        <TextField
          required
          id="username"
          label="Username"
          type="text"
          name="username"
          value={user.username}
          onChange={updateUser}
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          name="password"
          value={user.password}
          onChange={updateUser}
          variant="outlined"
        />
        <br />
        <br />
        <Button variant="contained" onClick={sendData}>
          Submit
        </Button>
        <br />
      </div>
    </>
  );
};

export default Login;
