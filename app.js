//Core
const http = require('http');
//3rd
const express = require('express');
//External
// const routes = require('../routes');

const app = express();
const server = http.createServer(app);
const port = 3000;

// RUN
server.listen(port);
