import * as http from 'http';
import app from './app';
require('dotenv').config();

const port = Number(process.env.PORT);

const server = http.createServer(app);

server.listen(port, ()=> {
    console.log('server listen on port localhost:', port);
});
