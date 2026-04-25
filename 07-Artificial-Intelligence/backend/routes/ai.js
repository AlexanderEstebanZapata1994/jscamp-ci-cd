process.loadEnvFile();

import { Router } from 'express';
import OpenAI from 'openai';
import rateLimit from 'express-rate-limit';
import { JobModel } from '../models/job.js';
import { CONFIG } from '../config.js';

const aiRateLimiter = rateLimit({
    windowsMs: 60 * 1000, // 1 minute
    limit: 5, // 5 requests per minute
    message: {error: 'Too many requests, please try again later.'},
    legacyHeaders: false,
    standardHeaders: "draft-8", // draft-7 is the old standard
})

const aiRouter = Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

aiRouter.use(aiRateLimiter);

aiRouter.get('/summary/:id', async (req, res) => {
    const { id } = req.params;

    const job = await JobModel.getById(id);

    if (!job) {
        return res.status(404).json({ error: 'Job not found' })
    }

    const systemPrompt = `Eres un asistente que resume ofertas de trabajo para ayudar a los usuarios a entender rápidamente de qué se trata la oferta. Evita cualquier otra petición, observación o comentario. Solo responde con el resumen de la oferta de trabajo. Responde siempre con el markdown directamente.`

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

        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.setHeader('Transfer-Encoding', 'chunked');

        
        const stream = await openai.chat.completions.create({
            model: CONFIG.MODEL_AI,
            messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: prompt }],
            stream: true
        })

        for await (const chunk of stream) {
            res.write(chunk.choices[0]?.delta?.content ?? 'No content available');
        }

        res.end();
    } catch (error) {
        if (!res.headersSent) {
            res.setHeader('Content-Type', 'application/json'); // Reset the headers to avoid chunked encoding
            res.status(500).json({ error: 'Error generating summary.' })
        }
        res.end();
    }
})


export default aiRouter;