const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)

    const url = req.url;

    //simple routing
    if(url === '/msg') {
        res.setHeader("Content-Type", "text/html");
        res.write(`<html>`);
        res.write(`<title>MSG</title>`);
        res.write(`<b>Halo, Method is ${req.method} </b>`);
        res.write(`</html>`);
        return res.end();
    }

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
