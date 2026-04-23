const express = require('express');
<<<<<<< HEAD
const authController = require('./auth-controller');
const { authMiddleware } = require('../../middlewares');

=======
>>>>>>> 50f25fa583fe26fd06cfcc90083ee2e09abd7fa7
const route = express.Router();
const authController = require('./auth-controller');
const authMiddleware = require('../../middlewares/authentication');

<<<<<<< HEAD
route.get('/', authMiddleware, authController.getAuthSessions);

route.get('/protected', authMiddleware, authController.testProtected);

route.get('/:id', authMiddleware, authController.getAuthSession);

route.post('/login', authController.login);

route.patch('/:id', authMiddleware, authController.updateAuthSession);

route.delete('/:id', authMiddleware, authController.deleteAuthSession);

module.exports = route;
=======
route.post('/login', authController.login);
route.post('/register', authController.register);

route.get('/', authMiddleware, authController.getAuthSessions);
route.get('/:id', authMiddleware, authController.getAuthSession);
route.get('/protected', authMiddleware, authController.testProtected);
route.patch('/:id', authMiddleware, authController.updateAuthSession);
route.delete('/:id', authMiddleware, authController.deleteAuthSession);

module.exports = route;
>>>>>>> 50f25fa583fe26fd06cfcc90083ee2e09abd7fa7
