const { Task } = require('../models');

const getAllTasksByUser = async (idUser) => {
  const tasks = await Task.findAll({ where: { idUser } });

  return tasks;
};

const getTaskById = async (id) => {
  const tasks = await Task.findAll({ where: { id } });

  return tasks;
};

const createTask = async (body) => {
  const create = await Task.create({ ...body });

  return create;
};

module.exports = { getAllTasksByUser, getTaskById, createTask };
