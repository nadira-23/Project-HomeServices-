import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

const BookingManage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch bookings from the backend
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:3000/allbookings');  
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleBookingStatusUpdate = async (bookingId, status) => {
    try {
      await axios.patch(`http://localhost:3000/api/allbookings/${bookingId}`, { status });
      setBookings(bookings.map(booking => 
        booking._id === bookingId ? { ...booking, status } : booking
      ));
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Booking Management</Typography>
      {loading ? (
        <Typography>Loading bookings...</Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Booking ID</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.serviceId}>
                <TableCell>{booking.serviceId}</TableCell>
                <TableCell>{booking.serviceName}</TableCell>
                <TableCell>{booking.user.username}</TableCell>
                <TableCell>{booking.status}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    onClick={() => handleBookingStatusUpdate(booking._id, booking.status === 'pending' ? 'completed' : 'pending')}
                  >
                    {booking.status === 'pending' ? 'Complete' : 'Mark as Pending'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Box>
  );
};

export default BookingManage;
