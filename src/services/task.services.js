const { Tasks } = require('../models');

const getAllTasksByUser = async (idUser) => {
  const tasks = await Tasks.findAll({ where: { idUser } });

  return tasks;
};

const getTaskById = async (id) => {
  const tasks = await Tasks.findOne({ where: { id } });

  return tasks;
};

const createTask = async (body) => {
  const create = await Tasks.create({
    ...body,
    dateAndHour: new Date(body.dateAndHour),
  });

  return create;
};

module.exports = { getAllTasksByUser, getTaskById, createTask };
