// Module dependencies
const express = require('express');

// Middlewares

// Services
const orderService = require('../../services/orders');

module.exports = () => {
    let router = express.Router();

    router.get('/new', orderService.createOrder);
   
    return router;
}

