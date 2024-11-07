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


router.post('/addservice',async(req,res)=>{
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