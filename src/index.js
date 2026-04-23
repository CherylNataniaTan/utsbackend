const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// =====================
// ACCOUNTS
// =====================
app.get("/accounts", (req, res) => {
  res.json({ message: "GET semua rekening" });
});

app.get("/accounts/:id", (req, res) => {
  res.json({ message: `GET rekening dengan ID: ${req.params.id}` });
});

app.post("/accounts", (req, res) => {
  res.status(201).json({ message: "POST buat rekening baru", data: req.body });
});

app.patch("/accounts/:id", (req, res) => {
  res.json({ message: `PATCH update rekening ID: ${req.params.id}`, data: req.body });
});

app.delete("/accounts/:id", (req, res) => {
  res.json({ message: `DELETE rekening ID: ${req.params.id}` });
});

// =====================
// BALANCES
// =====================
app.get("/balances", (req, res) => {
  res.json({ message: "GET semua saldo" });
});

app.get("/balances/:id", (req, res) => {
  res.json({ message: `GET saldo dengan ID: ${req.params.id}` });
});

app.post("/balances", (req, res) => {
  res.status(201).json({ message: "POST tambah data saldo", data: req.body });
});

app.patch("/balances/:id", (req, res) => {
  res.json({ message: `PATCH update saldo ID: ${req.params.id}`, data: req.body });
});

app.delete("/balances/:id", (req, res) => {
  res.json({ message: `DELETE saldo ID: ${req.params.id}` });
});

// =====================
// SECURITY
// =====================
app.get("/security", (req, res) => {
  res.json({ message: "GET semua data keamanan" });
});

app.get("/security/:id", (req, res) => {
  res.json({ message: `GET keamanan ID: ${req.params.id}` });
});

app.post("/security", (req, res) => {
  res.status(201).json({ message: "POST tambah pengaturan keamanan", data: req.body });
});

app.patch("/security/:id", (req, res) => {
  res.json({ message: `PATCH update keamanan ID: ${req.params.id}`, data: req.body });
});

app.delete("/security/:id", (req, res) => {
  res.json({ message: `DELETE keamanan ID: ${req.params.id}` });
});

// =====================
// CARDS
// =====================
app.get("/cards", (req, res) => {
  res.json({ message: "GET semua kartu" });
});

app.get("/cards/:id", (req, res) => {
  res.json({ message: `GET kartu ID: ${req.params.id}` });
});

app.post("/cards", (req, res) => {
  res.status(201).json({ message: "POST tambah kartu baru", data: req.body });
});

app.patch("/cards/:id", (req, res) => {
  res.json({ message: `PATCH update kartu ID: ${req.params.id}`, data: req.body });
});

app.delete("/cards/:id", (req, res) => {
  res.json({ message: `DELETE kartu ID: ${req.params.id}` });
});

// =====================
// HISTORIES
// =====================
app.get("/histories", (req, res) => {
  res.json({ message: "GET semua riwayat aktivitas" });
});

app.get("/histories/:id", (req, res) => {
  res.json({ message: `GET riwayat ID: ${req.params.id}` });
});

app.post("/histories", (req, res) => {
  res.status(201).json({ message: "POST tambah riwayat baru", data: req.body });
});

app.patch("/histories/:id", (req, res) => {
  res.json({ message: `PATCH update riwayat ID: ${req.params.id}`, data: req.body });
});

app.delete("/histories/:id", (req, res) => {
  res.json({ message: `DELETE riwayat ID: ${req.params.id}` });
});

// =====================
// TOPUPS
// =====================
app.get("/topups", (req, res) => {
  res.json({ message: "GET semua data top up" });
});

app.get("/topups/:id", (req, res) => {
  res.json({ message: `GET top up ID: ${req.params.id}` });
});

app.post("/topups", (req, res) => {
  res.status(201).json({ message: "POST isi saldo / top up baru", data: req.body });
});

app.patch("/topups/:id", (req, res) => {
  res.json({ message: `PATCH update status top up ID: ${req.params.id}`, data: req.body });
});

app.delete("/topups/:id", (req, res) => {
  res.json({ message: `DELETE top up ID: ${req.params.id}` });
});

// =====================
// USERS
// =====================
app.get("/users", (req, res) => {
  res.json({ message: "GET semua user" });
});

app.get("/users/:id", (req, res) => {
  res.json({ message: `GET user ID: ${req.params.id}` });
});

app.post("/users", (req, res) => {
  res.status(201).json({ message: "POST tambah user baru", data: req.body });
});

app.patch("/users/:id", (req, res) => {
  res.json({ message: `PATCH update user ID: ${req.params.id}`, data: req.body });
});

app.delete("/users/:id", (req, res) => {
  res.json({ message: `DELETE user ID: ${req.params.id}` });
});

// =====================
// AUTH
// =====================
app.get("/auth", (req, res) => {
  res.json({ message: "GET semua data autentikasi" });
});

app.get("/auth/:id", (req, res) => {
  res.json({ message: `GET auth ID: ${req.params.id}` });
});

app.post("/auth", (req, res) => {
  res.status(201).json({ message: "POST login / register user", data: req.body });
});

app.patch("/auth/:id", (req, res) => {
  res.json({ message: `PATCH update data login ID: ${req.params.id}`, data: req.body });
});

app.delete("/auth/:id", (req, res) => {
  res.json({ message: `DELETE data autentikasi ID: ${req.params.id}` });
});

// =====================
// TRANSACTIONS
// =====================
app.get("/transactions", (req, res) => {
  res.json({ message: "GET semua transaksi" });
});

app.get("/transactions/:id", (req, res) => {
  res.json({ message: `GET transaksi ID: ${req.params.id}` });
});

app.post("/transactions", (req, res) => {
  res.status(201).json({ message: "POST buat transaksi baru", data: req.body });
});

app.patch("/transactions/:id", (req, res) => {
  res.json({ message: `PATCH update transaksi ID: ${req.params.id}`, data: req.body });
});

app.delete("/transactions/:id", (req, res) => {
  res.json({ message: `DELETE transaksi ID: ${req.params.id}` });
});

// =====================
// TRANSFERS
// =====================
app.get("/transfers", (req, res) => {
  res.json({ message: "GET semua data transfer" });
});

app.get("/transfers/:id", (req, res) => {
  res.json({ message: `GET transfer ID: ${req.params.id}` });
});

app.post("/transfers", (req, res) => {
  res.status(201).json({ message: "POST lakukan transfer uang", data: req.body });
});

app.patch("/transfers/:id", (req, res) => {
  res.json({ message: `PATCH update status transfer ID: ${req.params.id}`, data: req.body });
});

app.delete("/transfers/:id", (req, res) => {
  res.json({ message: `DELETE transfer ID: ${req.params.id}` });
});

// =====================
// START SERVER
// =====================
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;