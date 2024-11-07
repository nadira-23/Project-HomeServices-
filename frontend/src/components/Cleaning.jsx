import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/cleaning-services')
      .then(response => {
        setServices(response.data); // Set services data in state
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '40px' }}>
      <Typography variant="h3" gutterBottom align="center">
        Cleaning Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service._id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{service.serviceName}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  Price: ${service.price}
                </Typography>
                <Button
                  variant="contained"
                  component={Link}
                  to={`/service-details/${service._id}`}
                >
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
