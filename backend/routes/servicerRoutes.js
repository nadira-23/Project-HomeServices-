const express=require ('express');
const router=express.Router();
const jwt=require('jsonwebtoken')

router.use(express.json());
router.use(express.urlencoded({extended:true}));
const servicerModel=require('../models/servicerData')
//adding middleware
// function verifyToken(req,res,next){
//     let token=req.headers.token;
//     try {
//         if (!token) throw 'Unauthorised Access'
//         let payload=jwt.verify(token,"secret")
//         if (!payload) throw 'Unauthorised Access'
//         next()

//     } catch (error) {
//        res.json({message:error})
//     }
//}

router.post('/login',async(req,res)=>{
    const user=await servicerModel.findOne({username:req.body.username})
    if(!user){
        res.json({message:"servicer not found"})
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
        const servicer=await servicerModel.find()
        res.status(200).send(servicer);
    } catch (error) {
        res.status(404).send('servicer not found');
        
    }
});


router.post('/addservicer',async(req,res)=>{
    try {
        const servicer=req.body;
        const newservicer=new servicerModel(servicer);
        const savedservicer=await newservicer.save();
        res.status(200).send('servicer added successfully');
    } catch (error) {
        console.error(error); // Log the actual error
        res.status(404).send('Error adding servicer');
    }
});
router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const updatedservicer=await servicerModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).send('servicer updated successfully');
    } catch (error) {
        res.status(404).send('Error updating servicer');
    }
});
 router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const deleteservicer=await servicerModel.findByIdAndDelete(id,req.body,{new:true})
        res.status(200).send('servicer deleted successfully');
    } catch (error) {
        res.status(404).send('Error deleting servicer');
    }
});
module.exports = router;