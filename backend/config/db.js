import mongoose from "mongoose";

export const connectDB = async () => {
        await mongoose.connect('mongodb+srv://diyagarg1117_db_user:ResumeBuilder@cluster0.cyliazd.mongodb.net/RESUME')
        .then(() => console.log("DB CONNECTED"))
};