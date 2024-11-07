// routes/cleaningServiceRoutes.js
const express = require('express');
const router = express.Router();
const CleaningService = require('../models/cleaningData');

// GET all cleaning services
router.get('/', async (req, res) => {
  try {
    const services = await CleaningService.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch cleaning services' });
  }
});

// GET a specific cleaning service by ID
router.get('/:id', async (req, res) => {
  try {
    const service = await CleaningService.findById(req.params.id);
    if (!service) return res.status(404).json({ error: 'Service not found' });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving service' });
  }
});

// POST - Add a new cleaning service
router.post('/add', async (req, res) => {
  const { serviceName, description, price, duration, available } = req.body;
  try {
    const newService = new CleaningService({ serviceName, description, price, duration, available });
    await newService.save();
    res.status(201).json({ message: 'Cleaning service added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding service' });
  }
});

// PUT - Update a cleaning service
router.put('/edit/:id', async (req, res) => {
  try {
    const updatedService = await CleaningService.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedService) return res.status(404).json({ error: 'Service not found' });
    res.status(200).json({ message: 'Service updated successfully', updatedService });
  } catch (error) {
    res.status(500).json({ error: 'Error updating service' });
  }
});

// DELETE - Delete a cleaning service
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedService = await CleaningService.findByIdAndDelete(req.params.id);
    if (!deletedService) return res.status(404).json({ error: 'Service not found' });
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting service' });
  }
});

module.exports = router;
