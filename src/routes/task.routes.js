const express = require('express');
const { getAllTasks, createTask } = require('../controllers/task.controller');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

router.get('/user/:id', verifyToken, getAllTasks);
router.post('/', verifyToken, createTask);

module.exports = router;
