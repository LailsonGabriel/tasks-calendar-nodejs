const { getUserByEmail } = require('../services/user.services');

const registerMiddleware = async (req, res, next) => {
  Object.keys(req.body).forEach((field) => {
    if (!req.body[field] || req.body[field] === '')
      return res.status(402).json({ message: 'Preencha todos os campos' });
  });

  next();
};

const verifyEmailExist = async (req, res, next) => {
  const existInDB = await getUserByEmail(req.body.email);

  if (existInDB) {
    return res.status(400).json({ message: 'Esse email já está cadastrado!' });
  }

  next();
};

module.exports = { registerMiddleware, verifyEmailExist };
