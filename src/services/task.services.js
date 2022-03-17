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

const updateTask = async (body, id) => {
  const prevTask = await getTaskById(id);
  await Tasks.update({ ...body }, { where: { id } });
  return { ...prevTask.dataValues, ...body };
};

const deleteTask = async (id) => {
  const task = await Tasks.destroy({ where: { id } });

  return task;
};

module.exports = {
  getAllTasksByUser,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
};
