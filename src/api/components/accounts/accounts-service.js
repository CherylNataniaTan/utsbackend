const accountsRepository = require("./accounts-repository");


function generateAccountNumber() {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

async function getAllAccounts() {
  return accountsRepository.findAll();
}

async function getAccountByNumber(accountNumber) {
  return accountsRepository.findByAccountNumber(accountNumber);
}

async function createAccount(accountName, ownerName, accountType) {
  let accountNumber = generateAccountNumber();

  const existing = await accountsRepository.findByAccountNumber(accountNumber);
  if (existing) {
    accountNumber = generateAccountNumber();
  }

  const newAccount = {
    accountNumber,
    accountName,
    ownerName,
    accountType: accountType || "Tabungan",
    createdAt: new Date(),
  };

  return accountsRepository.create(newAccount);
}

async function updateAccount(accountNumber, accountName, ownerName, accountType) {
  const existing = await accountsRepository.findByAccountNumber(accountNumber);

  if (!existing) {
    return null;
  }

  const updatedData = {
    accountName,
    ownerName,
    accountType,
  };

  return accountsRepository.updateByAccountNumber(accountNumber, updatedData);
}

async function deleteAccount(accountNumber) {
  const existing = await accountsRepository.findByAccountNumber(accountNumber);

  if (!existing) {
    return null;
  }

  return accountsRepository.deleteByAccountNumber(accountNumber);
}

module.exports = {
  getAllAccounts,
  getAccountByNumber,
  createAccount,
  updateAccount,
  deleteAccount,
};