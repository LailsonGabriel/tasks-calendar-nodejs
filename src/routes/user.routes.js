const express = require('express');
const router = express.Router();

const { registerUser, getUser } = require('../controllers/user.controller');
const loginMiddleware = require('../middlewares/loginMiddleware');
const {
  registerMiddleware,
  verifyEmailExist,
} = require('../middlewares/registerMiddleware');

router.post('/login', loginMiddleware, getUser);
router.post('/register', registerMiddleware, verifyEmailExist, registerUser);

module.exports = router;
