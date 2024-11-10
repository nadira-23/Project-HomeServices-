const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/adminAuth');
const Service = require('../models/serviceData'); // Assuming Service model
const User = require('../models/user'); // Assuming User model

// Get all services
router.get('/services', adminAuth, async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Add a new service
router.post('/service', adminAuth, async (req, res) => {
  const { name, description, price, category, image } = req.body;
  try {
    const newService = new Service({
      serviceName: name,
      serviceDescription: description,
      price,
      serviceCategory: category,
      serviceImage: image,
    });
    await newService.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Update a service
router.put('/service/:id', adminAuth, async (req, res) => {
  const { name, description, price, category, image } = req.body;
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { serviceName: name, serviceDescription: description, price, serviceCategory: category, serviceImage: image },
      { new: true }
    );
    res.json(service);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Delete a service
router.delete('/service/:id', adminAuth, async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.status(200).send('Service deleted');
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Manage users (example: delete user)
router.delete('/user/:id', adminAuth, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).send('User deleted');
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
