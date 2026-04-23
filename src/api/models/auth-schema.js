const mongoose = require('mongoose');

const Auth = mongoose.model(
  'Auth',
  new mongoose.Schema(
    {
    userId: {
      type: String,
      ref: 'Users',
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    token: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    loginAt: {
      type: Date,
      default: Date.now,
    },
    expiredAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
  )
);

module.exports = { Auth };