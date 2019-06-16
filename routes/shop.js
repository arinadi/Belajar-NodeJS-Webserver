const path = require('path');

// console.log(path.join(pathView, 'test.html'));

const express = require('express');

const sysPath = require('../helper/path');

const router = express.Router();

router.get('/',(req, res, next) => {
    console.log("masuk "+req.baseUrl);
    res.sendFile(path.join(sysPath.path_views, 'shop.html')); //simple response
});

module.exports = router;