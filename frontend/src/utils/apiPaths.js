// Use Vercel API in production, localhost in development
export const BASE_URL = import.meta.env.MODE === 'production' 
  ? '' // Empty string means same domain (Vercel will route /api/* to backend)
  : 'http://localhost:4000';

// ROUTES USER FOR FRONTEND
export const API_PATHS = {

    AUTH: {
        LOGIN: `/api/auth/login`,
        REGISTER: `/api/auth/register`,
        GET_PROFILE: `/api/auth/profile`,
    },
    RESUME: {
        CREATE: `/api/resumes/`,
        GET_ALL: `/api/resumes/`,
        GET_BY_ID: (id) => `/api/resumes/${id}`,
        UPDATE: (id) => `/api/resumes/${id}`,
        DELETE: (id) => `/api/resumes/${id}`,
        UPLOAD_IMAGES: (id) => `/api/resumes/${id}/upload-images`,
    },
    image:{
        UPLOAD: `/api/auth/upload-image`,
    }
};