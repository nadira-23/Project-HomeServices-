const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    reviewId: String,
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    servicerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Servicer' },
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
    reviewDate: { type: Date, default: Date.now }
});

const Review = mongoose.model('reviews', reviewSchema);
module.exports = Review;
