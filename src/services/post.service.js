const { 
  User, 
  BlogPost, 
  Category, 
  // PostCategory 
} = require('../models');

// const categoriesExists = async (categoriesIds) => {
//   const categories = await Category.findAll({ where: { id: categoriesIds } });

//   return categoriesIds.length !== categories.length;
// };

// const addPost = async ({ title, content, categoryIds, userId }) => {
//   if (!await categoriesExists(categoryIds)) {
//     return { message: 'one or more "categoryIds" not found' };
//   }

//   const post = await BlogPost.create({ title, content, userId });
//   const { dataValues: { id: postId } } = post;

//   const postCategories = categoryIds.map((categoryId) => ({
//     postId,
//     categoryId,
//   }));

//   await PostCategory.bulkCreate(postCategories);

//   return { status: 'CREATED', data: post };
// };

const getPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: 'SUCCESSFUL', data: posts };
};

module.exports = {
  // addPost,
  getPosts,
};