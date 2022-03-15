const { Users } = require('../models');

const getUserByEmail = async (email) => {
  const user = await Users.findOne({ where: { email } });

  return user.dataValues;
};

const registerUser = async (user) => {
  const register = await Users.create({ ...user });

  return register;
};

module.exports = { registerUser, getUserByEmail };
