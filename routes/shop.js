const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    console.log("masuk "+req.baseUrl);
    res.send(`Haloo`); //simple response
});

module.exports = router;