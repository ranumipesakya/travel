const mongoose = require('mongoose');

const tourRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  travelDates: { type: String, required: true },
  guestsCount: { type: String, required: true },
  roomsRequirements: { type: String, required: true },
  accommodationPreferences: { type: String, required: true },
  interests: { type: String, required: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  tourType: { type: String, enum: ['mini-tour', 'cultural-heritage', 'general'], default: 'general' },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TourRequest', tourRequestSchema);
