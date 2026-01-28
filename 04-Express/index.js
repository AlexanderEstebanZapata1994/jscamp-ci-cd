import express from 'express';
import { randomUUID } from 'node:crypto';

process.loadEnvFile();
const PORT = process.env.PORT ?? 2000;
const app = express();


app.get('/', (_, res) => {
    res.send('Hello World ❤️');
})

app.get('/health', (_, res) => res.json({status: 'ok', uptime: process.uptime()}))

app.post('/users', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    const newUser = { id: randomUUID(), name };
    res.status(201).json({ newUser });
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})