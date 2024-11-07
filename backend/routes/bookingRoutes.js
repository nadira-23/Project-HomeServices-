const express = require('express');
const router = express.Router();
require('../db/connection')
const bookingModel = require('../models/bookingData'); 

// Route to add a new booking
router.post('/addBooking', async (req, res) => {
    try {
        const bookingData = req.body;
        const newBooking = new bookingModel(bookingData);
        await newBooking.save();
        res.status(200).send('Booking added successfully');
    } catch (error) {
        console.error('Error adding booking:', error);
        res.status(500).send('Error adding booking');
    }
});

// Route to get all bookings
router.get('/allBookings', async (req, res) => {
    try {
        const bookings = await bookingModel.find()
            .populate('customerId', 'name') 
            .populate('servicerId', 'name')
            .populate('serviceId', 'serviceName'); 
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).send('Error fetching bookings');
    }
});

// Route to get bookings by customerId
router.get('/customerBookings/:customerId', async (req, res) => {
    try {
        const { customerId } = req.params;
        const bookings = await bookingModel.find({ customerId })
            .populate('servicerId', 'name')
            .populate('serviceId', 'serviceName');
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching customer bookings:', error);
        res.status(500).send('Error fetching customer bookings');
    }
});

// Route to get bookings by servicerId
router.get('/servicerBookings/:servicerId', async (req, res) => {
    try {
        const { servicerId } = req.params;
        const bookings = await bookingModel.find({ servicerId })
            .populate('customerId', 'name')
            .populate('serviceId', 'serviceName');
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching servicer bookings:', error);
        res.status(500).send('Error fetching servicer bookings');
    }
});

// Route to update booking status by bookingId
router.patch('/updateStatus/:bookingId', async (req, res) => {
    try {
        const { bookingId } = req.params;
        const { status } = req.body;
        
        if (!['Pending', 'Completed', 'Cancelled'].includes(status)) {
            return res.status(400).send('Invalid status');
        }

        const updatedBooking = await bookingModel.findOneAndUpdate(
            { bookingId },
            { status },
            { new: true }
        );

        if (!updatedBooking) {
            return res.status(404).send('Booking not found');
        }

        res.status(200).send(`Booking status updated to ${status}`);
    } catch (error) {
        console.error('Error updating booking status:', error);
        res.status(500).send('Error updating booking status');
    }
});

// Route to delete a booking by bookingId
router.delete('/deleteBooking/:bookingId', async (req, res) => {
    try {
        const { bookingId } = req.params;
        const deletedBooking = await bookingModel.findOneAndDelete({ bookingId });
        
        if (!deletedBooking) {
            return res.status(404).send('Booking not found');
        }

        res.status(200).send('Booking deleted successfully');
    } catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).send('Error deleting booking');
    }
});

module.exports = router;
