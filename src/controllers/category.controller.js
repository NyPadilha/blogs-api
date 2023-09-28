const { categoryService } = require('../services');
const { mapStatusHTTP } = require('../utils/mapStatusHTTP');

const createCategory = async (req, res) => {
  const { body } = req;
  const { status, data } = await categoryService.createCategory(body);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createCategory,
};