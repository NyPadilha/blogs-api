const route = require('express').Router();
const { categoryController } = require('../controllers');
const { validateJWT } = require('../middlewares/validateJWT');
const { categoryValidation } = require('../middlewares/category.validation');

route.post('/', validateJWT, categoryValidation, categoryController.createCategory);
route.get('/', validateJWT, categoryController.getCategories);

module.exports = route;