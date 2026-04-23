const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./routes/route");
const logger = require('./api/utils/logger');
const mongoose = require("mongoose");

// Parsing JSON body MUST be before routing
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  logger.info(`Server berjalan di http://localhost:${PORT}`);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/backend-uts")
  .then(() => {
    logger.info(`MongoDB Connected`);
  })
  .catch((err) => {
    console.log("MongoDB error:", err.message);
  });


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
});

module.exports = app;

