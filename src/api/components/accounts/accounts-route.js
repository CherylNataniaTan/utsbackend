const express = require("express");
const router = express.Router();
const accountsController = require("./accounts-controller");

router.get("/", accountsController.getAllAccounts);
router.post("/", accountsController.createAccount);
router.get("/:accountNumber", accountsController.getAccountByNumber);
router.patch("/:accountNumber", accountsController.updateAccount);
router.delete("/:accountNumber", accountsController.deleteAccount);

module.exports = router;