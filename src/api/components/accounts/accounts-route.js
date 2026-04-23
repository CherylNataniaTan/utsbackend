const express = require('express');
const accountsController = require('./accounts-controller');

const route = express.Router();

console.log("Accounts route loaded");

route.get('/', accountsController.getAllAccounts);
route.post('/', accountsController.createAccount);
route.get('/:accountNumber', accountsController.getAccountByNumber);
route.patch('/:accountNumber', accountsController.updateAccount);
route.delete('/:accountNumber', accountsController.deleteAccount);

module.exports = route;