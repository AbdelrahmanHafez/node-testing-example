async function createUser ({ user }) {
  const User = this;

  const usernameDuplicate = await User.findOne({ username: user.username }).select('_id').lean();
  if (usernameDuplicate) return { code: 2, message: 'Username is already in use.' };

  const createdUser = await User.create(user);
  return { code: 1, message: 'Created user successfully.', userId: createdUser._id };
}

module.exports = createUser;