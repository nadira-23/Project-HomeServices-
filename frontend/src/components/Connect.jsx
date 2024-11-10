import React from 'react';
import { Container, Box, TextField, Button, Typography, Grid } from '@mui/material';

const ConnectWithUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission goes here
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: '40px', textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>Connect with Us</Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        We'd love to hear from you! Reach out with any questions, feedback, or service inquiries.
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField label="Name" variant="outlined" fullWidth required sx={{ mb: 2 }} />
        <TextField label="Email" type="email" variant="outlined" fullWidth required sx={{ mb: 2 }} />
        <TextField label="Subject" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </Box>
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h6">Contact Information</Typography>
        <Typography>Phone: (123) 456-7890</Typography>
        <Typography>Email: support@prohomeconnect.com</Typography>
        <Typography>Address: 1234 Home St., Hometown, HT 12345</Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        {/* Social Media Icons (add actual links as needed) */}
        <Button>Facebook</Button>
        <Button>Twitter</Button>
        <Button>LinkedIn</Button>
      </Box>
    </Container>
  );
};

export default ConnectWithUs;
