const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authRepository = require('./auth-repository');

const SECRET_KEY = process.env.JWT_SECRET || 'RANDOM_STRING';
const TOKEN_EXPIRY = '1d';

function generateToken(email) {
  const payload = {
    email,
    timestamp: Date.now(),
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: TOKEN_EXPIRY });
}

function getExpiryDate() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date;
}

async function getAuthSessions() {
  return authRepository.getAuthSessions();
}

async function getAuthSession(id) {
  return authRepository.getAuthSession(id);
}

async function checkLogin(email, password) {
  const user = await authRepository.getUserByEmail(email);

<<<<<<< HEAD
  const userPass = user ? user.password : '<RANDOM>';
  const loginPassed = await bcrypt.compare(password, userPass);
=======
  if (!user) {
    return null;
  }
>>>>>>> 50f25fa583fe26fd06cfcc90083ee2e09abd7fa7

  const loginPassed = await bcrypt.compare(password, user.password);

  if (loginPassed) {
    const token = generateToken(user.email);
    const expiredAt = getExpiryDate();

    const existingSession = await authRepository.getAuthByUserId(user._id);

    if (existingSession) {
      await authRepository.updateAuthSession(existingSession._id, token, expiredAt);
    } else {
      await authRepository.createAuthSession(user._id, user.email, token, expiredAt);
    }

    return {
      email: user.email,
      full_name: user.fullName,
      token,
    };
  }

  return null;
}

async function updateAuthToken(id, email) {
  const token = generateToken(email);
  const expiredAt = getExpiryDate();
  const result = await authRepository.updateAuthSession(id, token, expiredAt);
  return result.modifiedCount > 0;
}

async function deleteAuthSession(id) {
  const result = await authRepository.deleteAuthSession(id);
  return result.deletedCount > 0;
}

module.exports = {
  getAuthSessions,
  getAuthSession,
  checkLogin,
  updateAuthToken,
  deleteAuthSession,
};