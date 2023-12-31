const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const { httpStatusMap } = require('../utils/mapStatusHTTP');

const secret = process.env.JWT_SECRET || 'secret';

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

const validateJWT = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
    
  if (!bearerToken) {
    return res.status(httpStatusMap.UNAUTHORIZED).json({ message: 'Token not found' });
  }
  
  const token = extractToken(bearerToken);

  try {
    const decoded = jwt.verify(token, secret);
    const { data } = await userService.getUserById(decoded.data);
    req.user = data.id;
    res.locals = data.id;
    next();
  } catch (err) {
    return res.status(httpStatusMap.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateJWT,
};