const express = require('express');
const v1ApiController = require('./v1');
let router = express.Router();

// Register api version V1
router.use('/v1', v1ApiController);

module.exports = router;