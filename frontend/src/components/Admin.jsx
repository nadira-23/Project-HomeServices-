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
    axios.delete(`http://localhost:3000/admin/service/${id}`, {
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
      <Box sx={{ paddingTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service._id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.serviceImage || '/placeholder.jpg'}
                  alt={service.serviceName}
                />
                <CardContent>
                  <Typography variant="h6">{service.serviceName}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.serviceDescription}
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    Category: {service.serviceCategory}
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    Price: ${service.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* Delete Button */}
                  <Button size="small" color="error" onClick={() => deleteService(service._id)}>
                    Delete
                  </Button>

                  {/* Update Button - Navigates to the update page */}
                  <Button size="small" color="primary" onClick={() => updateService(service)}>
                    Update
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box mt={4}>
          <Button variant="contained" color="primary" onClick={() => navigate('/AddService')}>
            Add New Service
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Admin;
