const path = require('path');
const pathView = path.join(__dirname, '..', 'views');

// console.log(path.join(pathView, 'test.html'));

const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    console.log("masuk "+req.baseUrl);
    res.sendFile(path.join(pathView, 'shop.html')); //simple response
});

module.exports = router;