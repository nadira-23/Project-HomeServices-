const express = require('express');
const router = express.Router();
const servicerAuth = require('../middleware/servicerAuth');
const Service = require('../models/serviceData');

// Get all services assigned to the servicer
router.get('/services', servicerAuth, async (req, res) => {
  try {
    console.log('Authenticated servicer:', req.user);  // Log the authenticated user
    const services = await Service.find({ servicerId: req.user.id });
    res.json(services);
  } catch (err) {
    console.error("Error fetching services:", err);
    res.status(500).send('Server Error');
  }
});

// Update the status of a service
router.put('/service/:id', servicerAuth, async (req, res) => {
  const { status } = req.body;
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!service) {
      return res.status(404).send('Service not found');
    }
    res.json(service);
  } catch (err) {
    console.error("Error updating service status:", err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
