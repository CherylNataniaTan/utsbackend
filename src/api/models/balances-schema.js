const mongoose = require('mongoose');

const balanceSchema = new mongoose.Schema({
  userId: {
    type: String, 
    required: false
  },
  balance: {
    type: Number,
    required: true,
    default: 0
  },
  currency: {
    type: String,
    default: 'IDR'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Balance', balanceSchema);