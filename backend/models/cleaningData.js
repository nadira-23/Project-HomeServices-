const mongoose = require('mongoose');

const cleaningServiceSchema = new mongoose.Schema({
    
        serviceName: String,
        description: String,
        price: Number,
        duration: String,
        available: Boolean
      })
      module.exports = mongoose.model('CleaningService', cleaningServiceSchema);