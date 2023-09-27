module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        // ...
    }, {
        underscored: true,
        timestamps: false,
        tableName: 'posts_categories',
    });

    PostCategory.associate = ({BlogPost, Category}) => {
        BlogPost.belongsToMany(Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });
        Category.belongsToMany(BlogPost, {
            as: 'blogPosts',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
    };

    return PostCategory;
};