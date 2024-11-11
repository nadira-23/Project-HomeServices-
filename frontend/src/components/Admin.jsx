// 

import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const Admin = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');

  // Verify if the user is an admin
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    } else {
      try {
        const decoded = jwt_decode(token);
        if (decoded.role !== 'admin') {
          navigate('/login');
        }
      } catch (error) {
        console.error('Token decoding error:', error);
        navigate('/login');
      }
    }
  }, [navigate]);

  // Fetch all services for the admin dashboard
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    axios.get('http://localhost:3000/service', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error("Error fetching services:", error);
        setError('Failed to load services.');
      });
  }, []);

  // Delete a service
  const deleteService = (id) => {
    const token = localStorage.getItem('authToken');
    axios.delete(`http://localhost:3000/service/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        setServices(services.filter(service => service._id !== id)); // Filter out deleted service
      })
      .catch(error => {
        console.error("Error deleting service:", error);
        setError('Failed to delete service.');
      });
  };

  // Navigate to the edit service page with the service data
  const updateService = (service) => {
    navigate('/Edit', { state: { service } });
  };

  return (
    <Container>
      <Box sx={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#005f73', textAlign: 'center' }}>
          Admin Dashboard
        </Typography>
        
        {error && <Typography color="error" sx={{ textAlign: 'center', marginBottom: '20px' }}>{error}</Typography>}
        
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service._id}>
              <Card sx={{ height: '100%', boxShadow: 3, borderRadius: '8px' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.serviceImage || '/placeholder.jpg'}
                  alt={service.serviceName}
                  sx={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#005f73' }}>
                    {service.serviceName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {service.serviceDescription}
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    <strong>Category:</strong> {service.serviceCategory}
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    <strong>Price:</strong> ${service.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                  {/* Delete Button */}
                  <Button 
                    size="small" 
                    color="error" 
                    onClick={() => deleteService(service._id)} 
                    sx={{ color: '#d32f2f', fontWeight: 'bold' }}
                  >
                    Delete
                  </Button>

                  {/* Update Button - Navigates to the update page */}
                  <Button 
                    size="small" 
                    color="primary" 
                    onClick={() => updateService(service)} 
                    sx={{ color: '#00796b', fontWeight: 'bold' }}
                  >
                    Update
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        {/* Add New Service Button */}
        <Box mt={4} sx={{ textAlign: 'center' }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate('/AddService')}
            sx={{ padding: '10px 20px', backgroundColor: '#00796b', '&:hover': { backgroundColor: '#004d40' } }}
          >
            Add New Service
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Admin;
