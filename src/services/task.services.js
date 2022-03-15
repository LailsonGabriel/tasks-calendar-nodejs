const { Task } = require('../models');

const getAllTasksByUser = async (idUser) => {
  const tasks = await Task.findAll({ where: { idUser } });

  return tasks;
};

const getTaskById = async (id) => {
  const tasks = await Task.findAll({ where: { id } });

  return tasks;
};

module.exports = { getAllTasksByUser, getTaskById };
