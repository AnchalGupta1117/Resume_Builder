const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Use /tmp directory on Vercel serverless (writable), or local uploads in dev
const uploadsDir = process.env.VERCEL 
  ? '/tmp/uploads' 
  : path.join(process.cwd(), 'uploads');

// Ensure uploads directory exists (wrap in try-catch for serverless)
try {
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }
} catch (err) {
  console.warn('Could not create uploads directory:', err.message);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, uploadsDir); 
    },
    filename: (req, file, cb) =>{
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});   

//FILE FILTER
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true);
    }
    else{
        cb(new Error('Only jpeg, jpg, png files are allowed'), false);
    }
};
const upload = multer({ storage,fileFilter });
module.exports = upload;