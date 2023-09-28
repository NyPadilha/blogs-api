const { httpStatusMap } = require('../utils/mapStatusHTTP');

const userValidation = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (displayName.length < 8) {
    return res.status(httpStatusMap.BAD_REQUEST)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)) {
    return res.status(httpStatusMap.BAD_REQUEST)
      .json({ message: '"email" must be a valid email' }); 
  }

  if (password.length < 6) {
    return res.status(httpStatusMap.BAD_REQUEST)
      .json({ message: '"password" length must be at least 6 characters long' });
  }
    
  return next();
};

module.exports = {
  userValidation,
};