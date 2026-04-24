// module.exports = (db) =>
//   db.model(
//     'Accounts',
//     db.Schema({
//       accountNumber: { 
//         type: String, 
//         unique: true, 
//         required: true },
//       accountName: { 
//         type: String, 
//         required: 
//         true },
//       accountType: { 
//         type: String, 
//         enum: ['Tabungan', 'Giro', 'Deposito'], 
//         default: 'Tabungan' },
//       ownerName: String,
//       createdAt: { type: Date, default: Date.now }
//     })
//   );

const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    userId: {
    type: Number,
    required: true,
  },
  accountNumber: { type: String, unique: true, required: true },
  accountName: { type: String, required: true },
  accountType: {
    type: String,
    enum: ["Tabungan", "Giro", "Deposito"],
    default: "Tabungan",
  },
  ownerName: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Accounts", accountSchema);