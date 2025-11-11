
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const { connectDB } = require('./config/db');

// Load .env
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();

// CORS configuration for Vercel
app.use(cors({
  origin: '*',
  credentials: true
}));

app.use(express.json());

// Lazy DB connection for serverless
let dbConnected = false;
const ensureDbConnection = async () => {
  if (!dbConnected) {
    await connectDB();
    dbConnected = true;
  }
};

// Middleware to ensure DB connection
app.use(async (req, res, next) => {
  await ensureDbConnection();
  next();
});

// API routes
app.use('/api/auth', userRouter);
app.use('/api/resumes', resumeRoutes);

// Static uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
  setHeaders: (res, _path) => {
    res.set('Access-Control-Allow-Origin', '*');
  }
}));

// Health check
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

app.get('/api', (req, res) => {
  res.json({ status: 'API is running', timestamp: new Date().toISOString() });
});

module.exports = app; // Required for Vercel
