// module.exports = (db) =>
//   db.model(
//     'Users',
//     db.Schema(
//       {
//         email: {
//           type: String,
//           required: true,
//           unique: true,
//           lowercase: true,
//           trim: true,
//         },
//         password: {
//           type: String,
//           required: true,
//         },
//         fullName: {
//           type: String,
//           required: true,
//           trim: true,
//         },
//         phoneNumber: {
//           type: String,
//           trim: true,
//           default: null,
//         },
//         balance: {
//           type: Number,
//           default: 0,
//         },
//         accountNumber: {
//           type: String,
//           unique: true,
//           sparse: true,
//         },
//       },
//       {
//         timestamps: true,
//       }
//     )
//   );

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
      default: null,
    },
    balance: {
      type: Number,
      default: 0,
    },
    accountNumber: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);