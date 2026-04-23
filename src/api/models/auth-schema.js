<<<<<<< HEAD
const mongoose = require('mongoose');

const Auth = mongoose.model(
  'Auth',
  new mongoose.Schema(
    {
    userId: {
      type: String,
      ref: 'Users',
=======
const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
>>>>>>> 50f25fa583fe26fd06cfcc90083ee2e09abd7fa7
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
<<<<<<< HEAD
  )
);

module.exports = { Auth };
=======
);

module.exports = mongoose.model("Auth", authSchema);
>>>>>>> 50f25fa583fe26fd06cfcc90083ee2e09abd7fa7
