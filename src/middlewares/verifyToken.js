const jwt = require('../utils/jwt');

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(req.headers.authorization);
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const { email } = jwt.verify(token);
    req.email = email;
    next();
  } catch (err) {
    return res.status(401).send({ message: 'Expired or invalid token' });
  }
};

module.exports = verifyToken;
