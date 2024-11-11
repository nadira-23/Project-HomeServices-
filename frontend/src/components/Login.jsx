

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await axios.post('http://localhost:3000/auth/login', { username, password });
//       const { token } = response.data;
//       localStorage.setItem('token', token); // Store token as 'token' for consistency

//       // Redirect to admin dashboard after successful login
//       navigate('/admin');
//     } catch (err) {
//       setLoading(false);
//       setError(err.response?.data?.msg || 'Login failed. Check your credentials.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <div className="error-message">{error}</div>}
//         <button type="submit" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await axios.post('http://localhost:3000/auth/login', { username, password });
//       const { token, role } = response.data;

//       // Store token in local storage
//       localStorage.setItem('token', token);

//       // Redirect based on user role
//       if (role === 'admin') {
//         navigate('/admin');
//       } else {
//         navigate('/'); // Redirect to homepage for regular users
//       }
//     } catch (err) {
//       setLoading(false);
//       setError(err.response?.data?.msg || 'Login failed. Check your credentials.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <div className="error-message">{error}</div>}
//         <button type="submit" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import { TextField, Button, Typography, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3000/auth/login', {
//         username,
//         password,
//       });

//       const { token, role } = response.data;

//       // Store token in localStorage
//       localStorage.setItem('authToken', token);

//       // Navigate based on user role
//       if (role === 'admin') {
//         navigate('/admin');  // Admin dashboard
//       } else if (role === 'servicer') {
//         navigate('/ServiceDashboard');  // Servicer dashboard
//       } else {
//         navigate('/');  // User homepage
//       }
//     } catch (err) {
//       setError('Invalid credentials or server error.');
//     }
//   };

//   return (
//     <Box sx={{ maxWidth: 400, margin: 'auto', padding: '20px' }}>
//       <Typography variant="h5" gutterBottom>Login</Typography>

//       {error && <Typography color="error" variant="body2">{error}</Typography>}

//       <form onSubmit={handleLogin}>
//         <TextField
//           label="Username"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />

//         <TextField
//           label="Password"
//           variant="outlined"
//           type="password"
//           fullWidth
//           margin="normal"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           sx={{ marginTop: '20px' }}
//         >
//           Login
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        username,
        password,
      });

      const { token, role } = response.data;

      // Store token in localStorage
      localStorage.setItem('authToken', token);

      // Navigate based on user role
      if (role === 'admin') {
        navigate('/admin');  // Admin dashboard
      } else if (role === 'servicer') {
        navigate('/ServiceDashboard');  // Servicer dashboard
      } else {
        navigate('/');  // User homepage
      }
    } catch (err) {
      setError('Invalid credentials or server error.');
    }
  };

  // Color Palette for styling
  const colors = {
    primary: '#38B2AC', // Teal
    secondary: '#FEEBC8', // Light Peach
    accent: '#E53E3E', // Coral Red
    background: '#F9FAFB', // Very light background
    text: '#2D3748', // Dark Gray for text
    error: '#E53E3E', // Red for error messages
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: colors.background }}>
      <Paper sx={{
        padding: '40px 20px',
        maxWidth: 400,
        width: '100%',
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: '#fff',
      }}>
        <Typography variant="h4" align="center" sx={{ color: colors.primary, fontWeight: 'bold' }}>
          Login
        </Typography>

        {error && <Typography color={colors.error} variant="body2" align="center" sx={{ marginBottom: '15px', fontWeight: 'bold' }}>
          {error}
        </Typography>}

        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            sx={{
              '& .MuiInputLabel-root': { color: colors.primary },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: colors.primary,
                },
                '&:hover fieldset': {
                  borderColor: colors.accent,
                },
              },
            }}
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              '& .MuiInputLabel-root': { color: colors.primary },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: colors.primary,
                },
                '&:hover fieldset': {
                  borderColor: colors.accent,
                },
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              backgroundColor: colors.accent,
              color: '#fff',
              padding: '12px',
              marginTop: '20px',
              '&:hover': {
                backgroundColor: colors.primary,
              },
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;

