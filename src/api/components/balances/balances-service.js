const balancesRepository = require('./balances-repository');
const accountsRepository = require('../accounts/accounts-repository');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getAllBalances() {
  return await balancesRepository.findAll();
}

async function getBalanceByAccountNumber(accountNumber) {
  return await balancesRepository.findByAccountNumber(accountNumber);
}

async function createBalance(data) {
  const { accountNumber, balance } = data;

  // validasi dasar
  if (!accountNumber) {
    throw errorResponder(errorTypes.VALIDATION_ERROR, 'accountNumber wajib diisi');
  }

  // cek rekening ada atau tidak
  const account = await accountsRepository.findByAccountNumber(accountNumber);
  if (!account) {
    throw errorResponder(errorTypes.NOT_FOUND, 'Rekening tidak ditemukan');
  }

  // cek apakah balance sudah ada
  const existing = await balancesRepository.findByAccountNumber(accountNumber);
  if (existing) {
    throw errorResponder(errorTypes.CONFLICT, 'Balance sudah ada untuk rekening ini');
  }

  const payload = {
    accountNumber,
    balance: balance || 0,
    lastUpdated: new Date(),
  };

  return await balancesRepository.create(payload);
}

async function updateBalance(accountNumber, data) {
  // cek balance ada atau tidak
  const existing = await balancesRepository.findByAccountNumber(accountNumber);
  if (!existing) {
    return null;
  }

  // hanya field tertentu yang boleh diupdate
  const allowedFields = ['balance'];
  const filtered = {};

  for (let key of allowedFields) {
    if (data[key] !== undefined) {
      filtered[key] = data[key];
    }
  }

  // update timestamp otomatis
  filtered.lastUpdated = new Date();

  return await balancesRepository.updateByAccountNumber(accountNumber, filtered);
}

module.exports = {
  getAllBalances,
  getBalanceByAccountNumber,
  createBalance,
  updateBalance,
};