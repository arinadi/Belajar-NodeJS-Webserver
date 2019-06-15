//Core
// const http = require('http');
//3rd
const express = require('express');
const bodyParser = require('body-parser');
//External
// const routes = require('../routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("always run");
    next(); //next process
});

// Filter Request :
// .use : all 
// .post
// .get
// .put
// .delete
app.post('/message', (req, res, next) => {
    console.log("masuk "+req.baseUrl);
    console.log(req.body);
    res.redirect('/'); //simple response
});

app.use('/',(req, res, next) => {
    console.log("masuk "+req.baseUrl);
    res.send(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`); //simple response
});

// const server = http.createServer(app);
const port = 3000;

// RUN by NodeJS
// server.listen(port);

// RUN by ExpressJS
app.listen(port);
