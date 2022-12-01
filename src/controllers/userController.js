const userService = require('../services/userService');

const validateUserController = async (req, res) => {
  const { email, password } = req.body;
    const { type, message } = await userService.validateUser(email, password);
  if (type) {
    return res.status(400).send({ message: 'Invalid fields' });
  }
    return res.status(200).json({ token: message });
};

const createUserController = async (req, res) => {
  const { displayName, password, email, image } = req.body;
    const { type, message } = await userService.createUser(email, password, displayName, image);
  if (type) {
    return res.status(409).send({ message });
  }
    return res.status(201).json({ token: message });
};

const getAllUsersController = async (req, res) => {
  const { type, message } = await userService.findAllUsers();
  if (type) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return res.status(200).json(message);
};

module.exports = {
  validateUserController,
  createUserController,
  getAllUsersController,
};