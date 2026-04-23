const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// =====================
// SECURITY
// =====================
app.get("/security", (req, res) => {
  return res.json({ message: "GET semua data keamanan" });
});

app.get("/security/:id", (req, res) => {
  return res.json({ message: `GET keamanan ID: ${req.params.id}` });
});

app.post("/security", (req, res) => {
  return res.status(201).json({
    message: "POST tambah pengaturan keamanan",
    data: req.body,
  });
});

app.patch("/security/:id", (req, res) => {
  return res.json({
    message: `PATCH update keamanan ID: ${req.params.id}`,
    data: req.body,
  });
});

app.delete("/security/:id", (req, res) => {
  return res.json({
    message: `DELETE keamanan ID: ${req.params.id}`,
  });
});

// =====================
// CARDS
// =====================
app.get("/cards", (req, res) => {
  return res.json({ message: "GET semua kartu" });
});

app.get("/cards/:id", (req, res) => {
  return res.json({ message: `GET kartu ID: ${req.params.id}` });
});

app.post("/cards", (req, res) => {
  return res.status(201).json({
    message: "POST tambah kartu baru",
    data: req.body,
  });
});

app.patch("/cards/:id", (req, res) => {
  return res.json({
    message: `PATCH update kartu ID: ${req.params.id}`,
    data: req.body,
  });
});

app.delete("/cards/:id", (req, res) => {
  return res.json({
    message: `DELETE kartu ID: ${req.params.id}`,
  });
});

// =====================
// START SERVER
// =====================
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;