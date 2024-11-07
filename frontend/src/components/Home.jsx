import React from 'react';
import { Container, Box, Typography, Button, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  // Example services data (can be dynamic if fetched from a server)
  const services = [
    { title: 'Plumbing', description: 'Expert plumbing services for your home or office.', image: '/images/plumbing.jpg' },
    { title: 'Electrical', description: 'Safe and reliable electrical repairs and installations.', image: '/images/electrical.jpg' },
    { title: 'Cleaning', description: 'Thorough and professional cleaning services.', image: '/images/cleaning.jpg' },
    { title: 'Repairs', description: 'Fast and effective repair services for all kinds of issues.', image: '/images/repairs.jpg' },
  ];

  return (
    <Container maxWidth="xl" sx={{ paddingTop: '40px' }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
        <Typography variant="h2" gutterBottom>
          Welcome to ProHomeConnect
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Your one-stop solution for all home services. Reliable, fast, and affordable.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/services')}>
          Explore Services
        </Button>
      </Box>

      {/* Featured Services Section */}
      <Box sx={{ marginBottom: '50px' }}>
        <Typography variant="h4" gutterBottom align="center">
          Our Featured Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
                <Button variant="outlined" size="small" onClick={() => navigate('/services')}>
                  Learn More
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* About Us Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          ProHomeConnect is dedicated to providing top-notch home services with a focus on customer satisfaction. From plumbing to electrical work, our skilled professionals are here to ensure your home is running smoothly. We offer affordable and reliable services you can trust.
        </Typography>
        <Button variant="contained" color="secondary" onClick={() => navigate('/about')}>
          Learn More About Us
        </Button>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: '#333333', padding: '40px 0', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          What Our Clients Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: '20px', textAlign: 'center' }}>
              <Typography variant="h6" color="textPrimary">
                John Doe
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                "ProHomeConnect saved me time and money! The plumber arrived on time and fixed the issue quickly. Highly recommended!"
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: '20px', textAlign: 'center' }}>
              <Typography variant="h6" color="textPrimary">
                Jane Smith
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                "Excellent service! The team was professional and courteous. They fixed the electrical issues in no time."
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Call-to-Action Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant="h4" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Book your home service today with our easy-to-use platform. We're here to help with all your home needs.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/services')}>
          Book a Service Now
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
