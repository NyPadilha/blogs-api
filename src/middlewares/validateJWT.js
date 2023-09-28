const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const { httpStatusMap } = require('../utils/mapStatusHTTP');

const secret = process.env.JWT_SECRET || 'secret';

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

const validateJWT = async (req, res, next) => {
  const bearerToken = req.headers('Authorization');
    
  if (!bearerToken) {
    return res.status(httpStatusMap.BAD_REQUEST).json({ message: 'missing auth token' }); // esboco de solucao
  }
  
  const token = extractToken(bearerToken);

  try {
    const decoded = jwt.verify(token, secret);
    const { data } = await userService.getUserById(decoded.data);
    req.user = data;
    next();
  } catch (err) {
    return res.status(httpStatusMap.INVALID_VALUE).json({ message: 'invalid token' }); // esboco de solucao
  }
};

module.exports = {
  validateJWT,
};