import http from 'node:http';
import { json } from 'node:stream/consumers';
import { randomUUID } from 'node:crypto';

process.loadEnvFile();

const PORT = process.env.PORT ?? 0;


const users = [
    {id: randomUUID(), name: 'Alexander'},
    {id: randomUUID(), name: 'John Doe'},
    {id: randomUUID(), name: 'Jane Doe'},
    {id: randomUUID(), name: 'Jim Doe'},
    {id: randomUUID(), name: 'Jill Doe'},
    {id: randomUUID(), name: 'Jack Doe'},
]
const server = http.createServer( async (req, res) => {

    const { method, url, body } = req;
    const [ pathname, queryString ] = url.split('?');

    const searchParams = new URLSearchParams(queryString);

    if (method == 'GET') {

        if (pathname === '/') {
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.end('Hello World ❤️');
            return;
        }
        else if(pathname === '/users') {
            const limit = Number(searchParams.get('limit'));
            const offset = Number(searchParams.get('offset'));

            const usersPaginated = users.slice(offset, offset + limit);
            sendJsonResponse(res, 200, {users: usersPaginated});
            return;
        }
        sendJsonResponse(res, 404, {
            error: 'Not Found'
        });
        return;
    }
    
    if (method == 'POST') {
        if (pathname === '/users') {
            
            if (body && body.name) {
                const newUser = { id: randomUUID(), name: body.name }
                users.push(newUser)
                sendJsonResponse(res, 201, { newUser })
                return;
            }
            sendJsonResponse(res, 400, {
                error: 'Name is required'
            });
            return;
        }
    }
    sendJsonResponse(res, 404, { error: 'Not Found' });
})

server.listen(PORT, () => {
    const address = server.address();
    console.log(`Server is running on port http://localhost:${address.port}`);
});

const sendJsonResponse = (res, statusCode, data) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = statusCode;
    res.end(JSON.stringify(data));
}