const mongoose = require('mongoose');

const balanceSchema = new mongoose.Schema({
  accountNumber: {
    type: String, 
    required: true
  },
  balance: {
    type: Number,
    required: true,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Balances = mongoose.model('Balance', balanceSchema);
module.exports = { Balances };