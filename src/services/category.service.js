const { Category } = require('../models');

const createCategory = async (body) => {
  const { name } = body;
  const exist = await Category.findOne({ where: { name } });

  if (exist) return { status: 'CONFLICT', data: { message: 'Category already registered' } };

  await Category.create(body);
  const category = await Category.findOne({ where: { name } });

  return { status: 'CREATED', data: category };
};

module.exports = {
  createCategory,
};
