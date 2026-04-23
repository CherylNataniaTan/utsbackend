const balancesService = require("./balances-service");

async function getBalances(request, response, next) {
  try {
    const balances = await balancesService.getAllBalances();
    return response.status(200).json(balances);
  } catch (error) {
    return next(error);
  }
}

async function getBalance(request, response, next) {
  try {
    const balance = await balancesService.getBalanceByAccountNumber(
      request.params.accountNumber
    );

    if (!balance) {
      return response.status(404).json({ message: "Balance not found" });
    }

    return response.status(200).json(balance);
  } catch (error) {
    return next(error);
  }
}

async function createBalance(request, response, next) {
  try {
    const { accountNumber, balance } = request.body;

    if (!accountNumber) {
      return response
        .status(400)
        .json({ message: "Account number is required" });
    }

    const newBalance = await balancesService.createBalance(
      accountNumber,
      balance
    );

    return response.status(201).json(newBalance);
  } catch (error) {
    return next(error);
  }
}

async function updateBalance(request, response, next) {
  try {
    const { balance } = request.body;

    const existing = await balancesService.getBalanceByAccountNumber(
      request.params.accountNumber
    );

    if (!existing) {
      return response.status(404).json({ message: "Balance not found" });
    }

    await balancesService.updateBalance(
      request.params.accountNumber,
      balance
    );

    return response
      .status(200)
      .json({ message: "Balance updated successfully" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getBalances,
  getBalance,
  createBalance,
  updateBalance,
};