const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { createResume, getResumeById, getUserResumes, updatedResume, deleteResume } = require('../controllers/resumeController');
const { uploadResumeImages } = require('../controllers/uploadImages');
const upload = require('../middleware/uploadMiddleware');

const resumeRouter = express.Router();

resumeRouter.post('/', protect, createResume);
resumeRouter.get('/', protect, getUserResumes);
resumeRouter.get('/:id', protect, getResumeById);

resumeRouter.put('/:id', protect, updatedResume);
resumeRouter.put('/:id/upload-images', protect, upload.fields([
  { name: 'thumbnail' },
  { name: 'profileImage' }
]), uploadResumeImages);

resumeRouter.delete('/:id', protect, deleteResume);

module.exports = resumeRouter;