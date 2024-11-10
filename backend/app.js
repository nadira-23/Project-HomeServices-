const express=require('express')
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors=require('cors')

require('dotenv').config(); // Ensure dotenv is configured correctly
const PORT=process.env.PORT;

app.use(morgan('dev')); // Logger middleware
app.use(cors())
// Connect to MongoDB
require('./db/connection');

// Middleware to parse JSON bodies
app.use(express.json());

// Import and use course routes
const servicerRoutes = require('./routes/servicerRoutes');
const customerRoutes=require('./routes/customerRoutes');
const serviceRoutes=require('./routes/serviceRoutes');
const reviewRoutes=require('./routes/reviewRoutes');
const bookingRoutes=require('./routes/bookingRoutes');
const cleaningRoutes=require('./routes/cleaningRoutes')
const adminRoutes=require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes'); 

app.use('/auth', authRoutes); 
app.use('/servicer', servicerRoutes);
app.use('/customer',customerRoutes);
app.use('/service',serviceRoutes);
app.use('/review',reviewRoutes);
app.use('/booking',bookingRoutes);
app.use('/cleaning',cleaningRoutes)
app.use('/admin',adminRoutes)



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
