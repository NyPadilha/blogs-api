const route = require('express').Router();
const { postController } = require('../controllers');
const { validateJWT } = require('../middlewares/validateJWT');
// const { postValidation } = require('../middlewares/post.validation');

// route.post('/', validateJWT, postValidation, postController.addPost);
route.get('/', validateJWT, postController.getPosts);

module.exports = route;