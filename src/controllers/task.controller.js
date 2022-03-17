const rescue = require('express-rescue');
const taskService = require('../services/task.services');

const getAllTasks = rescue(async (req, res) => {
  const { id } = req.params;
  const tasks = await taskService.getAllTasksByUser(id);

  return res.status(200).json(tasks);
});

const createTask = rescue(async (req, res) => {
  const taskBody = req.body;

  const task = await taskService.createTask(taskBody);

  return res.status(201).json(task);
});

const getTask = rescue(async (req, res) => {
  const { id } = req.params;

  const task = await taskService.getTaskById(id);

  return res.status(200).json(task);
});

const updateTask = rescue(async (req, res) => {
  const task = req.body;
  const { id } = req.params;
  const taskUpdated = await taskService.updateTask(task, id);

  return taskUpdated;
});

const destroyTask = rescue(async (req, res) => {
  const { id } = req.params;

  const task = await taskService.deleteTask(id);

  return task;
});

module.exports = { getAllTasks, createTask, getTask, updateTask, destroyTask };
