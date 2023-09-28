const { User } = require('../models');

const getUserByEmail = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { 
      status: 'BAD_REQUEST',
      data: { message: 'Invalid fields' }, 
    };
  }

  return { status: 'SUCCESSFUL', data: user };
};

const getUsers = async () => {
  const user = await User.findAll();
  return { status: 'SUCCESSFUL', data: user };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return { status: 'SUCCESSFUL', data: user };
};

const createUser = (displayName, email, password, image) => 
  User.create({ displayName, email, password, image });

module.exports = {
  getUserByEmail,
  getUsers,
  getUserById,
  createUser,
};
