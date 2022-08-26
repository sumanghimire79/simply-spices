const knex = require('../../config/db');

// Returns all messages
// GET api/messages/
const getAllmessages = async () => {
  const allMessages = await knex('messages');
  if (allMessages.length === 0) {
    return {
      code: '404',
      status: 'failed',
      error: 'message not found',
      message: 'no message found in database',
    };
  }
  return allMessages;
};

// Adds a new message starts:
// POST api/messages/
const postMessage = async (request) => {
  const messagePost = await knex('messages').insert(request);
  return {
    code: 201,
    status: 'success ',
    message: `Created ${messagePost}`,
  };
};

// Returns message by id
// GET api/messages/2
const getMessageByID = async (id) => {
  if (isNaN(id)) {
    return 'id must contain number';
  }
  const messageByID = await knex('messages').where('id', Number(id));
  if (messageByID.length === 0) {
    return {
      code: '404',
      status: 'failed',
      error: 'messageByID not found',
      message: 'Invalid ID',
    };
  }
  return messageByID;
};

// Updates the message by id
// PUT api/messages/id
const updateMessageByID = async (request, idd) => {
  const messageUpdateByID = await knex('messages')
    .where({
      id: idd,
    })
    .update(request);

  return {
    status: 'succes',
    message: 'Updated',
    updated: messageUpdateByID,
  };
};

// Deletes the message by id
// DELETE api/messages/id
const deleteMessageByID = async (request, reqId) => {
  const checkId = await knex('messages').where({ id: reqId });

  if (checkId.length === 0) {
    return {
      status: 'failed',
      error: 'message not found',
      message: 'message not found in database',
    };
  }

  const messageDeleteByID = await knex('messages')
    .where({ id: reqId })
    .delete(request);
  return {
    status: 'success',
    message: `Deleted`,
    deleted: messageDeleteByID,
  };
};

module.exports = {
  getAllmessages,
  getMessageByID,
  postMessage,
  updateMessageByID,
  deleteMessageByID,
};
