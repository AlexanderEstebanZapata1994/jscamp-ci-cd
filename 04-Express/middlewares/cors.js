import cors from 'cors';
const ACCEPTED_ORIGINS = ['http://localhost:5173'];


export const corsMiddleware = ({ whitelist = ACCEPTED_ORIGINS } = {}) => 
    cors({
    origin: (origin, callback) => {
        if (whitelist.includes(origin)) {
            return callback(null, origin)
        }
        return callback(new Error('Not allowed by CORS'))
    }
});