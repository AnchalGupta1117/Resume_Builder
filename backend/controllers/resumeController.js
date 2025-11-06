import Resume from '../models/resumeModel.js';
import fs from 'fs';
import path, { basename } from 'path';

export const createResume = async (req, res) => {
    try {
        const {title} = req.body;

        //DEFAULT TEMPELATE
        const defaultResumeData = {
            profileInfo: {
                profileImg: null,
                previewUrl: '',
                fullName: '',
                designation: '',
                summary: '',
            },
            contactInfo: {
                email: '',
                phone: '',
                location: '',
                linkedin: '',
                github: '',
                website: '',
            },
            workExperience: [
                {
                    company: '',
                    role: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                },
            ],
            education: [
                {
                    degree: '',
                    institution: '',
                    startDate: '',
                    endDate: '',
                },
            ],
            skills: [
                {
                    name: '',
                    progress: 0,
                },
            ],
            projects: [
                {
                    title: '',
                    description: '',
                    github: '',
                    liveDemo: '',
                },
            ],
            certifications: [
                {
                    title: '',
                    issuer: '',
                    year: '',
                },
            ],
            languages: [
                {
                    name: '',
                    progress: '',
                },
            ],
            interests: [''],
        };
        const newResume = await Resume.create({
            userId: req.user._id,
            title,
            ...defaultResumeData,
            ...req.body,
        })
        res.status(201).json(newResume);
    }
    catch (error) {
        res.status(500).json({message: 'failed t create resume', error: error.message});
    }
};

//GET FUNCTION
export const getUserResumes = async (req, res) => {
    try {
        const resumes = await Resume.find({userId: req.user._id}).sort({
            updated_at: -1
        });
        res.json(resumes)
    }
    catch (error) {
        res.status(500).json({message: 'failed to get resumes', error: error.message});
    }
};

//GET RESUME BY ID
export const getResumeById = async (req, res) => {
    try {
        const resume =  await Resume.findOne(req.params.id,userId=req.user._id);

        if (!resume) {
            return res.status(404).json({message: 'Resume not found'});
        }
        res.json(resume);
    }
    catch (error) {
        res.status(500).json({message: 'failed to get resume', error: error.message});
    }
};
//UPDATE RESUME
export const updateResume = async (req, res) => {
    try {
        const updatedResume = await Resume.findOne({
            _id: req.params.id,
            userId: req.user._id},
            req.body,
            {new: true}
        );  
        if (!updatedResume) {
            return res.status(404).json({message: 'Resume not found or unauthorized'});
        }
        //MERGE UPDATED RESUMES
        Object.assign(updatedResume, req.body);
        //SAVE UPDATED RESUME
        await updatedResume.save();
        res.json(updatedResume);
    }
    catch (error) {
        res.status(500).json({message: 'failed to update resume', error: error.message});
    }
};

//DELETE RESUME
export const deleteResume = async (req, res) => {
    try {
        const deletedResume = await Resume.findOne({
            _id: req.params.id,
            userId: req.user._id
        });         
        if (!deletedResume) {
            return res.status(404).json({message: 'Resume not found or unauthorized'});
        }

        //CREATE A UPLOAD FOLDER AND STORE THE RESUMES THERE
        const uploadsFolder = path.join(process.cwd(), 'uploads');

        //DELETE THUMBNAIL IF EXISTS
        if(resume.thumbnailLink){
            const oldThumbnail=path.join(uploadsFolder,path.basename(resume.thumbnailLink));
            if(fs.existsSync(oldThumbnail)){
                fs.unlinkSync(oldThumbnail);
            }
        }
        if(Resume.profileInfo?.profilePreviewUrl){
            const oldProfileImg=path.join(uploadsFolder,path.basename(resume.profileInfo.profilePreviewUrl));
            if(fs.existsSync(oldProfileImg)){
                fs.unlinkSync(oldProfileImg);
            }
        }
        //DELETE RESUME FROM DB
        const deleted = await Resume.findOneAnddelete({
            _id: req.params.id,
            userId: req.user._id
        });
        if(!deleted){
            return res.status(404).json({message: 'Resume not found or unauthorized'});
        }
        res.json({message: 'Resume deleted successfully'});
    }   
    catch (error) {
        res.status(500).json({message: 'failed to delete resume', error: error.message});
    }
}; 