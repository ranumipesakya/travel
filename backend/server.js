require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const requestRoutes = require('./routes/requestRoutes');
const adminRoutes = require('./routes/adminRoutes');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', adminRoutes);
app.use('/api', requestRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Database Connection (non-blocking server startup)
connectDB().catch((error) => {
  console.error('MongoDB connection error:', error);
});
