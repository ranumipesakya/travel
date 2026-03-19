const express = require('express');
const { createTourRequest, getTourRequests, healthCheck } = require('../controllers/tourRequestController');
const { adminProtect } = require('../middleware/adminAuthMiddleware');

const router = express.Router();

router.get('/health', healthCheck);
router.post('/requests', createTourRequest);
router.get('/requests', adminProtect, getTourRequests);

module.exports = router;
