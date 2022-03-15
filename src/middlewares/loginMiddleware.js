const userService = require('../services/user.services');

const loginMiddleware = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await userService.getAllUsers();

  if (user.some((usr) => usr.email !== email || usr.password !== password)) {
    return res.status(402).json({ message: 'Email ou senha inválidos' });
  }

  next();
};

module.exports = loginMiddleware;
