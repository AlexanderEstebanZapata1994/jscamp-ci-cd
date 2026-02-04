import jobs from '../data/jobs.json' with { type: 'json' }
import crypto from 'node:crypto';
import { filterJobs, createJob, updateJob, deleteJob } from '../processData.js';
import { DEFAULTS } from '../config.js';

export class JobModel {
    static async getAll({ title, text, technology, location, level, limit = DEFAULTS.LIMIT, offset = DEFAULTS.OFFSET }) {
        const limitNumber = Number(limit);
        const offsetNumber = Number(offset);

        let jobsFiltered = jobs;

        jobsFiltered = filterJobs(jobsFiltered, title, text, technology, location, level);

        const jobsPaginated = jobsFiltered.slice(offsetNumber, offsetNumber + limitNumber);
        return { jobs: jobsPaginated, total: jobsFiltered.length, limit: limitNumber, offset: offsetNumber, results: jobsFiltered.length };
    }

    static async getById({ id}) {
        const job = jobs.find((job) => job.id === id)
        return job;
    }

    static async create({ title, company, location, data }) {
        const newJob = { id: crypto.randomUUID(), title, company, location, data }
        createJob(jobs, newJob)
        return newJob;
    }
}