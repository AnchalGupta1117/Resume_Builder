
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const { connectDB } = require('./config/db');

// Load .env (but don't crash if file doesn't exist on Vercel)
try {
  dotenv.config({ path: path.join(__dirname, '.env') });
} catch (err) {
  console.log('No .env file found (using environment variables)');
}

// Log environment check (but don't crash if undefined)
try {
  console.log('Environment check:');
  console.log('- MONGO_URI:', process.env.MONGO_URI ? '✓ Set' : '✗ Missing');
  console.log('- JWT_SECRET:', process.env.JWT_SECRET ? '✓ Set' : '✗ Missing');
} catch (err) {
  console.error('Environment check error:', err);
}

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
    try {
      await connectDB();
      dbConnected = true;
    } catch (error) {
      console.error('DB connection failed:', error);
      // Don't set dbConnected to true on failure
    }
  }
};

// Middleware to ensure DB connection (but don't block on failure)
app.use((req, res, next) => {
  // Skip DB connection for health check endpoints
  if (req.path === '/api/test' || req.path === '/api/env-check' || req.path === '/api') {
    return next();
  }
  
  // For other routes, ensure DB connection
  ensureDbConnection()
    .then(() => next())
    .catch((err) => {
      console.error('DB middleware error:', err);
      next(); // Continue anyway, let route handlers deal with it
    });
});

// API routes
app.use('/api/auth', userRouter);
app.use('/api/resumes', resumeRoutes);

// Static uploads - use /tmp on Vercel, local uploads in dev
const uploadsPath = process.env.VERCEL ? '/tmp/uploads' : path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadsPath, {
  setHeaders: (res, _path) => {
    res.set('Access-Control-Allow-Origin', '*');
  }
}));

// Health check
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Environment check endpoint
app.get('/api/env-check', (req, res) => {
  res.json({
    mongoUri: process.env.MONGO_URI ? 'Set ✓' : 'Missing ✗',
    jwtSecret: process.env.JWT_SECRET ? 'Set ✓' : 'Missing ✗',
    nodeEnv: process.env.NODE_ENV || 'development',
    mongooseConnected: require('mongoose').connection.readyState === 1 ? 'Connected ✓' : 'Disconnected ✗'
  });
});

app.get('/api', (req, res) => {
  res.json({ status: 'API is running', timestamp: new Date().toISOString() });
});

module.exports = app; // Required for Vercel
