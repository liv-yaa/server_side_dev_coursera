// Following this class to start an express server at `http://localhost:3000/`
// Uses two libraries to create an Express app and start it at the specified port
// https://www.coursera.org/learn/server-side-nodejs/supplement/DdJt7/exercise-instructions-introduction-to-express

const express = require('express')
const http = require('http');
const morgan = require('morgan'); // used for logging purposes

// Must also create package.json and install the above ^^
//      npm install morgan@1.9.0 --save
//      npm install express@4.16.3 --save so that npm will add them to node modules

const hostname = 'localhost';
const port = 3001;

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

