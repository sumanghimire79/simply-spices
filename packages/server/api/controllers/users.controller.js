const knex = require('../../config/db');

// Returns all users
// GET api/users/
const getAllUsers = async () => {
  const allUsers = await knex('Users');
  if (allUsers.length === 0) {
    return {
      code: '404',
      status: 'failed',
      error: 'users not found',
      message: 'no users found in database',
    };
  }
  return allUsers;
};

// Adds a new user
// POST api/users/
const postUser = async (request) => {
  const userPost = await knex('Users').insert(request);
  return {
    code: 201,
    status: 'success ',
    message: `Created ${userPost}`,
  };
};

// Returns user by id
// GET api/users/1
const getUserByID = async (id) => {
  if (isNaN(id)) {
    return 'id must contain number';
  }
  const userByID = await knex('Users').where('id', Number(id));
  if (userByID.length === 0) {
    return {
      code: '404',
      status: 'failed',
      error: 'user id not found',
      message: 'Invalid ID',
    };
  }
  return userByID;
};

// Updates the user by id
// PUT api/user/id
const updateUserByID = async (request, id) => {
  const userUpdateByID = await knex('Users')
    .where({
      id,
    })
    .update(request);

  return {
    status: 'succes',
    message: 'Updated',
    updated: userUpdateByID,
  };
};

// Deletes the message by id
// DELETE api/messages/id
const deleteUserByID = async (request, id) => {
  const checkId = await knex('Users').where({ id });

  if (checkId.length === 0) {
    return {
      status: 'failed',
      error: 'user not found',
      message: 'user not found in database',
    };
  }

  const userDeleteByID = await knex('Users').where({ id }).delete(request);
  return {
    status: 'success',
    message: `Deleted`,
    deleted: userDeleteByID,
  };
};

module.exports = {
  getAllUsers,
  postUser,
  getUserByID,
  updateUserByID,
  deleteUserByID,
};
