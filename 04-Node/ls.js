import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { existsSync } from 'node:fs';

// 1. Get the folder to show
const directory = process.argv[2] ?? '.';
if (!existsSync(directory)) {
    console.error(`Directory ${directory} does not exist`);
    process.exit(1);
}
const directoriesOnly = process.argv.includes('-d') || process.argv.includes('--directories-only');
const filesOnly = process.argv.includes('-f') || process.argv.includes('--files-only');
const orderFilesByName = process.argv.includes('-n') || process.argv.includes('--order-by-name');

// 2. Format sizes simply
const formatSize = (bytes) => {
    if (bytes === 0) return '0 bytes'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 3. Get folder files and directories
const files = await readdir(directory);

//4. Get folder files and directories with details
const entries = await Promise.all(
    files.map(async (name) => {
        const filePath = join(directory, name);
        const info = await stat(filePath);
        return { 
            entryType: info.isDirectory() ? '📁' : '📄',
            name, 
            size: info.isDirectory() ? "---" : formatSize(info.size),
            isDirectory: info.isDirectory(),
            fileModified: info.mtime.toLocaleDateString()
        };
    })
)

const directories = entries.filter(entry => entry.isDirectory);
const filesList = entries.filter(entry => !entry.isDirectory);

if (orderFilesByName) {
    filesList.sort((a, b) => a.name.localeCompare(b.name));
};

if (directoriesOnly) {
    renderDirectories(directories);
    process.exit(0);
};

const renderDirectories = (directories) => {
    for (const directory of directories) {
        console.log(`${directory.entryType} ${directory.name.padEnd(25)} ${directory.size.padEnd(10)} ${directory.fileModified}`);
    };
};

const renderFiles = (files) => {
    for (const file of files) {
        console.log(`${file.entryType} ${file.name.padEnd(25)} ${file.size.padEnd(10)} ${file.fileModified}`);
    };
};

if (filesOnly) {
    renderFiles(filesList);
    process.exit(0);
};

renderDirectories(directories);
renderFiles(filesList);
process.exit(0);
