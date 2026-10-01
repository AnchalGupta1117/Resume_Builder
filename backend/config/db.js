const mongoose = require("mongoose");

let lastConnectAttempt = {
  ok: false,
  errorName: null,
  errorMessage: null,
  readyState: 0,
  hasMongoUri: false,
};

const getLastConnectAttempt = () => lastConnectAttempt;

const connectDB = async () => {
  try {
    lastConnectAttempt = {
      ok: false,
      errorName: null,
      errorMessage: null,
      readyState: mongoose.connection.readyState,
      hasMongoUri: Boolean(process.env.MONGO_URI),
    };
    // #region agent log
    fetch('http://127.0.0.1:7419/ingest/74647587-0d97-4ca8-8a79-aa1b65fb8650',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'3fc992'},body:JSON.stringify({sessionId:'3fc992',hypothesisId:'A',location:'backend/config/db.js:connectDB:entry',message:'connectDB start',data:{hasMongoUri:Boolean(process.env.MONGO_URI),readyState:mongoose.connection.readyState},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    if (!process.env.MONGO_URI) {
      console.error('❌ MONGO_URI is not defined in environment variables!');
      throw new Error('MONGO_URI environment variable is required');
    }
    
    console.log('Attempting to connect to MongoDB...');
    
    // Add connection options for better compatibility
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 20000,
      socketTimeoutMS: 45000,
    });
    
    lastConnectAttempt = {
      ok: true,
      errorName: null,
      errorMessage: null,
      readyState: mongoose.connection.readyState,
      hasMongoUri: true,
    };
    // #region agent log
    fetch('http://127.0.0.1:7419/ingest/74647587-0d97-4ca8-8a79-aa1b65fb8650',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'3fc992'},body:JSON.stringify({sessionId:'3fc992',hypothesisId:'C',location:'backend/config/db.js:connectDB:success',message:'connectDB success',data:{readyState:mongoose.connection.readyState},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    console.log('✅ DB CONNECTED');
  } catch (error) {
    lastConnectAttempt = {
      ok: false,
      errorName: error.name,
      errorMessage: error.message,
      readyState: mongoose.connection.readyState,
      hasMongoUri: Boolean(process.env.MONGO_URI),
    };
    // #region agent log
    fetch('http://127.0.0.1:7419/ingest/74647587-0d97-4ca8-8a79-aa1b65fb8650',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'3fc992'},body:JSON.stringify({sessionId:'3fc992',hypothesisId:'B',location:'backend/config/db.js:connectDB:error',message:'connectDB failed',data:{errorName:error.name,errorMessage:error.message,readyState:mongoose.connection.readyState,hasMongoUri:Boolean(process.env.MONGO_URI)},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    console.error('❌ MongoDB connection error:', error.message);
    console.error('Full error:', error);
    throw error;
  }
};

module.exports = { connectDB, getLastConnectAttempt };