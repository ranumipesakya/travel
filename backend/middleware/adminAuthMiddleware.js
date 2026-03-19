const jwt = require('jsonwebtoken');
const asyncHandler = require('./asyncHandler');

const adminProtect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token.');
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded || decoded.role !== 'admin') {
    res.status(401);
    throw new Error('Not authorized as admin.');
  }

  req.adminId = decoded.id;
  next();
});

module.exports = { adminProtect };
