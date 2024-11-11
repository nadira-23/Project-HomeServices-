

// import React, { useState, useEffect } from 'react';
// import { Container, Box, Typography, Button, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../axiosinterceotor';

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [rows, setRows] = useState([]);

//   useEffect(() => {
//     axiosInstance.get('http://localhost:3000/service').then((res) => {
//       setRows(res.data);
//     });
//   }, []);

//   // Color Palette - Fresh and Friendly (Example)
//   const colors = {
//     primary: '#38B2AC', // Teal
//     secondary: '#FEEBC8', // Light Peach
//     accent: '#E53E3E', // Coral Red
//     background: '#F9FAFB', // Very light background
//     text: '#2D3748', // Dark Gray for text
//   };

//   return (
//     <Container maxWidth="xl" sx={{ paddingTop: '40px', backgroundColor: colors.background }}>
//       {/* Welcome Section */}
//       <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
//         <Typography variant="h2" gutterBottom sx={{ color: colors.primary }}>
//           Welcome to ProHomeConnect
//         </Typography>
//         <Typography variant="h5" color="textSecondary" paragraph>
//           Your one-stop solution for all home services. Reliable, fast, and affordable.
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: colors.accent,
//             color: '#fff',
//             '&:hover': {
//               backgroundColor: colors.primary,
//             },
//           }}
//           onClick={() => navigate('/services')}
//         >
//           Explore Services
//         </Button>
//       </Box>

//       {/* Featured Services Section */}
//       <Box sx={{ marginBottom: '50px' }}>
//         <Typography variant="h4" gutterBottom align="center" sx={{ color: colors.primary }}>
//           Our Featured Services
//         </Typography>
//         <Grid container spacing={4} justifyContent="center">
//           {rows.map((service, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card sx={{ maxWidth: 345 }}>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={service.serviceImage}
//                   alt={service.serviceName}
//                 />
//                 <CardContent>
//                   <Typography variant="h5" component="div" sx={{ color: colors.text }}>
//                     {service.serviceName}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {service.serviceDescription}
//                   </Typography>
//                 </CardContent>
//                 <Button
//                   variant="outlined"
//                   sx={{
//                     color: colors.primary,
//                     borderColor: colors.primary,
//                     '&:hover': {
//                       borderColor: colors.accent,
//                       color: colors.accent,
//                     },
//                   }}
//                   size="small"
//                   onClick={() => navigate('/services')}
//                 >
//                   Learn More
//                 </Button>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* About Us Section */}
//       <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
//         <Typography variant="h4" gutterBottom sx={{ color: colors.primary }}>
//           About Us
//         </Typography>
//         <Typography variant="body1" color="textSecondary" paragraph>
//           ProHomeConnect is dedicated to providing top-notch home services with a focus on customer satisfaction.
//           From plumbing to electrical work, our skilled professionals are here to ensure your home is running smoothly.
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: colors.secondary,
//             color: colors.text,
//             '&:hover': {
//               backgroundColor: colors.primary,
//             },
//           }}
//           onClick={() => navigate('/about')}
//         >
//           Learn More About Us
//         </Button>
//       </Box>

//       {/* Testimonials Section */}
//       <Box sx={{ backgroundColor: '#F7FAFC', padding: '40px 0', textAlign: 'center' }}>
//         <Typography variant="h4" gutterBottom sx={{ color: colors.primary }}>
//           What Our Clients Say
//         </Typography>
//         <Grid container spacing={4} justifyContent="center">
//           <Grid item xs={12} sm={6} md={4}>
//             <Paper sx={{ padding: '20px', textAlign: 'center' }}>
//               <Typography variant="h6" color="textPrimary">
//                 "Your home, our care, expert services at your doorstep."
//               </Typography>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Call-to-Action Section */}
//       <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
//         <Typography variant="h4" gutterBottom sx={{ color: colors.primary }}>
//           Ready to Get Started?
//         </Typography>
//         <Typography variant="h6" color="textSecondary" paragraph>
//           Book your home service today with our easy-to-use platform. We're here to help with all your home needs.
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: colors.primary,
//             color: '#fff',
//             '&:hover': {
//               backgroundColor: colors.accent,
//             },
//           }}
//           onClick={() => navigate('/services')}
//         >
//           Book a Service Now
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default HomePage;

// import React, { useState, useEffect } from 'react';
// import { Container, Box, Typography, Button, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../axiosinterceotor';

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [rows, setRows] = useState([]);

//   useEffect(() => {
//     axiosInstance.get('http://localhost:3000/service').then((res) => {
//       setRows(res.data);
//     });
//   }, []);

