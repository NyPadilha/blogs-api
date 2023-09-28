const { httpStatusMap } = require('../utils/mapStatusHTTP');

const postValidation = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(httpStatusMap.BAD_REQUEST).json({
      message: 'Some required fields are missing',
    });
  }
  return next();
};

module.exports = {
  postValidation,
};
