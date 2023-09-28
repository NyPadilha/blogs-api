const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const { mapStatusHTTP } = require('../utils/mapStatusHTTP');

const secret = process.env.JWT_SECRET || 'secret';

const addUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
    
  const { status, data } = await userService.addUser(displayName, email, password, image);

  const user = data;

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user.id }, secret, jwtConfig);

  if (status === 'CREATED') {
    return res.status(mapStatusHTTP(status)).json({ token });
  }

  return res.status(mapStatusHTTP(status)).json(data);
};

const getUsers = async (_req, res) => {
  const { status, data } = await userService.getUsers();

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  addUser,
  getUsers,
};