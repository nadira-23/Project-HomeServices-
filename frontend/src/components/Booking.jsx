import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Button, TextField } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
  const [service, setService] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    contact: '',
  });
  const navigate = useNavigate();
  const { state } = useLocation(); // Get service details passed from the ServiceDetail page

  useEffect(() => {
    if (state?.service) {
      setService(state.service);
    }
  }, [state]);

  const handleBookingSubmit = () => {
    // Logic to handle booking submission (e.g., make an API request)
    axios.post('http://localhost:3000/booking', { serviceId: service._id, ...bookingDetails })
      .then(response => {
        alert('Booking confirmed!');
        navigate('/services');
      })
      .catch(error => {
        console.error('Error making booking:', error);
        alert('Failed to confirm booking.');
      });
  };

  if (!service) {
    return <div>Service not found!</div>;
  }

  return (
    <Container maxWidth="sm" sx={{ paddingTop: '40px' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant="h4" gutterBottom>Book {service.serviceName}</Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Please provide your details to book this service.
        </Typography>
      </Box>
      
      <Box sx={{ marginBottom: '20px' }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={bookingDetails.name}
          onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
        />
      </Box>
      <Box sx={{ marginBottom: '20px' }}>
        <TextField
          label="Contact"
          variant="outlined"
          fullWidth
          value={bookingDetails.contact}
          onChange={(e) => setBookingDetails({ ...bookingDetails, contact: e.target.value })}
        />
      </Box>

      <Button variant="contained" color="primary" onClick={handleBookingSubmit}>
        Confirm Booking
      </Button>
    </Container>
  );
};

export default Booking;
