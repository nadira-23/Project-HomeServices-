

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerId:String,
    customerName:String,
    customerEmail:String,
    customerPhone:Number,
    address:String
});

const Customer = mongoose.model('customers', customerSchema);
module.exports = Customer;
