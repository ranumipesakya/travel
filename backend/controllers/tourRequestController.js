const TourRequest = require('../models/TourRequest');
const asyncHandler = require('../middleware/asyncHandler');

const createTourRequest = asyncHandler(async (req, res) => {
  const rawTourType = req.body?.tourType ?? 'general';
  const tourType = String(rawTourType).trim().toLowerCase();
  if (!['mini-tour', 'cultural-heritage', 'general'].includes(tourType)) {
    res.status(400);
    throw new Error(`Invalid tour type: ${rawTourType}`);
  }

  const newRequest = await TourRequest.create({
    ...req.body,
    tourType,
  });
  res.status(201).json({
    message: 'Tour request received successfully! We will get back to you within 24 hours.',
    data: newRequest,
  });
});

const getTourRequests = asyncHandler(async (req, res) => {
  const requests = await TourRequest.find().sort({ createdAt: -1 });
  res.json(requests);
});

const updateTourRequestStatus = asyncHandler(async (req, res) => {
  const rawStatus = req.body?.status ?? req.query?.status ?? '';
  const status = String(rawStatus).trim().toLowerCase();
  if (!['pending', 'accepted', 'rejected'].includes(status)) {
    res.status(400);
    throw new Error(`Invalid status value: ${rawStatus}`);
  }

  const updated = await TourRequest.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  if (!updated) {
    res.status(404);
    throw new Error('Tour request not found.');
  }

  res.json(updated);
});

const healthCheck = (req, res) => {
  res.json({ status: 'ok', message: 'Travel booking backend is running properly.' });
};

module.exports = { createTourRequest, getTourRequests, updateTourRequestStatus, healthCheck };
