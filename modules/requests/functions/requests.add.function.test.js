const assert = require('assert');
const { Request } = require('mongoose').models;
const createTestingScenario = require('../../../test/create.scenario');

describe('Request.add(...)', () => {
  let userId;

  beforeEach(async () => {
    const res = await createTestingScenario({ user: true });
    userId = res.userId;
  });

  it('Creates an order successfully', async () => {
    const { code, message, requestId } = await Request.add({ request: { userId } });

    assert.equal(code, 1);
    assert.equal(message, 'Created request successfully.');


    const request = await Request.findOne({ _id: requestId }).select('_id').lean();
    assert.ok(request);
  });


  it('Fails when user does not exist');
});