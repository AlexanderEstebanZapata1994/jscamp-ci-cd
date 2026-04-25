import express from 'express';
import { jobsRouter, aiRouter } from './routes/index.js';
import { corsMiddleware } from './middlewares/cors.js';
import { DEFAULTS } from './config.js';

const PORT = process.env.PORT ?? DEFAULTS.PORT;
export const app = express();

// The 'trust proxy' setting tells Express to trust the X-Forwarded-For header,
// which is set by the proxy server (e.g., Nginx) that sits in front of the Express server.
// This is useful when you're running your app behind a proxy server,
// and you want to get the real client's IP address from the proxy server's headers.
// In this case, we're telling Express to trust the proxy server that sits in front of the Express server.
// This is useful when you're running your app behind a proxy server,
// and you want to get the real client's IP address from the proxy server's headers.
app.set('trust proxy', 1); 

app.use(corsMiddleware());
app.use(express.json());

app.use('/jobs', jobsRouter);
app.use('/ai', aiRouter);

if (!process.env.NODE_ENV) {
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    })
}