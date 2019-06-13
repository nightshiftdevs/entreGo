// Module dependencies
const express = require('express');

// Middlewares

// Services
const orderService = require('../../services/users');

module.exports = () => {
    let router = express.Router();

    router.get('/', orderService.getOrders);
    router.get('/:id', orderService.getOrderById);
   
    return router;
}

