const express = require('express');
const router = express.Router();
const controller = require('./transfer-controller');

// endpoint transfers
router.get('/', controller.getAllTransfers);
router.get('/:id', controller.getTransferById);
router.post('/', controller.createTransfer);
router.patch('/:id', controller.updateTransfer);
router.delete('/:id', controller.deleteTransfer);

module.exports = router;