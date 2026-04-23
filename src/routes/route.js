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

router.use("/api/auth", authRoute);

router.use("/api/users", verifyToken, usersRoute);
router.use("/api/accounts", verifyToken, accountsRoute);
router.use("/api/balances", verifyToken, balancesRoute);
router.use("/api/cards", verifyToken, cardsRoute);
router.use("/api/histories", verifyToken, historiesRoute);
router.use("/api/security", verifyToken, securityRoute);
router.use("/api/topups", verifyToken, topupsRoute);
router.use("/api/transactions", verifyToken, transactionsRoute);
router.use("/api/transfers", verifyToken, transferRoute);

router.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
});

module.exports = router;