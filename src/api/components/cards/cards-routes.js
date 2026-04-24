const express = require("express");
const router = express.Router();
const ctrl = require("./cards-controller");

router.get('/', ctrl.getCards);
router.get('/:id', ctrl.getCard);
router.post('/', ctrl.createCard);
router.put('/:id', ctrl.updateCard);
router.delete('/:id', ctrl.deleteCard);

module.exports = router;