//   // Color Palette - Fresh and Friendly (Example)
//   const colors = {
//     primary: '#38B2AC', // Teal
//     secondary: '#FEEBC8', // Light Peach
//     accent: '#E53E3E', // Coral Red
//     background: '#F9FAFB', // Very light background
//     text: '#2D3748', // Dark Gray for text
//   };

//   return (
//     <Container maxWidth="xl" sx={{ paddingTop: '40px', backgroundColor: colors.background }}>
//       {/* Welcome Section */}
//         <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
//         <Typography variant="h2" gutterBottom sx={{ color: colors.primary, fontWeight: 'bold' }}>
//           Welcome to ProHomeConnect
//         </Typography>
//         <Typography variant="h5" color="textSecondary" paragraph>
//           Your one-stop solution for all home services. Reliable, fast, and affordable.
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: colors.accent,
//             color: '#fff',
//             padding: '10px 25px',
//             '&:hover': {
//               backgroundColor: colors.primary,
//             },
//           }}
//           onClick={() => navigate('/services')}
//         >
//           Explore Services
//         </Button> 
//       </Box> 

//       {/* Featured Services Section */}
//       <Box sx={{ marginBottom: '50px' }}>
//         <Typography variant="h4" gutterBottom align="center" sx={{ color: colors.primary, fontWeight: 'bold' }}>
//           Our Featured Services
//         </Typography>
//         <Grid container spacing={4} justifyContent="center">
//           {rows.map((service, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={service.serviceImage}
//                   alt={service.serviceName}
//                   sx={{ borderRadius: '5px' }}
//                 />
//                 <CardContent>
//                   <Typography variant="h5" component="div" sx={{ color: colors.text, fontWeight: 'bold' }}>
//                     {service.serviceName}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
//                     {service.serviceDescription}
//                   </Typography>
//                 </CardContent>
//                 <Button
//                   variant="outlined"
//                   sx={{
//                     color: colors.primary,
//                     borderColor: colors.primary,
//                     marginBottom: 2,
//                     '&:hover': {
//                       borderColor: colors.accent,
//                       color: colors.accent,
//                     },
//                   }}
//                   size="small"
//                   onClick={() => navigate('/services')}
//                 >
//                   Learn More
//                 </Button>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* About Us Section */}
//       <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
//         <Typography variant="h4" gutterBottom sx={{ color: colors.primary, fontWeight: 'bold' }}>
//           About Us
//         </Typography>
//         <Typography variant="body1" color="textSecondary" paragraph sx={{ maxWidth: '800px', margin: '0 auto' }}>
//           ProHomeConnect is dedicated to providing top-notch home services with a focus on customer satisfaction.
//           From plumbing to electrical work, our skilled professionals are here to ensure your home is running smoothly.
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: colors.secondary,
//             color: colors.text,
//             padding: '10px 25px',
//             '&:hover': {
//               backgroundColor: colors.primary,
//             },
//           }}
//           onClick={() => navigate('/about')}
//         >
//           Learn More About Us
//         </Button>
//       </Box>

//       {/* Testimonials Section */}
//       <Box sx={{ backgroundColor: '#F7FAFC', padding: '40px 0', textAlign: 'center' }}>
//         <Typography variant="h4" gutterBottom sx={{ color: colors.primary, fontWeight: 'bold' }}>
//           What Our Clients Say
//         </Typography>
//         <Grid container spacing={4} justifyContent="center">
//           <Grid item xs={12} sm={6} md={4}>
//             <Paper sx={{ padding: '20px', textAlign: 'center', boxShadow: 2, borderRadius: 2 }}>
//               <Typography variant="h6" color="textPrimary" sx={{ fontStyle: 'italic' }}>
//                 "Your home, our care, expert services at your doorstep."
//               </Typography>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Call-to-Action Section */}
//       <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
//         <Typography variant="h4" gutterBottom sx={{ color: colors.primary, fontWeight: 'bold' }}>
//           Ready to Get Started?
//         </Typography>
//         <Typography variant="h6" color="textSecondary" paragraph sx={{ maxWidth: '800px', margin: '0 auto' }}>
//           Book your home service today with our easy-to-use platform. We're here to help with all your home needs.
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: colors.primary,
//             color: '#fff',
//             padding: '10px 25px',
//             '&:hover': {
//               backgroundColor: colors.accent,
//             },
//           }}
//           onClick={() => navigate('/services')}
//         >
//           Book a Service Now
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosinterceotor';

