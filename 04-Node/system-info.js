import os from 'node:os';
import ms from 'ms';


console.log('Sistema:', os.type())
console.log('Plataforma:', os.platform())
console.log('Arquitectura:', os.arch())
console.log('Memoria total:', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), 'GB')
console.log('Memoria libre:', (os.freemem() / 1024 / 1024 / 1024).toFixed(2), 'GB')
console.log('Home:', os.homedir())

const uptimeInMS = os.uptime() * 1000;
const uptimeInDays = ms(uptimeInMS, { long: true});
console.log('Uptime:', uptimeInDays)