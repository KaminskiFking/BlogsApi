const userService = require('../services/userService');

const getAll = async (req, res) => {
  const { email, password } = req.body;
    const users = await userService.createUser(email, password);
    return res.status(200).json(users);
};

module.exports = {
  getAll,
};