console.log("🔥 SERVICE KELOAD 🔥");
const accountsRepository = require('./accounts-repository');

// Generate nomor rekening random 10 digit
function generateAccountNumber() {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

// Ambil semua akun
async function getAllAccounts() {
  return await accountsRepository.findAll();
}

// Ambil akun berdasarkan nomor rekening
async function getAccountByNumber(accountNumber) {
  return await accountsRepository.findByAccountNumber(accountNumber);
}

// Create account (dengan anti-duplicate sederhana)
async function createAccount(data) {
  const { accountName, ownerName, accountType } = data;

  let accountNumber;
  let existing;

  // Cegah duplicate nomor rekening
  do {
    accountNumber = generateAccountNumber();
    existing = await accountsRepository.findByAccountNumber(accountNumber);
  } while (existing);

  const payload = {
    accountNumber,
    accountName,
    ownerName,
    accountType: accountType || 'Tabungan',
    createdAt: new Date(),
  };

  return await accountsRepository.create(payload);
}

// Update account (hanya field tertentu)
async function updateAccount(accountNumber, data) {
  const allowedFields = ['accountName', 'ownerName', 'accountType'];
  const filteredData = {};

  for (let key of allowedFields) {
    if (data[key] !== undefined) {
      filteredData[key] = data[key];
    }
  }

  return await accountsRepository.updateByAccountNumber(accountNumber, filteredData);
}

// Delete account
async function deleteAccount(accountNumber) {
  return await accountsRepository.deleteByAccountNumber(accountNumber);
}

module.exports = {
  getAllAccounts,
  getAccountByNumber,
  createAccount,
  updateAccount,
  deleteAccount,
};