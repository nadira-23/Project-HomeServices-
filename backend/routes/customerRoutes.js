const express=require ('express');
const router=express.Router();
const jwt=require("jsonwebtoken")
require('../db/connection')
const customerModel=require('../models/customerData')
router.use(express.json())

 router.post('/login',async(req,res)=>{
     const user=await customerModel.findOne({username:req.body.username})
     if(!user){
         res.json({message:"customer not found"})
     }
    try{
         if(user.password==req.body.password)
        {
            const payload={uname:req.body.username,pwd:req.body.password}
             const token=jwt.sign(payload,"secret")
             res.status(200).send({message:"login successful",usertoken:token})
         }
     }
     catch(error){
 console.log(error)
    }
})

router.get('/',async(req,res)=>{
    try {
        const customer=await customerModel.find()
        res.status(200).send(customer);
    } catch (error) {
        res.status(404).send('customer not found');
        
    }
});


router.post('/addcustomer',async(req,res)=>{
    try {
        const customer=req.body;
        const newcustomer=new customerModel(customer);
        await newcustomer.save();
        res.status(200).send('customer added successfully');
    } catch (error) {
        console.error(error); 
        res.status(404).send('Error adding customer');
    }
});
router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const updatedcustomer=await customerModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).send('customer updated successfully');
    } catch (error) {
        res.status(404).send('Error updating customer');
    }
});
 router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const deletecustomer=await customerModel.findByIdAndDelete(id,req.body,{new:true})
        res.status(200).send('customer deleted successfully');
    } catch (error) {
        res.status(404).send('Error deleting customer');
    }
});

module.exports=router