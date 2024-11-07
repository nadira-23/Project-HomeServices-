import React from 'react';
import { Container, Box, Typography, Grid, Paper, Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '/images/john.jpg',
      bio: 'John is the visionary leader of ProHomeConnect, passionate about home services and customer satisfaction.',
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      image: '/images/jane.jpg',
      bio: 'Jane leads our development team, ensuring our platform is seamless and user-friendly.',
    },
    {
      name: 'Mark Wilson',
      role: 'Operations Manager',
      image: '/images/mark.jpg',
      bio: 'Mark oversees operations, ensuring that everything runs smoothly and efficiently.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '40px' }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Learn more about our mission, values, and the team behind ProHomeConnect.
        </Typography>
      </Box>

      {/* Company Overview Section */}
      <Box sx={{ marginBottom: '40px' }}>
        <Typography variant="h4" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          ProHomeConnect is a leading platform that connects homeowners with expert professionals for a variety of home services. Whether it’s plumbing, electrical work, cleaning, or repairs, our mission is to provide top-quality service that exceeds our clients' expectations, all while ensuring affordability and reliability.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/services')}>
          Explore Our Services
        </Button>
      </Box>

      {/* Company Values Section */}
      <Box sx={{ marginBottom: '40px' }}>
        <Typography variant="h4" gutterBottom>
          Our Values
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: '20px', textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>
                Integrity
              </Typography>
              <Typography variant="body1" color="textSecondary">
                We believe in honesty, transparency, and delivering on our promises.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: '20px', textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>
                Excellence
              </Typography>
              <Typography variant="body1" color="textSecondary">
                We strive for perfection and aim to exceed expectations in every service we provide.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: '20px', textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>
                Customer Satisfaction
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Our customers' satisfaction is our top priority, and we work tirelessly to ensure the best experience.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Team Section */}
      <Box sx={{ marginBottom: '40px' }}>
        <Typography variant="h4" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper sx={{ padding: '20px', textAlign: 'center' }}>
                <Avatar
                  alt={member.name}
                  src={member.image}
                  sx={{ width: 100, height: 100, margin: 'auto', marginBottom: '15px' }}
                />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {member.bio}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          We’d love to hear from you! If you have any questions or want to know more, feel free to contact us.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/contact')}>
          Contact Us
        </Button>
      </Box>
    </Container>
  );
};

export default AboutUs;
