import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ServicerDashboard = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      navigate('/login'); // Redirect to login if no token is found
      return;
    }

    // Fetch the services assigned to the servicer
    axios.get('http://localhost:3000/servicer/services', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          setError('Token expired or invalid, please log in again');
          localStorage.removeItem('authToken'); // Clear the token if invalid
          navigate('/login'); // Redirect to login page
        } else {
          setError('Failed to load services');
        }
      });
  }, [navigate]);

  const updateServiceStatus = (serviceId, status) => {
    const token = localStorage.getItem('authToken');
    axios.put(`http://localhost:3000/servicer/service/${serviceId}`, { status }, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(() => {
        setServices(services.map(service =>
          service._id === serviceId ? { ...service, status } : service
        ));
      })
      .catch(error => {
        setError('Failed to update service status');
      });
  };

  return (
    <Container>
      <Box sx={{ paddingTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Servicer Dashboard
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
                    Status: {service.status}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    color="primary" 
                    onClick={() => updateServiceStatus(service._id, 'Completed')}>
                    Mark as Completed
                  </Button>
                  <Button 
                    size="small" 
                    color="error" 
                    onClick={() => updateServiceStatus(service._id, 'Pending')}>
                    Mark as Pending
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ServicerDashboard;
