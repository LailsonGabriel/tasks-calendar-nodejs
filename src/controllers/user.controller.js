const rescue = require('express-rescue');
const userService = require('../services/user.services');
const jwt = require('../utils/jwt');

const registerUser = rescue(async (req, res) => {
  const user = req.body;

  const token = jwt.sign({ email: user.email });

  const userRegistered = await userService.registerUser(user);
  const { email, id, name } = userRegistered.dataValues;

  return res.status(201).json({ token, email, id, name });
});

const getUser = rescue(async (req, res) => {
  const { email } = req.body;

  const token = jwt.sign({ email });

  return res.status(200).json({ token });
});

module.exports = { registerUser, getUser };
