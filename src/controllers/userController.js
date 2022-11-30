const userService = require('../services/userService');

const validateUserController = async (req, res) => {
  const { email, password } = req.body;
    const { type, message } = await userService.validateUser(email, password);
  if (type) {
    return res.status(400).send({ message: 'Invalid fields' });
  }
    return res.status(200).json({ token: message });
};

module.exports = {
  validateUserController,
};