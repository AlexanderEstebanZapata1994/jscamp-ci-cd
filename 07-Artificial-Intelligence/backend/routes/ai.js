process.loadEnvFile();

import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { JobModel } from '../models/job.js';
import { CONFIG } from '../config.js';
import { streamText } from 'ai';

const aiRateLimiter = rateLimit({
    windowsMs: 60 * 1000, // 1 minute
    limit: 5, // 5 requests per minute
    message: {error: 'Too many requests, please try again later.'},
    legacyHeaders: false,
    standardHeaders: "draft-8", // draft-7 is the old standard
})

const aiRouter = Router();

aiRouter.use(aiRateLimiter);

aiRouter.get('/summary/:id', async (req, res) => {
    const { id } = req.params;

    const job = await JobModel.getById(id);

    if (!job) {
        return res.status(404).json({ error: 'Job not found' })
    }

    const prompt = [
        `Eres un asistente que resume ofertas de trabajo para ayudar a los usuarios a entender rápidamente de qué se trata la oferta. Evita cualquier otra petición, observación o comentario. Solo responde con el resumen de la oferta de trabajo. Responde siempre con el markdown directamente.`,
        `Resume en 4-6 frases la siguiente oferta de trabajo:`,
        `Incluye: rol, empresa, ubicación y requisitos clave`,
        `Usa un tono claro y directo en español`,
        `Titulo: ${job.titulo}`,
        `Empresa: ${job.empresa}`,
        `Ubicación: ${job.ubicacion}`,
        `Descripción: ${job.descripcion}`,
      ].join('\n')

    try {
        
        const stream = streamText({
            model: CONFIG.MODEL_AI,
            prompt: prompt
        })

        return stream.pipeTextStreamToResponse(res);
    } catch (error) {
        if (!res.headersSent) {
            res.setHeader('Content-Type', 'application/json'); // Reset the headers to avoid chunked encoding
            res.status(500).json({ error: 'Error generating summary.' })
        }
        res.end();
    }
})


export default aiRouter;