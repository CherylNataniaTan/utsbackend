const mongoose = require('mongoose');

const transferSchema = new mongoose.Schema({
  fromAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Accounts',
    required: true
  },
  toAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Accounts',
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['pending', 'success', 'failed'],
    default: 'pending'
  },
  description: {
    type: String,
    default: ''
  }
}, {
  timestamps: true // otomatis createdAt & updatedAt
});

module.exports = mongoose.model('Transfer', transferSchema);