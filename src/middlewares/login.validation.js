const { httpStatusMap } = require('../utils/mapStatusHTTP');

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
    
  if (!email || !password) {
    return res.status(httpStatusMap.BAD_REQUEST)
      .json({ message: 'Some required fields are missing' }); 
  }
    
  return next();
};

module.exports = {
  loginValidation,
};
