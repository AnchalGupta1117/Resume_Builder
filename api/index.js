const app = require('../backend/index');

// Export as Vercel serverless handler
module.exports = app;

// Also export as default for Vercel
module.exports.default = app;
