import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: false 
    },
    template: {
        theme: String,
        colorpallet: [String]
    },

    profileInfo: {
        profilePreviewUrl: String,
        fullName: String,
        designation: String,
        summary: String,
    },
    contactInfo: {
        email: String,
        phone: String,
        location: String,
        website: String,
        linkedin: String,
        github: String,
    },
    //WORK EXPERIENCE
    workExperience: [
        {
            company: String,
            role: String,
            startDate: Date,
            endDate: Date,
            description: String,
        },
    ],
    //EDUCATION
    education: [
        {
            degree: String,
            institution: String,
            startDate: Date,
            endDate: Date,
        }
    ],
    //SKILLS
    skills: [
        {
            name: String,
            progress: number,
        }
    ],
    //PROJECTS  
    projects: [
        {
            title: String,
            description: String,
            github: String,
            liveDemo: String,
        }
    ],
    //CERTIFICATES
    certificates: [ 
        {
            title: String,
            issuer: String,
            year: String,
        }
    ],
    languages: [
        {
            name: String,
            progress:Number,
        }
    ],
    interests: [String],
}, 
    { 
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);

export default mongoose.model('Resume', resumeSchema);