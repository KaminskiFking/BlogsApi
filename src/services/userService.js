const jwt = require('jsonwebtoken');

const { user } = require('../models');

console.log(user);

const secret = process.env.JWT_SECRET || 'secretJWT';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const validateUser = async (email, password) => {
  const users = await user.findOne({ where: { email, password } });
  if (!users) {
    return { type: 'NOT_FOUND', message: 'Invalid fields' };
  }
  const token = jwt.sign({ data: { email } }, secret, jwtConfig);
  return { type: null, message: token };
};

module.exports = {
  validateUser,
};