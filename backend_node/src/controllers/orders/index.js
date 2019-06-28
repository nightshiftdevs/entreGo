// Module dependencies
const express = require('express');

// Middlewares

// Services
const orderService = require('../../services/orders');

let router = express.Router();

router.get('/list', orderService.createOrder);

module.exports = router;


