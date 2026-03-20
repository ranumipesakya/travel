const express = require('express');
const { createTourRequest, getTourRequests, updateTourRequestStatus, healthCheck } = require('../controllers/tourRequestController');
const { adminProtect } = require('../middleware/adminAuthMiddleware');

const router = express.Router();

router.get('/health', healthCheck);
router.post('/requests', createTourRequest);
router.get('/requests', adminProtect, getTourRequests);
router.patch('/requests/:id/status', adminProtect, updateTourRequestStatus);

module.exports = router;
