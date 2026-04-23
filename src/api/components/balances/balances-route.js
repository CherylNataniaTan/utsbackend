const express = require('express');
const balancesController = require('./balances-controller');

const route = express.Router();

console.log("Balances route loaded");

route.get('/', balancesController.getAllBalances);
route.post('/', balancesController.createBalance);
route.get('/:accountNumber', balancesController.getBalanceByAccountNumber);
route.patch('/:accountNumber', balancesController.updateBalance);

module.exports = route;