const express = require('express');

const router = express.Router();

router.post('/product', (req, res, next) => {
    console.log("masuk "+req.baseUrl);
    console.log(req.body);
    res.redirect('/'); //simple response
});

router.get('/add-product',(req, res, next) => {
    console.log("masuk "+req.baseUrl);
    res.send(`<form action="/product" method="POST"><input type="text" name="name"><button type="submit">Send</button></form>`); //simple response
});


module.exports = router;