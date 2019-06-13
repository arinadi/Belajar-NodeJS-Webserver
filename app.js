const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)

    res.setHeader("Content-Type", "text/html");
    res.write(`<html>`);
    res.write(`<title>TEST</title>`);
    res.write(`<b>Halo, Method is ${req.method} </b>`);
    res.write(`</html>`);
    res.end();

    // one shoot process
    // process.exit();
});

// RUN
server.listen(port);
