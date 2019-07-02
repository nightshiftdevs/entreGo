// Module dependencies
const express = require('express');

// Middlewares

// Services
const dashboardService = require('../../services/dashboard');

let router = express.Router();

router.post('/client', dashboardService.clientDetail);
router.post('/driver', dashboardService.driverDetail);

module.exports = router;
