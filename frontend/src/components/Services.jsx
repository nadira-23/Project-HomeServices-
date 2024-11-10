
import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch services data from API
    axios.get('http://localhost:3000/service')
      .then(response => {
        setServices(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
        setLoading(false);
      });
  }, []); // Only runs once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '40px' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant="h3" gutterBottom>Our Services</Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          We provide a variety of services to make your home better, safer, and more comfortable. Explore our offerings below.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service._id}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={service.serviceImage}
                alt={service.serviceName}
              />
              <CardContent>
                <Typography variant="h5">{service.serviceName}</Typography>
                <Typography variant="body2" color="textSecondary" paragraph>{service.serviceDescription}</Typography>
                <Typography variant="body2" color="textSecondary" paragraph>{service.price}</Typography>
                <Button variant="contained" onClick={() => navigate(`/service-details/${service._id}`)} sx={{ marginBottom: '10px' }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
