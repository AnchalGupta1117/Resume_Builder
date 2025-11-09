import express from 'express';
import {protect} from '../middleware/authMiddleware.js';
import {createResume, getResumeById,getUserResumes,updatedResume,deleteResume} from '../controllers/resumeController.js';
import {uploadResumeImages} from '../controllers/uploadImages.js';
import upload from '../middleware/uploadMiddleware.js';




const resumeRouter = express.Router();

resumeRouter.post('/',protect , createResume);
resumeRouter.get('/',protect , getUserResumes);
resumeRouter.get('/:id',protect , getResumeById);

resumeRouter.put('/:id',protect , updatedResume);
//resumeRouter.put('/:id/upload-images',protect , uploadResumeImages);
resumeRouter.put('/:id/upload-images', protect, upload.fields([
  { name: 'thumbnail' },
  { name: 'profileImage' }
]), uploadResumeImages);

resumeRouter.delete('/:id',protect , deleteResume);




export default resumeRouter;