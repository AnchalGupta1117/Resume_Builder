const Resume = require('../models/resumeModel');
const fs = require('fs');
const path = require('path');

const createResume = async (req, res) => {
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
        res.status(500).json({message: 'failed to create resume', error: error.message});
    }
};

//GET FUNCTION
const getUserResumes = async (req, res) => {
    try {
        const resumes = await Resume.find({userId: req.user._id}).sort({
            updatedAt: -1
        });
        res.json(resumes)
    }
    catch (error) {
        res.status(500).json({message: 'failed to get resumes', error: error.message});
    }
};

//GET RESUME BY ID
const getResumeById = async (req, res) => {
    try {
        const resume =  await Resume.findOne({_id: req.params.id,
    userId: req.user._id}
            //req.params.id,userId=req.user._id
            );

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
const updatedResume = async (req, res) => {
    try {
        console.log("=== UPDATE RESUME REQUEST ===");
        console.log("Resume ID:", req.params.id);
        console.log("User ID:", req.user._id);
        console.log("Request body keys:", Object.keys(req.body));
        console.log("Profile Info from request:", req.body.profileInfo);
        console.log("Contact Info from request:", req.body.contactInfo);
        
        const resume = await Resume.findOne({
            _id: req.params.id,
            userId: req.user._id
        });
        
        if (!resume) {
            console.log("Resume not found!");
            return res.status(404).json({message: 'Resume not found or unauthorized'});
        }
        
        console.log("Resume found, current data:", {
            title: resume.title,
            profileInfo: resume.profileInfo,
            contactInfo: resume.contactInfo
        });
        
        //MERGE UPDATED DATA
        Object.assign(resume, req.body);
        
        console.log("After merge, before save:", {
            title: resume.title,
            profileInfo: resume.profileInfo,
            contactInfo: resume.contactInfo
        });
        
        //SAVE UPDATED RESUME
        const savedResume = await resume.save();
        
        console.log("=== RESUME SAVED SUCCESSFULLY ===");
        console.log("Saved resume ID:", savedResume._id);
        console.log("Saved title:", savedResume.title);
        console.log("Saved profile info:", savedResume.profileInfo);
        
        res.json(savedResume);
    }
    catch (error) {
        console.error("=== UPDATE ERROR ===");
        console.error("Error updating resume:", error);
        res.status(500).json({message: 'failed to update resume', error: error.message});
    }
};

//DELETE RESUME
const deleteResume = async (req, res) => {
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
        if(deletedResume.thumbnail){
            const oldThumbnail=path.join(uploadsFolder,path.basename(deletedResume.thumbnail));
            if(fs.existsSync(oldThumbnail)){
                fs.unlinkSync(oldThumbnail);
            }
        }
        if(deletedResume?.profileInfo?.profilePreviewUrl){
            const oldProfileImg=path.join(uploadsFolder,path.basename(deletedResume.profileInfo.profilePreviewUrl));
            if(fs.existsSync(oldProfileImg)){
                fs.unlinkSync(oldProfileImg);
            }
        }
        //DELETE RESUME FROM DB
        const deleted = await Resume.findOneAndDelete({
            _id: req.params.id,
            userId: req.user._id
        });
        //await deletedResume.deleteOne();
        if(!deleted){
            return res.status(404).json({message: 'Resume not found or unauthorized'});
        }
        res.json({message: 'Resume deleted successfully'});
    }   
    catch (error) {
        res.status(500).json({message: 'failed to delete resume', error: error.message});
    }
};

module.exports = {
    createResume,
    getUserResumes,
    getResumeById,
    updatedResume,
    deleteResume
};