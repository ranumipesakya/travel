const TourRequest = require('../models/TourRequest');
const asyncHandler = require('../middleware/asyncHandler');

const createTourRequest = asyncHandler(async (req, res) => {
  const newRequest = await TourRequest.create(req.body);
  res.status(201).json({
    message: 'Tour request received successfully! We will get back to you within 24 hours.',
    data: newRequest,
  });
});

const getTourRequests = asyncHandler(async (req, res) => {
  const requests = await TourRequest.find().sort({ createdAt: -1 });
  res.json(requests);
});

const healthCheck = (req, res) => {
  res.json({ status: 'ok', message: 'Travel booking backend is running properly.' });
};

module.exports = { createTourRequest, getTourRequests, healthCheck };
