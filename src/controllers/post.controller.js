const { postService } = require('../services');
const { mapStatusHTTP } = require('../utils/mapStatusHTTP');

const addPost = async (req, res) => {
  const { body } = req;
  const userId = res.locals;
  const { status, data } = await postService.addPost({ ...body, userId });
  return res.status(mapStatusHTTP(status)).json(data);
};

const getPosts = async (_req, res) => {
  const { status, data } = await postService.getPosts();
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  addPost,
  getPosts,
};