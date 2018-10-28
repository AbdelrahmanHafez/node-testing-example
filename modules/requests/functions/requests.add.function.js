async function createRequest ({ request }) {
  const { User, Request } = require('mongoose').models;


  const userExists = await User.findOne({ _id: request.userId });
  if (!userExists) throw new Error('User does not exist.');

  const createdRequest = await Request.create(request);
  return { code: 1, message: 'Created request successfully.', requestId: createdRequest._id };
}

module.exports = createRequest;