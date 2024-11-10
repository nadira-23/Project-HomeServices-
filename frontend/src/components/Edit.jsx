import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditService = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { service } = location.state; // Retrieve service data passed from AdminDashboard
  
  const [serviceName, setServiceName] = useState(service.serviceName);
  const [serviceDescription, setServiceDescription] = useState(service.serviceDescription);
  const [price, setPrice] = useState(service.price);
  const [serviceCategory, setServiceCategory] = useState(service.serviceCategory);
  const [serviceImage, setServiceImage] = useState(service.serviceImage);
  const [error, setError] = useState('');

  const token = localStorage.getItem('authToken');

  const handleUpdateService = async (e) => {
    e.preventDefault();
    const updatedService = {
      serviceName,
      serviceDescription,
      price,
      serviceCategory,
      serviceImage,
    };

    try {
      const response = await axios.put(`http://localhost:3000/service/edit/${service._id}`, updatedService, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate('/Admin'); // Navigate back to the admin dashboard
    } catch (error) {
      setError('Failed to update service.');
      console.error('Error updating service:', error);
    }
  };

  return (
    <Container>
      <Box sx={{ paddingTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Edit Service
        </Typography>
        {error && <Typography color="error">{error}</Typography>}

        <form onSubmit={handleUpdateService}>
          <TextField
            label="Service Name"
            fullWidth
            margin="normal"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />
          <TextField
            label="Service Description"
            fullWidth
            margin="normal"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
          />
          <TextField
            label="Price"
            type="number"
            fullWidth
            margin="normal"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            label="Service Category"
            fullWidth
            margin="normal"
            value={serviceCategory}
            onChange={(e) => setServiceCategory(e.target.value)}
          />
          <TextField
            label="Service Image URL"
            fullWidth
            margin="normal"
            value={serviceImage}
            onChange={(e) => setServiceImage(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Update Service
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EditService;
