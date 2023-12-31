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
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 'SUCCESSFUL', data: users };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) {
    return { 
      status: 'NOT_FOUND',
      data: { message: 'User does not exist' }, 
    };
  }

  return { status: 'SUCCESSFUL', data: user };
};

const addUser = async (displayName, email, password, image) => {
  const exist = await User.findOne({ where: { email } });

  if (exist) return { status: 'CONFLICT', data: { message: 'User already registered' } };

  await User.create({ displayName, email, password, image });

  const user = await User.findOne({ where: { email } });

  return { status: 'CREATED', data: user };
};
  
module.exports = {
  getUserByEmail,
  getUsers,
  getUserById,
  addUser,
};
