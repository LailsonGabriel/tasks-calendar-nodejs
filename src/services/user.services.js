const { User } = require('../models');

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const registerUser = async (user) => {
  const user = await User.create({ ...user });

  return registerUser;
};

module.exports = { registerUser, getUserByEmail };
