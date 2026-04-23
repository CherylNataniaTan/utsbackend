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
