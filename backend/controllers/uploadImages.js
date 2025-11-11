import fs from 'fs';
import path from 'path';

import Resume from '../models/resumeModel.js';
import upload from '../middleware/uploadMiddleware.js';

export const uploadResumeImages=async (req, res) => {
    console.log("Files received:", req.files); // debug
    console.log("Body received:", req.body);

    try {
        // Check if any files were uploaded
        if (!req.files || (!req.files.thumbnail && !req.files.profileImage)) {
            console.error("No files received");
            return res.status(400).json({ message: "No files uploaded" });
        }

        const resumeId = req.params.id;
        const resume = await Resume.findOne({ _id: resumeId, userId: req.user._id });
        if (!resume) {
            return res.status(404).json({ message: "Resume not found or unauthorized" });
        }
        //USE PROCESS CWD TO LOCATE UPLOADS FOLDER
        const uploadDir = path.join(process.cwd(), 'uploads');
        const baseUrl = `${req.protocol}://${req.get('host')}/uploads/`;

        const newThumbnail = req.files.thumbnail?.[0];
        const newProfileImage = req.files.profileImage?.[0];

        if (newThumbnail) {
            //DELETE OLD THUMBNAIL IF EXISTS
            if (resume.thumbnailLink) {
                const oldThumbnailPath = path.join(uploadDir, path.basename(resume.thumbnailLink));
                if (fs.existsSync(oldThumbnailPath)) {
                    fs.unlinkSync(oldThumbnailPath);
                }
            }
            resume.thumbnailLink = `${baseUrl}${newThumbnail.filename}`;
        }

        //SAME FOR profilepreview image
        if (newProfileImage) {
            if (resume.profileInfo?.profilePreviewUrl) {
                const oldProfileImgPath = path.join(uploadDir, path.basename(resume.profileInfo.profilePreviewUrl));        
                if (fs.existsSync(oldProfileImgPath)) {
                    fs.unlinkSync(oldProfileImgPath);
                }
            }
            resume.profileInfo.profilePreviewUrl = `${baseUrl}${newProfileImage.filename}`;
        }
        await resume.save();
        res.status(200).json({ 
            message: "Images uploaded successfully",
            thumbnailLink: resume.thumbnailLink,
            profilePreviewUrl: resume.profileInfo?.profilePreviewUrl,
            });
    }
    catch (error) {
        console.error("Error during image upload:", error);
        res.status(500).json({ message: "Server error during image upload", error: error.message });
    }

};
