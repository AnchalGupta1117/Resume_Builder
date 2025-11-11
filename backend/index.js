
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
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

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

app.get('/', (req, res) => {
  res.send('API WORKING');
});

module.exports = app; // Required for Vercel
