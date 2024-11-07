const mongoose=require ('mongoose');
const servicerSchema=new mongoose.Schema({
    servicerImage:String,
    servicerId:String,
    servicerName:String,
    servicerLocation:String,
    servicerCategory:String,
    servicerFee:Number,
    servicerEmail: String,
    servicerPhone: Number
    }

    

    
)
const  servicerData=mongoose.model('servicerdatas',servicerSchema);
module.exports=servicerData;


