const express = require('express');
const {
  createMessage,
  getMessages,
  updateMessageStatus,
  deleteMessage,
} = require('../controllers/contactController');
const { adminProtect } = require('../middleware/adminAuthMiddleware');

const router = express.Router();

router.post('/contact', createMessage);
router.get('/contact', adminProtect, getMessages);
router.patch('/contact/:id/status', adminProtect, updateMessageStatus);
router.delete('/contact/:id', adminProtect, deleteMessage);

module.exports = router;
