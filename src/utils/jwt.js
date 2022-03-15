const jwt = require('jsonwebtoken');

const JWT_SECRET = 'segredo!';

const jsonConfig = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

const sign = (payload) => jwt.sign(payload, JWT_SECRET, jsonConfig);

const verify = (token) =>
  jwt.verify(token, JWT_SECRET, { algorithms: 'HS256' });

module.exports = { sign, verify };
