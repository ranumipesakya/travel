const express = require('express');
const { registerAdmin, adminLogin } = require('../controllers/adminController');

const router = express.Router();

router.post('/admin/register', registerAdmin);
router.post('/admin/login', adminLogin);

module.exports = router;
