const { User } = require('../models');

const createUser = async (email, password) => {
  const users = await User.create({ email, password });

  return users;
};

module.exports = {
  createUser,
};