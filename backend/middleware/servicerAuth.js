

const jwt = require('jsonwebtoken');

const servicerAuth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract the token from Authorization header

  if (!token) {
    return res.status(401).json({ msg: 'Access Denied' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using the secret
    if (verified.role !== 'servicer') {
      return res.status(403).json({ msg: 'Access Denied: Not a servicer' });
    }
    req.user = verified; // Attach user data to the request
    next(); // Continue to the next middleware/route
  } catch (err) {
    return res.status(400).json({ msg: 'Invalid Token' });
  }
};

module.exports = servicerAuth;
