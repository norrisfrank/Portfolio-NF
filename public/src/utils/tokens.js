'use strict';

const jwt = require('jsonwebtoken');
const env = require('../config/env');

/**
 * @param {{ id: string, email: string, role: string }} payload
 */
function signAccessToken(payload) {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_ACCESS_EXPIRES_IN,
    issuer: 'norris-portfolio-api',
  });
}

/**
 * @param {{ id: string }} payload
 */
function signRefreshToken(payload) {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET, {
    expiresIn: env.JWT_REFRESH_EXPIRES_IN,
    issuer: 'norris-portfolio-api',
  });
}

/**
 * @throws {JsonWebTokenError | TokenExpiredError}
 */
function verifyAccessToken(token) {
  return jwt.verify(token, env.JWT_SECRET, {
    issuer: 'norris-portfolio-api',
  });
}

/**
 * @throws {JsonWebTokenError | TokenExpiredError}
 */
function verifyRefreshToken(token) {
  return jwt.verify(token, env.JWT_REFRESH_SECRET, {
    issuer: 'norris-portfolio-api',
  });
}

module.exports = {
  signAccessToken,
  signRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
