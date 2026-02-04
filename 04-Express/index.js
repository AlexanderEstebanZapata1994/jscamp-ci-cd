import express from 'express';
import crypto from 'node:crypto';
import cors from 'cors';
import { DEFAULTS } from './config.js';
import { filterJobs, createJob, updateJob, deleteJob } from './processData.js';
import jobs from './data/jobs.json' with { type: 'json' }

process.loadEnvFile();
const PORT = process.env.PORT ?? 2000;
const app = express();

const whitelist = ['http://localhost:5173'];

app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            return callback(null, origin)
        }
        return callback(new Error('Not allowed by CORS'))
    }
}));

app.get('/jobs', async(req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    const { title, text, technology, location, level, limit = DEFAULTS.LIMIT, offset = DEFAULTS.OFFSET } = req.query;
    const limitNumber = Number(limit);
    const offsetNumber = Number(offset);

    let jobsFiltered = jobs;

    jobsFiltered = filterJobs(jobsFiltered, title, text, technology, location, level);

    const jobsPaginated = jobsFiltered.slice(offsetNumber, offsetNumber + limitNumber);
    return res.status(200).json({data: jobsPaginated, total: jobsFiltered.length, limit: limitNumber, offset: offsetNumber, results: jobsPaginated.length})
})

app.get('/jobs/:id', async (req, res) => {
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id)

    if (!job) {
        return res.status(404).json({ error: 'Job not found' })
    }

    return res.status(200).json( { job })
})

app.post('/jobs', (req, res) => {
    const { title, company, location, data } = req.body;
    if (!title || !company || !location || !data) {
        return res.status(400).json({ error: 'Missing required fields' })
    }
    const newJob = { id: crypto.randomUUID(), title, company, location, data }
    createJob(jobs, newJob)
    return res.status(201).json({ job: newJob })
})

app.put('/jobs/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    
    if (!title) {
        return res.status(400).json({ error: 'Title is required' })
    }
    
    const job = jobs.find(job => job.id === id);

    if (!job) {
        return res.status(404).json({ error: 'Job not found' })
    }

    const jobUpdated = updateJob(jobs, { id, title })
    return res.status(200).json({ job: jobUpdated })
})

app.delete('/jobs/:id', (req, res) => {
    const { id } = req.params;
    const job = jobs.find(job => job.id === id);

    if(!job) {
        return res.status(404).json({ error: 'Job not found' })
    }

    deleteJob(jobs, id)
    return res.status(204).send()
})

app.get('/health', (_, res) => res.json({status: 'ok', uptime: process.uptime()}))

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})