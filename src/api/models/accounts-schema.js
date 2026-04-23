<<<<<<< HEAD
// Fix #5: was exporting a factory function (db) => db.model(...), now exports model directly
const mongoose = require('mongoose');

const accountsSchema = new mongoose.Schema({
  accountNumber: { 
    type: String, 
    unique: true, 
    required: true 
  },
  accountName: { 
    type: String, 
    required: true 
  },
  accountType: { 
    type: String, 
    enum: ['Tabungan', 'Giro', 'Deposito'], 
    default: 'Tabungan' 
  },
  ownerName: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Accounts', accountsSchema);
=======
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
>>>>>>> 50f25fa583fe26fd06cfcc90083ee2e09abd7fa7
