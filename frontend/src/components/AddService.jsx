import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [price, setPrice] = useState('');
  const [serviceCategory, setServiceCategory] = useState('');
  const [serviceImage, setServiceImage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAddService = async (e) => {
    e.preventDefault();

    const newService = {
      serviceName,
      serviceDescription,
      price,
      serviceCategory,
      serviceImage,
    };

    try {
      // Make sure the URL matches the backend route for adding a service
      await axios.post('http://localhost:3000/service/add', newService, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Send token with request
        },
      });

      navigate('/admin'); // Redirect after adding the service
    } catch (error) {
      setError('Error adding service');
      console.error('Error adding service:', error);
    }
  };

  return (
    <Container>
      <Box sx={{ paddingTop: '20px' }}>
        <Typography variant="h4">Add New Service</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleAddService}>
          <TextField
            label="Service Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />
          <TextField
            label="Service Description"
            variant="outlined"
            fullWidth
            margin="normal"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
          />
          <TextField
            label="Price"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            label="Service Category"
            variant="outlined"
            fullWidth
            margin="normal"
            value={serviceCategory}
            onChange={(e) => setServiceCategory(e.target.value)}
          />
          <TextField
            label="Service Image URL"
            variant="outlined"
            fullWidth
            margin="normal"
            value={serviceImage}
            onChange={(e) => setServiceImage(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Service
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddService;
