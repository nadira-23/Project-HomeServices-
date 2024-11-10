const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceId: String,
    serviceName: String,
    serviceImage:String,
    serviceDescription: String,
    serviceCategory: String,
    price: Number,
});

const Service = mongoose.model('services', serviceSchema);
module.exports = Service;
