const { Users } = require('../models');

const getUserByEmail = async (email) => {
  const user = await Users.findOne({ where: { email }, plain: true });

  return user;
};

const getAllUsers = async () => {
  const users = await Users.findAll();

  return users.map((usr) => usr.get({ plain: true }));
};

const registerUser = async (user) => {
  const register = await Users.create({ ...user });

  return register;
};

module.exports = { registerUser, getUserByEmail, getAllUsers };
