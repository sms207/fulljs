/* import https from 'https';

https.get(
    'https://www.lynda.com', res => {
        console.log('Response status code: ', res.statusCode);
        
        res.on('data', chunk => {
            console.log(chunk.toString());
            
        });
    }
); */

/* import http from 'http';

const server = http.createServer();

server.listen(9090);

server.on('request', (req, res) => {
    res.write('Hello HTTP!\n');

    setTimeout(
        () => {
            res.write('I can stream!\n');

            res.end();
        }, 3000
    );
}); */

import express from 'express';

//import fs from 'fs';
import apiRouter from './api'

import config from './config';

const server = express();

// server.get('/about.html', (req, res) => {
//     fs.readFile('./about.html', (err, data) => {
//         res.send(data.toString());
//     });
// });

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    // res.send('Hello Express!!!');
    res.render('index', {
        content: 'Hello EJS is <b>Awesome!</b>'
    });
});
server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.log('Express listening to port: ', config.port);
});