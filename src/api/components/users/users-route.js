const express = require('express');
const usersController = require('./users-controller');
const { authMiddleware } = require('../../middlewares');

const route = express.Router();

route.get('/', usersController.getUsers);

route.post('/', usersController.createUser);

route.get('/:id', usersController.getUser);

route.patch('/:id', usersController.updateUser);

route.patch('/:id/change-password', usersController.changePassword);

route.delete('/:id', usersController.deleteUser);

module.exports = route;