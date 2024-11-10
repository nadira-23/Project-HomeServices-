const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Assuming you have a User model

const adminAuth = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer token
  if (!token) {
    return res.status(403).send('Access denied');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Save the decoded user data in request
    if (req.user.role !== 'admin') {
      return res.status(403).send('Admin access required');
    }
    next(); // Proceed if user is admin
  } catch (error) {
    return res.status(400).send('Invalid token');
  }
};

module.exports = adminAuth;
