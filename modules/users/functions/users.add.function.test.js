const assert = require('assert');
const { User } = require('mongoose').models;

describe('User.add(...)', () => {
  it('Creates an order successfully', async () => {
    const { code, message, userId } = await User.add({ user: { username: 'Hafez' } });

    assert.equal(code, 1);
    assert.equal(message, 'Created user successfully.');


    const user = await User.findOne({ _id: userId }).select('_id').lean();
    assert.ok(user);
  });


  it('Fails when username already exists');
});