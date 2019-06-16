const path = require('path');

const express = require('express');

const sysPath = require('../helper/path');

const router = express.Router();

router.post('/add-product', (req, res, next) => {
    console.log("masuk "+req.baseUrl);
    console.log(req.body);
    res.redirect('/'); //simple response
});

router.get('/add-product',(req, res, next) => {
    console.log("masuk "+req.baseUrl);
    res.sendFile(path.join(sysPath.path_views, 'add-product.html')); //simple response
});


module.exports = router;