const HomePage = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axiosInstance.get('http://localhost:3000/service').then((res) => {
      setRows(res.data);
    });
  }, []);

  // Color Palette - Fresh and Friendly (Example)
  const colors = {
    primary: '#38B2AC', // Teal
    secondary: '#FEEBC8', // Light Peach
    accent: '#E53E3E', // Coral Red
    background: '#F9FAFB', // Very light background
    text: '#2D3748', // Dark Gray for text
    darkAccent: '#E53E3E', // Dark Coral Red
    lightBackground: '#F0F4F8', // Light Gray background
  };

  return (
    <Container maxWidth="xl" sx={{ paddingTop: '40px', backgroundColor: colors.background }}>
      {/* Welcome Section */}
      <Box sx={{ 
        textAlign: 'center', 
        marginBottom: '50px', 
        background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
        borderRadius: 3, 
        padding: '40px 20px',
        boxShadow: 3
      }}>
        <Typography variant="h2" gutterBottom sx={{ color: '#fff', fontWeight: 'bold' }}>
          Welcome to ProHomeConnect
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph sx={{ color: '#fff', fontStyle: 'italic' }}>
          Your one-stop solution for all home services. Reliable, fast, and affordable.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.accent,
            color: '#fff',
            padding: '10px 25px',
            '&:hover': {
              backgroundColor: colors.primary,
            },
          }}
          onClick={() => navigate('/services')}
        >
          Explore Services
        </Button>
      </Box>

      {/* Featured Services Section */}
      <Box sx={{ marginBottom: '50px' }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ color: colors.primary, fontWeight: 'bold' }}>
          Our Featured Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {rows.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  maxWidth: 345, 
                  borderRadius: 3, 
                  boxShadow: 3, 
                  '&:hover': { 
                    transform: 'scale(1.05)', 
                    transition: 'transform 0.3s ease-in-out' 
                  } 
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={service.serviceImage}
                  alt={service.serviceName}
                  sx={{ borderRadius: '5px', transition: 'transform 0.5s' }}
                />
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ color: colors.text, fontWeight: 'bold' }}>
                    {service.serviceName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                    {service.serviceDescription}
                  </Typography>
                </CardContent>
                <Button
                  variant="outlined"
                  sx={{
                    color: colors.primary,
                    borderColor: colors.primary,
                    marginBottom: 2,
                    '&:hover': {
                      borderColor: colors.accent,
                      color: colors.accent,
                    },
                  }}
                  size="small"
                  onClick={() => navigate('/services')}
                >
                  Learn More
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* About Us Section */}
      <Box sx={{ 
        textAlign: 'center', 
        marginBottom: '50px', 
        backgroundColor: colors.lightBackground, 
        padding: '40px 20px', 
        borderRadius: 3, 
        boxShadow: 2 
      }}>
        <Typography variant="h4" gutterBottom sx={{ color: colors.primary, fontWeight: 'bold' }}>
          About Us
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph sx={{ maxWidth: '800px', margin: '0 auto' }}>
          ProHomeConnect is dedicated to providing top-notch home services with a focus on customer satisfaction.
          From plumbing to electrical work, our skilled professionals are here to ensure your home is running smoothly.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.secondary,
            color: colors.text,
            padding: '10px 25px',
            '&:hover': {
              backgroundColor: colors.primary,
            },
          }}
          onClick={() => navigate('/about')}
        >
          Learn More About Us
        </Button>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ 
        backgroundColor: '#F7FAFC', 
        padding: '40px 0', 
        textAlign: 'center', 
        boxShadow: 2, 
        borderRadius: 2 
      }}>
        <Typography variant="h4" gutterBottom sx={{ color: colors.primary, fontWeight: 'bold' }}>
          What Our Clients Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: '20px', textAlign: 'center', boxShadow: 2, borderRadius: 2 }}>
              <Typography variant="h6" color="textPrimary" sx={{ fontStyle: 'italic' }}>
                "Your home, our care, expert services at your doorstep."
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Call-to-Action Section */}
      <Box sx={{ 
        textAlign: 'center', 
        marginBottom: '40px', 
        background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent})`, 
        padding: '40px 20px', 
        borderRadius: 3, 
        boxShadow: 3 
      }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#fff', fontWeight: 'bold' }}>
          Ready to Get Started?
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph sx={{ color: '#fff', margin: '0 auto', maxWidth: '800px' }}>
          Book your home service today with our easy-to-use platform. We're here to help with all your home needs.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.accent,
            color: '#fff',
            padding: '10px 25px',
            '&:hover': {
              backgroundColor: colors.primary,
            },
          }}
          onClick={() => navigate('/services')}
        >
          Book a Service Now
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;

