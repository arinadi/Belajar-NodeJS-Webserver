const path = require('path');
const pathView = path.join(__dirname, '..', 'views');

const express = require('express');

const router = express.Router();

router.post('/add-product', (req, res, next) => {
    console.log("masuk "+req.baseUrl);
    console.log(req.body);
    res.redirect('/'); //simple response
});

router.get('/add-product',(req, res, next) => {
    console.log("masuk "+req.baseUrl);
    res.sendFile(path.join(pathView, 'add-product.html')); //simple response
});


module.exports = router;