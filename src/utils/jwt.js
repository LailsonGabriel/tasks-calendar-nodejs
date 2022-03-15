const jwt = require('jsonwebtoken');

// Não é uma boa prática colocar o segredo aqui, mas como é um teste. Estou atribuindo a uma variável para termos de funcionabilidade
const JWT_SECRET = 'segredo!';

const jsonConfig = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

const sign = (payload) => jwt.sign(payload, JWT_SECRET, jsonConfig);

const verify = (token) =>
  jwt.verify(token, JWT_SECRET, { algorithms: 'HS256' });

module.exports = { sign, verify };
