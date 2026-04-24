const balancesRepository = require('./balances-repository');
const accountsRepository = require('../accounts/accounts-repository');
const { errorResponder, errorTypes } = require('../../core/errors');

async function getAllBalances() {
  return await balancesRepository.findAll();
}

async function getBalanceByAccountNumber(accountNumber) {
  return await balancesRepository.findByAccountNumber(accountNumber);
}

async function createBalance(data) {
  const { accountNumber, balance } = data;

  if (!accountNumber) {
    throw errorResponder(errorTypes.VALIDATION_ERROR, 'accountNumber wajib diisi');
  }

  const account = await accountsRepository.findByAccountNumber(accountNumber);
  if (!account) {
    throw errorResponder(errorTypes.NOT_FOUND, 'Rekening tidak ditemukan');
  }

  const existing = await balancesRepository.findByAccountNumber(accountNumber);
  if (existing) {
    throw errorResponder(errorTypes.CONFLICT, 'Balance sudah ada untuk rekening ini');
  }

  const payload = {
    userId: account.userId,
    accountNumber,
    balance: balance || 0,
    lastUpdated: new Date(),
  };

  return await balancesRepository.create(payload);
}

async function updateBalance(accountNumber, data) {
  const existing = await balancesRepository.findByAccountNumber(accountNumber);
  if (!existing) {
    return null;
  }

  const allowedFields = ['balance'];
  const filtered = {};

  for (let key of allowedFields) {
    if (data[key] !== undefined) {
      filtered[key] = data[key];
    }
  }

  filtered.lastUpdated = new Date();

  return await balancesRepository.updateByAccountNumber(accountNumber, filtered);
}

module.exports = {
  getAllBalances,
  getBalanceByAccountNumber,
  createBalance,
  updateBalance,
};