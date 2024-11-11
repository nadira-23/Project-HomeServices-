
// import React, { useEffect, useState } from 'react';
// import { Container, Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const ServiceDetail = () => {
//   const [service, setService] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const { state } = useLocation();  // This will get the service data passed from the services page
  
//   // Use the service ID from the route params or state to fetch the service details
//   useEffect(() => {
//     if (state?.service) {
//       // If service data is passed via state, use it directly
//       setService(state.service);
//       setLoading(false);
//     } else {
//       const serviceId = window.location.pathname.split('/').pop();  // Extract service ID from URL
//       axios.get(`http://localhost:3000/service/${serviceId}`)
//   .then(response => {
//     console.log(response);  // Log the response to see its contents
//     setService(response.data);
//     setLoading(false);
//   })
//   .catch(error => {
//     console.error('Error fetching service details:', error);
//     setLoading(false);
//     setError('Failed to load service details.');
//   });
//     }
//   }, [state]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!service) {
//     return <div>Service not found!</div>;
//   }

//   const handleBooking = () => {
//     // Navigate to booking page (can pass service details if needed)
//     navigate('/Booking', { state: { service } });
//   };

//   return (
//     <Container maxWidth="md" sx={{ paddingTop: '40px' }}>
//       <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
//         <Typography variant="h3" gutterBottom>{service.serviceName}</Typography>
//         <Typography variant="h5" color="textSecondary" paragraph>
//           {service.serviceDescription}
//         </Typography>
//         <Typography variant="h6" color="textPrimary" paragraph>
//           Price: ${service.price}
//         </Typography>
//       </Box>

//       <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <CardMedia
//           component="img"
//           height="400"
//           image={service.serviceImage}
//           alt={service.serviceName}
//         />
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" paragraph>
//             Category: {service.serviceCategory}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" paragraph>
//             Description: {service.serviceDescription}
//           </Typography>
//         </CardContent>
//         <Button variant="contained" color="primary" onClick={handleBooking}>
//           Book This Service
//         </Button>
//         <Button variant="contained" color="secondary" onClick={() => navigate('/services')}>
//           Back to Services
//         </Button>
//       </Card>
//     </Container>
//   );
// };

// export default ServiceDetail;
// import React, { useEffect, useState } from 'react';
// import { Container, Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const ServiceDetail = () => {
//   const [service, setService] = useState(null);  // Initialize as null
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);  // Error state for handling fetch errors
//   const navigate = useNavigate();
//   const { state } = useLocation();

//   useEffect(() => {
//     const fetchServiceData = async () => {
//       try {
//         if (state?.service) {
//           setService(state.service);
//           setLoading(false);
//         } else {
//           const serviceId = window.location.pathname.split('/').pop();  // Extract service ID from URL
//           const response = await axios.get(`http://localhost:3000/service/service/${serviceId}`); // Verify endpoint
//           console.log(response.data);  // Debug: Log the response data
//           setService(response.data);
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error('Error fetching service details:', error);
//         setError('Failed to load service details.');
//         setLoading(false);
//       }
//     };

//     fetchServiceData();
//   }, [state]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!service) {
//     return <div>Service not found!</div>;
//   }

//   const handleBooking = () => {
//     navigate('/Booking', { state: { service } });
//   };

//   return (
//     <Container maxWidth="md" sx={{ paddingTop: '40px' }}>
//       <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
//         <Typography variant="h3" gutterBottom>{service?.serviceName}</Typography>
//         <Typography variant="h5" color="textSecondary" paragraph>
//           {service?.serviceDescription}
//         </Typography>
//         <Typography variant="h6" color="textPrimary" paragraph>
//           Price: ${service?.price}
//         </Typography>
//       </Box>

//       <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <CardMedia
//           component="img"
//           height="400"
//           image={service?.serviceImage}
//           alt={service?.serviceName}
//         />
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" paragraph>
//             Category: {service?.serviceCategory}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" paragraph>
//             Description: {service?.serviceDescription}
//           </Typography>
//         </CardContent>
//         <Button  variant="contained" color="primary" onClick={handleBooking}>
//           Book This Service
//         </Button>
//         <Button style={{padding:"5px"}} variant="contained" color="secondary" onClick={() => navigate('/services')}>
//           Back to Services
//         </Button>
//       </Card>
//     </Container>
//   );
// };

// export default ServiceDetail;

import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const ServiceDetail = () => {
  const [service, setService] = useState(null);  // Initialize as null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  // Error state for handling fetch errors
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        if (state?.service) {
          setService(state.service);
          setLoading(false);
        } else {
          const serviceId = window.location.pathname.split('/').pop();  // Extract service ID from URL
          const response = await axios.get(`http://localhost:3000/service/service/${serviceId}`); // Verify endpoint
          console.log(response.data);  // Debug: Log the response data
          setService(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching service details:', error);
        setError('Failed to load service details.');
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [state]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!service) {
    return <div>Service not found!</div>;
  }

  const handleBooking = () => {
    navigate('/Booking', { state: { service } });
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: '40px' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: '#333333',
            fontFamily: '"Cinzel", serif',  // Elegant font for the title (classic serif)
            textTransform: 'capitalize',  // Making the text more stylish
          }}
        >
          {service?.serviceName}
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          paragraph
          sx={{
            color: '#555555',
            fontFamily: '"Dancing Script", cursive',  // Cursive font for description (creative, flowing)
            fontSize: '1.2rem',
            fontWeight: 'lighter',
          }}
        >
          {service?.serviceDescription}
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          paragraph
          sx={{
            fontWeight: 600,
            color: '#00796b',
            fontFamily: '"Montserrat", sans-serif',  // Clean, modern sans-serif for the price
            fontSize: '1.1rem',
          }}
        >
          Price: ${service?.price}
        </Typography>
      </Box>

      <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="400"
          image={service?.serviceImage}
          alt={service?.serviceName}
          sx={{ width: '100%', borderRadius: '10px' }}
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            color="textSecondary"
            paragraph
            sx={{
              color: '#555555',
              fontFamily: '"Lora", serif',  // Serif font for category (traditional look)
              fontStyle: 'italic',
            }}
          >
            Category: {service?.serviceCategory}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            paragraph
            sx={{
              color: '#555555',
              fontFamily: '"Merriweather", serif',  // Another elegant serif font for description
              fontStyle: 'italic',
            }}
          >
            Description: {service?.serviceDescription}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', gap: '15px', flexDirection: 'column', width: '100%', p: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleBooking}
            sx={{
              padding: '12px 20px',
              backgroundColor: '#00796b',
              '&:hover': { backgroundColor: '#004d40' },
              fontSize: '16px',
              fontWeight: 'bold',
              fontFamily: '"Montserrat", sans-serif',  // Modern sans-serif for buttons
            }}
          >
            Book This Service
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/services')}
            sx={{
              padding: '12px 20px',
              backgroundColor: '#f44336',
              '&:hover': { backgroundColor: '#d32f2f' },
              fontSize: '16px',
              fontWeight: 'bold',
              fontFamily: '"Montserrat", sans-serif',  // Using the same font for consistency
            }}
          >
            Back to Services
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default ServiceDetail;
