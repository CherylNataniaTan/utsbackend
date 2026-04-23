const accountsService = require("./accounts-service");

async function getAllAccounts(request, response, next) {
  try {
    const accounts = await accountsService.getAllAccounts();
    return response.status(200).json(accounts);
  } catch (error) {
    return next(error);
  }
}

async function getAccountByNumber(request, response, next) {
  try {
    const account = await accountsService.getAccountByNumber(
      request.params.accountNumber
    );

    if (!account) {
      return response.status(404).json({ message: "Account not found" });
    }

    return response.status(200).json(account);
  } catch (error) {
    return next(error);
  }
}

async function createAccount(request, response, next) {
  try {
    const { accountName, ownerName, accountType } = request.body;

    if (!accountName) {
      return response.status(400).json({ message: "Usernam tidak boleh kosong" });
    }

    if (!ownerName) {
      return response.status(400).json({ message: "Nama pengguna wajib diisi" });
    }

    const account = await accountsService.createAccount(
      accountName,
      ownerName,
      accountType
    );

    return response.status(201).json(account);
  } catch (error) {
    return next(error);
  }
}

async function updateAccount(request, response, next) {
  try {
    const { accountName, ownerName, accountType } = request.body;

    const existing = await accountsService.getAccountByNumber(
      request.params.accountNumber
    );

    if (!existing) {
      return response.status(404).json({ message: "Tidak bisa update data, terjadi kesalahan" });
    }

    await accountsService.updateAccount(
      request.params.accountNumber,
      accountName,
      ownerName,
      accountType
    );

    return response
      .status(200)
      .json({ message: "Data akun berhasil di update " });
  } catch (error) {
    return next(error);
  }
}

async function deleteAccount(request, response, next) {
  try {
    const existing = await accountsService.getAccountByNumber(
      request.params.accountNumber
    );

    if (!existing) {
      return response.status(404).json({ message: "Terjadi kesalahan, silahkan coba lagi" });
    }

    await accountsService.deleteAccount(request.params.accountNumber);

    return response
      .status(200)
      .json({ message: "Akun berhasil dihapus" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAllAccounts,
  getAccountByNumber,
  createAccount,
  updateAccount,
  deleteAccount,
};