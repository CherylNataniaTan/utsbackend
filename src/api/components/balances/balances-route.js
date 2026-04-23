const express = require('express');
const router = express.Router();
const balancesController = require('./balances-controller');

router.get("/", balancesController.getAllBalances);
router.post("/", balancesController.createBalance);
router.get("/:accountNumber", balancesController.getBalanceByAccountNumber);
router.patch("/:accountNumber", balancesController.updateBalance);

module.exports = router;