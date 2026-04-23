import express from 'express';
import { jobsRouter, aiRouter } from './routes/index.js';
import { corsMiddleware } from './middlewares/cors.js';
import { DEFAULTS } from './config.js';

const PORT = process.env.PORT ?? DEFAULTS.PORT;
export const app = express();

app.use(corsMiddleware());
app.use(express.json());

app.use('/jobs', jobsRouter);
app.use('/ai', aiRouter);

if (!process.env.NODE_ENV) {
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    })
}