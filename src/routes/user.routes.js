const express = require('express');
const router = express.Router();

const { registerUser, getUser } = require('../controllers/user.controller');
const {
  registerMiddleware,
  verifyEmailExist,
} = require('../middlewares/registerMiddleware');

router.post('/login', getUser);
router.post('/register', registerMiddleware, verifyEmailExist, registerUser);

module.exports = router;
