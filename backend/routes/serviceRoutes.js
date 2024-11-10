const express=require ('express');
const router=express.Router();
const jwt=require("jsonwebtoken")
require('../db/connection')
const serviceModel=require('../models/serviceData')
router.use(express.json())


router.get('/',async(req,res)=>{
    try {
        const service=await serviceModel.find()
        res.status(200).send(service);
    } catch (error) {
        res.status(404).send('service not found');
        
    }
});

// In your backend (Node.js/Express)
router.get('/service/:id', (req, res) => {
    const { id } = req.params;  // Get the service ID from the URL
    Service.findById(id)  // Replace with your actual database query
      .then(service => {
        if (!service) {
          return res.status(404).json({ message: 'Service not found' });
        }
        res.json(service);  // Send the service data in the response
      })
      .catch(error => {
        console.error('Error fetching service:', error);
        res.status(500).json({ message: 'Error fetching service details' });
      });
  });
  


router.post('/add',async(req,res)=>{
    try {
        const service=req.body;
        const newservice=new serviceModel(service);
        await newservice.save();
        res.status(200).send('service added successfully');
    } catch (error) {
        console.error(error); 
        res.status(404).send('Error adding service');
    }
});
router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const updatedservice=await serviceModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).send('service updated successfully');
    } catch (error) {
        res.status(404).send('Error updating service');
    }
});
 router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const deleteservice=await serviceModel.findByIdAndDelete(id,req.body,{new:true})
        res.status(200).send('service deleted successfully');
    } catch (error) {
        res.status(404).send('Error deleting service');
    }
});

module.exports=router