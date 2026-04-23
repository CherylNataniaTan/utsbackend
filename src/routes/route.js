const express = require("express");
const router = express.Router();

// Import all component routes
const authRoute = require("../api/components/auth/auth-route");
const accountsRoute = require("../api/components/accounts/accounts-route");
const balancesRoute = require("../api/components/balances/balances-route");
const cardsRoute = require("../api/components/cards/cards-routes");
const historiesRoute = require("../api/components/histories/histories-route");
const securityRoute = require("../api/components/security/security-routes");
const topupsRoute = require("../api/components/topups/topups-route");
const transactionsRoute = require("../api/components/transactions/transactions-routes");
const transferRoute = require("../api/components/transfers/transfer-route");
const usersRoute = require("../api/components/users/users-route");

// JWT Middleware
const verifyToken = require("../api/middlewares/authentication");

router.use("/auth", authRoute);

router.use("/users", verifyToken, usersRoute);
router.use("/accounts", verifyToken, accountsRoute);
router.use("/balances", verifyToken, balancesRoute);
router.use("/cards", verifyToken, cardsRoute);
router.use("/histories", verifyToken, historiesRoute);
router.use("/security", verifyToken, securityRoute);
router.use("/topups", verifyToken, topupsRoute);
router.use("/transactions", verifyToken, transactionsRoute);
router.use("/transfers", verifyToken, transferRoute);

router.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
});

module.exports = router;