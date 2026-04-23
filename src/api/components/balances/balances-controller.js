const balancesService = require("./balances-service");

async function getAllBalances(request, response, next) {
  try {
    const balances = await balancesService.getAllBalances();
    return response.status(200).json(balances);
  } catch (error) {
    return next(error);
  }
}

async function getBalanceByAccountNumber(request, response, next) {
  try {
    const balance = await balancesService.getBalanceByAccountNumber(
      request.params.accountNumber
    );

    if (!balance) {
      return response.status(404).json({ message: "Terjadi kesalahan, Akun tidak ditemukan" });
    }

    return response.status(200).json(balance);
  } catch (error) {
    return next(error);
  }
}

async function createBalance(request, response, next) {
  try {
    const result = await balancesService.createBalance(request.body);
    return response.status(201).json(result);
  } catch (error) {
    return next(error);
  }
}

async function updateBalance(request, response, next) {
  try {
    const updated = await balancesService.updateBalance(
      request.params.accountNumber,
      request.body
    );

    if (!updated) {
      return response.status(404).json({ message: "Tidak berhasil update saldo" });
    }

    return response.status(200).json(updated);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAllBalances,
  getBalanceByAccountNumber,
  createBalance,
  updateBalance,
};