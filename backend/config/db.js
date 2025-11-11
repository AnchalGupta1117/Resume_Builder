const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error('❌ MONGO_URI is not defined in environment variables!');
      throw new Error('MONGO_URI environment variable is required');
    }
    
    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ DB CONNECTED');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    // Don't throw in serverless - let individual requests handle it
  }
};

module.exports = { connectDB };