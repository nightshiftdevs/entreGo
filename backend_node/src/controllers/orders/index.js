// Module dependencies
const express = require('express');

// Middlewares
const {tokenInHeaders} = require('../../Authentication');

// Services
const orderService = require('../../services/orders');

let router = express.Router();

router.get('/list', orderService.createOrder);
router.post('/detail', orderService.getDetail);

module.exports = router;


