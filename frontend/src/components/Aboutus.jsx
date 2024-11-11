// import React from 'react';
// import { Container, Box, Typography, Grid, Paper, Avatar, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const AboutUs = () => {
//   const navigate = useNavigate();

  

//   return (
//     <Container maxWidth="lg" sx={{ paddingTop: '40px' }}>
//       {/* Header Section */}
//       <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
//         <Typography variant="h3" gutterBottom>
//           About Us
//         </Typography>
//         <Typography variant="h6" color="textSecondary">
//           Learn more about our mission, values, and the team behind ProHomeConnect.
//         </Typography>
//       </Box>

      
//       <Box sx={{ marginBottom: '40px' }}>
//         <Typography variant="h4" gutterBottom>
//           Our Mission
//         </Typography>
//         <Typography variant="body1" color="textSecondary" paragraph>
//           ProHomeConnect is a leading platform that connects homeowners with expert professionals for a variety of home services. Whether it’s plumbing, electrical work, cleaning, or repairs, our mission is to provide top-quality service that exceeds our clients' expectations, all while ensuring affordability and reliability.
//         </Typography>
//         <Button variant="contained" color="primary" onClick={() => navigate('/services')}>
//           Explore Our Services
//         </Button>
//       </Box>

      
//       <Box sx={{ marginBottom: '40px' }}>
//         <Typography variant="h4" gutterBottom>
//           Our Values
//         </Typography>
//         <Grid container spacing={4} justifyContent="center">
//           <Grid item xs={12} sm={4}>
//             <Paper sx={{ padding: '20px', textAlign: 'center' }}>
//               <Typography variant="h5" gutterBottom>
//                 Integrity
//               </Typography>
//               <Typography variant="body1" color="textSecondary">
//                 We believe in honesty, transparency, and delivering on our promises.
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Paper sx={{ padding: '20px', textAlign: 'center' }}>
//               <Typography variant="h5" gutterBottom>
//                 Excellence
//               </Typography>
//               <Typography variant="body1" color="textSecondary">
//                 We strive for perfection and aim to exceed expectations in every service we provide.
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Paper sx={{ padding: '20px', textAlign: 'center' }}>
//               <Typography variant="h5" gutterBottom>
//                 Customer Satisfaction
//               </Typography>
//               <Typography variant="body1" color="textSecondary">
//                 Our customers' satisfaction is our top priority, and we work tirelessly to ensure the best experience.
//               </Typography>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Box>

     
//       {/* Contact Section */}
//       <Box sx={{ textAlign: 'center' }}>
//         <Typography variant="h4" gutterBottom>
//           Get In Touch
//         </Typography>
//         <Typography variant="body1" color="textSecondary" paragraph>
//           We’d love to hear from you! If you have any questions or want to know more, feel free to contact us.
//         </Typography>
//         <Button variant="contained" color="primary" onClick={() => navigate('/contact')}>
//           Contact Us
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default AboutUs;


import React from 'react';
import { Container, Box, Typography, Grid, Paper, Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '40px' }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '60px' }}>
        <Typography variant="h3" gutterBottom sx={{ color: '#38B2AC', fontWeight: 'bold' }}>
          About Us
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ fontStyle: 'italic' }}>
          Learn more about our mission, values, and the team behind ProHomeConnect.
        </Typography>
      </Box>

      {/* Mission Section */}
      <Box sx={{ marginBottom: '60px' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#2D3748', fontWeight: 'bold' }}>
          Our Mission
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph sx={{ lineHeight: 1.8 }}>
          ProHomeConnect is a leading platform that connects homeowners with expert professionals for a variety of home services. Whether it’s plumbing, electrical work, cleaning, or repairs, our mission is to provide top-quality service that exceeds our clients' expectations, all while ensuring affordability and reliability.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate('/services')} 
          sx={{
            backgroundColor: '#38B2AC',
            color: '#fff',
            '&:hover': { backgroundColor: '#319795' },
            padding: '10px 20px',
            textTransform: 'none',
          }}
        >
          Explore Our Services
        </Button>
      </Box>

      {/* Values Section */}
      <Box sx={{ marginBottom: '60px' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#2D3748', fontWeight: 'bold' }}>
          Our Values
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Integrity */}
          <Grid item xs={12} sm={4}>
            <Paper sx={{
              padding: '30px',
              textAlign: 'center',
              backgroundColor: '#F9FAFB',
              boxShadow: 3,
              borderRadius: '8px',
              '&:hover': {
                boxShadow: 6,
                backgroundColor: '#E2E8F0',
              }
            }}>
              <Avatar sx={{
                bgcolor: '#38B2AC',
                width: 60,
                height: 60,
                marginBottom: '15px',
              }}>
                <Typography variant="h5" sx={{ color: '#fff' }}>I</Typography>
              </Avatar>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#2D3748' }}>
                Integrity
              </Typography>
              <Typography variant="body1" color="textSecondary">
                We believe in honesty, transparency, and delivering on our promises.
              </Typography>
            </Paper>
          </Grid>
          
          {/* Excellence */}
          <Grid item xs={12} sm={4}>
            <Paper sx={{
              padding: '30px',
              textAlign: 'center',
              backgroundColor: '#F9FAFB',
              boxShadow: 3,
              borderRadius: '8px',
              '&:hover': {
                boxShadow: 6,
                backgroundColor: '#E2E8F0',
              }
            }}>
              <Avatar sx={{
                bgcolor: '#E53E3E',
                width: 60,
                height: 60,
                marginBottom: '15px',
              }}>
                <Typography variant="h5" sx={{ color: '#fff' }}>E</Typography>
              </Avatar>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#2D3748' }}>
                Excellence
              </Typography>
              <Typography variant="body1" color="textSecondary">
                We strive for perfection and aim to exceed expectations in every service we provide.
              </Typography>
            </Paper>
          </Grid>
          
          {/* Customer Satisfaction */}
          <Grid item xs={12} sm={4}>
            <Paper sx={{
              padding: '30px',
              textAlign: 'center',
              backgroundColor: '#F9FAFB',
              boxShadow: 3,
              borderRadius: '8px',
              '&:hover': {
                boxShadow: 6,
                backgroundColor: '#E2E8F0',
              }
            }}>
              <Avatar sx={{
                bgcolor: '#ED8936',
                width: 60,
                height: 60,
                marginBottom: '15px',
              }}>
                <Typography variant="h5" sx={{ color: '#fff' }}>C</Typography>
              </Avatar>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#2D3748' }}>
                Customer Satisfaction
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Our customers' satisfaction is our top priority, and we work tirelessly to ensure the best experience.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#2D3748', fontWeight: 'bold' }}>
          Get In Touch
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph sx={{ lineHeight: 1.8 }}>
          We’d love to hear from you! If you have any questions or want to know more, feel free to contact us.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate('/contact')} 
          sx={{
            backgroundColor: '#38B2AC',
            color: '#fff',
            '&:hover': { backgroundColor: '#319795' },
            padding: '10px 20px',
            textTransform: 'none',
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
};

export default AboutUs;
