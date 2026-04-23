const express = require('express');
const app = express();
const connectDB = require('./api/core/database');
const logger = require('./api/utils/logger');
const History = require('../src/api/components/histories/histories-service');

const PORT = 3000;

app.use(express.json());

connectDB();

const routes = require('./api/components/routes');
app.use(routes);
app.use(require('./api/components/topups/topups-route')); 

app.listen(PORT, () => {
  logger.info(`Server berjalan di http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
  console.error('ERROR MIDDLEWARE:', err);
  res.status(500).json({
    message: err.message || 'Internal Server Error',
  });
});
