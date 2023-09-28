const route = require('express').Router();
const { userController } = require('../controllers');
const { userValidation } = require('../middlewares/user.validation');

route.post('/', userValidation, userController.addUser);

module.exports = route;