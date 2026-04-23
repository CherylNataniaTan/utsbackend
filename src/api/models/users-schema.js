<<<<<<< HEAD
const mongoose = require('mongoose');

const Users = mongoose.model(
  'Users',
  new mongoose.Schema(
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
=======
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
>>>>>>> 50f25fa583fe26fd06cfcc90083ee2e09abd7fa7
    accountNumber: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  {
    timestamps: true,
  }
<<<<<<< HEAD
  )
);

module.exports = { Users };
=======
);

module.exports = mongoose.model("Users", userSchema);
>>>>>>> 50f25fa583fe26fd06cfcc90083ee2e09abd7fa7
