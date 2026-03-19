const asyncHandler = require('../middleware/asyncHandler');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const createAdminToken = (id) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables.');
  }
  return jwt.sign({ id, role: 'admin' }, secret, { expiresIn: '7d' });
};

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Name, email, and password are required.');
  }

  const existing = await Admin.findOne({ email });
  if (existing) {
    res.status(400);
    throw new Error('Admin already exists.');
  }

  const admin = await Admin.create({ name, email, password });

  res.status(201).json({
    _id: admin._id,
    name: admin.name,
    email: admin.email,
    token: createAdminToken(admin._id),
  });
});

const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password are required.');
  }

  const admin = await Admin.findOne({ email });
  if (admin && (await admin.matchPassword(password))) {
    return res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: createAdminToken(admin._id),
    });
  }

  res.status(401);
  throw new Error('Invalid admin credentials.');
});

module.exports = { registerAdmin, adminLogin };
