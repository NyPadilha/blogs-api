const { httpStatusMap } = require('../utils/mapStatusHTTP');

const categoryValidation = (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') {
    return res.status(httpStatusMap.BAD_REQUEST).json({
      message: '"name" is required',
    });
  }
  next();
};

module.exports = {
  categoryValidation,
};