const express = require('express');
const route = express.Router();
const authController = require('./auth-controller');
const authMiddleware = require('../../middlewares/authentication');

route.post('/login', authController.login);
route.post('/register', authController.register);

route.get('/', authMiddleware, authController.getAuthSessions);
route.get('/:id', authMiddleware, authController.getAuthSession);
route.get('/protected', authMiddleware, authController.testProtected);
route.patch('/:id', authMiddleware, authController.updateAuthSession);
route.delete('/:id', authMiddleware, authController.deleteAuthSession);

module.exports = route;