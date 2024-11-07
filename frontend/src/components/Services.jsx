
import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate(); 

  useEffect(() => {
    
    axios.get('http://localhost:3000/service') 
      .then(response => {
        setServices(response.data); 
        setLoading(false); 
      })
      .catch(error => {
        console.error('There was an error fetching the services!', error);
        setLoading(false); 
      });
  }, []); 

 
  const deleteService = (id) => {
    axios.delete(`http://localhost:3000/service/remove/${id}`)
      .then(() => {
        alert('Service deleted');
        setServices(services.filter(service => service._id !== id)); 
      })
      .catch(error => console.error('Error deleting the service:', error));
  };

 
  const updateService = (service) => {
    navigate('/add', { state: { service } });
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '40px' }}>
     
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant="h3" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          We provide a variety of services to make your home better, safer, and more comfortable. Explore our offerings below.
        </Typography>
      </Box>

      
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {service.serviceId}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {service.serviceName}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {service.serviceDescription}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {service.serviceCategory}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {service.price}
                </Typography>
                <Button onClick={() => updateService(service)} color="secondary">
                  UPDATE
                </Button>
                <Button onClick={() => deleteService(service._id)} variant="outlined" color="error">
                  DELETE
                </Button>
                <Button
                 variant="contained"
                  component={Link}
                    to={`/service/${service._id}`} >
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

