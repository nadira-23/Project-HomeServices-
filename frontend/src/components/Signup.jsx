// import React, { useState } from 'react';
// import { TextField, Button, Typography, Container, Box } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3000/auth/register', formData);
      
//       // Assuming a successful registration response has a message or success status
//       if (response.data.success) {
//         setSuccess('Registration successful! ');
//         setTimeout(() => navigate('/'), 2000); // Redirect after 2 seconds
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       setError(error.response?.data?.message || 'Registration failed. Please try again.');
//     }
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         minHeight="100vh"
//       >
//         <Typography variant="h4" gutterBottom>
//           Sign Up
//         </Typography>
//         {error && <Typography color="error">{error}</Typography>}
//         {success && <Typography color="primary">{success}</Typography>}
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Email"
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Password"
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             type="submit"
//             sx={{ mt: 2 }}
//           >
//             Register
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default Signup;

// import React, { useState } from 'react';
// import { TextField, Button, Typography, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [role, setRole] = useState('user'); // Default to 'user'
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3000/auth/register', {
//         username,
//         password,
//         email,
//         role,  // Include role in request body
//       });

//       if (response.data.success) {
//         // Automatically log the user in after successful registration (optional)
//         const loginResponse = await axios.post('http://localhost:3000/auth/login', {
//           username,
//           password,
//         });

//         const { token, role } = loginResponse.data;
//         localStorage.setItem('authToken', token);

//         // Redirect based on role
//         if (role === 'admin') {
//           navigate('/admin');
//         } else if (role === 'servicer') {
//           navigate('/servicer-dashboard');
//         } else {
//           navigate('/');
//         }
//       }
//     } catch (err) {
//       setError('Failed to sign up or server error.');
//     }
//   };

//   return (
//     <Box sx={{ maxWidth: 400, margin: 'auto', padding: '20px' }}>
//       <Typography variant="h5" gutterBottom>Sign Up</Typography>

//       {error && <Typography color="error" variant="body2">{error}</Typography>}

//       <form onSubmit={handleSignup}>
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

//         <TextField
//           label="Email"
//           variant="outlined"
//           type="email"
//           fullWidth
//           margin="normal"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         {/* Role Selection */}
//         <FormControl fullWidth margin="normal">
//           <InputLabel>Role</InputLabel>
//           <Select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             label="Role"
//             required
//           >
//             <MenuItem value="user">User</MenuItem>
//             <MenuItem value="servicer">Servicer</MenuItem>
//             <MenuItem value="admin">Admin</MenuItem>
//           </Select>
//         </FormControl>

//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           sx={{ marginTop: '20px' }}
//         >
//           Sign Up
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { TextField, Button, Typography, Box, MenuItem, Select, InputLabel, FormControl, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user'); // Default to 'user'
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        username,
        password,
        email,
        role,  // Include role in request body
      });

      if (response.data.success) {
        // Automatically log the user in after successful registration (optional)
        const loginResponse = await axios.post('http://localhost:3000/auth/login', {
          username,
          password,
        });

        const { token, role } = loginResponse.data;
        localStorage.setItem('authToken', token);

        // Redirect based on role
        if (role === 'admin') {
          navigate('/admin');
        } else if (role === 'servicer') {
          navigate('/servicer-dashboard');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      setError('Failed to sign up or server error.');
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
          Sign Up
        </Typography>

        {error && <Typography color={colors.error} variant="body2" align="center" sx={{ marginBottom: '15px', fontWeight: 'bold' }}>
          {error}
        </Typography>}

        <form onSubmit={handleSignup}>
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

          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          {/* Role Selection */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              label="Role"
              required
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="servicer">Servicer</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>

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
            Sign Up
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Signup;
