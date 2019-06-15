//Core
// const http = require('http');
//3rd
const express = require('express');
//External
// const routes = require('../routes');

const app = express();

app.use('/', (req, res, next) => {
    console.log("always run");
    next(); //next process
});
app.use('/create-user', (req, res, next) => {
    console.log("masuk "+req.url);
    res.send(`Page "Add User"`); //simple response
});
app.use('/',(req, res, next) => {
    console.log("masuk "+req.url);
    res.send(`Halo dari expressJS`); //simple response
});

// const server = http.createServer(app);
const port = 3000;

// RUN by NodeJS
// server.listen(port);

// RUN by ExpressJS
app.listen(port);
