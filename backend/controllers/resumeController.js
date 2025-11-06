import Resume from '../models/resumeModel.js';

export const createResume = async (req, res) => {
    try {
        const {title} = req.body;

        //DEFAULT TEMPELATE
        