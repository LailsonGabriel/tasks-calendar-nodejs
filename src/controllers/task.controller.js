const rescue = require('express-rescue');
const taskService = require('../services/task.services');

const getAllTasks = rescue(async (req, res) => {
  const { id } = req.params;
  const tasks = await taskService.getAllTasksByUser(id);

  res.status(200).json(tasks);
});

const createTask = rescue(async (req, res) => {
  const taskBody = req.body;

  const task = await taskService.createTask(taskBody);

  res.status(201).json(task);
});

module.exports = { getAllTasks, createTask };
