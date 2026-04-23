const express = require('express');
const router = express.Router();

const historiesRoute = require('./histories/histories-route')
const topupsRoute = require('./topups/topups-route');

router.use(historiesRoute);
router.use(topupsRoute);

module.exports = router;
