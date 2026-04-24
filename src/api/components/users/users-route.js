const express = require('express');
const router = express.Router();
const usersController = require('./users-controller');
const authMiddleware = require('../../middlewares/authentication');

router.get('/', authMiddleware, usersController.getUsers);
router.post('/', usersController.createUser);
router.get('/:id', authMiddleware, usersController.getUser);
router.patch('/:id', authMiddleware, usersController.updateUser);
router.patch('/:id/change-password', authMiddleware, usersController.changePassword);
router.delete('/:id', authMiddleware, usersController.deleteUser);

module.exports = router;