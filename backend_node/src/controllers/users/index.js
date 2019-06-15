// Module dependencies
const express = require('express');

// Middlewares

// Services
const userService = require('../../services/users');

module.exports = () => {
    let router = express.Router();

    router.get('/', userService.getUsers);
    router.get('/:id', userService.getUserById);
    router.post('/', userService.createUser);
    router.put('/:id', userService.updateUser);
    router.delete('/:id', userService.deleteUser);

    return router;
}


