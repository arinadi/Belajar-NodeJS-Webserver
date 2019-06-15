//Core
const http = require('http');
//3rd
const express = require('express');
//External
// const routes = require('../routes');

const app = express();

app.use((req, res, next) => {
    console.log("masuk");
    next(); //next process
});
app.use((req, res, next) => {
    console.log("masuk lagi");
    res.send(`Halo dari expressJS`); //simple response
});

const server = http.createServer(app);
const port = 3000;

// RUN
server.listen(port);
