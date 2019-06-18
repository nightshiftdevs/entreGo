// Module dependencies
const express = require('express');

// Middlewares

// Services
const orderService = require('../../services/orders');


let router = express.Router();

router.get('/delete/:id', orderService.deleteOrder);

module.exports = router;
