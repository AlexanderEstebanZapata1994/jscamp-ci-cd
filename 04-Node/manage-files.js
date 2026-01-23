import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { basename, extname, join } from 'node:path';

const content = await readFile('fichero.txt', 'utf-8');
console.log(content);

const uppercaseContent = content.toUpperCase();

const outputPath = join('output', 'files', 'result');
await mkdir(outputPath, { recursive: true });
const outputPathFile = join(outputPath, 'fichero-uppercase.txt');


await writeFile(outputPathFile, uppercaseContent);
