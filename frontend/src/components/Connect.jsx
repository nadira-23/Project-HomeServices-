import React from 'react';
import { Container, Box, TextField, Button, Typography, Grid } from '@mui/material';

const ConnectWithUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission goes here
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: '40px', textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom sx={{ color: '#00796b' }}>
        Connect with Us
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        We'd love to hear from you! Reach out with any questions, feedback, or service inquiries.
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
            '& .MuiInputLabel-root': {
              color: '#00796b',
            },
          }}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
            '& .MuiInputLabel-root': {
              color: '#00796b',
            },
          }}
        />
        <TextField
          label="Subject"
          variant="outlined"
          fullWidth
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
            '& .MuiInputLabel-root': {
              color: '#00796b',
            },
          }}
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
            '& .MuiInputLabel-root': {
              color: '#00796b',
            },
          }}
        />
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: '#00796b',
            '&:hover': {
              backgroundColor: '#004d40',
            },
            padding: '10px 20px',
            fontWeight: 'bold',
            width: '100%',
            borderRadius: '8px',
          }}
        >
          Send Message
        </Button>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" sx={{ color: '#00796b' }}>
          Contact Information
        </Typography>
        <Typography>Phone: (123) 456-7890</Typography>
        <Typography>Email: support@prohomeconnect.com</Typography>
        <Typography>Address: 1234 Home St., Hometown, HT 12345</Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        {/* Social Media Icons (add actual links as needed) */}
        <Button variant="outlined" sx={{ marginRight: '8px', borderColor: '#00796b', color: '#00796b' }}>
          Facebook
        </Button>
        <Button variant="outlined" sx={{ marginRight: '8px', borderColor: '#00796b', color: '#00796b' }}>
          Twitter
        </Button>
        <Button variant="outlined" sx={{ borderColor: '#00796b', color: '#00796b' }}>
          LinkedIn
        </Button>
      </Box>
    </Container>
  );
};

export default ConnectWithUs;

