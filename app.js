const http = require('http');

const port = 3000;

const rqListener = (req, res) => {
    console.log(res)
};

const server = http.createServer(rqListener);

// RUN
server.listen(port);
