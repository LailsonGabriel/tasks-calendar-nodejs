const express = require('express');
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  destroyTask,
} = require('../controllers/task.controller');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

router.get('/user/:id', verifyToken, getAllTasks);
router.get('/:id', verifyToken, getTask);
router.post('/', verifyToken, createTask);
router.put('/:id', verifyToken, updateTask);
router.put('/:id', verifyToken, destroyTask);

module.exports = router;
