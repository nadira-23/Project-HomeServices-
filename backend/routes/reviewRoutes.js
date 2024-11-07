const express = require('express');
const router = express.Router();
require('../db/connection')
const reviewModel=require('../models/reviewData')
// Route to add a new review
router.post('/addReview', async (req, res) => {
    try {
        const reviewData = req.body;
        const newReview = new reviewModel(reviewData);
        await newReview.save();
        res.status(200).send('Review added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding review');
    }
});

// Route to get all reviews
router.get('/allReviews', async (req, res) => {
    try {
        const reviews = await reviewModel.find().populate('customerId').populate('servicerId');
        res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching reviews');
    }
});

// Route to get reviews by servicerId
router.get('/reviews/:servicerId', async (req, res) => {
    try {
        const { servicerId } = req.params;
        const reviews = await reviewModel.find({ servicerId }).populate('customerId');
        res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching reviews for servicer');
    }
});

// Route to delete a review by reviewId
router.delete('/deleteReview/:reviewId', async (req, res) => {
    try {
        const { reviewId } = req.params;
        await reviewModel.findOneAndDelete({ reviewId });
        res.status(200).send('Review deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting review');
    }
});

module.exports = router;