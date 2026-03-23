const ContactMessage = require('../models/ContactMessage');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Create new contact message
// @route   POST /api/contact
// @access  Public
const createMessage = asyncHandler(async (req, res) => {
  const { name, email, phone, country, message } = req.body;

  const contactMessage = await ContactMessage.create({
    name,
    email,
    phone,
    country,
    message,
  });

  if (contactMessage) {
    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: contactMessage,
    });
  } else {
    res.status(400);
    throw new Error('Invalid message data');
  }
});

// @desc    Get all messages
// @route   GET /api/contact
// @access  Private/Admin
const getMessages = asyncHandler(async (req, res) => {
  const messages = await ContactMessage.find({}).sort({ createdAt: -1 });
  
  res.json({
    success: true,
    count: messages.length,
    data: messages,
  });
});

// @desc    Update message status
// @route   PUT /api/contact/:id
// @access  Private/Admin
const updateMessageStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  
  const message = await ContactMessage.findById(req.params.id);
  
  if (message) {
    message.status = status || message.status;
    const updatedMessage = await message.save();
    
    res.json({
      success: true,
      data: updatedMessage
    });
  } else {
    res.status(404);
    throw new Error('Message not found');
  }
});

// @desc    Delete message
// @route   DELETE /api/contact/:id
// @access  Private/Admin
const deleteMessage = asyncHandler(async (req, res) => {
  const message = await ContactMessage.findById(req.params.id);
  
  if (message) {
    await message.remove();
    res.json({
      success: true,
      message: 'Message removed'
    });
  } else {
    res.status(404);
    throw new Error('Message not found');
  }
});

module.exports = {
  createMessage,
  getMessages,
  updateMessageStatus,
  deleteMessage,
};
