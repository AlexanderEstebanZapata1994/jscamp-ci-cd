import { test, describe, before, after } from 'node:test';
import assert from 'node:assert';
import { app } from './app.js';
import { DEFAULTS } from './config.js';

let server;

const PORT = 3456;
const BASE_URL = `http://localhost:${PORT}`;

before(async() => {
    return new Promise((resolve, reject) => {
        server = app.listen(PORT, () => resolve());
        server.on('error', (error) => reject(error));
    });
})

after(async() =>{
    return new Promise((resolve, reject) => {
        server.close(() => resolve());
        server.on('error', (error) => reject(error));
    });
})

describe('GET /jobs', () => {
    test('should return a JSON with all jobs', async () => {
        const res = await fetch(`${BASE_URL}/jobs?limit=${DEFAULTS.LIMIT}&offset=${DEFAULTS.OFFSET}`);
        assert.strictEqual(res.status, 200);
        const json = await res.json();
        assert.ok(Array.isArray(json.data), 'The data should be an array ❌');
        assert.strictEqual(json.data.length, 1, 'The data should contain 1 job ❌');
    })

    test('should filter jobs by technology', async () => {
        const tech = 'react';
        const res = await fetch(`${BASE_URL}/jobs?technology=${tech}`);

        assert.strictEqual(res.status, 200);

        const json = await res.json();
        assert.ok(
            json.data.every(job => job.data.technology.includes(tech)),
            `The data should contain the technology ${tech} ❌`
        )
    })
})