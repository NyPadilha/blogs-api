const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const { mapStatusHTTP } = require('../utils/mapStatusHTTP');

const secret = process.env.JWT_SECRET || 'secret';

const login = async (req, res) => {
  const { email, password } = req.body;
    
  const { status, data } = await userService.getUserByEmail(email, password);

  const user = data;

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user.id }, secret, jwtConfig);

  if (status === 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json({ token });
  }
    
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  login,
};