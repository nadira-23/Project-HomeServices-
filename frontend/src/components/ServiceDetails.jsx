
import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const ServiceDetail = () => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { state } = useLocation();  // This will get the service data passed from the services page
  
  // Use the service ID from the route params or state to fetch the service details
  useEffect(() => {
    if (state?.service) {
      // If service data is passed via state, use it directly
      setService(state.service);
      setLoading(false);
    } else {
      const serviceId = window.location.pathname.split('/').pop();  // Extract service ID from URL
      // axios.get(`http://localhost:3000/service/${serviceId}`)
      //   .then(response => {
      //     setService(response.data);
      //     setLoading(false);
      //   })
      //   .catch(error => {
      //     console.error('Error fetching service details:', error);
      //     setLoading(false);
      //   });
      axios.get(`http://localhost:3000/service/${serviceId}`)
  .then(response => {
    console.log(response);  // Log the response to see its contents
    setService(response.data);
    setLoading(false);
  })
  .catch(error => {
    console.error('Error fetching service details:', error);
    setLoading(false);
    setError('Failed to load service details.');
  });
    }
  }, [state]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!service) {
    return <div>Service not found!</div>;
  }

  const handleBooking = () => {
    // Navigate to booking page (can pass service details if needed)
    navigate('/Booking', { state: { service } });
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: '40px' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant="h3" gutterBottom>{service.serviceName}</Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          {service.serviceDescription}
        </Typography>
        <Typography variant="h6" color="textPrimary" paragraph>
          Price: ${service.price}
        </Typography>
      </Box>

      <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CardMedia
          component="img"
          height="400"
          image={service.serviceImage}
          alt={service.serviceName}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" paragraph>
            Category: {service.serviceCategory}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Description: {service.serviceDescription}
          </Typography>
        </CardContent>
        <Button variant="contained" color="primary" onClick={handleBooking}>
          Book This Service
        </Button>
        <Button variant="contained" color="secondary" onClick={() => navigate('/services')}>
          Back to Services
        </Button>
      </Card>
    </Container>
  );
};

export default ServiceDetail;
