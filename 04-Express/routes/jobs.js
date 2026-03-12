import { Router } from 'express';
import { JobController } from '../controllers/jobs.js';
import { validateJob, validatePartialJob } from '../schemas/jobs.js';

const jobsRouter = Router();

function validateJobSchema (req, res, next) {
    const result = validateJob(req.body);

    if (!result.success) {
        return res.status(400).json({ error: 'Data is invalid', details: result.error.errors})
    }
    req.body = result.data; // This is useful in case we have transoformed the data in the middleware
    return next();
}

function validateUpdateJobSchema (req, res, next) {
    const result = validatePartialJob(req.body);

    if (!result.success) {
        return res.status(400).json({ error: 'Data is invalid', details: result.error.errors})
    }
    req.body = result.data; // This is useful in case we have transoformed the data in the middleware
    return next();
}

jobsRouter.get('/', JobController.getAll);

jobsRouter.get('/:id', JobController.getById);

jobsRouter.post('/', validateJobSchema, JobController.create)

jobsRouter.put('/:id', validateUpdateJobSchema, JobController.update)

jobsRouter.patch('/:id', validateUpdateJobSchema, JobController.partialUpdate)

jobsRouter.delete('/:id', JobController.delete)

export default jobsRouter;