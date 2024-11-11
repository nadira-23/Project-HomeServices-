// const express=require ('express');
// const router=express.Router();
// const jwt=require("jsonwebtoken")
// require('../db/connection')
// const serviceModel=require('../models/serviceData')
// router.use(express.json())


// router.get('/',async(req,res)=>{
//     try {
//         const service=await serviceModel.find()
//         res.status(200).send(service);
//     } catch (error) {
//         res.status(404).send('service not found');
        
//     }
// });

// // In your backend (Node.js/Express)
// router.get('/service/:id', (req, res) => {
//     const { id } = req.params;  // Get the service ID from the URL
//     serviceModel.findById(id)  // Replace with your actual database query
//       .then(service => {
//         if (!service) {
//           return res.status(404).json({ message: 'Service not found' });
//         }
//         res.json(service);  // Send the service data in the response
//       })
//       .catch(error => {
//         console.error('Error fetching service:', error);
//         res.status(500).json({ message: 'Error fetching service details' });
//       });
//   });
  


// router.post('/add',async(req,res)=>{
//     try {
//         const service=req.body;
//         const newservice=new serviceModel(service);
//         await newservice.save();
//         res.status(200).send('service added successfully');
//     } catch (error) {
//         console.error(error); 
//         res.status(404).send('Error adding service');
//     }
// });
// router.put('/edit/:id',async(req,res)=>{
//     try {
//         const id=req.params.id;
//         const updatedservice=await serviceModel.findByIdAndUpdate(id,req.body,{new:true})
//         res.status(200).send('service updated successfully');
//     } catch (error) {
//         res.status(404).send('Error updating service');
//     }
// });
//  router.delete('/delete/:id',async(req,res)=>{
//     try {
//         const id=req.params.id;
//         const deleteservice=await serviceModel.findByIdAndDelete(id,req.body,{new:true})
//         res.status(200).send('service deleted successfully');
//     } catch (error) {
//         res.status(404).send('Error deleting service');
//     }
// });

// module.exports=router

const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
require('../db/connection');
const serviceModel = require('../models/serviceData');

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await serviceModel.find();
    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching all services:', error);
    res.status(500).json({ message: 'Error fetching services' });
  }
});

// Get a specific service by ID
router.get('/service/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const service = await serviceModel.findById(id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json(service);
  } catch (error) {
    console.error('Error fetching service:', error);
    res.status(500).json({ message: 'Error fetching service details' });
  }
});

// Add a new service
router.post('/add', async (req, res) => {
  try {
    const newService = new serviceModel(req.body);
    await newService.save();
    res.status(201).json({ message: 'Service added successfully' });
  } catch (error) {
    console.error('Error adding service:', error);
    res.status(500).json({ message: 'Error adding service' });
  }
});

// Edit a service by ID
router.put('/edit/:id', async (req, res) => {
  try {
    const updatedService = await serviceModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedService) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json({ message: 'Service updated successfully' });
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ message: 'Error updating service' });
  }
});

// Delete a service by ID
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    console.log("Attempting to delete service with ID:", id); // Log to confirm ID
  
    try {
      const deletedService = await serviceModel.findByIdAndDelete(id);
      if (!deletedService) {
        return res.status(404).json({ message: 'Service not found' });
      }
      res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
      console.error('Error deleting service:', error);
      res.status(500).json({ message: 'Error deleting service' });
    }
  });
  

module.exports = router;
