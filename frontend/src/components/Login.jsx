// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import jwt_decode from 'jwt-decode';

// const Login = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // Make API call to login
//       const response = await axios.post('/login', { username, password });

//       // Save JWT token to localStorage
//       localStorage.setItem('token', response.data.token);

//       // Decode the JWT to determine user role
//       const decoded = jwt_decode(response.data.token);

//       if (decoded.role === 'admin') {
//         // Redirect admin to the admin dashboard
//         navigate('/admin/dashboard');
//       } else {
//         // Redirect regular user to the user dashboard
//         navigate('/user/dashboard');
//       }
//     } catch (error) {
//       setError('Invalid credentials or server error');
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <Container>
//       <Box sx={{ paddingTop: '20px' }}>
//         <Typography variant="h4">Login</Typography>
//         {error && <Typography color="error">{error}</Typography>}
//         <form onSubmit={handleLogin}>
//           <TextField
//             label="Username"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <TextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button type="submit" variant="contained" color="primary" fullWidth>
//             Login
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/auth/login', { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token); // Store token as 'token' for consistency

      // Redirect to admin dashboard after successful login
      navigate('/admin');
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.msg || 'Login failed. Check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
