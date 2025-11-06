import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import userRouter from './routes/userRoutes.js';
import { connectDB } from './config/db.js';

import path from 'path';
import { fileURLToPath } from 'url';
import resumeRoutes from './routes/resumeRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

//CONNECT DB
connectDB();


//CONNECT MIDDLEWARE
app.use(express.json());

app.use('/api/auth', userRouter);
app.use('/api/resumes', resumeRoutes);

app.use('/uploads', express.static(path.join(__dirname,'uploads'),
{setHeaders: (res,_path) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:5173/');
}}));


//DEFINE ROUTES
app.get('/', (req, res) => {
    res.send('API WORKING');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});