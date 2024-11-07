const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    bookingId: String,
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    servicerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Servicer' },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
    bookingDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
