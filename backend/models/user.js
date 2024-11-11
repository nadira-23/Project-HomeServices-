// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true, // Ensure username is unique
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     enum: ['admin', 'user'], // Set roles to 'admin' or 'user'
//     default: 'user', // Default role is user
//   },
// });

// module.exports = mongoose.model('users', userSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure username is unique
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'servicer','user'],
    default: 'user',
  },
  email: {
    type: String,
    unique: true,  // Ensure email is unique, or remove if you don't need it
    required: false, // Make it optional if you don't require an email
  },
});

module.exports = mongoose.model('users', userSchema);
