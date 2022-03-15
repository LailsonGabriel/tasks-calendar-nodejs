const rescue = require('express-rescue');
const userService = require('../services/user.services');
const jwt = require('../utils/jwt');

const registerUser = rescue(async (req, res) => {
  const user = req.body;

  const token = jwt.sign({ email: user.email });

  await userService.registerUser(user);

  return res.status(201).json({ token });
});

const getUser = rescue(async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.getUserByEmail(email);

  if (user.email !== email || user.password !== password) {
    return res.status(402).json({ message: 'Email ou senha errados!' });
  }

  const token = jwt.sign({ email });

  return res.status(200).json({ token });
});

module.exports = { registerUser, getUser };
