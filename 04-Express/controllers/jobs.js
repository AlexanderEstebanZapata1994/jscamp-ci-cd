
import { JobModel } from '../models/job.js';
import { validateJob, validatePartialJob } from '../schemas/jobs.js';

export class JobController {

    static async getAll(req, res) {
        const { jobs, total, limit, offset, results } = await JobModel.getAll(req.query);
        return res.status(200).json({data: jobs, total, limit, offset, results})
    }

    static async getById(req, res) {
        const { id } = req.params;
        const job = await JobModel.getById({ id });
    
        if (!job) {
            return res.status(404).json({ error: 'Job not found' })
        }
    
        return res.status(200).json({ ...job })
    }

    static async create (req, res) {
        const result = validateJob(req.body);
        if (!result.success) {
            return res.status(400).json({ message: 'Data is invalid', errors: result.error.errors.map(error => error.message)})
        }
        const newJob = await JobModel.create(result.data);
        return res.status(201).json({ job: newJob })
    }

    static async update (req, res) {
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
    }

    static async partialUpdate(req, res) {
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
    }

    static async delete(req, res) {
        const { id } = req.params;
        const job = jobs.find(job => job.id === id);
    
        if(!job) {
            return res.status(404).json({ error: 'Job not found' })
        }
    
        deleteJob(job, id)
        return res.status(204).send()
    }
}