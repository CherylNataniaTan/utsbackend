const express = require('express');
const router = express.Router();
const controller = require('./histories-controller');

// GET semua riwayat
router.get('/', controller.getAll);

// GET detail riwayat
router.get('/:id', controller.getById);

// POST tambah riwayat
router.post('/', controller.create);

// PATCH update riwayat
router.patch('/:id', controller.update);

// DELETE hapus riwayat
router.delete('/:id', controller.remove);

module.exports = router;