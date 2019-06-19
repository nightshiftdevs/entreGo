// Module dependencies
const express = require('express');

// Models

// Controllers
const userController = require('../../controllers/users');
const authController = require('../../controllers/auth');
const ordersController = require('../../controllers/orders');

let router = express.Router();

// Register api routes
router.use('/users', userController);
router.use('/auth', authController);
router.use('/orders', ordersController);

module.exports = router;
