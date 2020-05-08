const express = require('express');
const router = express.Router();

router.get('/', function (request, response) {
    response.send('GET Citas');
});

module.exports = router;