const route = require('express').Router();
const { userController } = require('../controllers');
const { userValidation } = require('../middlewares/user.validation');
const { validateJWT } = require('../middlewares/validateJWT');

route.post('/', userValidation, userController.addUser);
route.get('/', validateJWT, userController.getUsers);
route.get('/:id', validateJWT, userController.getUserById);

module.exports = route;