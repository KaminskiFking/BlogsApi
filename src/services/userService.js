const jwt = require('jsonwebtoken');

const { User } = require('../models');

const secret = process.env.JWT_SECRET || 'secretJWT';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const validateUser = async (email, password) => {
  const users = await User.findOne({ where: { email, password } });
  if (!users) {
    return { type: 'NOT_FOUND', message: 'Invalid fields' };
  }
  const token = jwt.sign({ data: { email } }, secret, jwtConfig);
  return { type: null, message: token };
};

const createUser = async (email, password, displayName, image) => {
  const findEmail = await User.findOne({ where: { email } });
  console.log(findEmail);
  if (findEmail) {
    return { type: 'EMAIL_FOUND', message: 'User already registered' };
  } 

  const users = await User.create({ email, password, displayName, image });
  if (!users) {
    return { type: 'NOT_FOUND', message: 'Invalid fields' };
  }
  const token = jwt.sign({ data: { email } }, secret, jwtConfig);
  return { type: null, message: token };
};

module.exports = {
  validateUser,
  createUser,
};
