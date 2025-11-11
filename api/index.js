// Import and export the Express app for Vercel
try {
  const app = require('../backend/index');
  module.exports = app;
} catch (error) {
  console.error('Failed to load backend:', error);
  // Export a minimal error handler
  module.exports = (req, res) => {
    res.status(500).json({
      error: 'Backend initialization failed',
      message: error.message,
      stack: error.stack
    });
  };
}
