//Core
// const http = require('http');
//3rd
const express = require('express');
const bodyParser = require('body-parser');
//External
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(shopRoutes);

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

// const server = http.createServer(app);
const port = 3000;

// RUN by NodeJS
// server.listen(port);

// RUN by ExpressJS
app.listen(port);
