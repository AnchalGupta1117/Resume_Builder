const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

// protected route as token will be required
userRouter.get('/profile', protect, (req, res) => {
  res.status(200).json(req.user);
});

module.exports = userRouter;