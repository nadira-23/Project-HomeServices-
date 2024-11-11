// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, Box } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AddService = () => {
//   const [serviceName, setServiceName] = useState('');
//   const [serviceDescription, setServiceDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [serviceCategory, setServiceCategory] = useState('');
//   const [serviceImage, setServiceImage] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleAddService = async (e) => {
//     e.preventDefault();

//     const newService = {
//       serviceName,
//       serviceDescription,
//       price,
//       serviceCategory,
//       serviceImage,
//     };

//     try {
//       // Make sure the URL matches the backend route for adding a service
//       await axios.post('http://localhost:3000/service/add', newService, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`, // Send token with request
//         },
//       });

//       navigate('/admin'); // Redirect after adding the service
//     } catch (error) {
//       setError('Error adding service');
//       console.error('Error adding service:', error);
//     }
//   };

//   return (
//     <Container>
//       <Box sx={{ paddingTop: '20px' }}>
//         <Typography variant="h4">Add New Service</Typography>
//         {error && <Typography color="error">{error}</Typography>}
//         <form onSubmit={handleAddService}>
//           <TextField
//             label="Service Name"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={serviceName}
//             onChange={(e) => setServiceName(e.target.value)}
//           />
//           <TextField
//             label="Service Description"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={serviceDescription}
//             onChange={(e) => setServiceDescription(e.target.value)}
//           />
//           <TextField
//             label="Price"
//             type="number"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//           <TextField
//             label="Service Category"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={serviceCategory}
//             onChange={(e) => setServiceCategory(e.target.value)}
//           />
//           <TextField
//             label="Service Image URL"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={serviceImage}
//             onChange={(e) => setServiceImage(e.target.value)}
//           />
//           <Button type="submit" variant="contained" color="primary" fullWidth>
//             Add Service
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default AddService;
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
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
    <Container maxWidth="sm" sx={{ paddingTop: '40px' }}>
      <Box sx={{ maxWidth: 400, margin: 'auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ textAlign: 'center', marginBottom: '30px', color: '#005f73' }} // Change title color to match the homepage theme
        >
          Add New Service
        </Typography>

        {error && (
          <Typography
            color="error"
            variant="body2"
            sx={{ textAlign: 'center', marginBottom: '20px', color: '#d32f2f' }} // Error color
          >
            {error}
          </Typography>
        )}

        <form onSubmit={handleAddService}>
          <TextField
            label="Service Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            required
            sx={{ marginBottom: '16px', borderColor: '#005f73' }} // Color consistency
          />
          <TextField
            label="Service Description"
            variant="outlined"
            fullWidth
            margin="normal"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
            required
            sx={{ marginBottom: '16px', borderColor: '#005f73' }}
          />
          <TextField
            label="Price"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            sx={{ marginBottom: '16px', borderColor: '#005f73' }}
          />
          <TextField
            label="Service Category"
            variant="outlined"
            fullWidth
            margin="normal"
            value={serviceCategory}
            onChange={(e) => setServiceCategory(e.target.value)}
            required
            sx={{ marginBottom: '16px', borderColor: '#005f73' }}
          />
          <TextField
            label="Service Image URL"
            variant="outlined"
            fullWidth
            margin="normal"
            value={serviceImage}
            onChange={(e) => setServiceImage(e.target.value)}
            required
            sx={{ marginBottom: '30px', borderColor: '#005f73' }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              padding: '10px 0',
              marginTop: '20px',
              backgroundColor: '#00796b', // Darker blue for button
              '&:hover': {
                backgroundColor: '#004d40', // Darker shade on hover
              },
            }}
          >
            Add Service
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddService;
