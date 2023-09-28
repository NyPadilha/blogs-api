const route = require('express').Router();
const { loginController } = require('../controllers');
const { loginValidation } = require('../middlewares/login.validation');

route.post('/', loginValidation, loginController.login);

module.exports = route;