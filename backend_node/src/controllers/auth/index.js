// Module dependencies
const express = require('express');

// Middlewares
const {tokenInHeaders, verifyToken} = require('../../Authentication');

// Services
const authService = require('../../services/auth');
const authService = require('../../services/auth');

let router = express.Router();

router.post('/sign-in', authService.signIn);
router.post('/sign-out', authService.signOut);
router.post('/userStatus', tokenInHeaders, verifyToken);

router.get('/sign-up', (req, res) => {
    res.json({
        msg: 'Hola'
    })
});

module.exports = router;
